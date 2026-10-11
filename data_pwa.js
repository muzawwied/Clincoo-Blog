// Clincoo Docs — kategori baru PWA (11 Oktober 2026, 14:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["pwa"]) {
    window.countryDataFiles["pwa"] = { "names": { "id": "PWA", "en": "PWA" }, "articles": [] };
  }
  var list = window.countryDataFiles["pwa"].articles;
  var extra = [
{
 "id": "pwa-daftar-service-worker-offline",
 "langs": {
  "id": {
   "title": "Cara Daftarkan Service Worker untuk Clincoo Offline",
   "desc": "Tata cara mendaftarkan service worker agar halaman Clincoo tetap bisa dibuka saat offline.",
   "content": "<p class=\"mb-4\">Tanpa service worker, Clincoo tidak bisa menampilkan konten saat jaringan putus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Daftarkan di halaman utama</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan navigator.serviceWorker.register('/sw.js') setelah load. Pastikan file sw.js ada di root proyek.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji offline</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> matikan jaringan. Halaman harus tetap terbuka dari cache. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Service Worker API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",
   "sourceSnippet": "Service workers essentially act as proxy servers that sit between web applications, the browser, and the network.",
   "source2": "web.dev — Service workers",
   "source2Url": "https://web.dev/learn/pwa/service-workers/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Register a Service Worker for Offline Clincoo",
   "desc": "How to register a service worker so Clincoo pages still open when offline.",
   "content": "<p class=\"mb-4\">Without a service worker, Clincoo cannot show content when the network is down.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Register on the main page</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add navigator.serviceWorker.register('/sw.js') after load. Make sure sw.js exists in the project root.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test offline</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> turn off the network. The page should still open from cache. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Service Worker API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",
   "sourceSnippet": "Service workers essentially act as proxy servers that sit between web applications, the browser, and the network.",
   "source2": "web.dev — Service workers",
   "source2Url": "https://web.dev/learn/pwa/service-workers/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pwa-buat-manifest-json-install",
 "langs": {
  "id": {
   "title": "Cara Buat Manifest.json untuk Install PWA Clincoo",
   "desc": "Tata cara membuat web app manifest agar pengguna bisa memasang Clincoo ke layar utama.",
   "content": "<p class=\"mb-4\">Tanpa manifest, browser tidak menawarkan tombol Install untuk Clincoo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat file manifest</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat manifest.json dengan name, short_name, start_url, display: standalone, icons. Tautkan di head dengan link rel=manifest.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji install</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> Chrome harus menampilkan ikon install. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Web app manifests",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Manifest",
   "sourceSnippet": "Web app manifests provide information about a web application in a JSON text file.",
   "source2": "web.dev — Add a web app manifest",
   "source2Url": "https://web.dev/articles/add-manifest",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Create a Manifest.json for Installing Clincoo PWA",
   "desc": "How to create a web app manifest so users can install Clincoo to the home screen.",
   "content": "<p class=\"mb-4\">Without a manifest, the browser does not offer an Install button for Clincoo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create the manifest file</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create manifest.json with name, short_name, start_url, display: standalone, icons. Link it in head with link rel=manifest.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test install</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> Chrome should show the install icon. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Web app manifests",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Manifest",
   "sourceSnippet": "Web app manifests provide information about a web application in a JSON text file.",
   "source2": "web.dev — Add a web app manifest",
   "source2Url": "https://web.dev/articles/add-manifest",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pwa-handle-update-service-worker",
 "langs": {
  "id": {
   "title": "Cara Handle Update Service Worker Tanpa Refresh Paksa",
   "desc": "Tata cara mendeteksi service worker baru dan menawarkan refresh lembut di Clincoo.",
   "content": "<p class=\"mb-4\">Update service worker yang diam-diam membuat pengguna tetap di versi lama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dengarkan updatefound</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> dengarkan registration.onupdatefound lalu waiting statechange. Tampilkan banner 'Update tersedia' yang memanggil skipWaiting.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji deploy baru</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> push versi baru. Banner harus muncul. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ServiceWorkerRegistration",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration",
   "sourceSnippet": "The ServiceWorkerRegistration interface represents the registration of a service worker.",
   "source2": "web.dev — Handling updates",
   "source2Url": "https://web.dev/learn/pwa/update/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle Service Worker Updates Without Forced Refresh",
   "desc": "How to detect a new service worker and offer a soft refresh in Clincoo.",
   "content": "<p class=\"mb-4\">A silent service worker update leaves users on the old version.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Listen for updatefound</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> listen to registration.onupdatefound then waiting statechange. Show an 'Update available' banner that calls skipWaiting.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a new deploy</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> push a new version. The banner should appear. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ServiceWorkerRegistration",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration",
   "sourceSnippet": "The ServiceWorkerRegistration interface represents the registration of a service worker.",
   "source2": "web.dev — Handling updates",
   "source2Url": "https://web.dev/learn/pwa/update/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pwa-cache-aset-statis-cache-api",
 "langs": {
  "id": {
   "title": "Cara Cache Aset Statis dengan Cache API",
   "desc": "Tata cara menyimpan CSS, JS, dan gambar Clincoo ke Cache API di service worker.",
   "content": "<p class=\"mb-4\">Tanpa cache, setiap kunjungan mengunduh ulang aset yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cache saat install</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di event install, buka cache lalu addAll daftar aset penting. Gunakan versioning nama cache.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji cache hit</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Network panel. Aset harus (from ServiceWorker). Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Cache API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Cache",
   "sourceSnippet": "The Cache interface provides a persistent storage mechanism for Request / Response object pairs.",
   "source2": "web.dev — Caching",
   "source2Url": "https://web.dev/learn/pwa/caching/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Cache Static Assets with the Cache API",
   "desc": "How to store Clincoo CSS, JS, and images in the Cache API inside a service worker.",
   "content": "<p class=\"mb-4\">Without caching, every visit re-downloads the same assets.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cache on install</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on the install event, open a cache then addAll the list of important assets. Use versioned cache names.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test cache hits</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the Network panel. Assets should show (from ServiceWorker). Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Cache API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Cache",
   "sourceSnippet": "The Cache interface provides a persistent storage mechanism for Request / Response object pairs.",
   "source2": "web.dev — Caching",
   "source2Url": "https://web.dev/learn/pwa/caching/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pwa-deteksi-mode-standalone",
 "langs": {
  "id": {
   "title": "Cara Deteksi Mode Standalone di PWA Clincoo",
   "desc": "Tata cara mengecek apakah Clincoo dibuka sebagai aplikasi terpasang (standalone) atau di browser.",
   "content": "<p class=\"mb-4\">Tampilan browser dan aplikasi terpasang perlu penyesuaian UI kecil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek display-mode</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai window.matchMedia('(display-mode: standalone)').matches atau navigator.standalone. Sembunyikan header browser jika standalone.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji setelah install</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> install lalu buka dari layar utama. UI harus menyesuaikan. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — display-mode",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode",
   "sourceSnippet": "The display-mode CSS media feature can be used to test the display mode of an application.",
   "source2": "web.dev — Detecting the display mode",
   "source2Url": "https://web.dev/articles/customize-install",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Detect Standalone Mode in a Clincoo PWA",
   "desc": "How to check whether Clincoo is opened as an installed app (standalone) or in the browser.",
   "content": "<p class=\"mb-4\">Browser and installed-app views need small UI adjustments.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check display-mode</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use window.matchMedia('(display-mode: standalone)').matches or navigator.standalone. Hide browser chrome when standalone.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test after install</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> install then open from the home screen. The UI should adapt. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — display-mode",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode",
   "sourceSnippet": "The display-mode CSS media feature can be used to test the display mode of an application.",
   "source2": "web.dev — Detecting the display mode",
   "source2Url": "https://web.dev/articles/customize-install",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();
