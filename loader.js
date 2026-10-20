// Loader Clincoo Docs: muat file data berurutan lalu app.js.
// [20 Okt] Bersih besar: kategori pengisi generik (AI filler) dihapus —
// hanya dokumentasi resmi Clincoo yang tersisa: Memulai, Dokumentasi,
// Pusat Bantuan, Legal, Cerita, Komunitas.
(function() {
  var files = [
    'data_clincoo.js',
    'data_komunitas.js',
    'data_komunitas_extra.js',
    'data_komunitas_extra2.js'
  ];
  var i = 0;
  function next() {
    if (i >= files.length) {
      var s = document.createElement('script');
      s.src = 'app.js?v=20';
      document.head.appendChild(s);
      return;
    }
    var f = files[i++];
    var el = document.createElement('script');
    el.src = f;
    el.onload = next;
    el.onerror = next; // file gagal tidak menghentikan rantai
    document.head.appendChild(el);
  }
  next();
})();