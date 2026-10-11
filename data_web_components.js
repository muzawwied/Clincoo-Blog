// Clincoo Docs — kategori Web Components (12 Oktober 2026, 02:00 WIB)
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
{
 "id": "web-components-shadow-dom-dasar",
 "langs": {
  "id": {
   "title": "Cara Menggunakan Shadow DOM di Custom Element Clincoo",
   "desc": "Tata cara mengenkapsulasi style dan markup dengan Shadow DOM agar tidak bocor ke halaman Clincoo.",
   "content": "<p class=\"mb-4\">Shadow DOM menjaga style komponen tetap terisolasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Attach shadow root</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di constructor atau connectedCallback: const shadow = this.attachShadow({mode: 'open'}); shadow.innerHTML = '<style>button{color:blue}</style><button>Klik</button>';</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Style tidak bocor</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> style di luar tidak memengaruhi di dalam shadow. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using shadow DOM",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "sourceSnippet": "Attach a shadow root to encapsulate the internal DOM and styles of a custom element.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Shadow DOM in a Clincoo Custom Element",
   "desc": "How to encapsulate styles and markup with Shadow DOM so they do not leak into the Clincoo page.",
   "content": "<p class=\"mb-4\">Shadow DOM keeps component styles isolated.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Attach the shadow root</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> in the constructor or connectedCallback: const shadow = this.attachShadow({mode: 'open'}); shadow.innerHTML = '<style>button{color:blue}</style><button>Click</button>';</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Styles do not leak</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> outside styles do not affect inside the shadow. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using shadow DOM",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "sourceSnippet": "Attach a shadow root to encapsulate the internal DOM and styles of a custom element.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-slot-untuk-konten",
 "langs": {
  "id": {
   "title": "Cara Menggunakan Slot untuk Konten di Web Component Clincoo",
   "desc": "Tata cara memungkinkan pengguna memasukkan konten kustom ke dalam custom element dengan slot.",
   "content": "<p class=\"mb-4\">Slot memungkinkan komposisi konten dari luar ke dalam shadow DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambahkan slot di shadow</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di shadow.innerHTML tambahkan <slot>Default</slot> agar konten anak dari light DOM masuk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Named slots</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gunakan slot=\"header\" untuk slot bernama. Dokumentasikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using templates and slots",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots",
   "sourceSnippet": "The slot element is a placeholder inside the shadow DOM that can be filled with light DOM content.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Slots for Content in a Clincoo Web Component",
   "desc": "How to let users insert custom content into a custom element using slots.",
   "content": "<p class=\"mb-4\">Slots allow composition of content from outside into the shadow DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add a slot in the shadow</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> in shadow.innerHTML add <slot>Default</slot> so child content from the light DOM is projected in.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Named slots</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use slot=\"header\" for named slots. Document it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using templates and slots",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots",
   "sourceSnippet": "The slot element is a placeholder inside the shadow DOM that can be filled with light DOM content.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ]
};
