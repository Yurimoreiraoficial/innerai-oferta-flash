/* Aplica as edições manuais (assets/edicoes.json) depois da hidratação do Framer.
   Formato de cada operação:
   { t:"texto", sel, de, para }            — troca innerHTML de→para (também em variantes com o mesmo conteúdo)
   { t:"del",   sel, sig:{tag,nome,texto} } — remove o elemento (e variantes com a mesma assinatura) */
(function () {
  var ops = null;

  function textoNorm(el) {
    return (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);
  }

  function aplicarUma(op) {
    if (op.t === "texto") {
      var feitos = 0;
      var alvo = null;
      try { alvo = document.querySelector(op.sel); } catch (e) {}
      if (alvo && alvo.innerHTML === op.de) { alvo.innerHTML = op.para; feitos++; }
      // variantes de breakpoint carregam o mesmo conteúdo original
      var todos = document.querySelectorAll(alvo ? alvo.tagName : "*");
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].innerHTML === op.de) { todos[i].innerHTML = op.para; feitos++; }
      }
      return feitos;
    }
    if (op.t === "del") {
      var removidos = 0;
      var el = null;
      try { el = document.querySelector(op.sel); } catch (e) {}
      if (el) {
        var sig = op.sig || {};
        var ok = (!sig.tag || el.tagName === sig.tag) &&
                 (!sig.texto || textoNorm(el) === sig.texto);
        if (ok) { el.remove(); removidos++; }
      }
      if (op.sig && op.sig.texto) {
        var cands = document.querySelectorAll(op.sig.tag || "*");
        for (var j = 0; j < cands.length; j++) {
          var c = cands[j];
          if (textoNorm(c) === op.sig.texto &&
              (c.getAttribute("data-framer-name") || "") === (op.sig.nome || "")) {
            c.remove(); removidos++;
          }
        }
      }
      return removidos;
    }
    return 0;
  }

  function aplicarTodas() {
    if (!ops) return;
    for (var i = 0; i < ops.length; i++) {
      try { aplicarUma(ops[i]); } catch (e) {}
    }
  }

  function iniciar() {
    fetch("assets/edicoes.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (lista) {
        ops = Array.isArray(lista) ? lista : [];
        if (!ops.length) return;
        aplicarTodas();
        // reaplica algumas vezes: a hidratação/variantes do Framer podem recriar nós
        var vezes = 0;
        var intervalo = setInterval(function () {
          vezes++;
          aplicarTodas();
          if (vezes >= 6) clearInterval(intervalo);
        }, 1500);
        window.__edicoesLP = { ops: ops, aplicar: aplicarTodas };
      })
      .catch(function () {});
  }

  if (document.readyState === "complete") setTimeout(iniciar, 900);
  else window.addEventListener("load", function () { setTimeout(iniciar, 900); });
})();
