// Loader Clincoo Docs: muat semua file data berurutan lalu app.js.
// [12 Okt 2026 FIX] Versi lama merujuk fungsi "loadExtra" yang tidak pernah
// didefinisikan -> ReferenceError -> app.js tidak pernah dimuat -> halaman
// utama kosong. Sekarang satu rantai generik: file manapun gagal (404/parse)
// TIDAK menghentikan rantai; app.js tetap dimuat.
(function() {
  var files = [
    'data_clincoo.js',
    'data_debugcss.js',
    'data_debugcss_extra.js',
    'data_debugcss_extra2.js',
    'data_overscroll.js',
    'data_vitals.js',
    'data_vitals_extra.js',
    'data_filter.js',
    'data_security.js',
    'data_security_extra2.js',
    'data_struktur.js',
    'data_struktur_extra.js',
    'data_pwa.js',
    'data_pwa_extra.js',
    'data_ai_stuck.js',
    'data_typescript.js',
    'data_containerqueries.js',
    'data_webworker.js',
    'data_web_components.js'
  ];
  var i = 0;
  function loadApp() {
    var a = document.createElement('script');
    a.src = 'app.js?v=12';
    a.onerror = function () { /* app inti gagal dimuat: tampilkan pesan ramah */ 
      var el = document.getElementById('app') || document.body;
      el.innerHTML = '<div class="text-center py-12 text-gray-500" style="padding:24px">Gagal memuat dokumentasi. Muat ulang halaman ya.</div>';
    };
    document.body.appendChild(a);
  }
  function next() {
    if (i >= files.length) { loadApp(); return; }
    var e = document.createElement('script');
    e.src = files[i] + '?v=1';
    e.onload = next;
    e.onerror = next; // file data hilang/rusak = lewati, jangan matikan rantai
    document.body.appendChild(e);
    i++;
  }
  next();
})();
