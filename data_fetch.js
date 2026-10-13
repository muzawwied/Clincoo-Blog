// Clincoo Docs — kategori Fetch (13 Oktober 2026, 20:00 WIB)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["fetch"] = {
 "names": { "id": "Fetch", "en": "Fetch" },
 "articles": [
{
 "id": "fetch-cek-response-ok-sebelum-json",
 "langs": {
  "id": {
   "title": "Cara Cek response.ok Sebelum Parse JSON di Fetch Clincoo",
   "desc": "Tata cara selalu cek response.ok atau status sebelum memanggil response.json() agar error HTTP tidak terlewat di Clincoo.",
   "content": "<p class=\"mb-4\">response.json() berhasil meski status 404 atau 500, sehingga error tersembunyi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek ok dulu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis if (!response.ok) throw new Error(response.status); lalu baru await response.json().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tampilkan pesan jelas</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tangkap error dan tampilkan status. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Response.ok",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Response/ok",
   "sourceSnippet": "The ok read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not.",
   "source2": "MDN — Fetch",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Check response.ok Before Parsing JSON in Clincoo Fetch",
   "desc": "How to always check response.ok or status before calling response.json() so HTTP errors are not missed in Clincoo.",
   "content": "<p class=\"mb-4\">response.json() succeeds even on 404 or 500, hiding the error.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check ok first</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write if (!response.ok) throw new Error(response.status); then await response.json().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Show a clear message</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> catch the error and show the status. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Response.ok",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Response/ok",
   "sourceSnippet": "The ok read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not.",
   "source2": "MDN — Fetch",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "fetch-tangani-network-error",
 "langs": {
  "id": {
   "title": "Cara Tangani Network Error pada Fetch di Clincoo",
   "desc": "Tata cara membedakan error jaringan dari error HTTP dan menampilkan pesan yang membantu pengguna Clincoo.",
   "content": "<p class=\"mb-4\">Fetch menolak hanya saat jaringan putus, bukan saat status buruk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tangkap di try catch</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus fetch dalam try. Jika TypeError atau Failed to fetch, itu jaringan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pesan berbeda</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tampilkan 'Periksa koneksi' untuk network, status untuk HTTP. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Fetch exceptions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
   "sourceSnippet": "A fetch() promise only rejects when a network error is encountered.",
   "source2": "Chrome DevTools — Network",
   "source2Url": "https://developer.chrome.com/docs/devtools/network/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle Network Errors on Fetch in Clincoo",
   "desc": "How to distinguish network errors from HTTP errors and show helpful messages to Clincoo users.",
   "content": "<p class=\"mb-4\">Fetch only rejects on network failure, not on bad status.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catch in try/catch</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap fetch in try. TypeError or Failed to fetch means network.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Different messages</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> show 'Check connection' for network, status for HTTP. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Fetch exceptions",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
   "sourceSnippet": "A fetch() promise only rejects when a network error is encountered.",
   "source2": "Chrome DevTools — Network",
   "source2Url": "https://developer.chrome.com/docs/devtools/network/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "fetch-kirim-header-custom",
 "langs": {
  "id": {
   "title": "Cara Kirim Header Custom dengan Fetch di Clincoo",
   "desc": "Tata cara menambahkan header seperti Content-Type atau Authorization pada permintaan fetch Clincoo.",
   "content": "<p class=\"mb-4\">Header default tidak cukup untuk API yang butuh token atau JSON.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Objek headers</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ...' } pada opsi fetch.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di Network tab</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka DevTools Network, pastikan header terkirim. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Headers",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Headers",
   "sourceSnippet": "The Headers interface of the Fetch API allows you to perform various actions on HTTP request and response headers.",
   "source2": "MDN — Fetch options",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/fetch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Send Custom Headers with Fetch in Clincoo",
   "desc": "How to add headers such as Content-Type or Authorization to Clincoo fetch requests.",
   "content": "<p class=\"mb-4\">Default headers are not enough for APIs that need a token or JSON.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Headers object</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ...' } to the fetch options.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in the Network tab</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open DevTools Network and confirm the headers were sent. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Headers",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Headers",
   "sourceSnippet": "The Headers interface of the Fetch API allows you to perform various actions on HTTP request and response headers.",
   "source2": "MDN — Fetch options",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/fetch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "fetch-gunakan-formdata-untuk-unggah",
 "langs": {
  "id": {
   "title": "Cara Gunakan FormData untuk Unggah File dengan Fetch di Clincoo",
   "desc": "Tata cara mengirim file dan field form dengan FormData melalui fetch tanpa mengatur Content-Type manual.",
   "content": "<p class=\"mb-4\">FormData mengatur boundary sendiri; jangan set Content-Type manual.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat FormData</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> new FormData(); append('file', fileInput.files[0]); lalu fetch(url, { method: 'POST', body: formData }).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan set Content-Type</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> biarkan browser yang mengatur. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — FormData",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/FormData",
   "sourceSnippet": "The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values.",
   "source2": "MDN — Using FormData",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use FormData to Upload Files with Fetch in Clincoo",
   "desc": "How to send files and form fields with FormData via fetch without manually setting Content-Type.",
   "content": "<p class=\"mb-4\">FormData sets the boundary itself; do not set Content-Type manually.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create FormData</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> new FormData(); append('file', fileInput.files[0]); then fetch(url, { method: 'POST', body: formData }).</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not set Content-Type</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> let the browser set it. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — FormData",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/FormData",
   "sourceSnippet": "The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values.",
   "source2": "MDN — Using FormData",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "fetch-retry-dengan-backoff-sederhana",
 "langs": {
  "id": {
   "title": "Cara Retry Fetch dengan Backoff Sederhana di Clincoo",
   "desc": "Tata cara mencoba ulang permintaan fetch yang gagal sementara dengan jeda yang bertambah di Clincoo.",
   "content": "<p class=\"mb-4\">Error sementara seperti 503 atau jaringan putus bisa dicoba ulang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fungsi retry</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat async function yang loop max 3 kali, await delay(2**i * 100), panggil fetch.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan retry error 4xx</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> hanya retry 5xx atau network. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Fetch",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "sourceSnippet": "The Fetch API provides an interface for fetching resources.",
   "source2": "Clincoo Blog",
   "source2Url": "https://blog.clincoo.buzz/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Retry Fetch with Simple Backoff in Clincoo",
   "desc": "How to retry temporarily failed fetch requests with increasing delays in Clincoo.",
   "content": "<p class=\"mb-4\">Temporary errors like 503 or network drops can be retried.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Retry function</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> make an async function that loops max 3 times, await delay(2**i * 100), call fetch.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not retry 4xx</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> only retry 5xx or network. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Fetch",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "sourceSnippet": "The Fetch API provides an interface for fetching resources.",
   "source2": "Clincoo Blog",
   "source2Url": "https://blog.clincoo.buzz/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
]
};