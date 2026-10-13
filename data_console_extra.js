// Clincoo Docs — tambah 1 artikel console (13 Oktober 2026, 10:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.console) return;
  var list = window.countryDataFiles.console.articles;
  list.push({
 "id": "console-gunakan-console-group",
 "langs": {
  "id": {
   "title": "Cara Gunakan console.group untuk Mengelompokkan Log di Clincoo",
   "desc": "Tata cara memakai console.group dan console.groupEnd agar log terkait dikelompokkan dan lebih mudah dibaca di konsol saat debug Clincoo.",
   "content": "<p class=\"mb-4\">Log yang banyak tanpa kelompok membuat konsol berantakan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka dan tutup group</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis console.group('fetch data'); lalu beberapa console.log; lalu console.groupEnd();</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lihat di konsol</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> group bisa dilipat. Hapus sebelum deploy. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console.group",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/group_static",
   "sourceSnippet": "The console.group() method creates a new inline group in the console.",
   "source2": "Chrome DevTools — Console",
   "source2Url": "https://developer.chrome.com/docs/devtools/console/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use console.group to Group Logs in Clincoo",
   "desc": "How to use console.group and console.groupEnd so related logs are grouped and easier to read in the console while debugging Clincoo.",
   "content": "<p class=\"mb-4\">Many ungrouped logs make the console messy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open and close the group</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write console.group('fetch data'); then several console.log; then console.groupEnd();</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">See it in the console</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> the group can be collapsed. Remove before deploy. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console.group",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/group_static",
   "sourceSnippet": "The console.group() method creates a new inline group in the console.",
   "source2": "Chrome DevTools — Console",
   "source2Url": "https://developer.chrome.com/docs/devtools/console/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
});
})();
