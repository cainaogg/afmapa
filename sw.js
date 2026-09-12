// Service worker: faz o mapa abrir sem sinal. No parque a rede cai facil, e o que o
// visitante precisa (mapa, lotes, rotas) e todo estatico.
//
// BUMPAR O CACHE quando publicar: so trocar o numero abaixo.
const CACHE = 'af2026-v21';

// O essencial pra desenhar o mapa. As duas imagens da base sao 2.2 MB juntas, mas
// sem elas o mapa offline fica em branco.
const ESSENCIAL = [
  './', './index.html', './data.js?v=5', './programacao.js?v=1',
  './manifest.webmanifest', './pwa/icone-192.png',
  './mapa/parte0.webp?v=2', './mapa/parte1.webp?v=2',
];

self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.all(ESSENCIAL.map(u => c.add(u).catch(()=>{}))))  // um 404 nao pode derrubar a instalacao
    .then(()=> self.skipWaiting()));
});

self.addEventListener('activate', (e)=>{
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
    .then(()=> self.clients.claim()));
});

self.addEventListener('fetch', (e)=>{
  const req = e.request;
  if(req.method !== 'GET') return;

  // A pagina em si vai na rede primeiro: assim uma publicacao nova chega a quem esta
  // online, e quem esta sem sinal recebe a copia guardada.
  if(req.mode === 'navigate'){
    e.respondWith(fetch(req)
      .then(res => { const c = res.clone(); caches.open(CACHE).then(k=>k.put('./index.html', c)); return res; })
      .catch(()=> caches.match('./index.html')));
    return;
  }

  // Resto (dados, imagens, icones, fontes): cache primeiro, rede so na primeira vez.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if(res.ok && (res.type === 'basic' || res.type === 'cors')){
      const c = res.clone();
      caches.open(CACHE).then(k => k.put(req, c));
    }
    return res;
  }).catch(()=> hit)));
});
