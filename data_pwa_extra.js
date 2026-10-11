// Clincoo Docs — tambah 5 artikel PWA (11 Oktober 2026, 15:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["pwa"]) {
    window.countryDataFiles["pwa"] = { "names": { "id": "PWA", "en": "PWA" }, "articles": [] };
  }
  var list = window.countryDataFiles["pwa"].articles;
  var extra = [
{
 "id": "pwa-offline-fallback-halaman",
 "langs": {
  "id": {
   "title": "Cara Buat Halaman Fallback Offline di Service Worker Clincoo",
   "desc": "Tata cara menampilkan halaman offline khusus saat jaringan putus dan aset tidak ada di cache.",
   "content": "<p class=\"mb-4\">Saat offline dan cache miss, pengguna melihat error browser. Halaman fallback memberi pesan yang lebih baik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tangkap fetch gagal</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di event fetch service worker, coba cache.match, jika gagal dan request mode navigate, kembalikan caches.match('/offline.html').</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat halaman offline</h2><p class=\"mb-4\">Buat offline.html sederhana di root. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> matikan jaringan lalu refresh. Halaman fallback harus tampil. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Service Worker API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",
   "sourceSnippet": "Service workers can intercept network requests and respond with cached or fallback content.",
   "source2": "web.dev — Offline fallback",
   "source2Url": "https://web.dev/learn/pwa/offline-data/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Create an Offline Fallback Page in a Clincoo Service Worker",
   "desc": "How to show a custom offline page when the network is down and the asset is not cached.",
   "content": "<p class=\"mb-4\">When offline and a cache miss occurs, users see a browser error. A fallback page gives a better message.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catch failed fetches</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> in the service worker fetch event, try cache.match; if it fails and the request mode is navigate, return caches.match('/offline.html').</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create the offline page</h2><p class=\"mb-4\">Create a simple offline.html in the root. On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> turn off the network and refresh. The fallback page should appear. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Service Worker API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",
   "sourceSnippet": "Service workers can intercept network requests and respond with cached or fallback content.",
   "source2": "web.dev — Offline fallback",
   "source2Url": "https://web.dev/learn/pwa/offline-data/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pwa-background-sync-form",
 "langs": {
  "id": {
   "title": "Cara Kirim Form Offline dengan Background Sync",
   "desc": "Tata cara menyimpan form Clincoo saat offline dan mengirimnya otomatis saat koneksi kembali.",
   "content": "<p class=\"mb-4\">Form yang dikirim saat offline hilang jika tidak disimpan. Background Sync memungkinkan antrian.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Daftarkan sync</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan data form di IndexedDB, lalu registration.sync.register('send-form') saat submit gagal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tangani di service worker</h2><p class=\"mb-4\">Di event sync, baca IndexedDB dan kirim fetch. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji dengan offline lalu online. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Background Synchronization API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Background_Synchronization_API",
   "sourceSnippet": "The Background Synchronization API allows you to defer tasks until the user has stable connectivity.",
   "source2": "web.dev — Background sync",
   "source2Url": "https://web.dev/articles/background-sync/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Send Forms Offline with Background Sync",
   "desc": "How to store a Clincoo form while offline and send it automatically when connectivity returns.",
   "content": "<p class=\"mb-4\">A form submitted while offline is lost if not stored. Background Sync allows queuing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Register the sync</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> save form data in IndexedDB, then call registration.sync.register('send-form') when submit fails.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Handle it in the service worker</h2><p class=\"mb-4\">On the sync event, read IndexedDB and send the fetch. On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test by going offline then online. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Background Synchronization API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Background_Synchronization_API",
   "sourceSnippet": "The Background Synchronization API allows you to defer tasks until the user has stable connectivity.",
   "source2": "web.dev — Background sync",
   "source2Url": "https://web.dev/articles/background-sync/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "pwa-deteksi-online-offline",
 "langs": {
  "id": {
   "title": "Cara Deteksi Status Online dan Offline di Clincoo",
   "desc": "Tata cara memakai navigator.onLine dan event online/offline untuk menyesuaikan UI Clincoo.",
   "content": "<p class=\"mb-4\">Pengguna perlu tahu kapan mereka offline agar tidak mencoba aksi yang gagal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dengarkan event</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan window.addEventListener('offline', ...) dan 'online'. Tampilkan banner status.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di DevTools</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gunakan Network Offline. Banner harus berubah. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Navigator.onLine",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine",
   "sourceSnippet": "The Navigator.onLine property returns the online status of the browser.",
   "source2": "MDN — online event",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Detect Online and Offline Status in Clincoo",
   "desc": "How to use navigator.onLine and online/offline events to adjust the Clincoo UI.",
   "content": "<p class=\"mb-4\">Users need to know when they are offline so they do not attempt actions that will fail.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Listen for events</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add window.addEventListener('offline', ...) and 'online'. Show a status banner.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in DevTools</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use Network Offline. The banner should change. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Navigator.onLine",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine",
   "sourceSnippet": "The Navigator.onLine property returns the online status of the browser.",
   "source2": "MDN — online event",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pwa-install-prompt-kustom",
 "langs": {
  "id": {
   "title": "Cara Buat Prompt Install PWA Kustom",
   "desc": "Tata cara menangkap beforeinstallprompt dan menampilkan tombol install kustom di Clincoo.",
   "content": "<p class=\"mb-4\">Prompt install bawaan browser bisa disembunyikan. Prompt kustom memberi kontrol lebih.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tangkap event</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> dengarkan beforeinstallprompt, simpan event, tampilkan tombol Anda sendiri. Panggil prompt() saat diklik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di Chrome</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan kriteria install terpenuhi. Tombol harus muncul. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Customize the install experience",
   "sourceUrl": "https://web.dev/articles/customize-install",
   "sourceSnippet": "Listen for the beforeinstallprompt event to show your own install button.",
   "source2": "MDN — beforeinstallprompt",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeinstallprompt_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Create a Custom PWA Install Prompt",
   "desc": "How to catch beforeinstallprompt and show a custom install button in Clincoo.",
   "content": "<p class=\"mb-4\">The browser's default install prompt can be hidden. A custom prompt gives more control.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catch the event</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> listen for beforeinstallprompt, store the event, and show your own button. Call prompt() when clicked.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in Chrome</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm install criteria are met. The button should appear. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Customize the install experience",
   "sourceUrl": "https://web.dev/articles/customize-install",
   "sourceSnippet": "Listen for the beforeinstallprompt event to show your own install button.",
   "source2": "MDN — beforeinstallprompt",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeinstallprompt_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "pwa-cache-first-strategi",
 "langs": {
  "id": {
   "title": "Cara Terapkan Strategi Cache-First untuk Aset Statis",
   "desc": "Tata cara mengutamakan cache sebelum jaringan untuk CSS, JS, dan gambar Clincoo.",
   "content": "<p class=\"mb-4\">Strategi cache-first membuat muat ulang lebih cepat untuk aset yang jarang berubah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek cache dulu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di fetch event, untuk request aset statis, kembalikan cache.match jika ada, else fetch lalu cache.put.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji cache hit</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reload halaman. Network harus menunjukkan from ServiceWorker. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Caching strategies",
   "sourceUrl": "https://web.dev/learn/pwa/caching/",
   "sourceSnippet": "Cache-first serves cached content immediately and updates in the background if needed.",
   "source2": "MDN — Cache API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Cache",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Apply a Cache-First Strategy for Static Assets",
   "desc": "How to prioritize cache over network for Clincoo CSS, JS, and images.",
   "content": "<p class=\"mb-4\">A cache-first strategy makes reloads faster for assets that rarely change.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check cache first</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> in the fetch event, for static asset requests return cache.match if present, otherwise fetch then cache.put.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test cache hits</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reload the page. Network should show from ServiceWorker. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Caching strategies",
   "sourceUrl": "https://web.dev/learn/pwa/caching/",
   "sourceSnippet": "Cache-first serves cached content immediately and updates in the background if needed.",
   "source2": "MDN — Cache API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Cache",
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
