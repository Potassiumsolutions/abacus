const CACHE='abacus-silkroad-v4';
const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png',
 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ASSETS.map(a=>c.add(a).catch(()=>{})))));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k.startsWith('abacus-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{
   const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy).catch(()=>{}));return resp;
 }).catch(()=>caches.match('./index.html'))));
});
