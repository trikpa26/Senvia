/**
 * Senvia — odabir jezika.
 * Jezik se čita iz adrese (?lang=en | ?lang=de; bez parametra = hr), pa iz localStorage.
 * Kad se jezik promijeni, adresa, <html lang>, canonical i hreflang se ažuriraju,
 * tako da EN i DE verzije imaju vlastite adrese koje Google može indeksirati.
 */
const KEY = 'senvia-lang';
export const LANGS = ['hr', 'en', 'de'];
export const LANG_LABEL = { hr: 'Hrvatski', en: 'English', de: 'Deutsch' };

const urlLang = () => {
  try { const v = new URLSearchParams(location.search).get('lang'); return LANGS.indexOf(v) > -1 ? v : null; } catch (e) { return null; }
};

const urlFor = (l) => {
  const u = new URL(location.href);
  if (l === 'hr') u.searchParams.delete('lang'); else u.searchParams.set('lang', l);
  return u;
};

function syncHead(l) {
  try {
    document.documentElement.lang = l;
    const base = 'https://www.senviaapp.com' + location.pathname;
    const href = (x) => x === 'hr' ? base : base + '?lang=' + x;
    let c = document.querySelector('link[rel="canonical"]');
    if (c) c.setAttribute('href', href(l));
    document.querySelectorAll('link[data-senvia-hreflang]').forEach(n => n.remove());
    LANGS.concat('x-default').forEach(x => {
      const el = document.createElement('link');
      el.rel = 'alternate'; el.hreflang = x; el.href = href(x === 'x-default' ? 'hr' : x);
      el.setAttribute('data-senvia-hreflang', '');
      document.head.appendChild(el);
    });
  } catch (e) {}
}

function syncUrl(l) {
  try { const u = urlFor(l); if (u.href !== location.href) history.replaceState(history.state, '', u); } catch (e) {}
}

// Automatski odabir kad korisnik još nije birao jezik:
// Hrvatska, BiH, Srbija, Slovenija i Crna Gora (jezik preglednika ili vremenska zona) → hr;
// Njemačka i Austrija → de (osim ako je preglednik na hrvatskom, npr. dijaspora); sve ostalo → en.
// Tražilice (Googlebot i sl.) uvijek dobivaju hr na adresi bez ?lang.
function detectLang() {
  try {
    if (/bot|crawl|spider|slurp|lighthouse/i.test(navigator.userAgent || '')) return 'hr';
    const langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || '']).map(x => String(x).toLowerCase());
    if (langs.some(x => /^(hr|bs|sr|sh|cnr|me|sl)\b/.test(x))) return 'hr';
    const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '');
    if (/^Europe\/(Zagreb|Sarajevo|Belgrade|Ljubljana|Podgorica)$/.test(tz)) return 'hr';
    if (/^Europe\/(Vienna|Berlin|Busingen)$/.test(tz)) return 'de';
    if (langs.some(x => /^de-(de|at)\b/.test(x))) return 'de';
  } catch (e) {}
  return 'en';
}

export function getLang() {
  const u = urlLang();
  if (u) return u;
  try { const v = localStorage.getItem(KEY); if (LANGS.indexOf(v) > -1) return v; } catch (e) {}
  return detectLang();
}

export function setLang(l) {
  if (LANGS.indexOf(l) === -1) return;
  try { localStorage.setItem(KEY, l); } catch (e) {}
  syncUrl(l);
  syncHead(l);
  window.dispatchEvent(new CustomEvent('senvia-lang', { detail: l }));
}

export function onLang(cb) {
  const handler = (e) => cb((e && e.detail) || getLang());
  window.addEventListener('senvia-lang', handler);
  return () => window.removeEventListener('senvia-lang', handler);
}

/** Skrola do elementa s id-em (npr. #prijava), uz razmak za zaglavlje. Čeka da se sadržaj iscrta. */
function scrollToId(id, tries) {
  const el = id && document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
    return;
  }
  if ((tries || 0) < 40) setTimeout(() => scrollToId(id, (tries || 0) + 1), 100);
}

/**
 * Klikovi na interne poveznice:
 * - poveznica na istu stranicu s #sidrom: odmah skrola, bez ponovnog učitavanja
 * - poveznica na drugu stranicu: dodaje ?lang= da jezik ostane u adresi
 */
function patchLinks() {
  try {
    document.addEventListener('click', (e) => {
      const a = e.target && e.target.closest && e.target.closest('a[href]');
      if (!a || a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const u = new URL(a.getAttribute('href'), location.href);
      if (u.origin !== location.origin) return;
      const samePage = u.pathname.replace(/\/index\.html$/, '/') === location.pathname.replace(/\/index\.html$/, '/');
      if (samePage && u.hash) {
        e.preventDefault();
        history.replaceState(history.state, '', location.pathname + location.search + u.hash);
        scrollToId(decodeURIComponent(u.hash.slice(1)));
        return;
      }
      const cur = getLang();
      if (cur === 'hr' || u.searchParams.has('lang')) return;
      u.searchParams.set('lang', cur);
      a.setAttribute('href', u.pathname + u.search + u.hash);
    }, true);
  } catch (e) {}
}

(function init() {
  const l = urlLang();
  if (l) { try { localStorage.setItem(KEY, l); } catch (e) {} }
  const cur = getLang();
  syncUrl(cur);
  syncHead(cur);
  patchLinks();
  if (location.hash) scrollToId(decodeURIComponent(location.hash.slice(1)));
})();

/** t({hr:…, en:…, de:…}, lang) — uvijek ima fallback na hrvatski. */
export const pick = (obj, lang) => (obj && (obj[lang] || obj.hr)) || '';
