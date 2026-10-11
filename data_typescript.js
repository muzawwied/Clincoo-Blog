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
},
{
 "id": "typescript-tipe-untuk-fetch-response",
 "langs": {
  "id": {
   "title": "Cara Menulis Tipe untuk Response Fetch di Clincoo",
   "desc": "Tata cara mendefinisikan tipe data yang dikembalikan fetch agar tidak memakai any di proyek Clincoo.",
   "content": "<p class=\"mb-4\">Response fetch sering diketik any sehingga bug struktur data baru terlihat di runtime.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Definisikan interface response</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis interface User { id: number; name: string; } lalu const res = await fetch('/api/user'); const data: User = await res.json();</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek status sebelum parse</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan res.ok sebelum json(). Catat interface di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Fetch",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
   "sourceSnippet": "Annotate the parsed JSON with an interface that matches the API response shape.",
   "source2": "MDN — Fetch API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Type a Fetch Response in Clincoo",
   "desc": "How to define the data shape returned by fetch so you avoid any in a Clincoo project.",
   "content": "<p class=\"mb-4\">Fetch responses typed as any hide structural bugs until runtime.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Define a response interface</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write interface User { id: number; name: string; } then const res = await fetch('/api/user'); const data: User = await res.json();</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check status before parsing</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm res.ok before calling json(). Record the interface on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Fetch",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
   "sourceSnippet": "Annotate the parsed JSON with an interface that matches the API response shape.",
   "source2": "MDN — Fetch API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "typescript-menggunakan-satisfies",
 "langs": {
  "id": {
   "title": "Cara Memakai Operator satisfies di TypeScript untuk Clincoo",
   "desc": "Tata cara memastikan objek cocok dengan tipe tanpa mengubah tipe yang diinferensi di proyek Clincoo.",
   "content": "<p class=\"mb-4\">as memaksa tipe dan bisa menyembunyikan properti ekstra. satisfies memeriksa tanpa mengubah inferensi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Validasi tanpa kehilangan literal</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis const config = { theme: 'dark' as const, size: 16 } satisfies Config; agar theme tetap 'dark' bukan string.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tangkap properti yang salah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jika ada key yang tidak ada di tipe, compiler langsung error. Catat contoh di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript 4.9 — satisfies operator",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator",
   "sourceSnippet": "The satisfies operator validates that an expression matches a type while preserving the inferred type.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use the satisfies Operator in TypeScript for Clincoo",
   "desc": "How to ensure an object matches a type without changing the inferred type in a Clincoo project.",
   "content": "<p class=\"mb-4\">as forces a type and can hide extra properties. satisfies checks without changing inference.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Validate without losing literals</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write const config = { theme: 'dark' as const, size: 16 } satisfies Config; so theme stays 'dark' instead of string.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catch wrong properties</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> if a key is missing from the type, the compiler errors immediately. Record an example on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript 4.9 — satisfies operator",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator",
   "sourceSnippet": "The satisfies operator validates that an expression matches a type while preserving the inferred type.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "typescript-error-handling-dengan-unknown",
 "langs": {
  "id": {
   "title": "Cara Menangani Error dengan unknown di Clincoo",
   "desc": "Tata cara memakai unknown di catch agar error handling TypeScript tetap aman di proyek Clincoo.",
   "content": "<p class=\"mb-4\">catch (e: any) mematikan pemeriksaan. unknown memaksa Anda memeriksa sebelum memakai error.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Narrow error di catch</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis catch (e: unknown) { if (e instanceof Error) console.error(e.message); }</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan asumsikan bentuk</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> periksa e instanceof Error atau typeof sebelum akses properti. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — unknown",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown",
   "sourceSnippet": "Use unknown in catch clauses and narrow with instanceof or type guards before accessing properties.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle Errors with unknown in Clincoo",
   "desc": "How to use unknown in catch so TypeScript error handling stays safe in a Clincoo project.",
   "content": "<p class=\"mb-4\">catch (e: any) disables checking. unknown forces you to inspect the error before using it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Narrow the error in catch</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write catch (e: unknown) { if (e instanceof Error) console.error(e.message); }</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not assume the shape</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> check e instanceof Error or typeof before accessing properties. Record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — unknown",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown",
   "sourceSnippet": "Use unknown in catch clauses and narrow with instanceof or type guards before accessing properties.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "typescript-tsconfig-paths-alias",
 "langs": {
  "id": {
   "title": "Cara Mengatur Path Alias di tsconfig untuk Clincoo",
   "desc": "Tata cara membuat alias import seperti @/components agar path relatif tidak panjang di proyek Clincoo.",
   "content": "<p class=\"mb-4\">Import ../../components/Button cepat jadi berantakan. Alias membuat path tetap pendek dan konsisten.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambahkan paths di tsconfig</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di tsconfig.json tambahkan \"baseUrl\": \".\", \"paths\": { \"@/*\": [\"src/*\"] }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sesuaikan bundler</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan Vite atau bundler juga mengenali alias yang sama. Catat konfigurasi di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript — paths",
   "sourceUrl": "https://www.typescriptlang.org/tsconfig#paths",
   "sourceSnippet": "The paths option lets you define import aliases that map to directories in your project.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set Up Path Aliases in tsconfig for Clincoo",
   "desc": "How to create import aliases like @/components so relative paths stay short in a Clincoo project.",
   "content": "<p class=\"mb-4\">Imports like ../../components/Button quickly become messy. Aliases keep paths short and consistent.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add paths in tsconfig</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> in tsconfig.json add \"baseUrl\": \".\", \"paths\": { \"@/*\": [\"src/*\"] }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the bundler</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure Vite or your bundler recognizes the same alias. Record the config on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript — paths",
   "sourceUrl": "https://www.typescriptlang.org/tsconfig#paths",
   "sourceSnippet": "The paths option lets you define import aliases that map to directories in your project.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "typescript-declaration-files-dasar",
 "langs": {
  "id": {
   "title": "Cara Membuat Declaration File Dasar di Clincoo",
   "desc": "Tata cara menulis file .d.ts untuk tipe library yang belum punya types di proyek Clincoo.",
   "content": "<p class=\"mb-4\">Library tanpa @types membuat import error. File .d.ts memberi deklarasi minimal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat file .d.ts</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat src/types/my-lib.d.ts dengan declare module 'my-lib' { export function doSomething(): void; }</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pastikan include di tsconfig</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan folder types masuk include. Dokumentasikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Declaration Files",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html",
   "sourceSnippet": "A .d.ts file provides type information for JavaScript libraries that lack built-in types.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Create a Basic Declaration File in Clincoo",
   "desc": "How to write a .d.ts file for a library that has no types yet in a Clincoo project.",
   "content": "<p class=\"mb-4\">A library without @types causes import errors. A .d.ts file supplies a minimal declaration.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create the .d.ts file</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create src/types/my-lib.d.ts with declare module 'my-lib' { export function doSomething(): void; }</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include it in tsconfig</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure the types folder is included. Document it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "TypeScript Handbook — Declaration Files",
   "sourceUrl": "https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html",
   "sourceSnippet": "A .d.ts file provides type information for JavaScript libraries that lack built-in types.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ]
};
