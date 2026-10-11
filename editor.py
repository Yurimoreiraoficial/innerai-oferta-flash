#!/usr/bin/env python3
"""Servidor local de edição da LP.
Serve a página em http://localhost:8126 e aceita POST /salvar,
que grava as edições feitas no modo visual em assets/edicoes.json.
"""
import json
import os
import http.server
import socketserver

PORT = 8126


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/salvar":
            self.send_response(404)
            self.end_headers()
            return
        tamanho = int(self.headers.get("Content-Length", 0))
        corpo = self.rfile.read(tamanho)
        try:
            ops = json.loads(corpo)
            assert isinstance(ops, list)
        except Exception:
            self.send_response(400)
            self.end_headers()
            return
        with open("assets/edicoes.json", "w", encoding="utf-8") as f:
            json.dump(ops, f, ensure_ascii=False, indent=2)
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(b'{"ok": true}')

    def end_headers(self):
        # garante que index.html e edicoes.json nunca fiquem presos no cache
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


os.chdir(os.path.dirname(os.path.abspath(__file__)))
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as servidor:
    print(f"Editor da LP: http://localhost:{PORT}")
    servidor.serve_forever()
