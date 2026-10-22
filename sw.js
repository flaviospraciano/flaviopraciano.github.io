// Service worker do Português Banana: faz o jogo funcionar offline.
// A página do jogo é buscada primeiro na internet (para receber atualizações)
// e, sem conexão, sai da cópia salva. Fontes e ícones saem direto da cópia salva.
// Se trocar ícones ou fontes, aumente o número em CACHE (pb-v3 → pb-v4…).
const CACHE = "pb-v3";
const ARQUIVOS = [
  "./",
  "index.html",
  "pb-app-v3.webmanifest",
  "privacidade.html",
  "pb-icon-192-v3.png",
  "pb-icon-512-v3.png",
  "pb-maskable-512-v3.png",
  "pb-apple-touch-v3.png",
  "fraunces-latin-500-normal.woff2",
  "fraunces-latin-600-normal.woff2",
  "fraunces-latin-700-normal.woff2",
  "manrope-latin-400-normal.woff2",
  "manrope-latin-500-normal.woff2",
  "manrope-latin-600-normal.woff2",
  "manrope-latin-700-normal.woff2",
  "manrope-latin-800-normal.woff2",
  "instrument-serif-latin-400-normal.woff2",
  "instrument-serif-latin-400-italic.woff2",
  "caveat-latin-600-normal.woff2",
  "caveat-latin-700-normal.woff2"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

function daRede(req) {
  return Promise.race([
    fetch(req).then(resp => {
      if (resp.ok) { const copia = resp.clone(); caches.open(CACHE).then(c => c.put("index.html", copia)); }
      return resp;
    }),
    new Promise((_, falha) => setTimeout(() => falha(new Error("lento")), 4000))
  ]);
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (req.mode === "navigate") {
    e.respondWith(daRede(req).catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req).then(resp => {
      if (resp.ok && new URL(req.url).origin === location.origin) { const copia = resp.clone(); caches.open(CACHE).then(c => c.put(req, copia)); }
      return resp;
    }))
  );
});
