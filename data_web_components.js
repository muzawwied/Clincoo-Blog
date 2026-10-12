// Clincoo Docs — kategori Web Components (12 Oktober 2026, 18:00 WIB) — tambah 3 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["web-components"] = {
 "names": { "id": "Web Components", "en": "Web Components" },
 "articles": [
{
 "id": "web-components-debug-shadow-dom",
 "langs": {
  "id": {
   "title": "Cara Debug Shadow DOM di DevTools Clincoo",
   "desc": "Tata cara memeriksa shadow root, slotted content, dan style yang di-encapsulate di custom element.",
   "content": "<p class=\"mb-4\">Shadow DOM menyembunyikan struktur internal custom element. Tanpa cara debug yang benar, style dan slot sulit diperiksa.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aktifkan Shadow DOM di DevTools</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools. Di Settings > Elements, centang \"Show user agent shadow DOM\". Lalu expand elemen custom, ikon #shadow-root akan muncul.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Periksa computed style di dalam shadow</h2><p class=\"mb-4\">Pilih elemen di dalam shadow. Computed tab akan menampilkan style yang berlaku, termasuk yang dari adoptedStyleSheets. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan catat temuan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Shadow DOM",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "sourceSnippet": "You can inspect shadow roots in browser DevTools after enabling the relevant setting.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug Shadow DOM in Clincoo DevTools",
   "desc": "How to inspect shadow root, slotted content, and encapsulated styles in a custom element.",
   "content": "<p class=\"mb-4\">Shadow DOM hides the internal structure of a custom element. Without the right debug method, styles and slots are hard to inspect.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable Shadow DOM in DevTools</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools. In Settings > Elements, check \"Show user agent shadow DOM\". Then expand the custom element; the #shadow-root icon appears.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Inspect computed style inside shadow</h2><p class=\"mb-4\">Select an element inside the shadow. The Computed tab shows applied styles, including those from adoptedStyleSheets. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and note findings on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Shadow DOM",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",
   "sourceSnippet": "You can inspect shadow roots in browser DevTools after enabling the relevant setting.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-host-context-tema",
 "langs": {
  "id": {
   "title": "Cara Gunakan :host-context untuk Tema di Web Component",
   "desc": "Tata cara memberi style berbeda pada custom element berdasarkan class atau tema di ancestor.",
   "content": "<p class=\"mb-4\">:host-context memungkinkan custom element merespons konteks luar tanpa memecah encapsulation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis selector :host-context</h2><p class=\"mb-4\">Di dalam shadow style: <code>:host-context(.dark) { background: #1a1a1a; color: #eee; }</code>. Jika ancestor memiliki class dark, style ini aktif. Tambahkan di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan toggle tema</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tambahkan class dark di body dan lihat perubahan. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — :host-context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:host-context",
   "sourceSnippet": ":host-context() matches the host if an ancestor matches the selector.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use :host-context for Themes in a Web Component",
   "desc": "How to style a custom element differently based on a class or theme on an ancestor.",
   "content": "<p class=\"mb-4\">:host-context lets a custom element respond to outside context without breaking encapsulation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write the :host-context selector</h2><p class=\"mb-4\">Inside the shadow style: <code>:host-context(.dark) { background: #1a1a1a; color: #eee; }</code>. If an ancestor has the dark class, this style activates. Add it in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with a theme toggle</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> add the dark class to body and watch the change. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — :host-context",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/:host-context",
   "sourceSnippet": ":host-context() matches the host if an ancestor matches the selector.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-slotchange-event",
 "langs": {
  "id": {
   "title": "Cara Dengarkan Event slotchange di Custom Element",
   "desc": "Tata cara merespons perubahan konten yang di-slot ke dalam shadow DOM.",
   "content": "<p class=\"mb-4\">Event slotchange berguna untuk update tampilan saat konten light DOM berubah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang listener di connectedCallback</h2><p class=\"mb-4\">Di custom element: <code>this.shadowRoot.addEventListener('slotchange', this.handleSlot);</code>. Di handler, baca <code>slot.assignedNodes()</code> untuk tahu konten baru. Tulis di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bersihkan di disconnectedCallback</h2><p class=\"mb-4\">Hapus listener agar tidak memory leak. Uji dengan menambah/hapus anak di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lalu dokumentasikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — slotchange",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/slotchange_event",
   "sourceSnippet": "The slotchange event fires when the nodes assigned to a slot change.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Listen for the slotchange Event in a Custom Element",
   "desc": "How to react when slotted content changes inside a shadow DOM.",
   "content": "<p class=\"mb-4\">The slotchange event is useful to update the display when light DOM content changes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Attach the listener in connectedCallback</h2><p class=\"mb-4\">In the custom element: <code>this.shadowRoot.addEventListener('slotchange', this.handleSlot);</code>. In the handler, read <code>slot.assignedNodes()</code> to know the new content. Write it in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Clean up in disconnectedCallback</h2><p class=\"mb-4\">Remove the listener to avoid memory leaks. Test by adding/removing children on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> then document on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — slotchange",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/slotchange_event",
   "sourceSnippet": "The slotchange event fires when the nodes assigned to a slot change.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-adopted-stylesheets-external",
 "langs": {
  "id": {
   "title": "Cara Muat CSS External ke adoptedStyleSheets",
   "desc": "Tata cara mengambil stylesheet dari file atau string lalu menerapkannya ke shadow root.",
   "content": "<p class=\"mb-4\">adoptedStyleSheets memungkinkan berbagi CSS antar shadow root tanpa duplikasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat CSSStyleSheet dan replace</h2><p class=\"mb-4\">const sheet = new CSSStyleSheet(); await sheet.replace('@import url(\"/styles.css\");'); this.shadowRoot.adoptedStyleSheets = [sheet]; Lakukan di connectedCallback di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Handle error load</h2><p class=\"mb-4\">Bungkus dengan try/catch. Jika gagal, fallback ke <style> biasa. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan tulis di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSSStyleSheet",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet",
   "sourceSnippet": "replace() and replaceSync() can load CSS text into a constructable stylesheet.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Load External CSS into adoptedStyleSheets",
   "desc": "How to fetch a stylesheet from a file or string and apply it to a shadow root.",
   "content": "<p class=\"mb-4\">adoptedStyleSheets lets you share CSS across shadow roots without duplication.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create CSSStyleSheet and replace</h2><p class=\"mb-4\">const sheet = new CSSStyleSheet(); await sheet.replace('@import url(\"/styles.css\");'); this.shadowRoot.adoptedStyleSheets = [sheet]; Do this in connectedCallback in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Handle load errors</h2><p class=\"mb-4\">Wrap in try/catch. If it fails, fall back to a regular <style> tag. Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and write it up on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSSStyleSheet",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet",
   "sourceSnippet": "replace() and replaceSync() can load CSS text into a constructable stylesheet.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-cegah-double-define",
 "langs": {
  "id": {
   "title": "Cara Cegah Double Registration Custom Element",
   "desc": "Tata cara mengecek customElements.get sebelum define agar tidak error di reload atau multiple import.",
   "content": "<p class=\"mb-4\">customElements.define akan throw jika nama sudah terdaftar. Cek dulu untuk aman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gunakan customElements.get</h2><p class=\"mb-4\">if (!customElements.get('my-element')) { customElements.define('my-element', MyElement); } Tempatkan di akhir file atau modul di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan import ganda</h2><p class=\"mb-4\">Muat script dua kali di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Tidak boleh ada error. Dokumentasikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — customElements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define",
   "sourceSnippet": "define() throws a DOMException if the name is already defined.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Prevent Double Registration of a Custom Element",
   "desc": "How to check customElements.get before define to avoid errors on reload or multiple imports.",
   "content": "<p class=\"mb-4\">customElements.define throws if the name is already registered. Check first to stay safe.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use customElements.get</h2><p class=\"mb-4\">if (!customElements.get('my-element')) { customElements.define('my-element', MyElement); } Place it at the end of the file or module in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with double import</h2><p class=\"mb-4\">Load the script twice on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. There should be no error. Document it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — customElements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define",
   "sourceSnippet": "define() throws a DOMException if the name is already defined.",
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
   "title": "Cara Gunakan Lifecycle Callbacks di Custom Element Clincoo",
   "desc": "Tata cara memakai connectedCallback dan disconnectedCallback di web component Clincoo.",
   "content": "<p class=\"mb-4\">Lifecycle callbacks memungkinkan custom element bereaksi saat ditambahkan atau dihapus dari DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Setup di connectedCallback</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis connectedCallback() { this.innerHTML = this.template; } untuk render saat masuk DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cleanup di disconnectedCallback</h2><p class=\"mb-4\">Hapus listener di disconnectedCallback. Uji tambah/hapus elemen di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lalu catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using custom elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "sourceSnippet": "Lifecycle callbacks let the element react to being added or removed from the document.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Lifecycle Callbacks in a Clincoo Custom Element",
   "desc": "How to use connectedCallback and disconnectedCallback in a Clincoo web component.",
   "content": "<p class=\"mb-4\">Lifecycle callbacks let a custom element react when it is added to or removed from the DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Setup in connectedCallback</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write connectedCallback() { this.innerHTML = this.template; } to render when it enters the DOM.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cleanup in disconnectedCallback</h2><p class=\"mb-4\">Remove listeners in disconnectedCallback. Test adding/removing the element on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> then note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using custom elements",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
   "sourceSnippet": "Lifecycle callbacks let the element react to being added or removed from the document.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-attribute-changed-callback",
 "langs": {
  "id": {
   "title": "Cara Tangani Perubahan Atribut dengan attributeChangedCallback",
   "desc": "Tata cara merespons perubahan atribut pada custom element di Clincoo.",
   "content": "<p class=\"mb-4\">attributeChangedCallback dipanggil saat atribut yang diobservasi berubah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Deklarasikan observedAttributes</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> static get observedAttributes() { return ['title', 'disabled']; }</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Update di callback</h2><p class=\"mb-4\">Di attributeChangedCallback(name, old, newVal) update tampilan. Uji ubah atribut di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — attributeChangedCallback",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes",
   "sourceSnippet": "The attributeChangedCallback is invoked when an observed attribute changes.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle Attribute Changes with attributeChangedCallback",
   "desc": "How to respond to attribute changes on a custom element in Clincoo.",
   "content": "<p class=\"mb-4\">attributeChangedCallback is called when an observed attribute changes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Declare observedAttributes</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> static get observedAttributes() { return ['title', 'disabled']; }</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Update in the callback</h2><p class=\"mb-4\">In attributeChangedCallback(name, old, newVal) update the display. Test changing the attribute on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — attributeChangedCallback",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes",
   "sourceSnippet": "The attributeChangedCallback is invoked when an observed attribute changes.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "web-components-slot-default-content",
 "langs": {
  "id": {
   "title": "Cara Beri Konten Default pada Slot di Web Component",
   "desc": "Tata cara menyediakan fallback content di dalam slot agar tampil jika tidak ada konten light DOM.",
   "content": "<p class=\"mb-4\">Slot bisa memiliki konten default yang tampil jika tidak diisi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis konten di dalam slot</h2><p class=\"mb-4\">Di template shadow: <slot>Konten default</slot>. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan teks atau elemen di dalam tag slot.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji tanpa light DOM</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buat elemen tanpa anak dan pastikan default tampil. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — slot",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot",
   "sourceSnippet": "Content inside the slot element is shown as fallback when no nodes are assigned.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Provide Default Content for a Slot in a Web Component",
   "desc": "How to supply fallback content inside a slot so it appears when there is no light DOM content.",
   "content": "<p class=\"mb-4\">A slot can have default content that shows if nothing is slotted.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write content inside the slot</h2><p class=\"mb-4\">In the shadow template: <slot>Default content</slot>. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add text or elements inside the slot tag.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test without light DOM</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> create the element without children and confirm the default appears. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — slot",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot",
   "sourceSnippet": "Content inside the slot element is shown as fallback when no nodes are assigned.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ]
};
