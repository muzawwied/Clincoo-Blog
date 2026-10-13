// Clincoo Docs — tambah artikel container-queries (13 Oktober 2026)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles['container-queries']) return;
  var list = window.countryDataFiles['container-queries'].articles;
  list.push({
 "id": "container-queries-unit-cq",
 "langs": {
  "id": {
   "title": "Cara Pakai Unit cqw dan cqh di Container Queries Clincoo",
   "desc": "Tata cara memakai unit container query width dan height agar ukuran elemen mengikuti container, bukan viewport.",
   "content": "<p class=\"mb-4\">Unit cqw dan cqh membuat ukuran relatif terhadap container query, bukan viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai cqw untuk lebar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set width: 50cqw pada anak container agar selalu 50% lebar container.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji perubahan container</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah lebar parent dan lihat elemen menyesuaikan. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS Container Query Units",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units",
   "sourceSnippet": "cqw and cqh are relative to the query container's width and height.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use cqw and cqh Units in Container Queries for Clincoo",
   "desc": "How to use container query width and height units so element sizes follow the container, not the viewport.",
   "content": "<p class=\"mb-4\">The cqw and cqh units make sizes relative to the query container, not the viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use cqw for width</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set width: 50cqw on a child of the container so it is always 50% of the container width.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test container changes</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> change the parent width and see the element adjust. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS Container Query Units",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units",
   "sourceSnippet": "cqw and cqh are relative to the query container's width and height.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
});
  list.push({
 "id": "container-queries-nested-dan-grid",
 "langs": {
  "id": {
   "title": "Cara Pakai Container Queries Bersarang dengan Grid di Clincoo",
   "desc": "Tata cara membuat container query di dalam container lain dan kombinasikan dengan CSS Grid.",
   "content": "<p class=\"mb-4\">Container queries bisa bersarang untuk layout kompleks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set container type pada parent</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan container-type: inline-size pada section, lalu pada card di dalamnya juga.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kombinasikan dengan grid</h2><p class=\"mb-4\">Ubah grid-template-columns berdasarkan lebar container. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
})();
