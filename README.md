# LPs Inner AI — Captura e VSL

Duas landing pages estáticas, autossuficientes e sem dependências:

```
captura/   LP de captura para o Grupo Secreto (Oferta Relâmpago)
vsl/       LP de VSL (base duplicada da captura; conteúdo a definir)
```

Cada pasta contém `index.html` + `assets/` + `HANDOFF.md` com as instruções
de publicação e configuração (pixels/GTM, link de destino, captura de leads).

Para publicar: copie a pasta da LP para o servidor. Sem build.

Para testar localmente:

```bash
python3 -m http.server 8080
```

URLs no GitHub Pages:
- https://yurimoreiraoficial.github.io/innerai-oferta-flash/captura/
- https://yurimoreiraoficial.github.io/innerai-oferta-flash/vsl/
