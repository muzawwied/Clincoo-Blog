// Clincoo Docs — kategori MCP (12 Oktober 2026, 22:00 WIB) — tambah 5 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["mcp"] = {
 "names": { "id": "MCP", "en": "MCP" },
 "articles": [
{
 "id": "mcp-batas-izin-tool-sebelum-dijalankan",
 "langs": {
  "id":   {
   "title": "Cara Batasi Izin Tool MCP Sebelum Dijalankan",
   "desc": "Tata cara menetapkan tool MCP Clincoo yang boleh dibaca atau diubah sebelum asisten menjalankannya.",
   "content": "<p class=\"mb-4\">Tool MCP yang boleh menulis file atau mengirim permintaan harus dibatasi sebelum obrolan, bukan setelah ada perubahan yang tidak diinginkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tetapkan izin minimum</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> catat tool yang boleh dibaca saja, misalnya status akun, dan tool yang boleh mengubah proyek. Jangan tempel token ke prompt. Kalau asisten butuh cek koneksi, minta get-me atau setara, bukan daftar rahasia.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji satu tool lalu hentikan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jalankan satu tool, baca hasilnya, baru lanjut. Jika tool meminta ulang konfigurasi, cek URL dasar di catatan <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Tolak saran yang memperluas izin hanya karena langkah sebelumnya gagal.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "MCP tools are invoked by the client; the user should control which tools a session may call.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en":   {
   "title": "How to Limit MCP Tool Permission Before a Run",
   "desc": "How to decide which Clincoo MCP tools may read or change data before an assistant runs them.",
   "content": "<p class=\"mb-4\">An MCP tool that can write files or send requests should be limited before the chat, not after an unwanted change.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set the minimum permission</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> note which tools are read-only, such as account status, and which tools may change a project. Do not paste a token into the prompt. If the assistant needs a connection check, ask for get-me or the equivalent, not a list of secrets.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Run one tool, then stop</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> run one tool, read the result, then continue. If the tool asks for configuration again, check the base URL in the note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Reject a suggestion that widens permission only because the previous step failed.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "MCP tools are invoked by the client; the user should control which tools a session may call.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-debug-koneksi-server",
 "langs": {
  "id": {
   "title": "Cara Debug Koneksi Server MCP yang Gagal",
   "desc": "Tata cara memeriksa URL, token, dan respons saat tool MCP Clincoo tidak bisa terhubung.",
   "content": "<p class=\"mb-4\">Koneksi MCP yang gagal sering karena URL dasar salah, token kedaluwarsa, atau server tidak merespons.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek URL dan status</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pastikan URL server MCP benar dan bisa dijangkau. Jalankan tool get-me atau list tools untuk melihat kode status. Jangan ulangi permintaan yang sama tanpa melihat error message.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat error lalu perbaiki</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> salin pesan error lengkap. Bandingkan dengan catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Perbaiki satu hal (URL atau token) lalu uji ulang sebelum menambah tool lain.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Clients connect to MCP servers over a transport and discover available tools.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug a Failed MCP Server Connection",
   "desc": "How to check the URL, token, and response when a Clincoo MCP tool cannot connect.",
   "content": "<p class=\"mb-4\">An MCP connection that fails is often caused by a wrong base URL, an expired token, or a server that does not respond.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the URL and status</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> confirm the MCP server URL is correct and reachable. Run a get-me or list-tools call to see the status code. Do not repeat the same request without reading the error message.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record the error, then fix it</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> copy the full error message. Compare it with the note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Fix one thing (URL or token) and test again before adding another tool.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Clients connect to MCP servers over a transport and discover available tools.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-daftar-tool-yang-tersedia",
 "langs": {
  "id": {
   "title": "Cara Daftar Tool MCP yang Tersedia dengan Aman",
   "desc": "Tata cara melihat daftar tool MCP Clincoo tanpa menjalankan aksi yang mengubah data.",
   "content": "<p class=\"mb-4\">Menjalankan tool secara acak bisa mengubah proyek. Lebih aman melihat daftar tool dulu sebelum memilih yang diizinkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Minta list tools</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> minta asisten memanggil endpoint list atau tools/list. Baca nama, deskripsi, dan apakah tool itu read-only. Jangan setujui eksekusi otomatis pada sesi pertama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat yang boleh dan yang tidak</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> simpan daftar di catatan proyek. Bandingkan dengan dokumentasi di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Hanya aktifkan tool yang benar-benar dibutuhkan untuk tugas saat ini.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Servers expose a list of tools that clients may discover and call with user permission.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to List Available MCP Tools Safely",
   "desc": "How to see the list of Clincoo MCP tools without running an action that changes data.",
   "content": "<p class=\"mb-4\">Running tools at random can change a project. It is safer to see the list of tools first before choosing which ones are allowed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ask for the tools list</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ask the assistant to call the list or tools/list endpoint. Read the name, description, and whether the tool is read-only. Do not approve automatic execution on the first session.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record what is allowed and what is not</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> save the list in the project note. Compare it with the documentation on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Enable only the tools that are actually needed for the current task.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Servers expose a list of tools that clients may discover and call with user permission.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-tangani-error-tool",
 "langs": {
  "id": {
   "title": "Cara Tangani Error Tool MCP yang Dikembalikan",
   "desc": "Tata cara membaca dan menangani pesan error dari tool MCP Clincoo tanpa mengulang permintaan yang sama.",
   "content": "<p class=\"mb-4\">Error dari tool MCP sering berisi kode status atau pesan yang menjelaskan masalah, bukan alasan untuk langsung mengulang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca pesan sebelum ulang</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> salin pesan error lengkap. Periksa apakah itu 401, 404, atau timeout. Perbaiki penyebabnya dulu, misalnya token atau path, baru coba lagi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi percobaan ulang</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jangan ulang lebih dari dua kali. Jika masih gagal, catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> dan minta bantuan dengan pesan error utuh, bukan ringkasan.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Tool calls return results or errors that the client should surface to the user.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Handle an Error Returned by an MCP Tool",
   "desc": "How to read and handle an error message from a Clincoo MCP tool without repeating the same request.",
   "content": "<p class=\"mb-4\">An error from an MCP tool often contains a status code or message that explains the problem, not a reason to retry immediately.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the message before retrying</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> copy the full error message. Check whether it is a 401, 404, or timeout. Fix the cause first, such as the token or path, then try again.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit the retries</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> do not retry more than twice. If it still fails, record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> and ask for help with the full error message, not a summary.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Tool calls return results or errors that the client should surface to the user.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-cache-hasil-tool-untuk-hemat",
 "langs": {
  "id": {
   "title": "Cara Cache Hasil Tool MCP agar Tidak Berulang",
   "desc": "Tata cara menyimpan hasil tool MCP Clincoo sementara untuk menghindari pemanggilan berulang yang sama.",
   "content": "<p class=\"mb-4\">Memanggil tool yang sama berkali-kali membuang kuota dan waktu. Cache sederhana di sesi bisa membantu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan hasil di variabel sesi</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> setelah dapat hasil list tools atau get status, simpan di objek. Cek dulu sebelum panggil ulang. Jangan cache data yang berubah cepat seperti log terbaru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bersihkan saat sesi baru</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> mulai obrolan baru, cache harus kosong. Catat strategi di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Clients may cache tool results within a session to reduce repeated calls.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Cache MCP Tool Results to Avoid Repeats",
   "desc": "How to temporarily store Clincoo MCP tool results to avoid calling the same tool repeatedly.",
   "content": "<p class=\"mb-4\">Calling the same tool many times wastes quota and time. A simple session cache can help.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Store results in a session variable</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> after getting a list-tools or status result, save it in an object. Check first before calling again. Do not cache fast-changing data such as latest logs.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Clear on a new session</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> start a new chat; the cache should be empty. Record the strategy on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Clients may cache tool results within a session to reduce repeated calls.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-update-token-kedaluwarsa",
 "langs": {
  "id": {
   "title": "Cara Update Token MCP yang Kedaluwarsa di Clincoo",
   "desc": "Tata cara mengganti token MCP yang expired tanpa merusak konfigurasi sesi yang sedang berjalan.",
   "content": "<p class=\"mb-4\">Token MCP yang kedaluwarsa membuat semua tool gagal dengan 401. Ganti segera sebelum sesi terputus total.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ambil token baru dari dashboard</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pengaturan MCP, salin token baru, lalu tempel di konfigurasi server di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>. Jangan bagikan token di chat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji ulang koneksi</h2><p class=\"mb-4\">Panggil get-me setelah ganti. Jika berhasil, lanjutkan tugas. Catat waktu expiry di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya bisa diingatkan lebih awal.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Authentication tokens should be rotated before they expire to keep tool access continuous.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Update an Expired MCP Token in Clincoo",
   "desc": "How to replace an expired MCP token without breaking the current session configuration.",
   "content": "<p class=\"mb-4\">An expired MCP token makes every tool fail with 401. Replace it before the session drops completely.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Get a new token from the dashboard</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open MCP settings, copy the new token, then paste it into the server config in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>. Do not share the token in chat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Retest the connection</h2><p class=\"mb-4\">Call get-me after the change. If it succeeds, continue the task. Record the expiry time on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so you can be reminded earlier.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Authentication tokens should be rotated before they expire to keep tool access continuous.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-hindari-loop-pemanggilan-tool",
 "langs": {
  "id": {
   "title": "Cara Hindari Loop Pemanggilan Tool MCP di Clincoo",
   "desc": "Tata cara mencegah asisten memanggil tool yang sama berulang tanpa kemajuan di sesi MCP.",
   "content": "<p class=\"mb-4\">Loop tool call menghabiskan kuota dan membuat sesi tidak bergerak maju.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set batas percobaan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> instruksikan asisten: jika tool yang sama gagal dua kali, berhenti dan minta konfirmasi manusia. Jangan auto-retry tanpa perubahan input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pantau log sesi</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cek history pemanggilan. Jika sama terus, batalkan dan mulai ulang dengan konteks lebih jelas. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Clients should limit repeated tool invocations to avoid infinite loops and quota waste.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid MCP Tool Call Loops in Clincoo",
   "desc": "How to stop an assistant from calling the same MCP tool repeatedly without progress.",
   "content": "<p class=\"mb-4\">A tool-call loop wastes quota and keeps the session from moving forward.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set a retry limit</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> instruct the assistant: if the same tool fails twice, stop and ask for human confirmation. Do not auto-retry without changing the input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Watch the session log</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> check the call history. If it keeps repeating, cancel and restart with clearer context. Record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Clients should limit repeated tool invocations to avoid infinite loops and quota waste.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-uji-tool-di-local",
 "langs": {
  "id": {
   "title": "Cara Uji Tool MCP di Environment Lokal Clincoo",
   "desc": "Tata cara menjalankan dan memverifikasi tool MCP sebelum menggunakannya di sesi produksi.",
   "content": "<p class=\"mb-4\">Uji tool di lokal mengurangi risiko perubahan yang tidak diinginkan di proyek nyata.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Siapkan mock atau sandbox</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat folder uji atau gunakan mode read-only. Panggil tool dengan input kecil dan catat output.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan dengan harapan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan hasil sesuai dokumentasi. Jika beda, jangan lanjut ke proyek utama. Simpan hasil uji di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Test tool behavior in a controlled environment before allowing it in production sessions.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Test an MCP Tool in a Local Clincoo Environment",
   "desc": "How to run and verify an MCP tool before using it in a production session.",
   "content": "<p class=\"mb-4\">Testing a tool locally reduces the risk of unwanted changes in a real project.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Prepare a mock or sandbox</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create a test folder or use read-only mode. Call the tool with small input and record the output.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare with expectations</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm the result matches the docs. If it differs, do not proceed to the main project. Save the test result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Test tool behavior in a controlled environment before allowing it in production sessions.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-format-hasil-tool-untuk-ui",
 "langs": {
  "id": {
   "title": "Cara Format Hasil Tool MCP agar Mudah Ditampilkan di Clincoo",
   "desc": "Tata cara mengubah output mentah tool MCP menjadi teks yang rapi untuk pengguna.",
   "content": "<p class=\"mb-4\">Output tool sering berupa JSON panjang. Format ulang supaya mudah dibaca di UI.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Parse lalu ringkas</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ambil field penting saja, misalnya status dan pesan, lalu tampilkan dalam paragraf atau daftar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji keterbacaan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan teks tidak membanjiri layar. Simpan template format di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Tool results should be presented to the user in a readable form, not raw dumps.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Format MCP Tool Results for Display in Clincoo",
   "desc": "How to turn raw MCP tool output into clean text that is easy for users to read.",
   "content": "<p class=\"mb-4\">Tool output is often long JSON. Reformat it so it is easy to read in the UI.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Parse then summarize</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> take only the important fields, such as status and message, then show them as a paragraph or list.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test readability</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure the text does not flood the screen. Save the format template on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Tool results should be presented to the user in a readable form, not raw dumps.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "mcp-baca-status-proyek-dengan-tool",
 "langs": {
  "id": {
   "title": "Cara Baca Status Proyek Clincoo dengan Tool MCP",
   "desc": "Tata cara memakai tool MCP untuk mengecek status file atau proyek tanpa membuka editor secara manual.",
   "content": "<p class=\"mb-4\">Tool status membantu melihat ringkasan proyek dengan cepat sebelum mengubah apa pun.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Panggil tool status</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> minta asisten menjalankan tool get-status atau setara. Baca daftar file yang berubah atau error yang ada.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Putuskan langkah berikutnya</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gunakan hasil itu untuk memilih file mana yang perlu dibuka. Catat ringkasan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Read-only tools can report project status without modifying any files.",
   "source2": "Clincoo Docs — server MCP",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read Clincoo Project Status with an MCP Tool",
   "desc": "How to use an MCP tool to check file or project status without opening the editor manually.",
   "content": "<p class=\"mb-4\">A status tool helps you see a project summary quickly before changing anything.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Call the status tool</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ask the assistant to run a get-status tool or equivalent. Read the list of changed files or existing errors.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Decide the next step</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> use that result to choose which file to open. Record the summary on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Model Context Protocol — specification",
   "sourceUrl": "https://modelcontextprotocol.io/specification/2025-06-18",
   "sourceSnippet": "Read-only tools can report project status without modifying any files.",
   "source2": "Clincoo Docs — MCP server",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/server-mcp-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};
