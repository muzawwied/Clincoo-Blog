// Clincoo Docs — tambah 1 artikel fokus (13 Oktober 2026, 17:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.fokus) return;
  var list = window.countryDataFiles.fokus.articles;
  list.push({
    "id": "fokus-focus-within-untuk-form",
    "langs": {
      "id": {
        "title": "Cara Pakai :focus-within untuk Highlight Form di Clincoo",
        "desc": "Tata cara memakai :focus-within agar seluruh form atau fieldset ter-highlight saat salah satu input fokus di Clincoo.",
        "content": "<p class=\"mb-4\">:focus-within memudahkan pengguna melihat form yang sedang diisi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Style parent saat child fokus</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis form:focus-within { outline: 2px solid #3b82f6; } agar border form berubah saat input di dalamnya fokus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan Tab</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> Tab ke input, form harus ter-highlight. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
        "source": "MDN — :focus-within",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within",
        "sourceSnippet": ":focus-within matches an element if the element or any of its descendants are focused.",
        "source2": "CSS-Tricks — :focus-within",
        "source2Url": "https://css-tricks.com/almanac/selectors/f/focus-within/",
        "source3": "Clincoo Editor",
        "source3Url": "https://editor.clincoo.buzz/"
      },
      "en": {
        "title": "How to Use :focus-within to Highlight a Form in Clincoo",
        "desc": "How to use :focus-within so an entire form or fieldset is highlighted when one of its inputs is focused in Clincoo.",
        "content": "<p class=\"mb-4\">:focus-within helps users see which form they are filling.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Style the parent when a child is focused</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write form:focus-within { outline: 2px solid #3b82f6; } so the form border changes when an input inside is focused.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with Tab</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> Tab into an input; the form should be highlighted. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
        "source": "MDN — :focus-within",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within",
        "sourceSnippet": ":focus-within matches an element if the element or any of its descendants are focused.",
        "source2": "CSS-Tricks — :focus-within",
        "source2Url": "https://css-tricks.com/almanac/selectors/f/focus-within/",
        "source3": "Clincoo Editor",
        "source3Url": "https://editor.clincoo.buzz/"
      }
    }
  });
})();
