const CACHE = 'tarot-cache';

return false;

importScripts('./lib/workbox-sw.js');

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = [
    "./config/config.js",
    "./index.html",
    "./lib/mobile-select-master/dist/style/mobile-select.css",
    "./lib/mobile-select-master/dist/mobile-select.iife.min.js",
    "./lib/jquery-3.7.1.min.js.js",
    "./lib/workbox-sw.js",
    "./scripts/tarotGuesr.js",
    "./manifest.json",
    "./styles/styles.css",
    "./sw.js",
    "./images/16.TORRE.png",
    "./images/18.LUNA.png",
    "./images/17.ESTRELLA.png",
    "./images/3.EMPERATRIZ.png",
    "./images/5.PAPA.png",
    "./images/15.DIABLO.png",
    "./images/13.MUERTE.png",
    "./images/22.LOCO.png",
    "./images/1.MAGO.png",
    "./images/icon.png",
    "./images/4.EMPERADOR.png",
    "./images/6.ENAMORADOS.png",
    "./images/19.SOL.png",
    "./images/12.COLGADO.png",
    "./images/21.MUNDO.png",
    "./images/10.RUEDA.png",
    "./images/20.JUICIO.png",
    "./images/14.TEMPLANZA.png",
    "./images/8.JUSTICIA.png",
    "./images/7.CARRO.png",
    "./images/2.SACERDOTISA.png",
    "./images/9.HERMITANO.png",
    "./images/11.FUERZA.png",
    "./Sounds/click.mp3",
    "./Sounds/deselect.mp3",
    "./Sounds/Good.mp3",
    "./Sounds/Wrong.mp3"
]

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

self.addEventListener('install', async (event) => {
    event.waitUntil(
        caches.open(CACHE)
            .then((cache) => cache.addAll(offlineFallbackPage))
    );
});

if (workbox.navigationPreload.isSupported()) {
    workbox.navigationPreload.enable();
}

workbox.routing.registerRoute(
    new RegExp('/*'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: CACHE
    })
);

self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith((async () => {
            try {
                const preloadResp = await event.preloadResponse;

                if (preloadResp) {
                    return preloadResp;
                }

                const networkResp = await fetch(event.request);
                return networkResp;
            } catch (error) {

                const cache = await caches.open(CACHE);
                const cachedResp = await cache.match(offlineFallbackPage);
                return cachedResp;
            }
        })());
    }
});