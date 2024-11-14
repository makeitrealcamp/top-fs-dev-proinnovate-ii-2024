importScripts('./localDb.js');

const CACHE_STATIC = 'cache-v1';
const CACHE_DYNAMIC = 'dynamic-v1';
const urlsToCache = [
  '/',
  '/day-3/public/index.html',
  '/day-3/public/styles.css',
  '/day-3/public/app.js',
  '/day-3/public/app.png',
  '/day-3/public/offline.html',
];


self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(async function (cache) {
      await cache.addAll(urlsToCache);
      // return Promise.all(
      //   urlsToCache.map(async function(url) {
      //     try {
      //       return await cache.add(url);
      //     } catch (error) {
      //       console.error('Failed to cache:', url, error);
      //     }
      //   })
      // );
    })
  );
});
self.addEventListener('fetch', function (event) {
  const cacheResponse = async () => {
    try {
      const cache = await caches.open(CACHE_STATIC);
      const cachedResponse = await cache.match(event.request);
      console.log(cachedResponse);
      return cachedResponse || handleAPIrequest(event.request);
    } catch (error) {
      console.log(error);
    }
  };
  try {
    event.respondWith(event.request);
  } catch (error) {
    console.log(error);
  }
});

// self.addEventListener('fetch', (event) => {
//   console.log(event.request.url);
//   if (event.request.url.endsWith('.css')) {
//     event.respondWith(fetch(event.request));
//     // event.respondWith(new Response('', {
//     //   status: 200,
//     //   statusText: 'css intercepted',
//     // }));
//   } else {
//     event.respondWith(fetch(event.request));
//   }
// });
