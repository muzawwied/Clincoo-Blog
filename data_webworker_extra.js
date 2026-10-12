// Clincoo Docs — tambah 1 artikel Web Worker (13 Oktober 2026, 02:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["web-worker"]) {
    window.countryDataFiles["web-worker"] = { "names": { "id": "Web Worker", "en": "Web Worker" }, "articles": [] };
  }
  var list = window.countryDataFiles["web-worker"].articles;
  var extra = [
{
 "id": "web-worker-type-module-untuk-import",
 "langs": {
  "id": {
   "title": "Cara Gunakan Web Worker Type Module untuk Import ES di Clincoo",
   "desc": "Tata cara membuat Web Worker dengan type module agar bisa import ES modules tanpa importScripts di proyek Clincoo.",
   "content": "<p class=\"mb-4\">Worker klasik butuh importScripts. Dengan type: 'module' Anda bisa pakai import statement.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat worker dengan type module</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> new Worker('worker.js', { type: 'module' }). Di dalam worker.js gunakan import { fn } from './util.js';.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pastikan server support</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan file di-serve dengan MIME benar. Uji di browser modern. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Worker",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker",
   "sourceSnippet": "The type option can be 'classic' or 'module'.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use a Module Type Web Worker for ES Imports in Clincoo",
   "desc": "How to create a Web Worker with type module so you can use ES import statements instead of importScripts in a Clincoo project.",
   "content": "<p class=\"mb-4\">Classic workers need importScripts. With type: 'module' you can use import statements.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create the worker with type module</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do new Worker('worker.js', { type: 'module' }). Inside worker.js use import { fn } from './util.js';.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ensure the server supports it</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure files are served with the correct MIME type. Test in a modern browser. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Worker",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker",
   "sourceSnippet": "The type option can be 'classic' or 'module'.",
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
