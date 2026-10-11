// Clincoo Docs — tambah 5 artikel DebugCSS (11 Oktober 2026, 22:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["debugcss"]) {
    window.countryDataFiles["debugcss"] = { "names": { "id": "Debug CSS", "en": "Debug CSS" }, "articles": [] };
  }
  var list = window.countryDataFiles["debugcss"].articles;
  var extra = [
{
 "id": "debugcss-grid-devtools",
 "langs": {
  "id": {
   "title": "Cara Debug CSS Grid di DevTools",
   "desc": "Tata cara memakai overlay Grid di Chrome DevTools untuk memeriksa track dan area di Clincoo.",
   "content": "<p class=\"mb-4\">Grid yang tidak sesuai sering karena track atau area salah. DevTools bisa menampilkan overlay.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aktifkan overlay Grid</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih elemen grid di Elements, lalu di panel Styles klik badge grid untuk menampilkan garis track.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Periksa area dan gap</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lihat apakah item duduk di area yang benar. Catat track yang salah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — CSS grid",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/grid",
   "sourceSnippet": "DevTools shows a grid overlay to inspect tracks, areas, and gaps.",
   "source2": "MDN — CSS Grid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug CSS Grid in DevTools",
   "desc": "How to use the Grid overlay in Chrome DevTools to inspect tracks and areas in Clincoo.",
   "content": "<p class=\"mb-4\">A grid that does not match is often due to wrong tracks or areas. DevTools can show an overlay.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable the Grid overlay</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the grid element in Elements, then in Styles click the grid badge to show track lines.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check areas and gap</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> see if items sit in the correct areas. Note wrong tracks on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — CSS grid",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/grid",
   "sourceSnippet": "DevTools shows a grid overlay to inspect tracks, areas, and gaps.",
   "source2": "MDN — CSS Grid",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "debugcss-flex-gap-devtools",
 "langs": {
  "id": {
   "title": "Cara Debug Gap Flexbox yang Tidak Sesuai",
   "desc": "Tata cara memeriksa gap dan alignment Flexbox di Clincoo menggunakan DevTools.",
   "content": "<p class=\"mb-4\">Gap Flexbox yang salah membuat jarak item tidak rata. DevTools membantu melihat computed gap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lihat computed gap</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih flex container, buka Computed, cari gap. Bandingkan dengan yang diharapkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan force state</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ubah sementara gap di Styles. Catat nilai yang benar di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — gap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "sourceSnippet": "The gap property sets the gap between flex or grid items.",
   "source2": "Chrome DevTools — Flexbox",
   "source2Url": "https://developer.chrome.com/docs/devtools/css/flexbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug Incorrect Flexbox Gap",
   "desc": "How to inspect Flexbox gap and alignment in Clincoo using DevTools.",
   "content": "<p class=\"mb-4\">Wrong Flexbox gap makes item spacing uneven. DevTools helps see the computed gap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">View computed gap</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the flex container, open Computed, and look for gap. Compare with the expected value.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with force state</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> temporarily change gap in Styles. Note the correct value on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — gap",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
   "sourceSnippet": "The gap property sets the gap between flex or grid items.",
   "source2": "Chrome DevTools — Flexbox",
   "source2Url": "https://developer.chrome.com/docs/devtools/css/flexbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "debugcss-color-computed",
 "langs": {
  "id": {
   "title": "Cara Lihat Warna yang Menang di Computed",
   "desc": "Tata cara memakai tab Computed untuk menemukan nilai warna akhir di Clincoo.",
   "content": "<p class=\"mb-4\">Warna yang tampil sering berbeda dari yang ditulis karena cascade. Computed menunjukkan hasil akhir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka Computed warna</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih elemen, buka Computed, cari color atau background-color. Klik untuk melihat sumber.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan dengan desain</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan kontras cukup. Catat nilai akhir di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Computed styles",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/reference#computed",
   "sourceSnippet": "The Computed tab shows the final computed color values.",
   "source2": "MDN — color",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to See the Winning Color in Computed",
   "desc": "How to use the Computed tab to find the final color value in Clincoo.",
   "content": "<p class=\"mb-4\">The displayed color often differs from what was written because of the cascade. Computed shows the final result.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open Computed color</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select the element, open Computed, and look for color or background-color. Click to see the source.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare with design</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm contrast is sufficient. Note the final value on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Computed styles",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/reference#computed",
   "sourceSnippet": "The Computed tab shows the final computed color values.",
   "source2": "MDN — color",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "debugcss-transition-not-running",
 "langs": {
  "id": {
   "title": "Cara Debug Transition yang Tidak Jalan",
   "desc": "Tata cara menemukan penyebab transition CSS Clincoo tidak beranimasi.",
   "content": "<p class=\"mb-4\">Transition yang diam sering karena properti yang berubah tidak termasuk dalam daftar atau durasi 0.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Periksa transition property</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> lihat Styles untuk transition-property dan duration. Pastikan properti yang berubah ada di daftar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di Animations panel</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka panel Animations dan picu perubahan. Catat penyebab di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS transitions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions",
   "sourceSnippet": "Transitions animate changes to CSS properties over a duration.",
   "source2": "Chrome DevTools — Animations",
   "source2Url": "https://developer.chrome.com/docs/devtools/css/animations",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Transition That Does Not Run",
   "desc": "How to find why a Clincoo CSS transition does not animate.",
   "content": "<p class=\"mb-4\">A still transition is often because the changed property is not in the list or the duration is 0.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the transition property</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> look in Styles for transition-property and duration. Make sure the changed property is listed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in the Animations panel</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the Animations panel and trigger the change. Note the cause on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS transitions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions",
   "sourceSnippet": "Transitions animate changes to CSS properties over a duration.",
   "source2": "Chrome DevTools — Animations",
   "source2Url": "https://developer.chrome.com/docs/devtools/css/animations",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "debugcss-applied-vs-authored",
 "langs": {
  "id": {
   "title": "Cara Bedakan Applied Styles dan Authored Styles",
   "desc": "Tata cara membedakan gaya yang ditulis dan gaya yang diterapkan di DevTools Clincoo.",
   "content": "<p class=\"mb-4\">Styles panel menampilkan aturan authored, Computed menampilkan nilai applied akhir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan kedua tab</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> lihat Styles untuk sumber, lalu Computed untuk nilai akhir setelah cascade dan inheritance.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cari yang di-overridden</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> perhatikan garis coret pada aturan yang kalah. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Styles pane",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/reference",
   "sourceSnippet": "The Styles pane shows authored rules; Computed shows the final applied values.",
   "source2": "MDN — Cascade",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Distinguish Applied Styles from Authored Styles",
   "desc": "How to tell authored styles from applied styles in Clincoo DevTools.",
   "content": "<p class=\"mb-4\">The Styles pane shows authored rules; Computed shows the final applied value after cascade and inheritance.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare both tabs</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> look at Styles for the source, then Computed for the final value.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Find overridden rules</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> notice struck-through rules that lost. Note them on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Styles pane",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/css/reference",
   "sourceSnippet": "The Styles pane shows authored rules; Computed shows the final applied values.",
   "source2": "MDN — Cascade",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();
