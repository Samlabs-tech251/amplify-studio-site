const CACHE_NAME = "amplify-studio-v3";
const BASE_URL = new URL("./", self.registration.scope);
const OFFLINE_URL = new URL("offline.html", BASE_URL).toString();

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll([
        OFFLINE_URL,
        new URL("manifest.webmanifest", BASE_URL).toString(),
        new URL("icons/amplify-192.png", BASE_URL).toString(),
        new URL("icons/amplify-512.png", BASE_URL).toString(),
      ])
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
