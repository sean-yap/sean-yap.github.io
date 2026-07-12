// Killswitch for the old Jekyll (Chirpy) service worker.
// The previous site was a PWA with offline caching; returning visitors'
// browsers keep serving that cached site until the worker updates. This
// replacement wipes the caches, unregisters itself, and reloads the page.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
