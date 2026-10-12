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
},
{
 "id": "web-worker-transferable-objects-untuk-performa",
 "langs": {
  "id": {
   "title": "Cara Pakai Transferable Objects di Web Worker Clincoo",
   "desc": "Tata cara mentransfer ArrayBuffer ke Web Worker agar data besar tidak di-clone dan performa Clincoo tetap baik.",
   "content": "<p class=\"mb-4\">Meng-clone data besar ke worker mahal. Transferable objects memindahkan kepemilikan tanpa salinan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Transfer ArrayBuffer</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> kirim worker.postMessage({buffer}, [buffer]) agar buffer.byteLength menjadi 0 di sisi pengirim.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan akses setelah transfer</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan tidak mengakses buffer setelah postMessage. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Transferable objects",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects",
   "sourceSnippet": "Transferable objects can be moved between contexts without cloning.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Transferable Objects in a Clincoo Web Worker",
   "desc": "How to transfer an ArrayBuffer to a Web Worker so large data is not cloned and Clincoo stays fast.",
   "content": "<p class=\"mb-4\">Cloning large data to a worker is expensive. Transferable objects move ownership without a copy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Transfer the ArrayBuffer</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> send worker.postMessage({buffer}, [buffer]) so buffer.byteLength becomes 0 on the sender.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not access after transfer</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm you do not access the buffer after postMessage. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Transferable objects",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects",
   "sourceSnippet": "Transferable objects can be moved between contexts without cloning.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-worker-terminate-dan-cleanup",
 "langs": {
  "id": {
   "title": "Cara Terminate Web Worker dan Bersihkan Resource di Clincoo",
   "desc": "Tata cara memanggil worker.terminate() saat tidak dibutuhkan lagi agar tidak ada background task yang terus berjalan di Clincoo.",
   "content": "<p class=\"mb-4\">Worker yang tidak di-terminate terus menghabiskan memori dan CPU.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Terminate saat selesai</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> setelah menerima hasil akhir, panggil worker.terminate().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bersihkan di pagehide</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengarkan pagehide untuk terminate. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Worker.terminate",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Worker/terminate",
   "sourceSnippet": "The terminate() method stops the worker from executing.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Terminate a Web Worker and Clean Up Resources in Clincoo",
   "desc": "How to call worker.terminate() when it is no longer needed so background tasks do not keep running in Clincoo.",
   "content": "<p class=\"mb-4\">A worker that is not terminated keeps using memory and CPU.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Terminate when finished</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> after receiving the final result, call worker.terminate().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Clean up on pagehide</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> listen for pagehide to terminate. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Worker.terminate",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Worker/terminate",
   "sourceSnippet": "The terminate() method stops the worker from executing.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
,
{
 "id": "web-worker-tangani-error-dengan-onerror",
 "langs": {
  "id": {
   "title": "Cara Tangani Error di Web Worker dengan onerror di Clincoo",
   "desc": "Tata cara menangkap kesalahan di dalam Web Worker Clincoo agar tidak hilang diam-diam dan bisa ditampilkan ke pengguna.",
   "content": "<p class=\"mb-4\">Error di dalam worker tidak muncul di konsol halaman secara otomatis. Anda harus mendengarkan onerror.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang listener onerror</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> setelah membuat Worker, set worker.onerror = (e) => { console.error(e.message, e.filename, e.lineno); }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kirim error ke UI</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kirim pesan khusus dari worker saat catch, atau andalkan onerror. Tampilkan pesan ramah. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Worker.onerror",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Worker/error_event",
   "sourceSnippet": "The error event is fired when an error occurs in the worker.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle Errors in a Web Worker with onerror in Clincoo",
   "desc": "How to catch errors inside a Clincoo Web Worker so they are not silent and can be shown to the user.",
   "content": "<p class=\"mb-4\">Errors inside a worker do not appear in the page console automatically. You must listen for onerror.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Attach the onerror listener</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> after creating the Worker, set worker.onerror = (e) => { console.error(e.message, e.filename, e.lineno); }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Send the error to the UI</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> send a special message from the worker on catch, or rely on onerror. Show a friendly message. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Worker.onerror",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Worker/error_event",
   "sourceSnippet": "The error event is fired when an error occurs in the worker.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-worker-pakai-importscripts",
 "langs": {
  "id": {
   "title": "Cara Pakai importScripts di Web Worker Clincoo",
   "desc": "Tata cara memuat skrip tambahan di dalam Web Worker Clincoo dengan importScripts agar kode tetap modular.",
   "content": "<p class=\"mb-4\">Worker tidak bisa import ES modules secara default di semua browser. importScripts adalah cara klasik yang andal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Panggil importScripts</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di dalam worker.js tulis importScripts('helpers.js'); di awal file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pastikan path benar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji bahwa helpers.js ter-load tanpa 404. Jangan import dari domain lain tanpa CORS. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — WorkerGlobalScope.importScripts",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts",
   "sourceSnippet": "importScripts() synchronously imports one or more scripts into the worker's scope.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use importScripts in a Clincoo Web Worker",
   "desc": "How to load additional scripts inside a Clincoo Web Worker with importScripts so the code stays modular.",
   "content": "<p class=\"mb-4\">Workers cannot import ES modules by default in all browsers. importScripts is the classic reliable way.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Call importScripts</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> inside worker.js write importScripts('helpers.js'); at the top of the file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Make sure the path is correct</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm helpers.js loads without a 404. Do not import from another domain without CORS. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — WorkerGlobalScope.importScripts",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts",
   "sourceSnippet": "importScripts() synchronously imports one or more scripts into the worker's scope.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-worker-debug-di-devtools",
 "langs": {
  "id": {
   "title": "Cara Debug Web Worker di DevTools Clincoo",
   "desc": "Tata cara membuka dan men-debug skrip Web Worker di Chrome DevTools saat mengembangkan proyek Clincoo.",
   "content": "<p class=\"mb-4\">Breakpoint di worker tidak selalu muncul di Sources tab utama. Anda perlu menemukannya secara khusus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka Sources dan cari worker</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools → Sources, lalu di panel kiri cari folder Workers atau Threads.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set breakpoint dan uji</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> set breakpoint di dalam onmessage, lalu kirim data. Pastikan execution berhenti. Catat langkah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Debugging workers",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/javascript/reference/#workers",
   "sourceSnippet": "You can debug web workers from the Sources panel by selecting them in the threads list.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Web Worker in DevTools for Clincoo",
   "desc": "How to open and debug a Web Worker script in Chrome DevTools while building a Clincoo project.",
   "content": "<p class=\"mb-4\">Breakpoints inside a worker do not always appear in the main Sources tab. You need to find them specifically.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open Sources and find the worker</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools → Sources, then in the left panel look for the Workers or Threads folder.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set a breakpoint and test</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> set a breakpoint inside onmessage, then send data. Confirm execution pauses. Record the steps on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Debugging workers",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/javascript/reference/#workers",
   "sourceSnippet": "You can debug web workers from the Sources panel by selecting them in the threads list.",
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
   "title": "Cara Gunakan SharedWorker untuk Komunikasi Antar Tab di Clincoo",
   "desc": "Tata cara memakai SharedWorker agar beberapa tab Clincoo bisa berbagi state tanpa server.",
   "content": "<p class=\"mb-4\">SharedWorker hidup selama ada tab yang terhubung. Cocok untuk sinkronisasi sederhana antar tab.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat SharedWorker</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> new SharedWorker('shared.js') lalu port = worker.port; port.start(); port.postMessage(...).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tangani koneksi di worker</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> di shared.js dengarkan onconnect. Uji dengan dua tab. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — SharedWorker",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker",
   "sourceSnippet": "The SharedWorker interface represents a specific kind of worker that can be accessed from several browsing contexts.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use a SharedWorker for Cross-Tab Communication in Clincoo",
   "desc": "How to use a SharedWorker so multiple Clincoo tabs can share state without a server.",
   "content": "<p class=\"mb-4\">A SharedWorker stays alive as long as any connected tab remains open. It is useful for simple cross-tab sync.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create the SharedWorker</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do new SharedWorker('shared.js') then port = worker.port; port.start(); port.postMessage(...).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Handle connections in the worker</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> in shared.js listen for onconnect. Test with two tabs. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — SharedWorker",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker",
   "sourceSnippet": "The SharedWorker interface represents a specific kind of worker that can be accessed from several browsing contexts.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-worker-batasi-jumlah-worker",
 "langs": {
  "id": {
   "title": "Cara Batasi Jumlah Web Worker yang Berjalan Bersamaan di Clincoo",
   "desc": "Tata cara mengelola pool worker sederhana agar Clincoo tidak membuat terlalu banyak thread sekaligus.",
   "content": "<p class=\"mb-4\">Terlalu banyak worker bisa menghabiskan memori. Buat pool atau antrian.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat pool sederhana</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan array workers dengan panjang maksimal 4, reuse yang sudah selesai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Antrikan tugas</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jika semua sibuk, masukkan tugas ke queue. Terminate yang idle terlalu lama. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using Web Workers",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",
   "sourceSnippet": "Workers are relatively heavy-weight, so you should not create too many of them.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit the Number of Concurrent Web Workers in Clincoo",
   "desc": "How to manage a simple worker pool so Clincoo does not spawn too many threads at once.",
   "content": "<p class=\"mb-4\">Too many workers can consume memory. Create a pool or a queue.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Build a simple pool</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep an array of workers with a max length of 4 and reuse finished ones.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Queue the tasks</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> if all are busy, push the task to a queue. Terminate workers that stay idle too long. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using Web Workers",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",
   "sourceSnippet": "Workers are relatively heavy-weight, so you should not create too many of them.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ,{
 "id": "web-worker-shared-worker-antar-tab",
 "langs": {
  "id": {
   "title": "Cara Pakai SharedWorker untuk Komunikasi Antar Tab di Clincoo",
   "desc": "Tata cara berbagi satu worker antar beberapa tab browser agar data Clincoo tetap sinkron.",
   "content": "<p class=\\\"mb-4\\\">SharedWorker memungkinkan beberapa tab berbagi state tanpa server.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Buat SharedWorker</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> buat shared.js dengan onconnect, lalu new SharedWorker('shared.js').</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Kirim pesan antar tab</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> port.postMessage untuk update. Uji buka dua tab. Catat di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\\\"mb-4\\\">A SharedWorker lets multiple tabs share state without a server.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Create the SharedWorker</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> create shared.js with onconnect, then new SharedWorker('shared.js').</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Send messages between tabs</h2><p class=\\\"mb-4\\\">On <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> use port.postMessage for updates. Test by opening two tabs. Record it on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — SharedWorker",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker",
   "sourceSnippet": "A SharedWorker can be accessed from several browsing contexts.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},{
 "id": "web-worker-importscripts-library",
 "langs": {
  "id": {
   "title": "Cara Import Library di Web Worker dengan importScripts di Clincoo",
   "desc": "Tata cara memuat skrip eksternal ke dalam Web Worker Clincoo tanpa module.",
   "content": "<p class=\\\"mb-4\\\">importScripts memuat library klasik ke worker secara sinkron.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Panggil importScripts</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> di worker.js tulis importScripts('https://cdn.example.com/lib.js'); lalu gunakan fungsi library.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Perhatikan CORS dan ukuran</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> pastikan CDN mengizinkan worker. Hindari library besar. Catat di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — importScripts",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts",
   "sourceSnippet": "importScripts synchronously imports one or more scripts into the worker.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Import a Library in a Web Worker with importScripts in Clincoo",
   "desc": "How to load an external script into a Clincoo Web Worker without modules.",
   "content": "<p class=\\\"mb-4\\\">importScripts loads a classic library into the worker synchronously.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Call importScripts</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> in worker.js write importScripts('https://cdn.example.com/lib.js'); then use the library functions.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Watch CORS and size</h2><p class=\\\"mb-4\\\">On <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> confirm the CDN allows worker access. Avoid large libraries. Record it on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — importScripts",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts",
   "sourceSnippet": "importScripts synchronously imports one or more scripts into the worker.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},{
 "id": "web-worker-debug-dengan-chrome-devtools",
 "langs": {
  "id": {
   "title": "Cara Debug Web Worker dengan Chrome DevTools di Clincoo",
   "desc": "Tata cara membuka konsol dan breakpoint di dalam Web Worker Clincoo.",
   "content": "<p class=\\\"mb-4\\\">Error di worker tidak selalu terlihat di konsol halaman. Gunakan panel Sources.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Buka worker di Sources</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> buka DevTools, tab Sources, di sidebar kiri cari worker, lalu set breakpoint.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Lihat log terpisah</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> console.log di worker muncul di konsol worker. Catat di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Debug workers",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/javascript/snippets",
   "sourceSnippet": "You can debug Web Workers from the Sources panel in DevTools.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Web Worker with Chrome DevTools in Clincoo",
   "desc": "How to open the console and set breakpoints inside a Clincoo Web Worker.",
   "content": "<p class=\\\"mb-4\\\">Errors in a worker are not always visible in the page console. Use the Sources panel.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Open the worker in Sources</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> open DevTools, Sources tab, find the worker in the left sidebar, then set a breakpoint.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">See separate logs</h2><p class=\\\"mb-4\\\">On <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> console.log inside the worker appears in the worker console. Record it on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Debug workers",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/javascript/snippets",
   "sourceSnippet": "You can debug Web Workers from the Sources panel in DevTools.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
]
};
