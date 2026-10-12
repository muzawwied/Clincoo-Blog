// Clincoo Docs — kategori Container Queries (13 Oktober 2026, 00:00 WIB) — tambah 5 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["container-queries"] = {
 "names": { "id": "Container Queries", "en": "Container Queries" },
 "articles": [
{
 "id": "container-queries-dasar-container-type",
 "langs": {
  "id": {
   "title": "Cara Aktifkan Container Type Dasar di Clincoo",
   "desc": "Tata cara mengatur container-type agar elemen menjadi container query di proyek Clincoo.",
   "content": "<p class=\"mb-4\">Container Queries memungkinkan style berdasarkan ukuran container, bukan viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container-type</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan container-type: inline-size pada elemen parent yang ingin dijadikan container.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji query</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah lebar container dan lihat style anak berubah. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS Container Queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "The container-type property defines an element as a query container.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Enable Basic Container Type in Clincoo",
   "desc": "How to set container-type so an element becomes a query container in a Clincoo project.",
   "content": "<p class=\"mb-4\">Container Queries let styles depend on the container size, not the viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container-type</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add container-type: inline-size on the parent element you want as a container.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the query</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change the container width and see the child styles update. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS Container Queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "The container-type property defines an element as a query container.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "container-queries-query-vs-media-query",
 "langs": {
  "id": {
   "title": "Cara Bedakan Container Query dan Media Query di Clincoo",
   "desc": "Tata cara memilih container query atau media query sesuai kebutuhan layout Clincoo.",
   "content": "<p class=\"mb-4\">Media query bergantung pada viewport, container query pada ukuran elemen parent.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kapan pakai container</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> gunakan @container untuk komponen yang bisa ditaruh di berbagai lebar, seperti card di sidebar atau main.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kapan tetap media</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> media query masih berguna untuk layout global halaman. Catat pilihan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Container Queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Container queries are more flexible for component-based design than media queries.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Distinguish Container Queries from Media Queries in Clincoo",
   "desc": "How to choose container queries or media queries according to Clincoo layout needs.",
   "content": "<p class=\"mb-4\">Media queries depend on the viewport, container queries on the parent element size.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">When to use container</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use @container for components that can be placed in various widths, such as cards in sidebar or main.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">When to keep media</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> media queries are still useful for global page layout. Record the choice on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Container Queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Container queries are more flexible for component-based design than media queries.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "container-queries-style-berdasarkan-lebar",
 "langs": {
  "id": {
   "title": "Cara Style Berdasarkan Lebar Container di Clincoo",
   "desc": "Tata cara menulis @container untuk mengubah layout komponen saat lebar container berubah.",
   "content": "<p class=\"mb-4\">Dengan container query, card bisa menjadi horizontal atau vertikal tergantung ruang yang tersedia.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis query lebar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> gunakan @container (min-width: 400px) { .card { flex-direction: row; } }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di berbagai penempatan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> taruh komponen di sidebar sempit dan area lebar. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @container",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@container",
   "sourceSnippet": "The @container at-rule applies styles based on the size of a containment context.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Style Based on Container Width in Clincoo",
   "desc": "How to write @container to change a component layout when the container width changes.",
   "content": "<p class=\"mb-4\">With container queries, a card can become horizontal or vertical depending on available space.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write a width query</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use @container (min-width: 400px) { .card { flex-direction: row; } }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in different placements</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> place the component in a narrow sidebar and a wide area. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — @container",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/@container",
   "sourceSnippet": "The @container at-rule applies styles based on the size of a containment context.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "container-queries-named-containers",
 "langs": {
  "id": {
   "title": "Cara Pakai Named Containers di Clincoo",
   "desc": "Tata cara memberi nama container agar query lebih spesifik dan tidak bentrok.",
   "content": "<p class=\"mb-4\">Named containers membantu menarget query ke container tertentu saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri nama container</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set container-name: card-container; lalu gunakan @container card-container (min-width: 300px).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hindari bentrok</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan nama unik. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — container-name",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-name",
   "sourceSnippet": "The container-name property specifies a name for a query container.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Named Containers in Clincoo",
   "desc": "How to name containers so queries are more specific and do not conflict.",
   "content": "<p class=\"mb-4\">Named containers help target queries to a specific container only.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the container</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set container-name: card-container; then use @container card-container (min-width: 300px).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Avoid conflicts</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure names are unique. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — container-name",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-name",
   "sourceSnippet": "The container-name property specifies a name for a query container.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "container-queries-uji-di-devtools",
 "langs": {
  "id": {
   "title": "Cara Uji Container Queries di DevTools Clincoo",
   "desc": "Tata cara menggunakan Chrome DevTools untuk memeriksa dan men-debug container queries.",
   "content": "<p class=\"mb-4\">DevTools membantu melihat container mana yang aktif dan style yang diterapkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka panel Elements</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, pilih elemen, lihat badge container di Styles pane.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simulasikan ukuran</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah lebar dan lihat query yang match. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Container queries",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/container-queries",
   "sourceSnippet": "DevTools shows container query information in the Styles pane.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Test Container Queries in Clincoo DevTools",
   "desc": "How to use Chrome DevTools to inspect and debug container queries.",
   "content": "<p class=\"mb-4\">DevTools helps see which containers are active and which styles apply.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open the Elements panel</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, select the element, and look for the container badge in the Styles pane.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simulate sizes</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change the width and see matching queries. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Container queries",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/container-queries",
   "sourceSnippet": "DevTools shows container query information in the Styles pane.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ]
};
