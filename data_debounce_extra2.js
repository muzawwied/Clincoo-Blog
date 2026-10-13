// Clincoo Docs — tambah 1 artikel debounce (13 Oktober 2026, 21:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.debounce) return;
  var list = window.countryDataFiles.debounce.articles;
  list.push({
 "id": "debounce-cegah-klik-ganda-tombol",
 "langs": {
  "id": {
   "title": "Cara Debounce Klik Tombol agar Tidak Submit Ganda di Clincoo",
   "desc": "Tata cara mencegah double-click pada tombol submit dengan debounce atau disable sementara di Clincoo.",
   "content": "<p class=\"mb-4\">Klik ganda pada tombol submit bisa mengirim form dua kali.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Disable tombol saat proses</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada click, set button.disabled = true, lalu setelah fetch selesai enable kembali. Atau debounce 300 ms.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji klik cepat</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> klik cepat dua kali. Hanya satu permintaan yang berangkat. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — button disabled",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled",
   "sourceSnippet": "The disabled attribute prevents the button from being clicked.",
   "source2": "web.dev — INP",
   "source2Url": "https://web.dev/articles/optimize-inp",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debounce Button Clicks to Prevent Double Submit in Clincoo",
   "desc": "How to prevent double-clicks on a submit button with debounce or temporary disable in Clincoo.",
   "content": "<p class=\"mb-4\">A double-click on a submit button can send the form twice.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Disable the button during processing</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on click, set button.disabled = true, then re-enable after the fetch finishes. Or debounce for 300 ms.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test rapid clicks</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> click twice quickly. Only one request should leave. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — button disabled",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled",
   "sourceSnippet": "The disabled attribute prevents the button from being clicked.",
   "source2": "web.dev — INP",
   "source2Url": "https://web.dev/articles/optimize-inp",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
});
})();
