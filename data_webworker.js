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
 "id": "web-worker-komunikasi-dengan-postmessage",
 "langs": {
  "id": {
   "title": "Cara Komunikasi Aman dengan postMessage ke Web Worker di Clincoo",
   "desc": "Tata cara mengirim dan menerima data terstruktur antara halaman dan Web Worker di Clincoo.",
   "content": "<p class=\"mb-4\">Data yang dikirim ke worker di-clone. Hindari mengirim objek besar atau fungsi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kirim data sederhana</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> gunakan worker.postMessage({ type: 'process', data: array }) dan di worker self.onmessage = (e) => { ... postMessage(result); }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tangani error</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengarkan worker.onerror. Jangan kirim data sensitif. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Worker.postMessage",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage",
   "sourceSnippet": "postMessage sends a message to the worker; the data is cloned using the structured clone algorithm.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Communicate Safely with postMessage to a Web Worker in Clincoo",
   "desc": "How to send and receive structured data between the page and a Web Worker in Clincoo.",
   "content": "<p class=\"mb-4\">Data sent to a worker is cloned. Avoid sending large objects or functions.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Send simple data</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use worker.postMessage({ type: 'process', data: array }) and in the worker self.onmessage = (e) => { ... postMessage(result); }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Handle errors</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> listen for worker.onerror. Do not send sensitive data. Record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Worker.postMessage",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage",
   "sourceSnippet": "postMessage sends a message to the worker; the data is cloned using the structured clone algorithm.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ]
};
