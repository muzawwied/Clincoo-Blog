# Template Artikel Blog (id)

Copy kerangka ini ke `<slug>/index.html` di repo Clincoo-Blog.
Ganti: JUDUL, DESC, TANGGAL-ISO (mis. 2026-10-03), tanggal tampil (mis. 3 Okt 2026), dan isi.
URL artikel jadi: blog.clincoo.buzz/`<slug>`/

```html
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JUDUL — Clincoo Blog</title>
<meta name="description" content="DESC">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://blog.clincoo.buzz/SLUG/">
<meta property="og:type" content="article">
<meta property="og:title" content="JUDUL — Clincoo Blog">
<meta property="og:description" content="DESC">
<meta property="og:url" content="https://blog.clincoo.buzz/SLUG/">
<meta property="og:site_name" content="Clincoo Blog">
<meta property="og:locale" content="id_ID">
<meta property="og:image" content="https://blog.clincoo.buzz/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Clincoo Blog">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="JUDUL — Clincoo Blog">
<meta name="twitter:description" content="DESC">
<meta name="twitter:image" content="https://blog.clincoo.buzz/og-image.png">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#ffffff">
<link rel="preconnect" href="https://cdn.tailwindcss.com">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          gray: { 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 500: '#6b7280', 900: '#111827' }
        }
      }
    }
  }
</script>
<style>
  body { -webkit-tap-highlight-color: transparent; }
  .fade-in { animation: fadeIn 0.35s ease-out; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  .prose a { color: #111827; text-decoration: underline; text-underline-offset: 3px; }
  .prose a:hover { color: #374151; }
  .prose h2 { font-size: 1.25rem; font-weight: 700; margin: 1.8rem 0 0.7rem; }
  .prose p { font-size: 0.95rem; line-height: 1.85; color: #374151; margin-bottom: 1.1rem; }
  .prose ul, .prose ol { margin: 0 0 1.1rem 1.3rem; }
  .prose li { font-size: 0.95rem; line-height: 1.85; color: #374151; margin-bottom: 0.3rem; }
</style>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"BlogPosting","headline":"JUDUL","datePublished":"TANGGAL-ISO","dateModified":"TANGGAL-ISO","description":"DESC","mainEntityOfPage":"https://blog.clincoo.buzz/SLUG/","image":"https://blog.clincoo.buzz/og-image.png","author":{"@type":"Organization","name":"Clincoo"},"publisher":{"@type":"Organization","name":"Clincoo"}}</script>
</head>
<body class="bg-white text-gray-900 font-sans antialiased min-h-screen flex flex-col">

<header class="sticky top-0 z-40 bg-white border-b border-gray-100 pt-3 pb-4">
  <div class="relative flex items-center justify-center max-w-2xl mx-auto px-4 sm:px-6">
    <a href="/" aria-label="Kembali ke Beranda" class="absolute left-4 sm:left-6 p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
    </a>
    <div class="text-center">
      <h1 class="text-xl font-bold text-gray-900">Clincoo Blog</h1>
    </div>
  </div>
</header>

<main class="max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-4 fade-in">
  <p class="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">TANGGAL-TAMPIL</p>
  <h2 class="text-2xl font-bold text-gray-900 mb-6">JUDUL</h2>
  <div class="prose">
    ISI ARTIKEL DI SINI
  </div>
</main>

<footer class="py-6 mt-12 border-t border-gray-200 text-center text-sm text-gray-500 w-full max-w-2xl mx-auto px-4 sm:px-6">
  &copy; 2026 Clincoo. <span>Seluruh hak cipta dilindungi.</span>
</footer>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-32K4RH4DKN"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-32K4RH4DKN',{page_path:location.pathname});</script>
</body>
</html>
```
