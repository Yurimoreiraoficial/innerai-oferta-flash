# LP VSL (Inner AI)

> Base duplicada da LP Captura — conteúdo a ser substituído pelo da VSL.

Página estática 100% autossuficiente: um `index.html` (HTML + CSS + JS no mesmo
arquivo) e a pasta `assets/` (4 fontes Satoshi .woff2 + imagens otimizadas).
**Sem build, sem dependências, sem chamadas externas.** ~950KB no total.

## Como publicar

Copie esta pasta inteira para o servidor e sirva `index.html`. Funciona em
qualquer hospedagem estática (Nginx, Vercel, Netlify, S3/CloudFront, GitHub
Pages). Os caminhos são relativos (`./assets/...`), então a pasta pode ficar
em qualquer rota (ex.: `innerai.com/captura/`).

## O que configurar antes de ir ao ar

### 1. Pixels / GTM
No `<head>` do `index.html` há um marcador:

```
<!-- PIXELS / GTM: inserir os scripts de rastreamento AQUI. -->
```

Cole aí o snippet do GTM (na LP original era o GTM server-side via
`first.innerai.com/5ogvsgzzh.js?aas=aWQ9R1RNLVdNUUozOFRD&page=3`, contêiner
GTM-WMQJ38TC) e o Microsoft Clarity (tag `xt3ctpvvn7`), se desejado.

### 2. Link de destino pós-cadastro
No `<script>` no fim do `index.html`, primeira linha da função:

```js
var DESTINO = "https://google.com";   // ← trocar pelo link real do grupo
```

Na campanha original o destino era `https://go.innerai.com/grupo-wpp-2026`.

### 3. Reativar o envio de leads (opcional)
Hoje o formulário do modal apenas valida nome + WhatsApp e redireciona.
O fluxo original (removido a pedido) era, no submit:

- `POST` (sendBeacon ou fetch com `Content-Type: text/plain;charset=UTF-8`)
  para `https://tkqkamprtokdpzcmqchr.supabase.co/functions/v1/leads-wpp`
- Payload JSON: `{ name, phone (+55DDDXXXXXXXXX), utm_source, utm_medium,
  utm_campaign, utm_term, utm_content, user_agent, referrer, path,
  lead_funnel: "MET01", session_id }`
- Eventos de dataLayer para o GTM: `lead_capture_opened` (abriu o modal),
  `lead_capture_submitted` (enviou) e `lead_gen_bf` (conversão)
- Depois do envio, redirect para o DESTINO

A implementação completa está no histórico do git (commits anteriores a
"remove todo back-end/rastreamento").

## Notas técnicas

- Mobile-first; desktop/tablet via media queries `min-width: 810px` e `1200px`.
- Fontes Satoshi locais com `preload` (400/700) e `font-display: swap`.
- Imagens em 2x do tamanho exibido, WebP, `width/height` explícitos (sem CLS).
- Animações respeitam `prefers-reduced-motion`.
