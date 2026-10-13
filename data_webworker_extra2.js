// Clincoo Docs — tambah 2 artikel web-worker (13 Oktober 2026, 21:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles['web-worker']) return;
  var list = window.countryDataFiles['web-worker'].articles;
  var extra = [
{
 "id": "web-worker-debug-console-di-dalam-worker",
 "langs": {
  "id": {
   "title": "Cara Debug Web Worker dengan Console di Dalam Worker Clincoo",
   "desc": "Tata cara menggunakan console.log di dalam Web Worker dan melihatnya di DevTools untuk debug Clincoo.",
   "content": "<p class=\"mb-4\">Console di worker muncul di tab yang sama, tapi terpisah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Log di worker</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di dalam worker.js tulis console.log('worker start', data). Buka DevTools Console, filter atau lihat konteks worker.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gunakan debugger</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> set breakpoint di Sources pada file worker. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Web Workers",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",
   "sourceSnippet": "Workers have their own console and can be debugged separately.",
   "source2": "Chrome DevTools — Workers",
   "source2Url": "https://developer.chrome.com/docs/devtools/javascript/reference/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Web Worker with Console Inside the Worker in Clincoo",
   "desc": "How to use console.log inside a Web Worker and view it in DevTools for debugging Clincoo.",
   "content": "<p class=\"mb-4\">Console in a worker appears in the same tab but is separate.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Log inside the worker</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> inside worker.js write console.log('worker start', data). Open DevTools Console and filter or check the worker context.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use the debugger</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> set a breakpoint in Sources on the worker file. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Web Workers",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",
   "sourceSnippet": "Workers have their own console and can be debugged separately.",
   "source2": "Chrome DevTools — Workers",
   "source2Url": "https://developer.chrome.com/docs/devtools/javascript/reference/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "web-worker-offload-image-decode",
 "langs": {
  "id": {
   "title": "Cara Offload Decode Gambar ke Web Worker di Clincoo",
   "desc": "Tata cara memindahkan decode gambar berat ke Web Worker agar UI Clincoo tidak freeze.",
   "content": "<p class=\"mb-4\">Decode gambar besar di thread utama membuat jank. Pindahkan ke worker.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kirim blob ke worker</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> worker.postMessage({ blob }); di worker gunakan createImageBitmap atau OffscreenCanvas jika tersedia.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kembalikan hasil</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> terima ImageBitmap dan gambar ke canvas. UI tetap responsif. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — createImageBitmap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/createImageBitmap",
   "sourceSnippet": "createImageBitmap can be used in workers to decode images off the main thread.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Offload Image Decoding to a Web Worker in Clincoo",
   "desc": "How to move heavy image decoding to a Web Worker so the Clincoo UI does not freeze.",
   "content": "<p class=\"mb-4\">Decoding a large image on the main thread causes jank. Move it to a worker.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Send the blob to the worker</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> worker.postMessage({ blob }); in the worker use createImageBitmap or OffscreenCanvas if available.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Return the result</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> receive the ImageBitmap and draw it to canvas. The UI stays responsive. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — createImageBitmap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/createImageBitmap",
   "sourceSnippet": "createImageBitmap can be used in workers to decode images off the main thread.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();
