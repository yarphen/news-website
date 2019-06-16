const VERSION_URL = '/version.json';

const CACHED_KEYS = ['https://cdn.jsdelivr.net/npm/pwacompat@2.0.6/pwacompat.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css',
  'https://fonts.googleapis.com/css?family=Roboto&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/webfonts/fa-solid-900.woff2',
  '/',
  '/news',
  '/video',
  '/regions',
  '/tv',
  '/main.js',
  '/images/picture.jpg',
  '/images/error.png',
  '/images/res/mipmap-mdpi/favicon.png',
  '/images/res/mipmap-hdpi/favicon.png',
  '/images/res/mipmap-xhdpi/favicon.png',
  '/images/res/mipmap-xxhdpi/favicon.png',
  '/images/res/mipmap-xxxhdpi/favicon.png',
  '/images/web_hi_res_512.png',
  '/favicon.ico',
  '/mainfest.json',
  VERSION_URL,
];

function parsePath(event) {
  const { request } = event || {};
  const { url } = request || {};
  return (url || '').replace(this.origin, '');
}

async function update() {
  return caches.keys().then(keys => Promise.all(keys.map(key => caches.delete(key))));
}

async function checkForUpdates(versionSavedResponse) {
  try {
    const versionRealResponse = await fetch(VERSION_URL);
    const { version: realVersion } = await versionRealResponse.json();
    const { version: cachedVersion } = await versionSavedResponse.clone().json();
    if (realVersion !== cachedVersion) {
      await update();
    }
  } catch (e) {
    console.error('Not today');
  }
}

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then(cache => cache.addAll(CACHED_KEYS)),
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(async (response) => {
      if (parsePath(event) === VERSION_URL) {
        await checkForUpdates(response);
      }
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      }
      return fetch(event.request).then((realResponse) => {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        const responseClone = realResponse.clone();
        caches.open('v1').then((cache) => {
          cache.put(event.request, responseClone);
        });
        return realResponse;
      }).catch(() => caches.match('/images/error.jpg'));
    }),
  );
});
