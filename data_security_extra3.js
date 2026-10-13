// Clincoo Docs — tambah 1 artikel security (13 Oktober 2026, 17:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.security) return;
  var list = window.countryDataFiles.security.articles;
  list.push({
    "id": "security-gunakan-permissions-policy",
    "langs": {
      "id": {
        "title": "Cara Atur Permissions-Policy untuk Batasi Fitur Browser di Clincoo",
        "desc": "Tata cara menambahkan header Permissions-Policy agar fitur seperti camera, geolocation, atau microphone tidak bisa diakses tanpa izin di Clincoo.",
        "content": "<p class=\"mb-4\">Permissions-Policy membatasi API browser yang berisiko.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set header</h2><p class=\"mb-4\">Di server untuk <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tambahkan Permissions-Policy: camera=(), microphone=(), geolocation=().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di konsol</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> coba akses navigator.geolocation, harus ditolak. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
        "source": "MDN — Permissions-Policy",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy",
        "sourceSnippet": "The Permissions-Policy header allows a site to control which features and APIs can be used in the browser.",
        "source2": "web.dev — Permissions Policy",
        "source2Url": "https://web.dev/articles/permissions-policy",
        "source3": "Clincoo App",
        "source3Url": "https://app.clincoo.buzz/"
      },
      "en": {
        "title": "How to Set Permissions-Policy to Restrict Browser Features in Clincoo",
        "desc": "How to add a Permissions-Policy header so features like camera, geolocation, or microphone cannot be accessed without permission in Clincoo.",
        "content": "<p class=\"mb-4\">Permissions-Policy restricts risky browser APIs.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set the header</h2><p class=\"mb-4\">On the server for <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> add Permissions-Policy: camera=(), microphone=(), geolocation=().</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in the console</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> try accessing navigator.geolocation; it should be denied. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
        "source": "MDN — Permissions-Policy",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy",
        "sourceSnippet": "The Permissions-Policy header allows a site to control which features and APIs can be used in the browser.",
        "source2": "web.dev — Permissions Policy",
        "source2Url": "https://web.dev/articles/permissions-policy",
        "source3": "Clincoo App",
        "source3Url": "https://app.clincoo.buzz/"
      }
    }
  });
})();
