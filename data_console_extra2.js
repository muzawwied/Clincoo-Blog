// Clincoo Docs — tambah 2 artikel console (13 Oktober 2026, 17:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.console) return;
  var list = window.countryDataFiles.console.articles;
  list.push({
    "id": "console-gunakan-console-table",
    "langs": {
      "id": {
        "title": "Cara Gunakan console.table untuk Tampilkan Array/Objek di Clincoo",
        "desc": "Tata cara memakai console.table agar data array atau objek tampil sebagai tabel yang mudah dibaca di konsol saat debug Clincoo.",
        "content": "<p class=\"mb-4\">console.log biasa membuat objek bersarang sulit dibaca. console.table menampilkan sebagai tabel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Panggil console.table</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis console.table(arrayOfObjects); atau console.table(obj, ['key1','key2']); untuk kolom tertentu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lihat di konsol</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tabel bisa diurut. Hapus sebelum deploy. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
        "source": "MDN — console.table",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/table_static",
        "sourceSnippet": "The console.table() method displays tabular data as a table.",
        "source2": "Chrome DevTools — Console",
        "source2Url": "https://developer.chrome.com/docs/devtools/console/",
        "source3": "Clincoo Editor",
        "source3Url": "https://editor.clincoo.buzz/"
      },
      "en": {
        "title": "How to Use console.table to Display Arrays/Objects in Clincoo",
        "desc": "How to use console.table so array or object data appears as an easy-to-read table in the console while debugging Clincoo.",
        "content": "<p class=\"mb-4\">Plain console.log makes nested objects hard to read. console.table shows them as a table.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Call console.table</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write console.table(arrayOfObjects); or console.table(obj, ['key1','key2']); for specific columns.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">See it in the console</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> the table can be sorted. Remove before deploy. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
        "source": "MDN — console.table",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/table_static",
        "sourceSnippet": "The console.table() method displays tabular data as a table.",
        "source2": "Chrome DevTools — Console",
        "source2Url": "https://developer.chrome.com/docs/devtools/console/",
        "source3": "Clincoo Editor",
        "source3Url": "https://editor.clincoo.buzz/"
      }
    }
  },
  {
    "id": "console-gunakan-console-time",
    "langs": {
      "id": {
        "title": "Cara Ukur Waktu Eksekusi dengan console.time di Clincoo",
        "desc": "Tata cara memakai console.time dan console.timeEnd untuk mengukur berapa lama sebuah fungsi berjalan saat debug performa di Clincoo.",
        "content": "<p class=\"mb-4\">console.time membantu menemukan bagian kode yang lambat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mulai dan akhiri timer</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis console.time('fetch'); sebelum operasi, lalu console.timeEnd('fetch'); setelahnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lihat durasi di konsol</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> konsol menampilkan milidetik. Hapus timer sebelum deploy. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
        "source": "MDN — console.time",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/time_static",
        "sourceSnippet": "The console.time() method starts a timer you can use to track how long an operation takes.",
        "source2": "Chrome DevTools — Console",
        "source2Url": "https://developer.chrome.com/docs/devtools/console/",
        "source3": "Clincoo Editor",
        "source3Url": "https://editor.clincoo.buzz/"
      },
      "en": {
        "title": "How to Measure Execution Time with console.time in Clincoo",
        "desc": "How to use console.time and console.timeEnd to measure how long a function takes while debugging performance in Clincoo.",
        "content": "<p class=\"mb-4\">console.time helps find slow parts of the code.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Start and end the timer</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write console.time('fetch'); before the operation, then console.timeEnd('fetch'); after it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">See the duration in the console</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> the console shows milliseconds. Remove the timer before deploy. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
        "source": "MDN — console.time",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/time_static",
        "sourceSnippet": "The console.time() method starts a timer you can use to track how long an operation takes.",
        "source2": "Chrome DevTools — Console",
        "source2Url": "https://developer.chrome.com/docs/devtools/console/",
        "source3": "Clincoo Editor",
        "source3Url": "https://editor.clincoo.buzz/"
      }
    }
  });
})();
