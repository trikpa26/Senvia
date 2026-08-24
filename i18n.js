/**
 * Senvia — odabir jezika. Sprema se u localStorage i dijeli između svih stranica.
 * Backend/CMS treba isporučiti isti ključ (hr | en | de) za server-rendered verziju.
 */
const KEY = 'senvia-lang';
export const LANGS = ['hr', 'en', 'de'];
export const LANG_LABEL = { hr: 'Hrvatski', en: 'English', de: 'Deutsch' };

export function getLang() {
  try {
    const v = localStorage.getItem(KEY);
    if (LANGS.indexOf(v) > -1) return v;
  } catch (e) {}
  return 'hr';
}

export function setLang(l) {
  if (LANGS.indexOf(l) === -1) return;
  try { localStorage.setItem(KEY, l); } catch (e) {}
  try { document.documentElement.lang = l; } catch (e) {}
  window.dispatchEvent(new CustomEvent('senvia-lang', { detail: l }));
}

export function onLang(cb) {
  const handler = (e) => cb((e && e.detail) || getLang());
  window.addEventListener('senvia-lang', handler);
  return () => window.removeEventListener('senvia-lang', handler);
}

/** t({hr:…, en:…, de:…}, lang) — uvijek ima fallback na hrvatski. */
export const pick = (obj, lang) => (obj && (obj[lang] || obj.hr)) || '';
