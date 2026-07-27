const CACHE_NAME = "revistas-cache-v1";
const urlsToCache = ['./', 'static/logo.webp', 'static/logo_pwa.png', 'static/logo_pwa-192.png', 'static/logo_pwa-512.png', 'static/logo_pwa-1024.png', 'static/favicon.ico', 'static/site.webmanifest', 'static/pdfjs/web/viewer.html', 'static/pdfjs/build/pdf.mjs', 'static/pdfjs/build/pdf.worker.mjs', 'esp32_datasheet_en.pdf', 'static/esp32_datasheet_en.webp', 'ESP32%20WROOM%2032/esp32-wroom-32_datasheet_en.pdf', 'static/esp32-wroom-32_datasheet_en.webp'];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }))
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request).catch(() =>
        new Response("No hay conexión y el recurso no está en caché.", {
          headers: { "Content-Type": "text/plain" }
        })
      )
    )
  );
});