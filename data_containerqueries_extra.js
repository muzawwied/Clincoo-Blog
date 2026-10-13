// Clincoo Docs — tambah artikel container-queries (13 Oktober 2026)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles["container-queries"]) return;
  var list = window.countryDataFiles["container-queries"].articles;
  list.push({
 "id": "container-queries-nested-dan-grid",
 "langs": {
  "id": {
   "title": "Cara Gunakan Nested Container Queries dengan Grid di Clincoo",
   "desc": "Tata cara membuat nested container queries dan menggabungkannya dengan CSS Grid.",
   "content": "<p class=\"mb-4\">Container queries bisa di-nest untuk layout kompleks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container type pada parent</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan container-type: inline-size pada section, lalu juga pada card di dalamnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gabungkan dengan grid</h2><p class=\"mb-4\">Ubah grid-template-columns berdasarkan lebar container. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Container queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Container queries allow styles to be applied based on the size of a containing element.",
   "source2": "CSS-Tricks — Container Queries",
   "source2Url": "https://css-tricks.com/css-container-queries/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Nested Container Queries with Grid in Clincoo",
   "desc": "How to create nested container queries and combine them with CSS Grid.",
   "content": "<p class=\"mb-4\">Container queries can be nested for complex layouts.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container type on parent</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add container-type: inline-size on the section, then also on the card inside it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Combine with grid</h2><p class=\"mb-4\">Change grid-template-columns based on the container width. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Container queries",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "sourceSnippet": "Container queries allow styles to be applied based on the size of a containing element.",
   "source2": "CSS-Tricks — Container Queries",
   "source2Url": "https://css-tricks.com/css-container-queries/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
});
  list.push({
 "id": "container-queries-typography-fluid-cqw",
 "langs": {
  "id": {
   "title": "Cara Buat Typography Fluid dengan Unit cqw di Container Queries Clincoo",
   "desc": "Tata cara mengatur font-size menggunakan cqw agar teks menyesuaikan lebar container, bukan viewport.",
   "content": "<p class=\"mb-4\">Unit cqw membuat tipografi mengikuti ukuran container sehingga lebih konsisten di layout kompleks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container-type</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri container-type: inline-size pada parent, lalu gunakan font-size: clamp(1rem, 4cqw, 2rem).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di berbagai lebar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah ukuran container dan pastikan teks tidak overflow. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS container length units",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units",
   "sourceSnippet": "The cqw unit is 1% of the query container's width.",
   "source2": "CSS-Tricks — Container Queries",
   "source2Url": "https://css-tricks.com/css-container-queries/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Create Fluid Typography with cqw Units in Container Queries on Clincoo",
   "desc": "How to set font-size using cqw so text scales with the container width instead of the viewport.",
   "content": "<p class=\"mb-4\">The cqw unit makes typography follow the container size for more consistent complex layouts.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container-type</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add container-type: inline-size on the parent, then use font-size: clamp(1rem, 4cqw, 2rem).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test at various widths</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> resize the container and ensure text does not overflow. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS container length units",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units",
   "sourceSnippet": "The cqw unit is 1% of the query container's width.",
   "source2": "CSS-Tricks — Container Queries",
   "source2Url": "https://css-tricks.com/css-container-queries/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
});
  list.push({
 "id": "container-queries-debug-not-triggering",
 "langs": {
  "id": {
   "title": "Cara Debug Container Query yang Tidak Terpicu di DevTools Clincoo",
   "desc": "Tata cara memeriksa mengapa @container tidak aktif menggunakan panel Styles dan Computed di DevTools.",
   "content": "<p class=\"mb-4\">Jika style @container tidak muncul, biasanya karena container-type belum diset atau containment tidak terpenuhi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek container-type</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pastikan parent memiliki container-type: inline-size atau size.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Inspeksi di DevTools</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka DevTools, lihat apakah aturan @container muncul di Styles. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — CSS",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/",
   "sourceSnippet": "Use the Styles pane to inspect which CSS rules apply to an element.",
   "source2": "MDN — Container queries",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug Container Queries That Are Not Triggering in DevTools on Clincoo",
   "desc": "How to check why an @container rule is not applying using the Styles and Computed panels in DevTools.",
   "content": "<p class=\"mb-4\">If an @container style does not appear, it is usually because container-type is missing or containment is not satisfied.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check container-type</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> make sure the parent has container-type: inline-size or size.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Inspect in DevTools</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open DevTools and see if the @container rule appears in Styles. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — CSS",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/",
   "sourceSnippet": "Use the Styles pane to inspect which CSS rules apply to an element.",
   "source2": "MDN — Container queries",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
});
  list.push({
 "id": "container-queries-flexbox-card-responsive",
 "langs": {
  "id": {
   "title": "Cara Kombinasikan Container Queries dengan Flexbox untuk Card Responsive di Clincoo",
   "desc": "Tata cara membuat card yang mengubah layout flex berdasarkan lebar container sendiri.",
   "content": "<p class=\"mb-4\">Container queries + flexbox memungkinkan card menyesuaikan diri tanpa bergantung pada media query viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Definisikan container</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set container-type: inline-size pada .card, lalu @container (min-width: 400px) { .card { flex-direction: row; } }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji isolasi</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> letakkan beberapa card dengan lebar berbeda dan lihat masing-masing berubah sendiri. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Flexbox",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
   "sourceSnippet": "The CSS Flexible Box Layout Module allows the layout of items in a container.",
   "source2": "CSS-Tricks — A Complete Guide to Flexbox",
   "source2Url": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Combine Container Queries with Flexbox for Responsive Cards in Clincoo",
   "desc": "How to make a card change its flex layout based on its own container width.",
   "content": "<p class=\"mb-4\">Container queries + flexbox let cards adapt independently of viewport media queries.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Define the container</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set container-type: inline-size on .card, then @container (min-width: 400px) { .card { flex-direction: row; } }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test isolation</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> place several cards of different widths and watch each adapt on its own. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Flexbox",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
   "sourceSnippet": "The CSS Flexible Box Layout Module allows the layout of items in a container.",
   "source2": "CSS-Tricks — A Complete Guide to Flexbox",
   "source2Url": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
});
})();
