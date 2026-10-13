// Clincoo Docs — tambah 2 artikel fetch (13 Oktober 2026, 21:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.fetch) return;
  var list = window.countryDataFiles.fetch.articles;
  var extra = [
{
 "id": "fetch-gunakan-abortcontroller",
 "langs": {
  "id": {
   "title": "Cara Batalkan Permintaan Fetch dengan AbortController di Clincoo",
   "desc": "Tata cara memakai AbortController agar permintaan fetch bisa dibatalkan saat pengguna pindah halaman atau input berubah di Clincoo.",
   "content": "<p class=\"mb-4\">Permintaan fetch yang tidak dibatalkan bisa terus jalan dan menimpa hasil baru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat signal</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> const controller = new AbortController(); fetch(url, { signal: controller.signal }). Saat perlu batal, controller.abort().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tangkap AbortError</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> catch error.name === 'AbortError' dan abaikan. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — AbortController",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController",
   "sourceSnippet": "The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.",
   "source2": "MDN — Fetch signal",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/fetch#signal",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Cancel a Fetch Request with AbortController in Clincoo",
   "desc": "How to use AbortController so a fetch request can be canceled when the user navigates or the input changes in Clincoo.",
   "content": "<p class=\"mb-4\">An uncanceled fetch can keep running and overwrite newer results.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create the signal</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> const controller = new AbortController(); fetch(url, { signal: controller.signal }). When needed, controller.abort().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catch AbortError</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> catch error.name === 'AbortError' and ignore it. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — AbortController",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController",
   "sourceSnippet": "The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.",
   "source2": "MDN — Fetch signal",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/fetch#signal",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "fetch-set-timeout-dengan-abort",
 "langs": {
  "id": {
   "title": "Cara Set Timeout pada Fetch Menggunakan AbortController di Clincoo",
   "desc": "Tata cara membatasi waktu tunggu fetch agar tidak menggantung selamanya di Clincoo.",
   "content": "<p class=\"mb-4\">Fetch tidak punya timeout bawaan. Gunakan AbortController + setTimeout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Abort setelah 8 detik</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> const controller = new AbortController(); setTimeout(() => controller.abort(), 8000); fetch(url, { signal: controller.signal }).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tampilkan pesan timeout</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jika AbortError setelah timeout, tampilkan 'Permintaan terlalu lama'. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — AbortController",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController",
   "sourceSnippet": "You can use AbortController to implement a timeout for fetch.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set a Timeout on Fetch Using AbortController in Clincoo",
   "desc": "How to limit the wait time for a fetch so it does not hang forever in Clincoo.",
   "content": "<p class=\"mb-4\">Fetch has no built-in timeout. Use AbortController + setTimeout.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Abort after 8 seconds</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> const controller = new AbortController(); setTimeout(() => controller.abort(), 8000); fetch(url, { signal: controller.signal }).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Show a timeout message</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> if AbortError after the timeout, show 'Request took too long'. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — AbortController",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController",
   "sourceSnippet": "You can use AbortController to implement a timeout for fetch.",
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
