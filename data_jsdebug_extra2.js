// Clincoo Docs — tambah 3 artikel jsdebug (13 Oktober 2026, 10:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.jsdebug) return;
  var list = window.countryDataFiles.jsdebug.articles;
  list.push({
 "id": "jsdebug-step-over-into-out",
 "langs": {
  "id": {
   "title": "Cara Step Over, Into, dan Out di DevTools untuk Debug JS Clincoo",
   "desc": "Tata cara memakai tombol step over, step into, dan step out saat breakpoint aktif agar bisa menelusuri alur kode JavaScript di Clincoo.",
   "content": "<p class=\"mb-4\">Tombol step di DevTools memungkinkan Anda bergerak baris demi baris tanpa menebak alur.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai Step Over</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> saat paused, tekan Step Over (F10) untuk menjalankan baris saat ini tanpa masuk ke fungsi yang dipanggil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Masuk dengan Step Into</h2><p class=\"mb-4\">Step Into (F11) masuk ke dalam fungsi. Step Out (Shift+F11) keluar dari fungsi saat ini. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji pada fungsi bersarang. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Step through code",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/javascript/reference/#stepping",
   "sourceSnippet": "The debugger lets you step through your code line by line.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Step Over, Into, and Out in DevTools for JS Debugging in Clincoo",
   "desc": "How to use the step over, step into, and step out buttons while a breakpoint is active to trace JavaScript flow in Clincoo.",
   "content": "<p class=\"mb-4\">The step buttons in DevTools let you move line by line without guessing the flow.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use Step Over</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> when paused, press Step Over (F10) to run the current line without entering the called function.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enter with Step Into</h2><p class=\"mb-4\">Step Into (F11) enters the function. Step Out (Shift+F11) exits the current function. On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test on nested functions. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Step through code",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/javascript/reference/#stepping",
   "sourceSnippet": "The debugger lets you step through your code line by line.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
});
  list.push({
 "id": "jsdebug-blackbox-library-scripts",
 "langs": {
  "id": {
   "title": "Cara Blackbox Library Scripts agar Tidak Pause di Library",
   "desc": "Tata cara mengaktifkan blackboxing di DevTools supaya breakpoint tidak berhenti di dalam kode library saat debug proyek Clincoo.",
   "content": "<p class=\"mb-4\">Pause di dalam library membuat alur aplikasi sulit diikuti.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aktifkan blackbox</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools Settings > Blackboxing, tambahkan pola seperti node_modules atau vendor.js.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji step into</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> step into tidak masuk ke library. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Blackbox scripts",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/javascript/reference/#blackbox",
   "sourceSnippet": "Blackbox scripts to skip them when stepping through code.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Blackbox Library Scripts so the Debugger Does Not Pause in Them",
   "desc": "How to enable blackboxing in DevTools so breakpoints do not stop inside library code while debugging a Clincoo project.",
   "content": "<p class=\"mb-4\">Pausing inside a library makes the application flow hard to follow.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable blackbox</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools Settings > Blackboxing and add patterns such as node_modules or vendor.js.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test step into</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> step into no longer enters the library. Note the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Blackbox scripts",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/javascript/reference/#blackbox",
   "sourceSnippet": "Blackbox scripts to skip them when stepping through code.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
});
  list.push({
 "id": "jsdebug-pretty-print-minified",
 "langs": {
  "id": {
   "title": "Cara Pretty Print Kode Minified di DevTools untuk Debug Clincoo",
   "desc": "Tata cara memformat ulang kode yang diminify agar bisa dibaca dan dipasang breakpoint di DevTools saat debug proyek Clincoo.",
   "content": "<p class=\"mb-4\">Kode minified sulit dibaca dan sulit dipasang breakpoint yang tepat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Klik Pretty print</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka file minified di Sources, klik ikon {} Pretty print di pojok kiri bawah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang breakpoint di versi rapi</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> breakpoint di versi pretty print tetap berfungsi. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Pretty print",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/javascript/reference/#pretty-print",
   "sourceSnippet": "Pretty-print minified code to make it readable.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Pretty Print Minified Code in DevTools for Clincoo Debugging",
   "desc": "How to reformat minified code so it is readable and you can set breakpoints in DevTools while debugging a Clincoo project.",
   "content": "<p class=\"mb-4\">Minified code is hard to read and hard to set precise breakpoints on.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Click Pretty print</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the minified file in Sources and click the {} Pretty print icon at the bottom left.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set breakpoints on the clean version</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> breakpoints on the pretty-printed version still work. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Pretty print",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/javascript/reference/#pretty-print",
   "sourceSnippet": "Pretty-print minified code to make it readable.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
});
})();
