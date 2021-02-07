const cacheName = 'Version-1';
const staticAssets = [
  './',
  './index.html',
  './manifest.json',
  './home',
  './about',
  './users',
  './static/js/main.chunk.js',
  './static/js/0.chunk.js',
  './static/js/bundle.js',
  './static/css/main.chunk.css',
  './images/manifest-icon-192.png',
  './images/favicon-196.png',
  './bootstrap.min.css'
];

const self = this;

// Install SW
self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

// Activate the SW
self.addEventListener('activate', e => {
  self.clients.claim();
});

// Listen for requests
self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}