(function () {
  'use strict';

  var storageKey = 'clincoo-docs-language';
  var validLanguages = { id: true, en: true };

  function readPreference() {
    try {
      var value = localStorage.getItem(storageKey);
      return validLanguages[value] ? value : 'id';
    } catch (e) {
      return 'id';
    }
  }

  function savePreference(value) {
    if (!validLanguages[value]) return;
    try { localStorage.setItem(storageKey, value); } catch (e) {}
  }

  function isEnglishPath(pathname) {
    return /(?:^|\/)index\.en(?:\.html)?$/i.test(pathname);
  }

  function localizedPath(pathname, language) {
    var path = pathname || '/';
    var scope = path.match(/^\/(dokumentasi|legal)(?:\/|$)/i);
    if (!scope) return path;

    if (language === 'en') {
      if (isEnglishPath(path)) return path;
      if (/\/index\.html$/i.test(path)) return path.replace(/index\.html$/i, 'index.en.html');
      return (path.endsWith('/') ? path : path + '/') + 'index.en.html';
    }

    if (isEnglishPath(path)) {
      var base = path.replace(/index\.en(?:\.html)?$/i, '');
      return base.endsWith('/') ? base : base + '/';
    }
    return path;
  }

  var params = new URLSearchParams(window.location.search);
  var queryLanguage = params.get('lang');
  if (isEnglishPath(window.location.pathname)) {
    savePreference('en');
  } else if (validLanguages[queryLanguage]) {
    savePreference(queryLanguage);
  }

  var preferredLanguage = readPreference();
  var targetPath = localizedPath(window.location.pathname, preferredLanguage);
  if (targetPath !== window.location.pathname) {
    window.location.replace(targetPath + window.location.search + window.location.hash);
    return;
  }

  // Keep the home-page language in the URL as well as storage so a shared link
  // and a refresh both restore the selected language.
  if (window.location.pathname === '/' && preferredLanguage === 'en' && queryLanguage !== 'en') {
    params.set('lang', 'en');
    window.location.replace('/?' + params.toString() + window.location.hash);
    return;
  }

  document.addEventListener('click', function (event) {
    var anchor = event.target && event.target.closest ? event.target.closest('a[href]') : null;
    if (!anchor) return;

    var url;
    try { url = new URL(anchor.href, window.location.href); } catch (e) { return; }
    if (url.origin !== window.location.origin) return;

    var language = readPreference();
    var nextPath = localizedPath(url.pathname, language);
    if (nextPath !== url.pathname) {
      url.pathname = nextPath;
      anchor.href = url.toString();
      return;
    }

    if (url.pathname === '/' && language === 'en') {
      url.searchParams.set('lang', 'en');
      anchor.href = url.toString();
    } else if (url.pathname === '/' && language === 'id' && url.searchParams.get('lang') === 'en') {
      url.searchParams.delete('lang');
      anchor.href = url.toString();
    }
  }, true);
})();
