// Clincoo Docs — kategori Struktur (11 Oktober 2026, 16:00 WIB) — 5 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["struktur"] = {
 "names": { "id": "Struktur", "en": "Structure" },
 "articles": [
{
 "id": "struktur-organisir-folder-komponen",
 "langs": {
  "id": {
   "title": "Cara Mengorganisir Folder Komponen di Proyek Clincoo",
   "desc": "Tata cara menyusun folder komponen agar mudah dicari dan dipelihara di editor Clincoo.",
   "content": "<p class=\"mb-4\">Folder komponen yang rapi mempercepat pencarian dan mengurangi konflik saat kolaborasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kelompokkan berdasarkan fitur</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat subfolder seperti components/ui, components/layout, components/form. Setiap komponen punya file sendiri plus index jika perlu export.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hindari folder terlalu dalam</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan kedalaman tidak lebih dari 4 tingkat. Catat struktur final di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — File and directory entries API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API",
   "sourceSnippet": "Organize files into logical directories for better maintainability.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Organize the Components Folder in a Clincoo Project",
   "desc": "How to structure the components folder so it is easy to find and maintain in the Clincoo editor.",
   "content": "<p class=\"mb-4\">A tidy components folder speeds up search and reduces conflicts during collaboration.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Group by feature</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create subfolders such as components/ui, components/layout, components/form. Each component has its own file plus an index if export is needed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Avoid overly deep folders</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> keep depth to no more than 4 levels. Record the final structure on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — File and directory entries API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API",
   "sourceSnippet": "Organize files into logical directories for better maintainability.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "struktur-pisahkan-public-dan-src",
 "langs": {
  "id": {
   "title": "Cara Memisahkan Folder Public dan Src",
   "desc": "Tata cara memisahkan aset statis di public dan kode sumber di src agar build Clincoo bersih.",
   "content": "<p class=\"mb-4\">Memisahkan public dan src mencegah file sumber ikut ter-deploy dan memudahkan cache.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Public untuk aset yang tidak diproses</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> letakkan favicon, robots.txt, dan gambar yang tidak dioptimasi di public/. Kode JS/CSS masuk src/.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Referensi relatif yang benar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan path dari public dimulai dengan /. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Static assets",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files",
   "sourceSnippet": "Keep static files separate from source code that needs processing.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Separate Public and Src Folders",
   "desc": "How to separate static assets in public and source code in src so the Clincoo build stays clean.",
   "content": "<p class=\"mb-4\">Separating public and src prevents source files from being deployed and simplifies caching.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Public for unprocessed assets</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> put favicon, robots.txt, and unoptimized images in public/. JS/CSS code goes into src/.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Correct relative references</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure paths from public start with /. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Static assets",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files",
   "sourceSnippet": "Keep static files separate from source code that needs processing.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "struktur-aset-gambar-optimal",
 "langs": {
  "id": {
   "title": "Struktur Folder untuk Asset Gambar yang Optimal",
   "desc": "Tata cara mengatur folder gambar dengan subfolder ukuran dan format agar optimasi Clincoo mudah.",
   "content": "<p class=\"mb-4\">Folder gambar yang terstruktur memudahkan lazy load dan responsive images.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Subfolder berdasarkan konteks</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat assets/images/hero, assets/images/icons, assets/images/content. Simpan versi WebP dan fallback.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nama file yang deskriptif</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gunakan nama seperti hero-home-1200.webp. Catat struktur di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Responsive images",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",
   "sourceSnippet": "Organize image assets by usage and provide multiple formats and sizes.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "Folder Structure for Optimal Image Assets",
   "desc": "How to arrange image folders with size and format subfolders so Clincoo optimization is easy.",
   "content": "<p class=\"mb-4\">A structured image folder makes lazy loading and responsive images simpler.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Subfolders by context</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create assets/images/hero, assets/images/icons, assets/images/content. Store WebP versions and fallbacks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Descriptive file names</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use names like hero-home-1200.webp. Record the structure on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Responsive images",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",
   "sourceSnippet": "Organize image assets by usage and provide multiple formats and sizes.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "struktur-css-modules-folder",
 "langs": {
  "id": {
   "title": "Cara Mengatur Folder untuk CSS Modules",
   "desc": "Tata cara menempatkan file CSS Modules dekat komponen agar scope Clincoo tetap bersih.",
   "content": "<p class=\"mb-4\">CSS Modules yang berada di samping komponen mengurangi nama kelas global yang bentrok.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu file CSS per komponen</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> letakkan Button.module.css di folder yang sama dengan Button.js. Import dengan style dari './Button.module.css'.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hindari CSS global berlebih</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> hanya reset dan variabel yang global. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_modules",
   "sourceSnippet": "CSS modules scope class names locally to the component.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Structure Folders for CSS Modules",
   "desc": "How to place CSS Modules files next to components so Clincoo scope stays clean.",
   "content": "<p class=\"mb-4\">CSS Modules placed beside components reduce colliding global class names.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One CSS file per component</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> place Button.module.css in the same folder as Button.js. Import with style from './Button.module.css'.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit global CSS</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> only reset and variables should be global. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_modules",
   "sourceSnippet": "CSS modules scope class names locally to the component.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "struktur-halaman-dinamis-folder",
 "langs": {
  "id": {
   "title": "Cara Menamai Folder untuk Halaman Dinamis",
   "desc": "Tata cara menamai folder route dinamis agar navigasi Clincoo konsisten dan SEO-friendly.",
   "content": "<p class=\"mb-4\">Nama folder yang jelas untuk halaman dinamis memudahkan routing dan dokumentasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gunakan parameter yang deskriptif</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat pages/blog/[slug] atau pages/product/[id]. Hindari nama generik seperti [param].</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dokumentasikan pola</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan setiap pola memiliki contoh. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — URL patterns",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API",
   "sourceSnippet": "Descriptive route folder names improve maintainability and SEO.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Name Folders for Dynamic Pages",
   "desc": "How to name dynamic route folders so Clincoo navigation stays consistent and SEO-friendly.",
   "content": "<p class=\"mb-4\">Clear folder names for dynamic pages make routing and documentation easier.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use descriptive parameters</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create pages/blog/[slug] or pages/product/[id]. Avoid generic names like [param].</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Document the pattern</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure every pattern has an example. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — URL patterns",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API",
   "sourceSnippet": "Descriptive route folder names improve maintainability and SEO.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ]
};
