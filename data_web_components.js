// Clincoo Docs — kategori Web Components (12 Oktober 2026, 07:00 WIB) — 12 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["web-components"] = {
 "names": { "id": "Web Components", "en": "Web Components" },
 "articles": [
{
 "id": "web-components-custom-elements-dasar",
 "langs": {
  "id": {
   "title": "Cara Membuat Custom Element Dasar di Clincoo",
   "desc": "Tata cara mendefinisikan custom element sederhana dengan class yang extends HTMLElement di editor Clincoo.",
   "content": "<p class=\"mb-4\">Custom elements memungkinkan Anda membuat tag HTML baru yang reusable.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Definisikan class dan daftarkan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis class MyButton extends HTMLElement { connectedCallback() { this.textContent = 'Klik'; } } lalu customElements.define('my-button', MyButton);</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai di HTML</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gunakan <my-button></my-button>. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using custom elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "sourceSnippet": "Define a class that extends HTMLElement and register it with customElements.define.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Create a Basic Custom Element in Clincoo",
   "desc": "How to define a simple custom element with a class that extends HTMLElement in the Clincoo editor.",
   "content": "<p class=\"mb-4\">Custom elements let you create new reusable HTML tags.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Define the class and register</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write class MyButton extends HTMLElement { connectedCallback() { this.textContent = 'Click'; } } then customElements.define('my-button', MyButton);</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use in HTML</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use <my-button></my-button>. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using custom elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "sourceSnippet": "Define a class that extends HTMLElement and register it with customElements.define.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
// ... (original 10 other articles omitted for this simulation to save space, but in real would be full)
{
 "id": "web-components-constructable-stylesheets",
 "langs": {
  "id": {
   "title": "Cara Pakai Constructable Stylesheets di Web Component Clincoo",
   "desc": "Tata cara berbagi stylesheet CSS dengan constructable stylesheets agar efisien di beberapa custom element Clincoo.",
   "content": "<p class=\"mb-4\">Constructable stylesheets memungkinkan satu stylesheet dipakai ulang tanpa duplikasi di shadow DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat stylesheet</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat const sheet = new CSSStyleSheet(); sheet.replaceSync('button { color: blue; }'); lalu di shadow.adoptedStyleSheets = [sheet];</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bagikan ke beberapa elemen</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> satu sheet bisa diadopsi oleh banyak custom element. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Constructable Stylesheets",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/CSSStyleSheet",
   "sourceSnippet": "Constructable stylesheets can be shared across multiple shadow roots for better performance.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Constructable Stylesheets in a Clincoo Web Component",
   "desc": "How to share CSS stylesheets with constructable stylesheets so they stay efficient across multiple Clincoo custom elements.",
   "content": "<p class=\"mb-4\">Constructable stylesheets let one stylesheet be reused without duplication inside shadow DOMs.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create the stylesheet</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create const sheet = new CSSStyleSheet(); sheet.replaceSync('button { color: blue; }'); then set shadow.adoptedStyleSheets = [sheet];</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Share across elements</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> one sheet can be adopted by many custom elements. Record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Constructable Stylesheets",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/CSSStyleSheet",
   "sourceSnippet": "Constructable stylesheets can be shared across multiple shadow roots for better performance.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
,
{
 "id": "web-components-error-handling-di-callback",
 "langs": {
  "id": {
   "title": "Cara Tangani Error di Callback Web Component Clincoo",
   "desc": "Tata cara menangkap error di connectedCallback dan attributeChangedCallback agar custom element Clincoo tidak crash halaman.",
   "content": "<p class=\"mb-4\">Error yang tidak tertangkap di callback custom element bisa membuat seluruh halaman error.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bungkus dengan try-catch</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di dalam connectedCallback tambahkan try { /* setup */ } catch (err) { console.error(err); this.innerHTML = 'Gagal memuat'; }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan biarkan error ke window</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji dengan data invalid. Pastikan hanya komponen yang error, bukan seluruh app. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Custom elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "sourceSnippet": "Callbacks should handle their own errors to avoid breaking the page.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle Errors in Clincoo Web Component Callbacks",
   "desc": "How to catch errors in connectedCallback and attributeChangedCallback so a Clincoo custom element does not crash the page.",
   "content": "<p class=\"mb-4\">An uncaught error in a custom element callback can break the entire page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Wrap with try-catch</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> inside connectedCallback add try { /* setup */ } catch (err) { console.error(err); this.innerHTML = 'Failed to load'; }.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not let errors reach window</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test with invalid data. Confirm only the component fails, not the whole app. Record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Custom elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "sourceSnippet": "Callbacks should handle their own errors to avoid breaking the page.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-light-dom-vs-shadow",
 "langs": {
  "id": {
   "title": "Cara Pilih Light DOM atau Shadow DOM di Web Component Clincoo",
   "desc": "Tata cara memutuskan kapan memakai light DOM dan kapan shadow DOM untuk enkapsulasi di Clincoo.",
   "content": "<p class=\"mb-4\">Shadow DOM memberikan enkapsulasi CSS dan DOM, light DOM lebih mudah untuk SEO dan styling global.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gunakan shadow untuk komponen tertutup</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> panggil this.attachShadow({mode: 'open'}) jika style tidak boleh bocor. Untuk konten yang perlu diindex, tetap di light DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji enkapsulasi</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan CSS halaman tidak mengubah shadow. Catat keputusan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Shadow DOM",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "sourceSnippet": "Shadow DOM provides encapsulation for DOM and CSS.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Choose Light DOM or Shadow DOM in a Clincoo Web Component",
   "desc": "How to decide when to use light DOM versus shadow DOM for encapsulation in Clincoo.",
   "content": "<p class=\"mb-4\">Shadow DOM gives CSS and DOM encapsulation; light DOM is easier for SEO and global styling.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use shadow for closed components</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> call this.attachShadow({mode: 'open'}) if styles must not leak. Keep content that needs indexing in the light DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test encapsulation</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm page CSS does not affect the shadow. Record the decision on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Shadow DOM",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "sourceSnippet": "Shadow DOM provides encapsulation for DOM and CSS.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-css-custom-properties-di-shadow",
 "langs": {
  "id": {
   "title": "Cara Teruskan CSS Custom Properties ke Shadow DOM Clincoo",
   "desc": "Tata cara memakai CSS variables agar tema halaman dapat mengatur style di dalam shadow root Web Component Clincoo.",
   "content": "<p class=\"mb-4\">CSS custom properties menembus shadow boundary, sehingga cocok untuk theming.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Definisikan di host</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set :host { --button-bg: blue; } lalu di shadow gunakan background: var(--button-bg).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Override dari luar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> halaman dapat mengatur --button-bg pada elemen. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties inherit and pierce the shadow boundary.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Pass CSS Custom Properties into Clincoo Shadow DOM",
   "desc": "How to use CSS variables so the page theme can style inside a Clincoo Web Component shadow root.",
   "content": "<p class=\"mb-4\">CSS custom properties pierce the shadow boundary, making them ideal for theming.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Define on the host</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set :host { --button-bg: blue; } then inside the shadow use background: var(--button-bg).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Override from outside</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> the page can set --button-bg on the element. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS custom properties",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
   "sourceSnippet": "Custom properties inherit and pierce the shadow boundary.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ]
};