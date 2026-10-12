// Clincoo Docs — kategori Web Worker (12 Oktober 2026, 09:00 WIB) — kategori baru, 2 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["web-worker"] = {
 "names": { "id": "Web Worker", "en": "Web Worker" },
 "articles": [
{
 "id": "web-worker-dasar-background-task",
 "langs": {
  "id": {
   "title": "Cara Jalankan Tugas Berat di Background dengan Web Worker di Clincoo",
   "desc": "Tata cara memindahkan perhitungan berat ke Web Worker agar UI Clincoo tetap responsif.",
   "content": "<p class=\"mb-4\">Tugas berat di thread utama membuat halaman freeze. Web Worker menjalankannya di background.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat file worker</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat worker.js yang mendengarkan onmessage dan mengirim hasil dengan postMessage.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Panggil dari halaman</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> new Worker('worker.js') lalu kirim data. Pastikan UI tetap bisa diklik. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using Web Workers",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",
   "sourceSnippet": "Web Workers allow you to run scripts in background threads without blocking the UI.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Run Heavy Tasks in the Background with Web Workers in Clincoo",
   "desc": "How to move heavy computation to a Web Worker so the Clincoo UI stays responsive.",
   "content": "<p class=\"mb-4\">Heavy work on the main thread freezes the page. A Web Worker runs it in the background.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create the worker file</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create worker.js that listens for onmessage and sends results with postMessage.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Call it from the page</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> do new Worker('worker.js') and send data. Make sure the UI remains clickable. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using Web Workers",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",
   "sourceSnippet": "Web Workers allow you to run scripts in background threads without blocking the UI.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-worker-shared-worker-antar-tab",
 "langs": {
  "id": {
   "title": "Cara Pakai SharedWorker untuk Komunikasi Antar Tab di Clincoo",
   "desc": "Tata cara berbagi satu worker antar beberapa tab browser agar data Clincoo tetap sinkron.",
   "content": "<p class=\"mb-4\">SharedWorker memungkinkan beberapa tab berbagi state tanpa server.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat SharedWorker</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat shared.js dengan onconnect, lalu new SharedWorker('shared.js').</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kirim pesan antar tab</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> port.postMessage untuk update. Uji buka dua tab. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — SharedWorker",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker",
   "sourceSnippet": "A SharedWorker can be accessed from several browsing contexts.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use SharedWorker for Cross-Tab Communication in Clincoo",
   "desc": "How to share one worker across browser tabs so Clincoo data stays in sync.",
   "content": "<p class=\"mb-4\">A SharedWorker lets multiple tabs share state without a server.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create the SharedWorker</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create shared.js with onconnect, then new SharedWorker('shared.js').</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Send messages between tabs</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use port.postMessage for updates. Test by opening two tabs. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — SharedWorker",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker",
   "sourceSnippet": "A SharedWorker can be accessed from several browsing contexts.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
]
};