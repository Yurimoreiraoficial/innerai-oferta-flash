/* Seção extra: blocos de entregas do Modo Agente (conteúdo da LP /modo-agente-2,
   visual clonado dos blocos de funcionalidades da LP oferta-flash).
   Injetada após a hidratação do React para o runtime do Framer não removê-la. */
(function () {
  var CARDS = [
    {
      img: "assets/s5gYCGxkKsiUyAR6IIX1nCOXziM.webp",
      titulo: "Apresentações em slides",
      quote: "“Pesquise este tema, organize os argumentos e monte uma apresentação executiva pronta para usar.”",
      entrega: "→ ENTREGA: PPT + ROTEIRO DE APRESENTAÇÃO"
    },
    {
      img: "assets/ZQpF3jBZaN8Mw4hKi9t5f9hSeY.webp",
      titulo: "Sites profissionais",
      quote: "“Crie um site profissional de alta conversão para vender meus serviços, te enviei as informações em anexo.”",
      entrega: "→ ENTREGA: SITE PROFISSIONAL PRONTO"
    },
    {
      img: "assets/H0UThZ8VwILbJMSBxzoXVnNK3E.webp",
      titulo: "Marketing e conteúdo",
      quote: "“Crie uma campanha para lançar este produto, com copys, ideias de posts e descrição de cada um.”",
      entrega: "→ ENTREGA: CAMPANHA 100% PRONTA"
    },
    {
      img: "assets/WmHSgA7BVTzUjRgVo7GiBqb3Upc.webp",
      titulo: "Relatórios e planilhas",
      quote: "“Transforme esta planilha de vendas em uma análise completa com gráficos e recomendações.”",
      entrega: "→ ENTREGA: PDF + PLANILHA CONSOLIDADA"
    },
    {
      img: "assets/Dq4K4gcocL7k9Mhe3OyFwvfdzU.webp",
      titulo: "Resumo de reuniões",
      quote: "“Transcreva esta reunião, resuma as decisões e organize os próximos passos por responsável.”",
      entrega: "→ ENTREGA: RESUMO EXECUTIVO + PLANO DE AÇÃO"
    },
    {
      img: "assets/jBqPNl9rmn8KksSm2s3E1aQoO8g.webp",
      titulo: "Documento em PDF",
      quote: "“Crie uma proposta comercial completa, estou te anexando meus materiais a serem utilizados.”",
      entrega: "→ ENTREGA: PROPOSTA COMERCIAL EM PDF"
    },
    {
      img: "assets/bLqZA4QfhL93m7B1i4fd5XPzEv8.webp",
      titulo: "Documento em Word",
      quote: "“Edite este Doc de memorando alterando as recomendações com base no PDF anexado.”",
      entrega: "→ ENTREGA: DOCUMENTO WORD EDITÁVEL"
    },
    {
      img: "assets/W9oCIgKnGQtfySVUjYIPP9tDBE.webp",
      titulo: "Entregáveis em pastas",
      quote: "“Crie para mim um PDF, uma planilha e uma apresentação e me entregue organizado em pastas.”",
      entrega: "→ ENTREGA: MATERIAIS EM PASTAS"
    }
  ];

  var CSS = [
    "#secao-modo-agente{display:flex;flex-direction:column;align-items:center;gap:28px;width:100%;padding:48px 20px 24px;box-sizing:border-box;background-color:rgb(1,3,20);}",
    "#secao-modo-agente .sma-head{display:flex;flex-direction:column;align-items:center;gap:12px;max-width:640px;text-align:center;}",
    "#secao-modo-agente .sma-titulo{font-family:'Satoshi','Satoshi Placeholder',sans-serif;font-weight:700;font-size:clamp(24px,4.2vw,31px);letter-spacing:-0.03em;line-height:1.15;color:rgb(255,255,255);margin:0;}",
    "#secao-modo-agente .sma-sub{font-family:'Satoshi','Satoshi Placeholder',sans-serif;font-weight:500;font-size:15px;line-height:140%;letter-spacing:-0.02em;color:rgba(255,255,255,0.68);margin:0;max-width:560px;}",
    "#secao-modo-agente .sma-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px 30px;width:100%;max-width:913px;}",
    "@media (max-width:809px){#secao-modo-agente .sma-grid{grid-template-columns:minmax(0,1fr);max-width:442px;}}",
    "#secao-modo-agente .sma-card{display:flex;flex-direction:column;align-items:center;gap:16px;padding:6px 6px 30px;border-radius:24px;border:1px solid rgba(255,255,255,0.32);background:linear-gradient(rgb(11,13,33) 60%,rgba(0,51,255,0.65) 319%);box-sizing:border-box;}",
    "#secao-modo-agente .sma-card img{width:100%;aspect-ratio:920/620;object-fit:cover;display:block;border-radius:20px;}",
    "#secao-modo-agente .sma-texto{display:flex;flex-direction:column;align-items:center;gap:8px;padding:0 24px;}",
    "#secao-modo-agente .sma-card h3{font-family:'Satoshi','Satoshi Placeholder',sans-serif;font-weight:700;font-size:20px;letter-spacing:-0.03em;text-align:center;margin:0;background-image:radial-gradient(55.829% 55.829% at 44.171% 50%,rgb(255,255,255) 0%,rgba(255,255,255,0.5) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;}",
    "#secao-modo-agente .sma-card p.sma-quote{font-family:'Satoshi','Satoshi Placeholder',sans-serif;font-weight:500;font-size:14px;line-height:125%;letter-spacing:-0.02em;text-align:center;margin:0;background-image:radial-gradient(55.829% 55.829% at 44.171% 50%,rgb(255,255,255) 0%,rgba(255,255,255,0.5) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;}",
    "#secao-modo-agente .sma-entrega{font-family:'Satoshi','Satoshi Placeholder',sans-serif;font-weight:700;font-size:11.5px;letter-spacing:0.08em;text-transform:uppercase;text-align:center;color:rgb(143,168,255);margin:6px 0 0;padding-top:10px;border-top:1px solid rgba(255,255,255,0.12);width:100%;}"
  ].join("\n");

  function construir() {
    var sec = document.createElement("section");
    sec.id = "secao-modo-agente";
    var head = document.createElement("div");
    head.className = "sma-head";
    var h2 = document.createElement("h2");
    h2.className = "sma-titulo";
    h2.appendChild(document.createTextNode("Uma tarefa. Um comando."));
    h2.appendChild(document.createElement("br"));
    h2.appendChild(document.createTextNode("Uma entrega completa."));
    var sub = document.createElement("p");
    sub.className = "sma-sub";
    sub.textContent = "Com o Modo Agente você delega e recebe pronto. Feito para profissionais, empresários, gestores e equipes enxutas que precisam de braços para executar.";
    head.appendChild(h2);
    head.appendChild(sub);
    sec.appendChild(head);

    var grid = document.createElement("div");
    grid.className = "sma-grid";
    CARDS.forEach(function (c) {
      var card = document.createElement("div");
      card.className = "sma-card";
      var img = document.createElement("img");
      img.src = c.img;
      img.alt = c.titulo;
      img.loading = "lazy";
      img.draggable = false;
      var txt = document.createElement("div");
      txt.className = "sma-texto";
      var h3 = document.createElement("h3");
      h3.textContent = c.titulo;
      var q = document.createElement("p");
      q.className = "sma-quote";
      q.textContent = c.quote;
      var e = document.createElement("p");
      e.className = "sma-entrega";
      e.textContent = c.entrega;
      txt.appendChild(h3);
      txt.appendChild(q);
      txt.appendChild(e);
      card.appendChild(img);
      card.appendChild(txt);
      grid.appendChild(card);
    });
    sec.appendChild(grid);
    return sec;
  }

  function inserir() {
    if (document.getElementById("secao-modo-agente")) return true;
    // âncora: a seção que contém os cards de funcionalidades (classe estável do
    // componente card em qualquer breakpoint; "Mobile" é nome genérico de variante)
    var card = document.querySelector(".framer-stc919");
    var sec = card ? card.closest('[data-framer-name="Section 3"]') : null;
    if (!sec) {
      var secoes = document.querySelectorAll('[data-framer-name="Section 3"]');
      for (var i = 0; i < secoes.length; i++) {
        if (secoes[i].textContent.indexOf("+50 IAs Premium") !== -1) { sec = secoes[i]; break; }
      }
    }
    if (!sec || !sec.parentElement) return false;
    sec.insertAdjacentElement("afterend", construir());
    return true;
  }

  var style = document.createElement("style");
  style.textContent = CSS;
  document.head.appendChild(style);

  var tentativas = 0;
  function tentar() {
    tentativas++;
    if (inserir()) {
      // guarda: se a hidratação do Framer remover a seção, reinsere
      var checagens = 0;
      var guarda = setInterval(function () {
        checagens++;
        if (!document.getElementById("secao-modo-agente")) inserir();
        if (checagens >= 5) clearInterval(guarda);
      }, 1500);
      return;
    }
    if (tentativas < 40) setTimeout(tentar, 400);
  }

  if (document.readyState === "complete") setTimeout(tentar, 800);
  else window.addEventListener("load", function () { setTimeout(tentar, 800); });
})();
