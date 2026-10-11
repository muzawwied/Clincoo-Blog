// Clincoo Docs — tambah 5 artikel Struktur (11 Oktober 2026, 20:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.struktur) return;
  var list = window.countryDataFiles.struktur.articles;
  var extra = [
{
 "id": "struktur-folder-config-env",
 "langs": {
  "id": {
   "title": "Cara Memisahkan Folder Config dan Environment Variables",
   "desc": "Tata cara menempatkan file konfigurasi dan variabel lingkungan di folder khusus agar rahasia tidak ikut commit di Clincoo.",
   "content": "<p class=\"mb-4\">File config yang bercampur di root membuat rahasia mudah ter-commit dan sulit dikelola.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Folder config terpisah</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat folder config/ untuk file non-rahasia. Letakkan .env di root dan tambahkan ke .gitignore. Jangan commit kunci API.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dokumentasikan variabel yang dibutuhkan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buat .env.example dengan nama variabel tanpa nilai. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Environment variables",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction",
   "sourceSnippet": "Keep secrets out of source control and document required environment variables.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Separate Config and Environment Variables Folders",
   "desc": "How to place configuration files and environment variables in dedicated folders so secrets are not committed in Clincoo.",
   "content": "<p class=\"mb-4\">Config files mixed in the root make secrets easy to commit and hard to manage.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate config folder</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create a config/ folder for non-secret files. Put .env in the root and add it to .gitignore. Never commit API keys.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Document required variables</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> create .env.example with variable names without values. Record on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Environment variables",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction",
   "sourceSnippet": "Keep secrets out of source control and document required environment variables.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "struktur-folder-tests-terpisah",
 "langs": {
  "id": {
   "title": "Cara Buat Folder Tests Terpisah dari Source",
   "desc": "Tata cara menempatkan file uji di folder tests agar kode produksi Clincoo tetap bersih.",
   "content": "<p class=\"mb-4\">File uji yang bercampur di source membuat folder sulit dinavigasi dan bisa ikut ter-deploy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Folder tests di root atau mirror</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat folder tests/ atau __tests__/ yang mirror struktur src/. Jangan letakkan .test.js di samping file produksi jika tidak perlu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Exclude dari build</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan konfigurasi build mengabaikan folder tests. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Testing",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction",
   "sourceSnippet": "Keep test files separate from production source to maintain a clean project structure.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Create a Separate Tests Folder from Source",
   "desc": "How to place test files in a tests folder so Clincoo production code stays clean.",
   "content": "<p class=\"mb-4\">Test files mixed with source make the folder hard to navigate and can be deployed accidentally.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tests folder at root or mirrored</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create a tests/ or __tests__/ folder that mirrors the src/ structure. Do not place .test.js next to production files unless necessary.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Exclude from build</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure the build config ignores the tests folder. Record on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Testing",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction",
   "sourceSnippet": "Keep test files separate from production source to maintain a clean project structure.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "struktur-jaga-root-bersih",
 "langs": {
  "id": {
   "title": "Cara Jaga Root Folder Tetap Bersih",
   "desc": "Tata cara hanya menaruh file penting di root agar proyek Clincoo mudah dipahami.",
   "content": "<p class=\"mb-4\">Root yang penuh file sementara dan draf membuat orang baru sulit melihat struktur proyek.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hanya file konfigurasi di root</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> biarkan hanya package.json, README, .gitignore, dan index.html di root. Pindahkan draf ke folder drafts/.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hapus file yang tidak terpakai</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> secara berkala hapus file yang tidak direferensikan. Catat aturan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Project structure",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files",
   "sourceSnippet": "A clean root folder helps new developers understand the project quickly.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep the Root Folder Clean",
   "desc": "How to keep only essential files in the root so a Clincoo project is easy to understand.",
   "content": "<p class=\"mb-4\">A root full of temporary files and drafts makes it hard for newcomers to see the project structure.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Only config files in root</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> leave only package.json, README, .gitignore, and index.html in the root. Move drafts to a drafts/ folder.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove unused files</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> periodically delete unreferenced files. Record the rule on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Project structure",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files",
   "sourceSnippet": "A clean root folder helps new developers understand the project quickly.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "struktur-folder-shared-utils",
 "langs": {
  "id": {
   "title": "Cara Organisir Folder Utils dan Helpers Bersama",
   "desc": "Tata cara menempatkan fungsi utilitas di folder shared agar bisa dipakai ulang di Clincoo tanpa duplikasi.",
   "content": "<p class=\"mb-4\">Fungsi helper yang tersebar membuat perubahan harus dilakukan di banyak tempat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu folder utils</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat src/utils/ atau shared/utils/ untuk fungsi murni seperti formatDate, slugify, atau debounce. Export dari index.js.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hindari dependensi berat di utils</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> utils tidak boleh mengimpor komponen UI. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Shared utility modules reduce duplication and keep business logic separate from UI.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Organize a Shared Utils and Helpers Folder",
   "desc": "How to place utility functions in a shared folder so they can be reused in Clincoo without duplication.",
   "content": "<p class=\"mb-4\">Helper functions scattered around force changes to be made in many places.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One utils folder</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create src/utils/ or shared/utils/ for pure functions such as formatDate, slugify, or debounce. Export from index.js.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Avoid heavy dependencies in utils</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> utils should not import UI components. Record on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Shared utility modules reduce duplication and keep business logic separate from UI.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "struktur-index-export-per-folder",
 "langs": {
  "id": {
   "title": "Cara Gunakan Index File untuk Export dari Folder",
   "desc": "Tata cara membuat index.js di setiap folder agar import di Clincoo lebih pendek dan konsisten.",
   "content": "<p class=\"mb-4\">Import panjang dengan path dalam membuat kode sulit dibaca dan mudah salah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Index.js sebagai barrel</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat index.js di folder components/ yang mengekspor semua komponen. Import menjadi import { Button } from './components'.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hindari circular dependency</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan index tidak mengimpor balik ke file yang mengimpor index. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Import",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",
   "sourceSnippet": "Barrel index files simplify import paths and keep the public API of a folder clear.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use an Index File to Export from a Folder",
   "desc": "How to create an index.js in each folder so imports in Clincoo are shorter and consistent.",
   "content": "<p class=\"mb-4\">Long imports with deep paths make code hard to read and easy to get wrong.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Index.js as a barrel</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create index.js in the components/ folder that exports all components. The import becomes import { Button } from './components'.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Avoid circular dependencies</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure the index does not import back to a file that imports the index. Record on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Import",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",
   "sourceSnippet": "Barrel index files simplify import paths and keep the public API of a folder clear.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}

,{
 "id": "struktur-folder-api-dan-pages",
 "langs": {
  "id": {
   "title": "Cara Atur Folder API dan Pages di Proyek Clincoo",
   "desc": "Tata cara memisahkan folder api untuk endpoint dan pages untuk rute agar struktur proyek Clincoo tetap rapi.",
   "content": "<p class=\"mb-4\">Proyek Clincoo yang tumbuh butuh pemisahan jelas antara kode API dan halaman UI. Folder terpisah memudahkan navigasi di editor dan deploy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat folder</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat src/api/ untuk handler dan src/pages/ untuk komponen halaman. Index export dari masing-masing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Manfaat</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> build hanya mengambil yang diperlukan. Dokumentasikan konvensi di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Organize code into modules and folders for maintainability.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Organize API and Pages Folders in a Clincoo Project",
   "desc": "How to separate api folders for endpoints and pages for routes so the Clincoo project structure stays clean.",
   "content": "<p class=\"mb-4\">A growing Clincoo project needs a clear split between API code and UI pages. Separate folders make navigation in the editor and deploy easier.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create the folders</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create src/api/ for handlers and src/pages/ for page components. Export an index from each.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Benefits</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> the build only pulls what is needed. Document the convention on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Organize code into modules and folders for maintainability.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();
