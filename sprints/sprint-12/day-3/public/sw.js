const CACHE_STATIC = 'cache-v1';
const CACHE_DYNAMIC = 'dynamic-v1';
const urlsToCache = [
  '/',
  '/public/index.html',
  '/public/styles.css',
  '/public/app.js',
  '/public/app.png',
  '/public/offline.html',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(async function (cache) {
      // await cache.addAll(urlsToCache);
      return Promise.all(
        urlsToCache.map(async function (url) {
          try {
            return await cache.add(url);
          } catch (error) {
            console.error('Failed to cache:', url, error);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then(function (fetchResponse) {
          return caches.open(CACHE_DYNAMIC).then(function (cache) {
            cache.put(event.request.url, fetchResponse.clone());
            return fetchResponse;
          });
        })
        .catch(function () {
          if (event.request.mode === 'navigate') {
            return caches.match('/offline.html');
          }
        });
    })
  );
});

self.addEventListener('push', function (event) {
  console.log('[Service Worker] Push Received.', event.data.text());
  const options = {
    body: 'This notification was generated from a push!',
  };
  event.waitUntil(self.registration.showNotification('Hello world!', options));
});
