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
   "content": "<p class=\"mb-4\">Container queries memungkinkan style berubah berdasarkan ukuran parent, bukan viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container-type</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada parent tulis container-type: inline-size; agar anak bisa pakai @container.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Query di anak</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gunakan @container (min-width: 400px) { ... }. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">Not every browser supports container queries, so a fallback is needed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Base styles first</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write normal styles without @container, then add the query on top for enhancement.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in older browsers</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> check in a browser without support. The base layout should remain usable. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Can I use — CSS Container Queries",
   "sourceUrl": "https://caniuse.com/css-container-queries",
   "sourceSnippet": "Provide progressive enhancement with base styles outside container queries for older browsers.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "container-queries-size-vs-inline-size",
 "langs": {
  "id": {
   "title": "Cara Pilih Container Type Size atau Inline-Size di Clincoo",
   "desc": "Tata cara memilih antara container-type: size atau inline-size sesuai kebutuhan layout di Clincoo.",
   "content": "<p class=\"mb-4\">inline-size hanya mengukur lebar, size mengukur lebar dan tinggi. Pilih sesuai query yang dibutuhkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai inline-size untuk lebar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> gunakan container-type: inline-size; untuk komponen yang merespons lebar parent seperti kartu atau sidebar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai size untuk dua dimensi</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pakai container-type: size; jika perlu query tinggi juga. Catat pilihan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — container-type",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-type",
   "sourceSnippet": "inline-size makes the container queryable on the inline axis only; size allows both axes.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Choose Container Type Size or Inline-Size in Clincoo",
   "desc": "How to choose between container-type: size or inline-size based on layout needs in Clincoo.",
   "content": "<p class=\"mb-4\">inline-size only measures width, size measures width and height. Choose according to the queries you need.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use inline-size for width</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use container-type: inline-size; for components that respond to parent width such as cards or sidebars.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use size for both dimensions</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use container-type: size; if you also need height queries. Record the choice on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — container-type",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-type",
   "sourceSnippet": "inline-size makes the container queryable on the inline axis only; size allows both axes.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "container-queries-units-cqw-cqh",
 "langs": {
  "id": {
   "title": "Cara Pakai Unit Container Query (cqw, cqh) di Clincoo",
   "desc": "Tata cara menggunakan unit cqw dan cqh agar ukuran relatif terhadap container di Clincoo.",
   "content": "<p class=\"mb-4\">Unit cqw adalah 1% dari lebar container, cqh dari tinggi. Berguna untuk tipografi atau spacing yang skalabel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Terapkan unit di style</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> setelah set container-type, gunakan font-size: 5cqw; atau padding: 2cqh; di dalam @container.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji skalabilitas</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah ukuran container dan lihat elemen mengikuti. Dokumentasikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS container query length units",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units",
   "sourceSnippet": "cqw is 1% of the container's inline size, cqh is 1% of the block size.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Container Query Units (cqw, cqh) in Clincoo",
   "desc": "How to use cqw and cqh units so sizes are relative to the container in Clincoo.",
   "content": "<p class=\"mb-4\">The cqw unit is 1% of the container width, cqh of the height. Useful for scalable typography or spacing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Apply the units in styles</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> after setting container-type, use font-size: 5cqw; or padding: 2cqh; inside @container.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test scalability</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> resize the container and watch elements follow. Document it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS container query length units",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units",
   "sourceSnippet": "cqw is 1% of the container's inline size, cqh is 1% of the block size.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "container-queries-nested",
 "langs": {
  "id": {
   "title": "Cara Tangani Nested Container Queries di Clincoo",
   "desc": "Tata cara mengelola container queries yang bersarang agar tidak bentrok di layout Clincoo.",
   "content": "<p class=\"mb-4\">Nested containers bisa saling memengaruhi. Gunakan nama atau containment yang jelas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri nama pada setiap level</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set container-name berbeda untuk parent dan child, lalu query dengan nama spesifik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hindari query berlebihan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji layout bersarang. Pastikan style tidak override tak terduga. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Nested container queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Nested containers are possible; use container-name to target specific ones.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle Nested Container Queries in Clincoo",
   "desc": "How to manage nested container queries so they do not conflict in Clincoo layouts.",
   "content": "<p class=\"mb-4\">Nested containers can affect each other. Use clear names or containment.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name each level</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set different container-name for parent and child, then query by the specific name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Avoid excessive queries</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test the nested layout. Make sure styles do not override unexpectedly. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Nested container queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Nested containers are possible; use container-name to target specific ones.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "container-queries-debug",
 "langs": {
  "id": {
   "title": "Cara Debug Container Queries yang Tidak Aktif di Clincoo",
   "desc": "Tata cara menemukan penyebab container queries tidak bekerja di proyek Clincoo.",
   "content": "<p class=\"mb-4\">Jika style tidak berubah, periksa containment, dukungan browser, dan selector.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek container-type di DevTools</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, pastikan elemen parent memiliki container-type yang benar dan bukan display none.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Verifikasi dukungan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cek caniuse atau console. Pastikan query syntax benar. Catat temuan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Debugging container queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Check that the container has a valid container-type and the browser supports the feature.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug Container Queries That Do Not Activate in Clincoo",
   "desc": "How to find why container queries are not working in a Clincoo project.",
   "content": "<p class=\"mb-4\">If styles do not change, check containment, browser support, and the selector.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check container-type in DevTools</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, confirm the parent element has the correct container-type and is not display:none.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Verify support</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> check caniuse or the console. Make sure the query syntax is correct. Record findings on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Debugging container queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Check that the container has a valid container-type and the browser supports the feature.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "container-queries-card-component",
 "langs": {
  "id": {
   "title": "Cara Buat Komponen Card Responsif dengan Container Queries di Clincoo",
   "desc": "Tata cara membuat kartu yang mengubah layout berdasarkan lebar containernya sendiri di Clincoo.",
   "content": "<p class=\"mb-4\">Card bisa stack vertikal saat sempit dan horizontal saat lebar tanpa media query viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container pada wrapper</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada .card-wrapper set container-type: inline-size; lalu di dalam @container (min-width: 500px) ubah flex-direction.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di berbagai lebar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> resize parent dan lihat card beradaptasi. Simpan pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Practical container queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Use container queries for component-level responsive design independent of the viewport.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Build a Responsive Card Component with Container Queries in Clincoo",
   "desc": "How to make a card that changes layout based on its own container width in Clincoo.",
   "content": "<p class=\"mb-4\">A card can stack vertically when narrow and become horizontal when wide without viewport media queries.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set the container on the wrapper</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on .card-wrapper set container-type: inline-size; then inside @container (min-width: 500px) change flex-direction.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test at different widths</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> resize the parent and watch the card adapt. Save the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Practical container queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Use container queries for component-level responsive design independent of the viewport.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ]
};