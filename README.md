# Inner AI — LP Oferta Flash

Export estático da landing page `/oferta-flash` do projeto Framer **Inner AI Brasil** (original em `lp.innerai.com/oferta-flash`). Página 100% auto-contida, **sem nenhuma dependência do Framer**: HTML, JS, CSS, fontes e imagens estão neste repositório.

## Como editar a página manualmente

```bash
python3 editor.py
```

Abra http://localhost:8126 e clique no botão **✏️ Editar página** (canto inferior direito):

- **✏️ Texto** — clique em qualquer texto, reescreva e clique fora para confirmar.
- **🗑 Deletar** — clique num elemento para removê-lo.
- **↩ Desfazer** — desfaz a última alteração da sessão.
- **💾 Salvar** — grava tudo em `assets/edicoes.json`.

Depois de salvar, publique com commit + push. As edições são reaplicadas
automaticamente na página publicada pelo `assets/aplicar-edicoes.js`
(o HTML original do Framer não é alterado). Para reverter tudo, deixe o
`assets/edicoes.json` como `[]`.

## Como publicar

Página estática pura — não precisa de build nem de servidor de aplicação. Basta servir a raiz do repositório (GitHub Pages, Vercel, Netlify ou qualquer CDN).

Para testar localmente:

```bash
python3 -m http.server 8080
```

## Estrutura

```
index.html      página completa (desktop, tablet e mobile no mesmo arquivo)
assets/         145 arquivos: módulos JS, fontes .woff2, imagens
```

## O que foi removido do export

- **Analytics do Framer** (`events.framer.com`) — nenhuma chamada para domínios do Framer.
- **Carregador da barra de edição do Framer** (`framer.com/edit/init.mjs`) — neutralizado.

## Dependências externas que permanecem (intencionais)

- **Microsoft Clarity** (`www.clarity.ms`) — analytics de sessão.
- **first.innerai.com / static-assets.innerai.com** — links de CTA e assets próprios da Inner AI.
- Captura de leads (componentes `LeadCapture`/`PhoneInput`) continua funcionando igual à página original.

## Origem

Espelhado da publicação do Framer em 2026-10-10.
