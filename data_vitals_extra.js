// Clincoo Docs — tambah 5 artikel Vitals (11 Oktober 2026, 12:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["vitals"]) {
    window.countryDataFiles["vitals"] = { "names": { "id": "Vitals", "en": "Vitals" }, "articles": [] };
  }
  var list = window.countryDataFiles["vitals"].articles;
  var extra = [
{
 "id": "vitals-baca-lcp-element-di-devtools",
 "langs": {
  "id": {
   "title": "Cara Baca Elemen LCP di DevTools Performance",
   "desc": "Tata cara menemukan elemen yang menjadi Largest Contentful Paint di Clincoo.",
   "content": "<p class=\"mb-4\">LCP yang lambat sering disebabkan oleh elemen gambar atau teks besar yang dimuat terlambat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Rekam Performance dan cari LCP</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools Performance, rekam reload halaman. Di panel Experience atau Timings, klik marker LCP untuk melihat elemen yang diukur.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Optimasi elemen tersebut</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan gambar LCP punya width/height dan fetchpriority high. Catat elemennya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — LCP",
   "sourceUrl": "https://web.dev/articles/lcp",
   "sourceSnippet": "Largest Contentful Paint measures the render time of the largest image or text block visible in the viewport.",
   "source2": "Chrome DevTools — Performance",
   "source2Url": "https://developer.chrome.com/docs/devtools/performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read the LCP Element in DevTools Performance",
   "desc": "How to find the element that becomes Largest Contentful Paint in Clincoo.",
   "content": "<p class=\"mb-4\">Slow LCP is often caused by a large image or text element that loads late.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record Performance and find LCP</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools Performance, record a page reload. In the Experience or Timings panel, click the LCP marker to see the measured element.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Optimize that element</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ensure the LCP image has width/height and fetchpriority high. Record the element on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — LCP",
   "sourceUrl": "https://web.dev/articles/lcp",
   "sourceSnippet": "Largest Contentful Paint measures the render time of the largest image or text block visible in the viewport.",
   "source2": "Chrome DevTools — Performance",
   "source2Url": "https://developer.chrome.com/docs/devtools/performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "vitals-hindari-cls-dari-iklan",
 "langs": {
  "id": {
   "title": "Cara Hindari CLS dari Slot Iklan atau Embed",
   "desc": "Tata cara mereservasi ruang untuk iklan agar tidak menyebabkan layout shift di Clincoo.",
   "content": "<p class=\"mb-4\">Iklan atau embed yang muncul belakangan sering mendorong konten dan memicu CLS tinggi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reservasi tinggi slot</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri min-height atau aspect-ratio pada container iklan sebelum dimuat. Gunakan placeholder dengan ukuran yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur setelah deploy</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jalankan Lighthouse dan pastikan CLS di bawah 0.1. Dokumentasikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — CLS",
   "sourceUrl": "https://web.dev/articles/cls",
   "sourceSnippet": "Cumulative Layout Shift measures unexpected layout shifts that occur during the lifespan of the page.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid CLS from Ad Slots or Embeds",
   "desc": "How to reserve space for ads so they do not cause layout shift in Clincoo.",
   "content": "<p class=\"mb-4\">Ads or embeds that appear late often push content and trigger high CLS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reserve slot height</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> give min-height or aspect-ratio to the ad container before it loads. Use a placeholder of the same size.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure after deploy</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> run Lighthouse and ensure CLS is under 0.1. Document it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — CLS",
   "sourceUrl": "https://web.dev/articles/cls",
   "sourceSnippet": "Cumulative Layout Shift measures unexpected layout shifts that occur during the lifespan of the page.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "vitals-yield-main-thread-untuk-inp",
 "langs": {
  "id": {
   "title": "Cara Yield Main Thread agar INP Lebih Baik",
   "desc": "Tata cara memecah tugas panjang dengan scheduler.yield agar interaksi di Clincoo responsif.",
   "content": "<p class=\"mb-4\">Tugas JavaScript yang panjang memblokir main thread dan membuat INP tinggi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pecah dengan yield</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada loop berat, sisipkan await scheduler.yield() atau setTimeout(0) agar browser bisa menangani input pengguna.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur INP sebelum dan sesudah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gunakan console atau web-vitals library. Target INP di bawah 200 ms. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — INP",
   "sourceUrl": "https://web.dev/articles/inp",
   "sourceSnippet": "Interaction to Next Paint measures the latency of all user interactions with a page.",
   "source2": "MDN — scheduler.yield",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Scheduler/yield",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Yield the Main Thread for Better INP",
   "desc": "How to break up long tasks with scheduler.yield so interactions in Clincoo stay responsive.",
   "content": "<p class=\"mb-4\">Long JavaScript tasks block the main thread and make INP high.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Break with yield</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> inside heavy loops, insert await scheduler.yield() or setTimeout(0) so the browser can handle user input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure INP before and after</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use the console or the web-vitals library. Target INP under 200 ms. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — INP",
   "sourceUrl": "https://web.dev/articles/inp",
   "sourceSnippet": "Interaction to Next Paint measures the latency of all user interactions with a page.",
   "source2": "MDN — scheduler.yield",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Scheduler/yield",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "vitals-preload-gambar-lcp-priority",
 "langs": {
  "id": {
   "title": "Cara Preload Gambar LCP dengan Priority Hint",
   "desc": "Tata cara memprioritaskan muat gambar LCP di Clincoo dengan preload dan fetchpriority.",
   "content": "<p class=\"mb-4\">Gambar LCP yang tidak diprioritaskan menunggu resource lain selesai dimuat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambah link preload</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambah <link rel=\"preload\" as=\"image\" href=\"...\" fetchpriority=\"high\"> di head untuk gambar hero. Pada tag img juga set fetchpriority=\"high\".</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Verifikasi waterfall</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Network tab, lihat apakah gambar LCP dimulai lebih awal. Simpan screenshot di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Priority Hints",
   "sourceUrl": "https://web.dev/articles/priority-hints",
   "sourceSnippet": "Priority hints allow developers to indicate the relative importance of a resource.",
   "source2": "web.dev — Optimize LCP",
   "source2Url": "https://web.dev/articles/optimize-lcp",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Preload the LCP Image with Priority Hint",
   "desc": "How to prioritize loading the LCP image in Clincoo with preload and fetchpriority.",
   "content": "<p class=\"mb-4\">An LCP image that is not prioritized waits for other resources to finish loading.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add a preload link</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add <link rel=\"preload\" as=\"image\" href=\"...\" fetchpriority=\"high\"> in the head for the hero image. On the img tag also set fetchpriority=\"high\".</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Verify the waterfall</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the Network tab and see whether the LCP image starts earlier. Save the screenshot on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Priority Hints",
   "sourceUrl": "https://web.dev/articles/priority-hints",
   "sourceSnippet": "Priority hints allow developers to indicate the relative importance of a resource.",
   "source2": "web.dev — Optimize LCP",
   "source2Url": "https://web.dev/articles/optimize-lcp",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "vitals-hitung-cls-score-manual",
 "langs": {
  "id": {
   "title": "Cara Hitung CLS Score secara Manual di Console",
   "desc": "Tata cara menggunakan PerformanceObserver untuk layout-shift dan menghitung skor CLS di Clincoo.",
   "content": "<p class=\"mb-4\">Lighthouse memberi skor CLS, tetapi console memungkinkan Anda melihat setiap shift secara real-time.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang observer layout-shift</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat PerformanceObserver dengan type layout-shift. Akumulasi value dari entry yang hadRecentInput false. Log total CLS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan dengan Lighthouse</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> rekam interaksi pengguna biasa. Skor harus konsisten dengan laporan. Simpan log di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — CLS",
   "sourceUrl": "https://web.dev/articles/cls",
   "sourceSnippet": "Layout shifts can be observed with the Layout Instability API.",
   "source2": "MDN — LayoutShift",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Calculate CLS Score Manually in the Console",
   "desc": "How to use PerformanceObserver for layout-shift and compute the CLS score in Clincoo.",
   "content": "<p class=\"mb-4\">Lighthouse gives a CLS score, but the console lets you see every shift in real time.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Attach a layout-shift observer</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create a PerformanceObserver with type layout-shift. Accumulate the value from entries where hadRecentInput is false. Log the total CLS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare with Lighthouse</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> record normal user interactions. The score should match the report. Save the log on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — CLS",
   "sourceUrl": "https://web.dev/articles/cls",
   "sourceSnippet": "Layout shifts can be observed with the Layout Instability API.",
   "source2": "MDN — LayoutShift",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift",
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
