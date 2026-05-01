/* Simple SW: cache core assets + offline navigation fallback. */
const CACHE_VERSION = "pwa-v8";
const CORE_ASSETS = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/pwa.js",
  "/manifest.json",
  "/offline.html",
  "/content-pages.js",
  "/content-articles.js",
  "/content-articles-en.js",
  "/content-articles-fr.js",
  "/content-articles-de.js",
  "/content-articles-it.js",
  "/content-articles-facebook-es.js",
  "/content-articles-facebook-en.js",
  "/content-articles-facebook-fr.js",
  "/content-articles-facebook-de.js",
  "/content-articles-facebook-daily-es.js",
  "/content-articles-facebook-daily-en.js",
  "/content-articles-facebook-daily-fr.js",
  "/content-articles-facebook-daily-de.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_VERSION);
      await cache.addAll(CORE_ASSETS);
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

function isSameOrigin(request) {
  try {
    return new URL(request.url).origin === self.location.origin;
  } catch {
    return false;
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  if (!isSameOrigin(request)) return;

  // HTML navigations: network-first, fallback to cached index/offline.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_VERSION);
        try {
          const response = await fetch(request);
          cache.put("/index.html", response.clone());
          return response;
        } catch {
          return (await cache.match("/index.html")) || (await cache.match("/offline.html"));
        }
      })()
    );
    return;
  }

  // JS files: network-first (always fresh content).
  if (request.url.endsWith(".js")) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_VERSION);
        try {
          const response = await fetch(request);
          if (response && response.ok) cache.put(request, response.clone());
          return response;
        } catch {
          return (await cache.match(request)) || new Response("", { status: 504 });
        }
      })()
    );
    return;
  }

  // Other assets (CSS, images): stale-while-revalidate.
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_VERSION);
      const cached = await cache.match(request);
      const fetchPromise = fetch(request)
        .then((response) => {
          if (response && response.ok) cache.put(request, response.clone());
          return response;
        })
        .catch(() => null);

      return cached || (await fetchPromise) || new Response("", { status: 504 });
    })()
  );
});
