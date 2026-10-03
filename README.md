# Clincoo-Blog

Blog umum Clincoo — **blog.clincoo.buzz**. Isinya pembahasan umum: aplikasi lain,
topik viral, artikel menarik. Panduan resmi Clincoo ada di **docs.clincoo.buzz**
(repo `Clinqoo-Blog`).

## Struktur
- `index.html` — beranda, daftar kartu artikel + pencarian (dibaca dari `articles.js`)
- `articles.js` — data artikel: slug, title, desc, date
- `<slug>/index.html` — satu folder per artikel, URL jadi `blog.clincoo.buzz/<slug>/`
- `_redirects` — jalur lama (mulai, dokumentasi, bantuan, legal, tentang) diarahkan ke docs.clincoo.buzz

## Nambah artikel baru
1. Copy `selamat-datang/index.html` jadi `<slug>/index.html`, ganti judul, tanggal, dan isi.
2. Tambah entri di `articles.js` (slug, title, desc, date).
3. Tambah URL di `sitemap.xml`.
4. Commit & push ke `main` — deploy otomatis via Cloudflare Pages (project `clincoo-blog`).
