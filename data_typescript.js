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
   "content": "<p class=\"mb-4\">tsconfig.json yang tepat membuat editor dan build memahami kode Anda.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Target dan module</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set \"target\": \"ES2020\" dan \"module\", \"ESNext\" agar cocok dengan bundler modern. Aktifkan \"strict\": true.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include dan exclude</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> include hanya folder src dan exclude node_modules. Simpan contoh konfigurasi di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">A correct tsconfig.json lets the editor and the build understand your code.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Target and module</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set \"target\": \"ES2020\" and \"module\", \"ESNext\" to match modern bundlers. Enable \"strict\": true.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include and exclude</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> include only the src folder and exclude node_modules. Save an example configuration on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
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
   "content": "<p class=\"mb-4\">Explicit prop types make components easier to reuse and debug.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Interface for props</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write interface ButtonProps { label: string; onClick: () => void; } then use it in function Button(props: ButtonProps).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Optional and defaults</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> mark optional properties with ? and provide default values in the parameter. Document the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "React TypeScript Cheatsheet — Props",
   "sourceUrl": "https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example",
   "sourceSnippet": "Define a props interface and annotate the function parameter for type safety.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "typescript-utility-types-partial-pick",
 "langs": {
  "id": {
   "title": "Cara Pakai Utility Types Partial dan Pick di Clincoo",
   "desc": "Tata cara membuat tipe turunan dengan Partial dan Pick agar tidak mengulang definisi props di proyek Clincoo.",
   "content": "<p class=\"mb-4\">Mengulang definisi tipe yang hampir sama membuat perubahan harus dilakukan di banyak tempat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Partial untuk props opsional</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jika Anda punya interface User { id: string; name: string; email: string }, buat type UpdateUser = Partial<User> untuk form edit di mana semua field opsional.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pick untuk subset</h2><p class=\"mb-4\">Pakai Pick<User, 'id' | 'name'> untuk komponen yang hanya butuh sebagian field. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji bahwa perubahan pada User otomatis terasa di turunan. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Utility Types",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/utility-types.html",
   "sourceSnippet": "Partial makes all properties optional. Pick constructs a type by picking a set of properties.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Utility Types Partial and Pick in Clincoo",
   "desc": "How to create derived types with Partial and Pick so you do not repeat prop definitions in a Clincoo project.",
   "content": "<p class=\"mb-4\">Repeating nearly identical type definitions forces changes in many places.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Partial for optional props</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> if you have interface User { id: string; name: string; email: string }, create type UpdateUser = Partial<User> for an edit form where every field is optional.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pick for a subset</h2><p class=\"mb-4\">Use Pick<User, 'id' | 'name'> for a component that only needs some fields. On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test that a change to User is felt in the derived types. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Utility Types",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/utility-types.html",
   "sourceSnippet": "Partial makes all properties optional. Pick constructs a type by picking a set of properties.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "typescript-narrowing-dengan-type-guards",
 "langs": {
  "id": {
   "title": "Cara Lakukan Type Narrowing dengan Type Guards di Clincoo",
   "desc": "Tata cara membuat type guard kustom agar TypeScript memahami tipe setelah pemeriksaan di kode Clincoo.",
   "content": "<p class=\"mb-4\">Tanpa narrowing, TypeScript menganggap union tetap union di dalam cabang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Function type guard</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis function isUser(obj: any): obj is User { return obj && typeof obj.id === 'string'; } lalu pakai if (isUser(data)) { data.id ... }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan data campuran</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> masukkan objek valid dan tidak valid. Cabang harus aman tanpa cast. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Type Guards",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
   "sourceSnippet": "A type guard is a function that returns a type predicate to narrow the type in a branch.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Do Type Narrowing with Type Guards in Clincoo",
   "desc": "How to write a custom type guard so TypeScript understands the type after a check in Clincoo code.",
   "content": "<p class=\"mb-4\">Without narrowing, TypeScript keeps the union type inside a branch.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Function type guard</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write function isUser(obj: any): obj is User { return obj && typeof obj.id === 'string'; } then use if (isUser(data)) { data.id ... }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with mixed data</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pass valid and invalid objects. The branch should be safe without a cast. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Type Guards",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
   "sourceSnippet": "A type guard is a function that returns a type predicate to narrow the type in a branch.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "typescript-tipe-untuk-event-handler",
 "langs": {
  "id": {
   "title": "Cara Tipe Event Handler di Komponen Clincoo",
   "desc": "Tata cara memberi tipe yang tepat pada handler klik, change, dan submit agar autocomplete bekerja di editor Clincoo.",
   "content": "<p class=\"mb-4\">Event handler tanpa tipe membuat event.target menjadi any dan mudah salah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai tipe React atau DOM</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis onClick: (e: React.MouseEvent<HTMLButtonElement>) => void atau untuk input (e: React.ChangeEvent<HTMLInputElement>).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Akses target dengan aman</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> e.currentTarget.value harus bertipe string tanpa cast. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "React TypeScript Cheatsheet — Events",
   "sourceUrl": "https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events",
   "sourceSnippet": "Annotate event handlers with the correct React event type for the element.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Type Event Handlers in Clincoo Components",
   "desc": "How to give the right type to click, change, and submit handlers so autocomplete works in the Clincoo editor.",
   "content": "<p class=\"mb-4\">An untyped event handler makes event.target any and easy to misuse.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use React or DOM types</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write onClick: (e: React.MouseEvent<HTMLButtonElement>) => void or for an input (e: React.ChangeEvent<HTMLInputElement>).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Access the target safely</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> e.currentTarget.value should be typed as string without a cast. Record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "React TypeScript Cheatsheet — Events",
   "sourceUrl": "https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events",
   "sourceSnippet": "Annotate event handlers with the correct React event type for the element.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "typescript-module-augmentation",
 "langs": {
  "id": {
   "title": "Cara Lakukan Module Augmentation untuk Library di Clincoo",
   "desc": "Tata cara menambah tipe ke module yang sudah ada tanpa fork, misalnya untuk window atau library pihak ketiga.",
   "content": "<p class=\"mb-4\">Library tanpa tipe lengkap memaksa any. Augmentation memperluas tipe yang ada.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Declare module</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat file global.d.ts dengan declare module 'some-lib' { export interface Existing { extra?: string; } } atau untuk window: interface Window { myClincooFlag?: boolean; }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pastikan file di-include</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tsconfig include harus mencakup *.d.ts. Uji autocomplete muncul. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Declaration Merging",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/declaration-merging.html",
   "sourceSnippet": "Module augmentation lets you add to existing module types via declaration merging.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Do Module Augmentation for Libraries in Clincoo",
   "desc": "How to add types to an existing module without forking, for example for window or a third-party library.",
   "content": "<p class=\"mb-4\">A library without complete types forces any. Augmentation extends the existing types.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Declare module</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create global.d.ts with declare module 'some-lib' { export interface Existing { extra?: string; } } or for window: interface Window { myClincooFlag?: boolean; }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Make sure the file is included</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> the tsconfig include must cover *.d.ts. Test that autocomplete appears. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Declaration Merging",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/declaration-merging.html",
   "sourceSnippet": "Module augmentation lets you add to existing module types via declaration merging.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "typescript-strict-null-checks",
 "langs": {
  "id": {
   "title": "Cara Aktifkan dan Tangani Strict Null Checks di Clincoo",
   "desc": "Tata cara menghidupkan strictNullChecks dan menangani null/undefined agar kode Clincoo tidak crash di runtime.",
   "content": "<p class=\"mb-4\">Tanpa strictNullChecks, TypeScript mengizinkan null di mana saja, yang sering jadi sumber error runtime.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aktifkan di tsconfig</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set \"strictNullChecks\": true (atau strict: true). Perbaiki error dengan optional chaining ?. atau null check.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gunakan non-null assertion hati-hati</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> hindari ! kecuali Anda yakin. Lebih baik if (value != null). Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Null and Undefined",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined",
   "sourceSnippet": "With strictNullChecks, null and undefined are distinct types that must be handled explicitly.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Enable and Handle Strict Null Checks in Clincoo",
   "desc": "How to turn on strictNullChecks and handle null/undefined so Clincoo code does not crash at runtime.",
   "content": "<p class=\"mb-4\">Without strictNullChecks, TypeScript allows null everywhere, a common source of runtime errors.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable it in tsconfig</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set \"strictNullChecks\", true (or strict: true). Fix errors with optional chaining ?. or a null check.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use non-null assertion carefully</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> avoid ! unless you are sure. Prefer if (value != null). Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Null and Undefined",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined",
   "sourceSnippet": "With strictNullChecks, null and undefined are distinct types that must be handled explicitly.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ]
};
