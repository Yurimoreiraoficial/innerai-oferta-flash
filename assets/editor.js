/* Modo de edição visual da LP — só ativa em localhost (servido pelo editor.py).
   Permite reescrever textos (clique no texto), deletar elementos e salvar.
   As edições vão para assets/edicoes.json via POST /salvar e são reaplicadas
   em qualquer ambiente pelo assets/aplicar-edicoes.js. */
(function () {
  var local = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  if (!local) return;

  var ops = [];            // operações acumuladas (inclui as já salvas)
  var desfazer = [];       // pilha p/ desfazer na sessão: {op, undo:fn}
  var modo = null;         // null | "texto" | "del"
  var editando = null;     // elemento contentEditable ativo
  var marcado = null;      // elemento com highlight de hover
  var sujo = false;

  var CSS = [
    "#lp-editor-botao{position:fixed;bottom:18px;right:18px;z-index:999999;font-family:-apple-system,Inter,sans-serif;font-size:14px;font-weight:700;padding:12px 18px;border-radius:999px;border:none;cursor:pointer;background:#2563eb;color:#fff;box-shadow:0 4px 18px rgba(0,0,0,.45);}",
    "#lp-editor-barra{position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:999999;display:flex;gap:8px;align-items:center;font-family:-apple-system,Inter,sans-serif;background:#0b0d21;border:1px solid rgba(255,255,255,.25);border-radius:14px;padding:8px 10px;box-shadow:0 6px 24px rgba(0,0,0,.55);}",
    "#lp-editor-barra button{font-family:inherit;font-size:13px;font-weight:600;padding:8px 12px;border-radius:9px;border:1px solid transparent;cursor:pointer;background:rgba(255,255,255,.08);color:#fff;}",
    "#lp-editor-barra button.ativo{background:#2563eb;}",
    "#lp-editor-barra button:disabled{opacity:.4;cursor:default;}",
    "#lp-editor-barra .lp-dica{font-size:12px;color:rgba(255,255,255,.65);max-width:230px;line-height:1.25;}",
    ".lp-ed-hover-texto{outline:2px dashed #2563eb !important;outline-offset:2px;cursor:text !important;}",
    ".lp-ed-hover-del{outline:2px solid #dc2626 !important;outline-offset:2px;cursor:not-allowed !important;}",
    ".lp-ed-editando{outline:2px solid #16a34a !important;outline-offset:2px;}"
  ].join("\n");

  function cssPath(el) {
    var partes = [];
    while (el && el.nodeType === 1 && el.tagName !== "BODY") {
      if (el.id) { partes.unshift("#" + CSS_escape(el.id)); break; }
      var pai = el.parentElement;
      var idx = 1, irm = el;
      while ((irm = irm.previousElementSibling)) idx++;
      partes.unshift(el.tagName.toLowerCase() + ":nth-child(" + idx + ")");
      el = pai;
    }
    return partes.length ? (partes[0][0] === "#" ? partes.join(" > ") : "body > " + partes.join(" > ")) : "";
  }
  function CSS_escape(s) { return (window.CSS && CSS.escape) ? CSS.escape(s) : s; }

  function textoNorm(el) {
    return (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);
  }

  // ---------- UI ----------
  var style = document.createElement("style");
  style.textContent = CSS;
  document.head.appendChild(style);

  var botao = document.createElement("button");
  botao.id = "lp-editor-botao";
  botao.textContent = "✏️ Editar página";
  botao.addEventListener("click", entrar);

  var barra = document.createElement("div");
  barra.id = "lp-editor-barra";
  barra.style.display = "none";
  var bTexto = mkBtn("✏️ Texto", function () { setModo(modo === "texto" ? null : "texto"); });
  var bDel = mkBtn("🗑 Deletar", function () { setModo(modo === "del" ? null : "del"); });
  var bUndo = mkBtn("↩ Desfazer", desfazerUltima);
  var bSalvar = mkBtn("💾 Salvar", salvar);
  var bSair = mkBtn("✖ Sair", sair);
  var dica = document.createElement("div");
  dica.className = "lp-dica";
  [bTexto, bDel, bUndo, bSalvar, bSair, dica].forEach(function (x) { barra.appendChild(x); });

  function mkBtn(rotulo, fn) {
    var b = document.createElement("button");
    b.textContent = rotulo;
    b.addEventListener("click", function (ev) { ev.stopPropagation(); fn(); });
    return b;
  }

  function montarUI() {
    if (!document.getElementById("lp-editor-botao")) document.body.appendChild(botao);
    if (!document.getElementById("lp-editor-barra")) document.body.appendChild(barra);
  }

  function atualizarBarra() {
    bTexto.className = modo === "texto" ? "ativo" : "";
    bDel.className = modo === "del" ? "ativo" : "";
    bUndo.disabled = desfazer.length === 0;
    dica.textContent =
      modo === "texto" ? "Clique num texto para reescrever. Clique fora para confirmar." :
      modo === "del" ? "Clique num elemento para apagá-lo." :
      "Escolha Texto ou Deletar." + (sujo ? " Há alterações não salvas." : "");
  }

  function entrar() {
    botao.style.display = "none";
    barra.style.display = "flex";
    setModo("texto");
    // carrega edições já salvas p/ não sobrescrever o arquivo com lista parcial
    fetch("assets/edicoes.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (l) { if (Array.isArray(l) && ops.length === 0) ops = l; })
      .catch(function () {});
  }

  function sair() {
    if (sujo && !confirm("Sair sem salvar as alterações?")) return;
    terminarEdicao(true);
    setModo(null);
    barra.style.display = "none";
    botao.style.display = "block";
  }

  function setModo(m) {
    terminarEdicao(true);
    limparMarcado();
    modo = m;
    atualizarBarra();
  }

  // ---------- eventos globais ----------
  document.addEventListener("mouseover", function (ev) {
    if (!modo || dentroUI(ev.target) || editando) return;
    limparMarcado();
    var el = alvoPara(ev.target);
    if (!el) return;
    marcado = el;
    el.classList.add(modo === "texto" ? "lp-ed-hover-texto" : "lp-ed-hover-del");
  }, true);

  document.addEventListener("mouseout", function (ev) {
    if (marcado && (ev.target === marcado || marcado.contains(ev.target))) limparMarcado();
  }, true);

  document.addEventListener("click", function (ev) {
    if (!modo || dentroUI(ev.target)) return;
    if (editando) {
      if (editando === ev.target || editando.contains(ev.target)) return; // continua editando
      ev.preventDefault(); ev.stopPropagation();
      terminarEdicao(true);
      return;
    }
    ev.preventDefault(); ev.stopPropagation();
    var el = alvoPara(ev.target);
    if (!el) return;
    if (modo === "texto") comecarEdicao(el);
    else deletar(el);
  }, true);

  document.addEventListener("keydown", function (ev) {
    if (editando && ev.key === "Escape") { terminarEdicao(false); }
  }, true);

  function dentroUI(el) {
    return el.closest && (el.closest("#lp-editor-barra") || el.closest("#lp-editor-botao"));
  }

  function limparMarcado() {
    if (!marcado) return;
    marcado.classList.remove("lp-ed-hover-texto", "lp-ed-hover-del");
    marcado = null;
  }

  // escolhe o elemento certo para a ação
  function alvoPara(el) {
    if (!el || el.nodeType !== 1) return null;
    if (modo === "texto") {
      // menor elemento com texto direto
      var e = el;
      while (e && e !== document.body) {
        for (var i = 0; i < e.childNodes.length; i++) {
          var n = e.childNodes[i];
          if (n.nodeType === 3 && n.textContent.trim()) return e;
        }
        e = e.parentElement;
      }
      return null;
    }
    // deletar: sobe até um bloco "significativo" (com data-framer-name) se houver perto
    var sig = el.closest("[data-framer-name]");
    if (sig && sig.contains(el)) {
      var profundidade = 0, p = el;
      while (p && p !== sig) { profundidade++; p = p.parentElement; }
      if (profundidade <= 3) return sig;
    }
    return el;
  }

  // ---------- texto ----------
  function comecarEdicao(el) {
    limparMarcado();
    editando = el;
    el.__htmlOriginal = el.innerHTML;
    el.setAttribute("contenteditable", "true");
    el.classList.add("lp-ed-editando");
    el.focus();
  }

  function terminarEdicao(confirmar) {
    if (!editando) return;
    var el = editando;
    editando = null;
    el.removeAttribute("contenteditable");
    el.classList.remove("lp-ed-editando");
    var original = el.__htmlOriginal;
    delete el.__htmlOriginal;
    if (!confirmar || el.innerHTML === original) {
      if (!confirmar) el.innerHTML = original;
      return;
    }
    var op = { t: "texto", sel: cssPath(el), de: original, para: el.innerHTML };
    // aplica nas variantes de breakpoint com o mesmo conteúdo
    var iguais = document.querySelectorAll(el.tagName);
    for (var i = 0; i < iguais.length; i++) {
      if (iguais[i] !== el && iguais[i].innerHTML === original) iguais[i].innerHTML = op.para;
    }
    ops.push(op);
    desfazer.push({ op: op, undo: function () { el.innerHTML = original; } });
    sujo = true;
    atualizarBarra();
  }

  // ---------- deletar ----------
  function deletar(el) {
    limparMarcado();
    var op = {
      t: "del",
      sel: cssPath(el),
      sig: { tag: el.tagName, nome: el.getAttribute("data-framer-name") || "", texto: textoNorm(el) }
    };
    var pai = el.parentElement, prox = el.nextSibling;
    var removidosVar = [];
    // remove variantes com a mesma assinatura
    if (op.sig.texto) {
      var cands = document.querySelectorAll(op.sig.tag);
      for (var i = 0; i < cands.length; i++) {
        var c = cands[i];
        if (c !== el && textoNorm(c) === op.sig.texto &&
            (c.getAttribute("data-framer-name") || "") === op.sig.nome) {
          removidosVar.push({ el: c, pai: c.parentElement, prox: c.nextSibling });
          c.remove();
        }
      }
    }
    el.remove();
    ops.push(op);
    desfazer.push({
      op: op,
      undo: function () {
        pai.insertBefore(el, prox);
        removidosVar.forEach(function (r) { r.pai.insertBefore(r.el, r.prox); });
      }
    });
    sujo = true;
    atualizarBarra();
  }

  // ---------- desfazer / salvar ----------
  function desfazerUltima() {
    var item = desfazer.pop();
    if (!item) return;
    var idx = ops.lastIndexOf(item.op);
    if (idx !== -1) ops.splice(idx, 1);
    try { item.undo(); } catch (e) {}
    sujo = true;
    atualizarBarra();
  }

  function salvar() {
    terminarEdicao(true);
    fetch("/salvar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ops)
    }).then(function (r) {
      if (!r.ok) throw new Error();
      sujo = false;
      atualizarBarra();
      dica.textContent = "Salvo! Para publicar: commit + push do repositório.";
    }).catch(function () {
      alert("Não consegui salvar. A página está rodando pelo editor.py?");
    });
  }

  if (document.readyState === "complete") setTimeout(montarUI, 1000);
  else window.addEventListener("load", function () { setTimeout(montarUI, 1000); });
})();
