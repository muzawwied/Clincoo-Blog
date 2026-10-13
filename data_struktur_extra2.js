// Clincoo Docs — tambah 1 artikel struktur (13 Oktober 2026, 06:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.struktur) return;
  var list = window.countryDataFiles.struktur.articles;
  list.push({
 "id": "struktur-tambah-readme-md-di-proyek",
 "langs": {
  "id": {
   "title": "Cara Tambah README.md di Proyek Clincoo",
   "desc": "Tata cara membuat README.md yang menjelaskan cara setup dan struktur folder proyek Clincoo.",
   "content": "<p class=\"mb-4\">README.md membantu orang baru memahami proyek dengan cepat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Isi bagian penting</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis judul, deskripsi singkat, cara install, cara jalankan, dan struktur folder.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Update saat berubah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan README sesuai kode terbaru. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "GitHub — About READMEs",
   "sourceUrl": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
   "sourceSnippet": "A README file is used to communicate important information about your project.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Add a README.md to a Clincoo Project",
   "desc": "How to create a README.md that explains setup and folder structure for a Clincoo project.",
   "content": "<p class=\"mb-4\">A README.md helps new people understand the project quickly.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fill important sections</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write the title, short description, how to install, how to run, and folder structure.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Update when it changes</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> make sure the README matches the latest code. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "GitHub — About READMEs",
   "sourceUrl": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
   "sourceSnippet": "A README file is used to communicate important information about your project.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
});
  list.push({
 "id": "struktur-tambah-gitignore-yang-tepat",
 "langs": {
  "id": {
   "title": "Cara Tambah .gitignore yang Tepat di Proyek Clincoo",
   "desc": "Tata cara membuat .gitignore agar file sementara, node_modules, dan rahasia tidak ikut commit di Clincoo.",
   "content": "<p class=\"mb-4\">.gitignore yang lengkap mencegah file tidak perlu masuk repo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Isi pola umum</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan node_modules/, .env, dist/, *.log, .DS_Store.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan git status</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jalankan git status untuk pastikan file diabaikan. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — gitignore",
   "sourceUrl": "https://git-scm.com/docs/gitignore",
   "sourceSnippet": "A gitignore file specifies intentionally untracked files that Git should ignore.",
   "source2": "GitHub — Ignoring files",
   "source2Url": "https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Add a Proper .gitignore to a Clincoo Project",
   "desc": "How to create a .gitignore so temporary files, node_modules, and secrets are not committed in Clincoo.",
   "content": "<p class=\"mb-4\">A complete .gitignore prevents unnecessary files from entering the repo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include common patterns</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add node_modules/, .env, dist/, *.log, .DS_Store.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with git status</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> run git status to confirm ignored files. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Git — gitignore",
   "sourceUrl": "https://git-scm.com/docs/gitignore",
   "sourceSnippet": "A gitignore file specifies intentionally untracked files that Git should ignore.",
   "source2": "GitHub — Ignoring files",
   "source2Url": "https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
});
})();
