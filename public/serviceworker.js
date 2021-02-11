const cacheName = 'Version-1';
const staticAssets = [
    './',
    './index.html',
    './manifest.json',
    './my-profile',
    './my-team',
    './team-structure',
    './static/js/main.chunk.js',
    './static/js/0.chunk.js',
    './static/js/bundle.js',
    './static/css/main.chunk.css',
    './images/manifest-icon-192.png',
    './images/manifest-icon-512.png',
    './images/favicon-196.png',
    './images/img_avatar.png',
    './images/img_avatar2.png',
    './images/img_avatar3.png',
    './bootstrap.min.css'
];

// Install SW
this.addEventListener('install', async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return this.skipWaiting();
});

// Activate the SW
this.addEventListener('activate', () => {
    this.clients.claim();
});

// Listen for requests
this.addEventListener('fetch', async event => {
    // Start :: Logic to send push notifications after successful subscription
    if (this.Notification.permission === 'granted') {
        const hostUrl = `${this.location.protocol}//${this.location.host}`;
        // Check if user is Online or Offline
        if (event.request.url === `${hostUrl}/images/favicon-196.png`) {
            event.waitUntil(
                this.registration.showNotification('Internet', {
                    body: (this.navigator.onLine) ? 'Internet is working properly' :
                        'Internet is not working',
                    icon: './images/favicon-196.png'
                })
            );
        }
    }
    // End :: Logic to send push notifications after successful subscription

    const req = event.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkAndCache(req));
    }
});

const cacheFirst = async (req) => {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
};

const networkAndCache = async (req) => {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch (err) {
        const cached = await cache.match(req);
        return cached;
    }
};
