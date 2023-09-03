const CACHE_NAME = 'tarot-cache';

// Add whichever assets you want to precache here:
const PRECACHE_ASSETS = [
    '/images/*',
    '/config/',
    '/scripts/',
    '/Sounds/',
    '/Styles/',
    '/lib/',
    "/index.html"
]

// Listener for the install event - precaches our assets list on service worker install.
self.addEventListener('install', event => {

    event.waitUntil(
        async () => {
            const cache = await caches.open(CACHE_NAME);
            console.log('Service Worker: Caching Files', cache);
            await cache.addAll(PRECACHE_ASSETS);
            self.skipWaiting();
        }
    );

});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})