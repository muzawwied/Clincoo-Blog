// Clincoo Docs — kategori Web Components (12 Oktober 2026, 05:00 WIB) — 12 artikel
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
},
{
 "id": "web-components-lifecycle-callbacks",
 "langs": {
  "id": {
   "title": "Cara Menggunakan Lifecycle Callbacks di Custom Element Clincoo",
   "desc": "Tata cara merespons saat elemen ditambahkan, dihapus, atau diadopsi menggunakan connectedCallback dan lainnya di Clincoo.",
   "content": "<p class=\"mb-4\">Lifecycle callbacks memberi kontrol kapan komponen siap atau dibersihkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">connectedCallback dan disconnectedCallback</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> implementasikan connectedCallback() { console.log('terhubung'); } dan disconnectedCallback() untuk membersihkan listener.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek isConnected</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gunakan if (this.isConnected) sebelum setup. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using custom elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "sourceSnippet": "Lifecycle callbacks include connectedCallback, disconnectedCallback, adoptedCallback, and attributeChangedCallback.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Lifecycle Callbacks in a Clincoo Custom Element",
   "desc": "How to respond when the element is added, removed, or adopted using connectedCallback and others in Clincoo.",
   "content": "<p class=\"mb-4\">Lifecycle callbacks give control over when the component is ready or cleaned up.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">connectedCallback and disconnectedCallback</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> implement connectedCallback() { console.log('connected'); } and disconnectedCallback() to clean up listeners.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check isConnected</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use if (this.isConnected) before setup. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using custom elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "sourceSnippet": "Lifecycle callbacks include connectedCallback, disconnectedCallback, adoptedCallback, and attributeChangedCallback.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-observed-attributes",
 "langs": {
  "id": {
   "title": "Cara Mengamati Perubahan Atribut dengan observedAttributes di Clincoo",
   "desc": "Tata cara mendeteksi perubahan atribut pada custom element menggunakan static observedAttributes dan attributeChangedCallback.",
   "content": "<p class=\"mb-4\">observedAttributes memungkinkan reaksi otomatis saat atribut berubah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Deklarasikan observedAttributes</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan static observedAttributes = ['color']; lalu attributeChangedCallback(name, oldValue, newValue) { if (name === 'color') this.style.color = newValue; }</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set atribut dari luar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gunakan el.setAttribute('color', 'red'); Callback akan terpanggil. Dokumentasikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using custom elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "sourceSnippet": "Declare static observedAttributes and implement attributeChangedCallback to react to attribute changes.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Observe Attribute Changes with observedAttributes in Clincoo",
   "desc": "How to detect attribute changes on a custom element using static observedAttributes and attributeChangedCallback.",
   "content": "<p class=\"mb-4\">observedAttributes enables automatic reaction when attributes change.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Declare observedAttributes</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add static observedAttributes = ['color']; then attributeChangedCallback(name, oldValue, newValue) { if (name === 'color') this.style.color = newValue; }</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set attributes from outside</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use el.setAttribute('color', 'red'); The callback will fire. Document it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using custom elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "sourceSnippet": "Declare static observedAttributes and implement attributeChangedCallback to react to attribute changes.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-template-element",
 "langs": {
  "id": {
   "title": "Cara Menggunakan Element Template bersama Custom Element di Clincoo",
   "desc": "Tata cara mendefinisikan markup reusable dengan <template> lalu mengkloningnya ke shadow DOM custom element.",
   "content": "<p class=\"mb-4\">Element <template> menyimpan markup yang tidak dirender sampai dikloning.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Definisikan template</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat <template id=\"my-tpl\"><style>p{color:green}</style><p><slot></slot></p></template> lalu di connectedCallback cloneNode(true) ke shadow.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keuntungan reuse</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> satu template bisa dipakai banyak instance. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using templates and slots",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots",
   "sourceSnippet": "The template element holds content that is not rendered until cloned into the document.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use the Template Element with a Custom Element in Clincoo",
   "desc": "How to define reusable markup with <template> then clone it into the custom element's shadow DOM.",
   "content": "<p class=\"mb-4\">The <template> element stores markup that is not rendered until cloned.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Define the template</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create <template id=\"my-tpl\"><style>p{color:green}</style><p><slot></slot></p></template> then in connectedCallback cloneNode(true) into the shadow.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reuse benefit</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> one template can be used by many instances. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using templates and slots",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots",
   "sourceSnippet": "The template element holds content that is not rendered until cloned into the document.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-css-parts",
 "langs": {
  "id": {
   "title": "Cara Mengekspos Style dengan CSS Parts di Web Component Clincoo",
   "desc": "Tata cara memungkinkan styling dari luar shadow DOM menggunakan atribut part dan ::part selector.",
   "content": "<p class=\"mb-4\">CSS Parts memberi cara terkontrol untuk menyesuaikan style internal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambahkan part attribute</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di shadow markup beri part=\"button\" pada elemen yang ingin diekspos.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Style dari luar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tulis my-element::part(button) { background: blue; } Style hanya memengaruhi part tersebut. Dokumentasikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS ::part()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::part",
   "sourceSnippet": "The ::part() pseudo-element represents any element within a shadow tree that has a matching part attribute.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Expose Styles with CSS Parts in a Clincoo Web Component",
   "desc": "How to allow styling from outside the shadow DOM using the part attribute and ::part selector.",
   "content": "<p class=\"mb-4\">CSS Parts provide a controlled way to customize internal styles.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add the part attribute</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> in the shadow markup add part=\"button\" to the element you want to expose.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Style from outside</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> write my-element::part(button) { background: blue; } The style only affects that part. Document it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS ::part()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::part",
   "sourceSnippet": "The ::part() pseudo-element represents any element within a shadow tree that has a matching part attribute.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-custom-events",
 "langs": {
  "id": {
   "title": "Cara Mengirim Custom Event dari Web Component Clincoo",
   "desc": "Tata cara memberitahu kode di luar komponen dengan dispatchEvent dan CustomEvent yang composed.",
   "content": "<p class=\"mb-4\">Custom events memungkinkan komunikasi keluar dari shadow DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dispatch event</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> this.dispatchEvent(new CustomEvent('my-change', { detail: { value: 1 }, bubbles: true, composed: true }));</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dengarkan di luar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> document.querySelector('my-element').addEventListener('my-change', e => console.log(e.detail)); Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Creating and triggering events",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events",
   "sourceSnippet": "Use CustomEvent with bubbles and composed true so the event crosses the shadow boundary.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Dispatch Custom Events from a Clincoo Web Component",
   "desc": "How to notify code outside the component with dispatchEvent and a composed CustomEvent.",
   "content": "<p class=\"mb-4\">Custom events enable communication out of the shadow DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dispatch the event</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> this.dispatchEvent(new CustomEvent('my-change', { detail: { value: 1 }, bubbles: true, composed: true }));</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Listen outside</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> document.querySelector('my-element').addEventListener('my-change', e => console.log(e.detail)); Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Creating and triggering events",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events",
   "sourceSnippet": "Use CustomEvent with bubbles and composed true so the event crosses the shadow boundary.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 
,{
 "id": "web-components-form-associated",
 "langs": {
  "id": {
   "title": "Cara Membuat Form-Associated Custom Element di Clincoo",
   "desc": "Tata cara menghubungkan custom element ke form native menggunakan formAssociated dan ElementInternals agar nilai ikut dikirim.",
   "content": "<p class=\"mb-4\">Custom element biasa tidak ikut dalam FormData. Dengan form-associated, nilai dari komponen Clincoo bisa masuk ke submit form seperti input standar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aktifkan formAssociated</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat class MyInput extends HTMLElement { static formAssociated = true; constructor() { super(); this.internals = this.attachInternals(); } setValue(v) { this.internals.setFormValue(v); } }</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Daftarkan dan uji</h2><p class=\"mb-4\">customElements.define('my-input', MyInput); lalu di form di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> <my-input name=\"judul\"></my-input>. Saat submit, nilai ada di FormData. Dokumentasikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ElementInternals",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals",
   "sourceSnippet": "formAssociated custom elements can participate in form submission via ElementInternals.",
   "source2": "MDN — Using custom elements",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Create a Form-Associated Custom Element in Clincoo",
   "desc": "How to connect a custom element to a native form using formAssociated and ElementInternals so the value is submitted.",
   "content": "<p class=\"mb-4\">A normal custom element does not appear in FormData. With form-associated, the value from a Clincoo component joins form submit like a standard input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable formAssociated</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write class MyInput extends HTMLElement { static formAssociated = true; constructor() { super(); this.internals = this.attachInternals(); } setValue(v) { this.internals.setFormValue(v); } }</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Register and test</h2><p class=\"mb-4\">customElements.define('my-input', MyInput); then in a form on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> <my-input name=\"title\"></my-input>. On submit the value is in FormData. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ElementInternals",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals",
   "sourceSnippet": "formAssociated custom elements can participate in form submission via ElementInternals.",
   "source2": "MDN — Using custom elements",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},{
 "id": "web-components-adopted-callback",
 "langs": {
  "id": {
   "title": "Cara Menangani adoptedCallback saat Elemen Pindah Dokumen",
   "desc": "Tata cara merespons saat custom element Clincoo dipindahkan ke dokumen lain dengan adoptedCallback.",
   "content": "<p class=\"mb-4\">adoptedCallback dipanggil ketika elemen berpindah ke dokumen baru, misalnya lewat iframe atau adoptNode. Berguna untuk membersihkan listener di editor Clincoo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Implementasi callback</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan adoptedCallback() { this.cleanup(); this.setupForNewDoc(); } pada class yang extends HTMLElement.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji pindah dokumen</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> coba document.adoptNode(element) lalu append ke iframe. Pastikan state tidak bocor. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLElement",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement",
   "sourceSnippet": "adoptedCallback is called when the element is moved to a new document.",
   "source2": "MDN — Node.adoptNode",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Node/adoptNode",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle adoptedCallback When an Element Moves Documents",
   "desc": "How to respond when a Clincoo custom element is moved to another document with adoptedCallback.",
   "content": "<p class=\"mb-4\">adoptedCallback runs when the element moves to a new document, for example via iframe or adoptNode. Useful for cleaning listeners in the Clincoo editor.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Implement the callback</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add adoptedCallback() { this.cleanup(); this.setupForNewDoc(); } to the class that extends HTMLElement.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test document move</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> try document.adoptNode(element) then append into an iframe. Ensure state does not leak. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTMLElement",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement",
   "sourceSnippet": "adoptedCallback is called when the element is moved to a new document.",
   "source2": "MDN — Node.adoptNode",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Node/adoptNode",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},{
 "id": "web-components-slotted-styles",
 "langs": {
  "id": {
   "title": "Cara Menata Konten Slot dengan Selektor ::slotted",
   "desc": "Tata cara memberi style pada konten yang masuk ke slot dari luar shadow DOM menggunakan ::slotted di komponen Clincoo.",
   "content": "<p class=\"mb-4\">Konten di light DOM yang di-slot tidak otomatis di-style oleh CSS di dalam shadow. ::slotted memungkinkan styling terbatas dari dalam komponen.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai ::slotted</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di dalam shadow CSS tulis ::slotted(p) { color: inherit; margin: 0; } atau ::slotted(*) untuk semua.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasan dan uji</h2><p class=\"mb-4\">::slotted hanya menargetkan elemen langsung di slot, tidak keturunan. Uji di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan konten dinamis. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ::slotted",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted",
   "sourceSnippet": "::slotted represents any element that has been placed into a slot inside an HTML template.",
   "source2": "MDN — Using templates and slots",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Style Slotted Content with the ::slotted Selector",
   "desc": "How to style content that enters a slot from outside the shadow DOM using ::slotted in a Clincoo component.",
   "content": "<p class=\"mb-4\">Content in the light DOM that is slotted is not automatically styled by CSS inside the shadow. ::slotted allows limited styling from within the component.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use ::slotted</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> inside shadow CSS write ::slotted(p) { color: inherit; margin: 0; } or ::slotted(*) for everything.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limits and test</h2><p class=\"mb-4\">::slotted only targets the direct element in the slot, not descendants. Test in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview with dynamic content. Note the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — ::slotted",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted",
   "sourceSnippet": "::slotted represents any element that has been placed into a slot inside an HTML template.",
   "source2": "MDN — Using templates and slots",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
]
};
