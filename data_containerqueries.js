// Clincoo Docs — kategori Container Queries (12 Oktober 2026, 08:00 WIB) — tambah 5 artikel sampai mendekati full 12
// Clincoo Docs — kategori Container Queries (12 Oktober 2026, 07:00 WIB) — 4 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["container-queries"] = {
 "names": { "id": "Container Queries", "en": "Container Queries" },
 "articles": [
{
 "id": "container-queries-dasar-container-type",
 "langs": {
  "id": {
   "title": "Cara Aktifkan Container Type untuk Query di Clincoo",
   "desc": "Tata cara membuat elemen menjadi container agar bisa di-query berdasarkan ukurannya di proyek Clincoo.",
   "content": "<p class=\"mb-4\">Container queries memungkinkan style berubah berdasarkan ukuran parent, bukan viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container-type</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada parent tulis container-type: inline-size; agar anak bisa pakai @container.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Query di anak</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gunakan @container (min-width: 400px) { ... }. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS container queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Set container-type on an element to make it a query container for its descendants.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Enable Container Type for Queries in Clincoo",
   "desc": "How to turn an element into a container so styles can query its size in a Clincoo project.",
   "content": "<p class=\"mb-4\">Container queries let styles change based on the parent size instead of the viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container-type</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on the parent write container-type: inline-size; so children can use @container.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Query in children</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use @container (min-width: 400px) { ... }. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS container queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Set container-type on an element to make it a query container for its descendants.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "container-queries-container-name",
 "langs": {
  "id": {
   "title": "Cara Beri Nama Container untuk Query Spesifik di Clincoo",
   "desc": "Tata cara memberi container-name agar bisa menargetkan container tertentu dengan @container name.",
   "content": "<p class=\"mb-4\">Nama container membantu membedakan beberapa container di halaman yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container-name</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan container-name: sidebar; bersama container-type.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Query dengan nama</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tulis @container sidebar (min-width: 300px) { ... }. Dokumentasikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — container-name",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-name",
   "sourceSnippet": "container-name gives a query container a name so it can be targeted specifically.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Name a Container for Specific Queries in Clincoo",
   "desc": "How to set container-name so you can target a particular container with @container name.",
   "content": "<p class=\"mb-4\">A container name helps distinguish several containers on the same page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container-name</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add container-name: sidebar; together with container-type.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Query by name</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> write @container sidebar (min-width: 300px) { ... }. Document it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — container-name",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-name",
   "sourceSnippet": "container-name gives a query container a name so it can be targeted specifically.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "container-queries-style-queries",
 "langs": {
  "id": {
   "title": "Cara Pakai Style Queries untuk Container di Clincoo",
   "desc": "Tata cara menggunakan style queries untuk bereaksi terhadap nilai custom property di container Clincoo.",
   "content": "<p class=\"mb-4\">Style queries memungkinkan query berdasarkan nilai style, bukan hanya ukuran.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set custom property</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada container set --theme: dark; lalu @container style(--theme: dark) { ... }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji perubahan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah nilai --theme dan lihat style berubah. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Container style queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries",
   "sourceSnippet": "Style queries let you query the computed value of custom properties on a container.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Style Queries for Containers in Clincoo",
   "desc": "How to use style queries to react to custom property values on a Clincoo container.",
   "content": "<p class=\"mb-4\">Style queries allow querying based on style values, not only size.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set the custom property</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on the container set --theme: dark; then @container style(--theme: dark) { ... }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the change</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change the --theme value and watch the style update. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Container style queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries",
   "sourceSnippet": "Style queries let you query the computed value of custom properties on a container.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "container-queries-fallback-tanpa-dukungan",
 "langs": {
  "id": {
   "title": "Cara Buat Fallback untuk Browser Tanpa Container Queries di Clincoo",
   "desc": "Tata cara menyediakan style cadangan agar layout tetap baik di browser yang belum mendukung container queries.",
   "content": "<p class=\"mb-4\">Tidak semua browser mendukung container queries, jadi butuh fallback.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Style dasar dulu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis style normal tanpa @container, lalu tambahkan query di atasnya untuk enhancement.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di browser lama</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cek di browser tanpa dukungan. Layout dasar harus tetap usable. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Can I use — CSS Container Queries",
   "sourceUrl": "https://caniuse.com/css-container-queries",
   "sourceSnippet": "Provide progressive enhancement with base styles outside container queries for older browsers.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Create a Fallback for Browsers Without Container Queries in Clincoo",
   "desc": "How to supply fallback styles so layout stays good in browsers that do not yet support container queries.",
   "content": "<p class=\"mb-4\">Not every browser supports container queries, so a fallback is needed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Base styles first</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write normal styles without @container, then add the query on top for enhancement.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in older browsers</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> check in a browser without support. The base layout should remain usable. Record it on <a href=\