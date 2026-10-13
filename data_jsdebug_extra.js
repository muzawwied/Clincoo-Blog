// Clincoo Docs — tambah 1 artikel jsdebug (13 Oktober 2026, 06:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.jsdebug) return;
  var list = window.countryDataFiles.jsdebug.articles;
  list.push({
 "id": "jsdebug-gunakan-debugger-statement",
 "langs": {
  "id": {
   "title": "Cara Gunakan debugger Statement untuk Pause JS di Clincoo",
   "desc": "Tata cara menempatkan debugger statement di kode agar DevTools otomatis pause di titik tertentu saat debug di Clincoo.",
   "content": "<p class=\"mb-4\">debugger statement membuat browser pause ketika DevTools terbuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Taruh di titik curiga</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan debugger; di dalam fungsi yang bermasalah. Buka DevTools sebelum reload.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hapus setelah selesai</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan tidak ada debugger tersisa sebelum deploy. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — debugger",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger",
   "sourceSnippet": "The debugger statement invokes any available debugging functionality.",
   "source2": "Chrome DevTools — Breakpoints",
   "source2Url": "https://developer.chrome.com/docs/devtools/javascript/breakpoints/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use the debugger Statement to Pause JS in Clincoo",
   "desc": "How to place a debugger statement in code so DevTools automatically pauses at a specific point while debugging in Clincoo.",
   "content": "<p class=\"mb-4\">The debugger statement makes the browser pause when DevTools is open.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Place it at the suspicious point</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add debugger; inside the problematic function. Open DevTools before reloading.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove it when done</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure no debugger remains before deploy. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — debugger",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger",
   "sourceSnippet": "The debugger statement invokes any available debugging functionality.",
   "source2": "Chrome DevTools — Breakpoints",
   "source2Url": "https://developer.chrome.com/docs/devtools/javascript/breakpoints/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
});
  list.push({
 "id": "jsdebug-debug-unhandled-rejection",
 "langs": {
  "id": {
   "title": "Cara Debug Unhandled Promise Rejection di Clincoo",
   "desc": "Tata cara menemukan dan memperbaiki promise yang reject tanpa catch agar tidak muncul error di console Clincoo.",
   "content": "<p class=\"mb-4\">Unhandled rejection sering muncul sebagai error merah di console tanpa stack yang jelas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aktifkan break on exceptions</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools Sources, centang Pause on uncaught exceptions. Reload dan lihat titik reject.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambahkan catch atau .catch</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bungkus dengan try/catch atau .catch(err => console.error(err)). Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Promise rejection",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events",
   "sourceSnippet": "Unhandled promise rejections can be observed via the unhandledrejection event.",
   "source2": "Chrome DevTools — Pause on exceptions",
   "source2Url": "https://developer.chrome.com/docs/devtools/javascript/breakpoints/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug Unhandled Promise Rejection in Clincoo",
   "desc": "How to find and fix a promise that rejects without a catch so it does not show a console error in Clincoo.",
   "content": "<p class=\"mb-4\">An unhandled rejection often appears as a red console error without a clear stack.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable break on exceptions</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools Sources and check Pause on uncaught exceptions. Reload and see the rejection point.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add a catch or .catch</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> wrap with try/catch or .catch(err => console.error(err)). Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Promise rejection",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events",
   "sourceSnippet": "Unhandled promise rejections can be observed via the unhandledrejection event.",
   "source2": "Chrome DevTools — Pause on exceptions",
   "source2Url": "https://developer.chrome.com/docs/devtools/javascript/breakpoints/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
});
  list.push({
 "id": "jsdebug-gunakan-console-table",
 "langs": {
  "id": {
   "title": "Cara Gunakan console.table untuk Debug Array dan Objek di Clincoo",
   "desc": "Tata cara menampilkan array atau objek dalam bentuk tabel di console agar lebih mudah dibaca saat debug di Clincoo.",
   "content": "<p class=\"mb-4\">console.table menampilkan data dalam tabel yang rapi di DevTools.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Panggil di titik data</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan console.table(dataArray) setelah fetch atau loop.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan dengan log biasa</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lihat perbedaan keterbacaan. Hapus sebelum deploy. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console.table",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/table_static",
   "sourceSnippet": "The console.table() method displays tabular data as a table.",
   "source2": "Chrome DevTools — Console",
   "source2Url": "https://developer.chrome.com/docs/devtools/console/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use console.table to Debug Arrays and Objects in Clincoo",
   "desc": "How to display arrays or objects as a table in the console for easier reading while debugging in Clincoo.",
   "content": "<p class=\"mb-4\">console.table displays data as a neat table in DevTools.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Call it at the data point</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add console.table(dataArray) after a fetch or loop.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare with normal log</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> see the readability difference. Remove before deploy. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console.table",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/table_static",
   "sourceSnippet": "The console.table() method displays tabular data as a table.",
   "source2": "Chrome DevTools — Console",
   "source2Url": "https://developer.chrome.com/docs/devtools/console/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
});
  list.push({
 "id": "jsdebug-debug-event-listener",
 "langs": {
  "id": {
   "title": "Cara Debug Event Listener yang Tidak Terpanggil di Clincoo",
   "desc": "Tata cara memeriksa event listener yang terpasang dan kenapa tidak terpanggil saat klik atau submit di Clincoo.",
   "content": "<p class=\"mb-4\">Event listener yang tidak jalan sering karena elemen belum ada atau event salah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di Elements panel</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih elemen, buka Event Listeners panel di DevTools. Lihat apakah listener terdaftar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pastikan DOM ready</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bungkus dengan DOMContentLoaded jika perlu. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Event Listeners",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/dom/#event-listeners",
   "sourceSnippet": "The Event Listeners pane shows all event listeners registered on the selected node.",
   "source2": "MDN — addEventListener",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug an Event Listener That Does Not Fire in Clincoo",
   "desc": "How to check attached event listeners and why they do not fire on click or submit in Clincoo.",
   "content": "<p class=\"mb-4\">An event listener that does not run is often because the element does not exist yet or the event is wrong.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check in the Elements panel</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the element and open the Event Listeners pane in DevTools. See if the listener is registered.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ensure DOM ready</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> wrap with DOMContentLoaded if needed. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Event Listeners",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/dom/#event-listeners",
   "sourceSnippet": "The Event Listeners pane shows all event listeners registered on the selected node.",
   "source2": "MDN — addEventListener",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
});
})();
