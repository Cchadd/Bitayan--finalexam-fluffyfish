const CACHE_NAME = 'flappy-fish-cache-v1';
const urlsToCache = [
  './assets/index.html',
  './script.js',
  './style.css',
  './manifest.json',
  './assets/fish_sprite.png',
  './assets/backround.png',
  './assets/Pipes.jpg',
  './assets/background.mp3',
  './assets/flap.wav',
  './assets/score.wav',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 