// Clincoo Docs — kategori TypeScript (12 Oktober 2026, 00:00 WIB — tambah 5 artikel)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["typescript"] = {
 "names": { "id": "TypeScript", "en": "TypeScript" },
 "articles": [
{
 "id": "typescript-tambah-ke-proyek-clincoo",
 "langs": {
  "id": {
   "title": "Cara Menambahkan TypeScript ke Proyek Clincoo",
   "desc": "Tata cara mengaktifkan TypeScript di proyek baru atau yang sudah ada di editor Clincoo.",
   "content": "<p class=\"mb-4\">TypeScript membantu menangkap kesalahan lebih awal sebelum kode dijalankan di browser.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Instalasi dan rename file</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> instal typescript sebagai devDependency lalu ubah ekstensi .js menjadi .ts atau .tsx untuk komponen. Jalankan tsc --init untuk membuat tsconfig.json.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sesuaikan build script</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan script build memanggil tsc atau gunakan loader yang mendukung TS. Dokumentasikan langkah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Installation",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/compiler-options.html",
   "sourceSnippet": "Initialize a tsconfig.json and rename files to .ts to start using TypeScript.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Add TypeScript to a Clincoo Project",
   "desc": "How to enable TypeScript in a new or existing project inside the Clincoo editor.",
   "content": "<p class=\"mb-4\">TypeScript helps catch errors earlier before the code runs in the browser.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Installation and file rename</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> install typescript as a devDependency then change .js extensions to .ts or .tsx for components. Run tsc --init to create tsconfig.json.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Adjust the build script</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure the build script calls tsc or uses a loader that supports TS. Document the steps on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Installation",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/compiler-options.html",
   "sourceSnippet": "Initialize a tsconfig.json and rename files to .ts to start using TypeScript.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "typescript-interface-vs-type",
 "langs": {
  "id": {
   "title": "Cara Memilih Interface atau Type di TypeScript untuk Clincoo",
   "desc": "Tata cara memutuskan kapan memakai interface dan kapan memakai type alias di proyek Clincoo.",
   "content": "<p class=\"mb-4\">Baik interface maupun type bisa mendefinisikan bentuk objek, namun keduanya punya perbedaan kecil yang berguna.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gunakan interface untuk objek yang bisa di-extend</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih interface jika Anda ingin deklarasi merging atau inheritance yang jelas untuk props komponen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Type alias untuk union dan mapped types</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pakai type untuk union types atau utility types yang kompleks. Catat pilihan Anda di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Interfaces vs Type Aliases",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
   "sourceSnippet": "Interfaces and type aliases are very similar, with small differences in declaration merging and error messages.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Choose Between Interface and Type in TypeScript for Clincoo",
   "desc": "How to decide when to use an interface versus a type alias in a Clincoo project.",
   "content": "<p class=\"mb-4\">Both interfaces and types can describe object shapes, but they have small useful differences.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use interface for objects that can be extended</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> choose interface when you want declaration merging or clear inheritance for component props.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Type aliases for unions and mapped types</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use type for union types or complex utility types. Record your choice on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Interfaces vs Type Aliases",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
   "sourceSnippet": "Interfaces and type aliases are very similar, with small differences in declaration merging and error messages.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "typescript-hindari-any",
 "langs": {
  "id": {
   "title": "Cara Menghindari Tipe Any di Proyek Clincoo",
   "desc": "Tata cara mengganti any dengan tipe yang lebih spesifik agar kode Clincoo lebih aman.",
   "content": "<p class=\"mb-4\">Tipe any mematikan pemeriksaan TypeScript dan bisa menyembunyikan bug.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti any dengan unknown atau tipe konkret</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jika data datang dari luar, gunakan unknown lalu lakukan type narrowing. Untuk props, tulis interface yang tepat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aktifkan noImplicitAny</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> set \"noImplicitAny\": true di tsconfig agar compiler memaksa Anda menulis tipe. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — any",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any",
   "sourceSnippet": "Avoid any when possible; prefer unknown and proper narrowing for safer code.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid the Any Type in Clincoo Projects",
   "desc": "How to replace any with more specific types so Clincoo code stays safer.",
   "content": "<p class=\"mb-4\">The any type disables TypeScript checking and can hide bugs.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace any with unknown or concrete types</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> if data comes from outside, use unknown then perform type narrowing. For props write a precise interface.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable noImplicitAny</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> set \"noImplicitAny\": true in tsconfig so the compiler forces you to write types. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — any",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any",
   "sourceSnippet": "Avoid any when possible; prefer unknown and proper narrowing for safer code.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "typescript-tsconfig-dasar",
 "langs": {
  "id": {
   "title": "Cara Mengatur tsconfig.json Dasar untuk Clincoo",
   "desc": "Tata cara membuat konfigurasi TypeScript minimal yang cocok untuk proyek Clincoo.",
   "content": "<p class=\"mb-4\">tsconfig.json yang tepat membuat editor dan build memahami kode Anda.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Target dan module</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set \"target\": \"ES2020\" dan \"module\": \"ESNext\" agar cocok dengan bundler modern. Aktifkan \"strict\": true.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include dan exclude</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> include hanya folder src dan exclude node_modules. Simpan contoh konfigurasi di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript — tsconfig.json",
   "sourceUrl": "https://www.typescriptlang.org/tsconfig",
   "sourceSnippet": "A basic tsconfig with strict mode, modern target, and proper include/exclude paths.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set Up a Basic tsconfig.json for Clincoo",
   "desc": "How to create a minimal TypeScript configuration that fits a Clincoo project.",
   "content": "<p class=\"mb-4\">A correct tsconfig.json lets the editor and the build understand your code.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Target and module</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set \"target\": \"ES2020\" and \"module\": \"ESNext\" to match modern bundlers. Enable \"strict\": true.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include and exclude</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> include only the src folder and exclude node_modules. Save an example configuration on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript — tsconfig.json",
   "sourceUrl": "https://www.typescriptlang.org/tsconfig",
   "sourceSnippet": "A basic tsconfig with strict mode, modern target, and proper include/exclude paths.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "typescript-tipe-untuk-props-komponen",
 "langs": {
  "id": {
   "title": "Cara Mendefinisikan Tipe untuk Props Komponen di Clincoo",
   "desc": "Tata cara menulis tipe props yang jelas untuk komponen di editor Clincoo.",
   "content": "<p class=\"mb-4\">Tipe props yang eksplisit membuat komponen lebih mudah dipakai ulang dan di-debug.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Interface untuk props</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis interface ButtonProps { label: string; onClick: () => void; } lalu gunakan di function Button(props: ButtonProps).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Optional dan default</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tandai properti opsional dengan ? dan berikan nilai default di parameter. Dokumentasikan pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "React TypeScript Cheatsheet — Props",
   "sourceUrl": "https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example",
   "sourceSnippet": "Define a props interface and annotate the function parameter for type safety.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Define Types for Component Props in Clincoo",
   "desc": "How to write clear prop types for components inside the Clincoo editor.",
   "content": "<p class=\"mb-4\">Explicit prop types make components easier to reuse and debug.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Interface for props</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write interface ButtonProps { label: string; onClick: () => void; } then use it in function Button(props: ButtonProps).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Optional and defaults</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> mark optional properties with ? and provide default values in the parameter.</p>",
   "source": "React TypeScript Cheatsheet — Props",
   "sourceUrl": "https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example",
   "sourceSnippet": "Define a props interface and annotate the function parameter for type safety.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ]
};
