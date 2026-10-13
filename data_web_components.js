// Clincoo Docs — kategori Web Components (13 Oktober 2026, 16:00 WIB) — tambah 5 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["web-components"] = {
 "names": { "id": "Web Components", "en": "Web Components" },
 "articles": [
{
 "id": "web-components-gunakan-connectedcallback-dengan-aman",
 "langs": {
  "id": {
   "title": "Cara Gunakan connectedCallback dengan Aman di Custom Element",
   "desc": "Tata cara menempatkan logika inisialisasi di connectedCallback agar tidak jalan berkali-kali saat element dipindah.",
   "content": "<p class=\"mb-4\">connectedCallback dipanggil setiap kali element masuk DOM, termasuk saat dipindah antar parent.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek apakah sudah terhubung</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan flag this._connected dan hanya jalankan setup sekali. Bersihkan listener di disconnectedCallback.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji pindah element</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pindahkan element ke parent lain dan pastikan tidak ada listener ganda. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — connectedCallback",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks",
   "sourceSnippet": "connectedCallback is invoked each time the custom element is appended into a document-connected element.",
   "source2": "MDN — Custom elements",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use connectedCallback Safely in a Custom Element",
   "desc": "How to place initialization logic in connectedCallback so it does not run multiple times when the element is moved.",
   "content": "<p class=\"mb-4\">connectedCallback is called every time the element is inserted into the DOM, including when it is moved between parents.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check if already connected</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep a this._connected flag and run setup only once. Clean up listeners in disconnectedCallback.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test moving the element</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> move the element to another parent and confirm there are no duplicate listeners. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — connectedCallback",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks",
   "sourceSnippet": "connectedCallback is invoked each time the custom element is appended into a document-connected element.",
   "source2": "MDN — Custom elements",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-style-dari-luar-dengan-part",
 "langs": {
  "id": {
   "title": "Cara Style Custom Element dari Luar dengan CSS ::part",
   "desc": "Tata cara mengekspos bagian shadow DOM agar bisa di-style dari light DOM tanpa menembus encapsulation.",
   "content": "<p class=\"mb-4\">Shadow DOM menyembunyikan style internal. ::part memungkinkan kustomisasi terbatas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambahkan part attribute</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada element di shadow root, set part=\"header\" atau nama lain. Dari luar gunakan my-element::part(header) { color: red; }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan style luar hanya mempengaruhi part yang diekspos. Dokumentasikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ::part",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::part",
   "sourceSnippet": "The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.",
   "source2": "MDN — Shadow DOM",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Style a Custom Element from Outside with CSS ::part",
   "desc": "How to expose shadow DOM parts so they can be styled from the light DOM without breaking encapsulation.",
   "content": "<p class=\"mb-4\">Shadow DOM hides internal styles. ::part allows limited customization.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add the part attribute</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on an element inside the shadow root, set part=\"header\" or another name. From outside use my-element::part(header) { color: red; }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm outside styles only affect exposed parts. Document it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ::part",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::part",
   "sourceSnippet": "The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.",
   "source2": "MDN — Shadow DOM",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-buat-accessible-custom-element",
 "langs": {
  "id": {
   "title": "Cara Buat Custom Element yang Accessible",
   "desc": "Tata cara menambahkan ARIA, keyboard support, dan focus management di custom element Clincoo.",
   "content": "<p class=\"mb-4\">Custom element tidak otomatis accessible. Harus eksplisit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set role dan aria</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pada host, set role=\"button\" atau sesuai, dan aria-label. Dukung keyboard dengan keydown untuk Enter/Space.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan screen reader</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gunakan VoiceOver atau NVDA. Pastikan fokus terlihat. Catat checklist di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ARIA",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA",
   "sourceSnippet": "ARIA defines ways to make web content and web applications more accessible to people with disabilities.",
   "source2": "W3C — Custom elements accessibility",
   "source2Url": "https://www.w3.org/TR/custom-elements/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Make an Accessible Custom Element",
   "desc": "How to add ARIA, keyboard support, and focus management to a custom element in Clincoo.",
   "content": "<p class=\"mb-4\">Custom elements are not automatically accessible. You must be explicit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set role and aria</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> on the host set role=\"button\" or appropriate, and aria-label. Support keyboard with keydown for Enter/Space.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with screen reader</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use VoiceOver or NVDA. Ensure focus is visible. Note the checklist on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ARIA",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA",
   "sourceSnippet": "ARIA defines ways to make web content and web applications more accessible to people with disabilities.",
   "source2": "W3C — Custom elements accessibility",
   "source2Url": "https://www.w3.org/TR/custom-elements/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-uji-lifecycle-di-devtools",
 "langs": {
  "id": {
   "title": "Cara Uji Lifecycle Callback Custom Element di DevTools",
   "desc": "Tata cara memasang breakpoint dan console.log di connectedCallback, disconnectedCallback, dan attributeChangedCallback.",
   "content": "<p class=\"mb-4\">Lifecycle callback mudah salah urutan. DevTools membantu melihat kapan mereka dipanggil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang log dan breakpoint</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan console.log di setiap callback dengan nama element. Buka Sources di DevTools dan set breakpoint.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simulasikan perubahan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tambah, hapus, atau ubah attribute element. Perhatikan urutan di console. Ringkas di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Breakpoints",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/javascript/breakpoints/",
   "sourceSnippet": "Breakpoints pause your code at a specific line so you can inspect state.",
   "source2": "MDN — Lifecycle callbacks",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Test Custom Element Lifecycle Callbacks in DevTools",
   "desc": "How to set breakpoints and console.log in connectedCallback, disconnectedCallback, and attributeChangedCallback.",
   "content": "<p class=\"mb-4\">Lifecycle callbacks can fire in unexpected order. DevTools helps see when they are called.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add logs and breakpoints</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add console.log in each callback with the element name. Open Sources in DevTools and set a breakpoint.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simulate changes</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> add, remove, or change an attribute on the element. Watch the order in the console. Summarize on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Breakpoints",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/javascript/breakpoints/",
   "sourceSnippet": "Breakpoints pause your code at a specific line so you can inspect state.",
   "source2": "MDN — Lifecycle callbacks",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-hindari-memory-leak-di-shadow",
 "langs": {
  "id": {
   "title": "Cara Hindari Memory Leak di Shadow DOM Custom Element",
   "desc": "Tata cara membersihkan event listener, timer, dan observer di disconnectedCallback.",
   "content": "<p class=\"mb-4\">Listener yang tidak dihapus membuat element tetap di memory meski sudah dihapus dari DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan referensi dan lepas</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan bound handler dan panggil removeEventListener di disconnectedCallback. Batalkan timer dan disconnect IntersectionObserver.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di Memory panel</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Memory di DevTools, ambil heap snapshot sebelum dan sesudah hapus element. Pastikan tidak tertinggal. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — disconnectedCallback",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks",
   "sourceSnippet": "disconnectedCallback is invoked each time the custom element is disconnected from the document's DOM.",
   "source2": "Chrome DevTools — Memory",
   "source2Url": "https://developer.chrome.com/docs/devtools/memory-problems/",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Memory Leaks in a Shadow DOM Custom Element",
   "desc": "How to clean up event listeners, timers, and observers in disconnectedCallback.",
   "content": "<p class=\"mb-4\">Unremoved listeners keep the element in memory even after it is removed from the DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep references and remove them</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store bound handlers and call removeEventListener in disconnectedCallback. Clear timers and disconnect IntersectionObserver.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check in the Memory panel</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Memory in DevTools, take heap snapshots before and after removing the element. Confirm nothing remains. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — disconnectedCallback",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks",
   "sourceSnippet": "disconnectedCallback is invoked each time the custom element is disconnected from the document's DOM.",
   "source2": "Chrome DevTools — Memory",
   "source2Url": "https://developer.chrome.com/docs/devtools/memory-problems/",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ]
};
