# Predaja developeru: Senvia web (senviaapp.com)

## Što je ovo

Kompletan redizajn i proširenje Senvia weba s jedne landing stranice na SEO strukturu
od 12 stranica + neograničen broj automatski generiranih rutnih stranica.

**Datoteke u ovom paketu su dizajn-reference napisane u HTML-u** — prototipovi koji
pokazuju željeni izgled i ponašanje, a ne produkcijski kod za copy-paste. Zadatak je
**rekreirati ove dizajne u postojećem okruženju** (Next.js, Astro, WordPress, Laravel…)
koristeći postojeće konvencije projekta. Ako okruženje još ne postoji, preporuka je
Next.js ili Astro zbog SSG/SSR-a i programatskih ruta (vidi "Rutne stranice").

**Fidelity: high-fidelity.** Boje, tipografija, spacing i interakcije su finalni.
Rekreirati pixel-perfect.

---

## Tehnologija u prototipovima (i što s njom)

Prototipovi su napisani u internom komponentnom formatu (`.dc.html`): jedna datoteka
sadrži markup (`<x-dc>`) i logiku (`class Component`, React-like state). `support.js`
je runtime tog formata — **ne prenosi se u produkciju.**

Iz svake datoteke treba: markup, inline stilove, tekstove i state-logiku. Sve ostalo
(runtime, `support.js`, `data-dc-*` atributi) je ljuska prototipa.

---

## Struktura stranica → URL mapa

| Datoteka | Produkcijski URL | Napomena |
|---|---|---|
| `Senvia Landing v2.dc.html` | `/` | naslovnica |
| `Slanje paketa.dc.html` | `/slanje-paketa` | u glavnoj navigaciji |
| `Kako radi.dc.html` | `/kako-radi` | u glavnoj navigaciji |
| `Sigurnost.dc.html` | `/sigurnost` | u glavnoj navigaciji |
| `FAQ.dc.html` | `/faq` | dropdown "Više" |
| `Blog.dc.html` | `/blog` | dropdown "Više" |
| `Usporedba.dc.html` | `/usporedba-s-klasicnom-dostavom` | dropdown "Više" |
| `Popularne rute.dc.html` | `/popularne-rute` | dropdown "Više" |
| `Austrija-Hrvatska.dc.html` | `/austrija-hrvatska` | SEO koridor, nije u navigaciji |
| `Blog - *.dc.html` | `/blog/<slug>` | 7 članaka |
| `Ruta - <slug>.dc.html` | `/slanje-paketa/<slug>` | generirano iz feeda |
| `404.dc.html` | 404 | custom |
| `Senvia Account Deletion.dc.html` | `/brisanje-racuna` | zahtjev App Storea |

Zajedničke komponente: `Nav.dc.html` (header) i `Podnozje.dc.html` (footer) — koriste ih
sve stranice. `Ruta.dc.html` je predložak rutne stranice, `Clanak.dc.html` predložak članka.

---

## Design tokens

**Boje**
| Uloga | Hex |
|---|---|
| Brand zelena (CTA, aktivno stanje) | `#2dbb54` |
| Zelena hover | `#26a449` |
| Zelena tekst / linkovi | `#1a9e44`, hover `#0e7c31` |
| Zelena tekst na svijetlom (naglasak) | `#167a38` |
| Tamna (tekst, dark sekcije) | `#12261a` |
| Tekst sekundarni | `#3c5346` |
| Tekst tercijarni / meta | `#6b8272` |
| Tekst na svijetlozelenom | `#29402f` |
| Površina svijetla | `#f4faf6` |
| Površina svijetla 2 | `#f7fbf8` |
| Akcent pozadina (pill, ikone) | `#e8f7ee` |
| Rub | `#e4efe7` |
| Rub svijetli (separator) | `#eaf2ec` |
| Rub isprekidani | `#b9d9c4` |
| Zvjezdice / rating | `#f5b301` |
| Negativno (na dark) | `#ff8f6b` |
| Selection | `#c9efd6` |

**Tipografija**
- Naslovi: **Space Grotesk** 500/600/700
- Tekst: **Instrument Sans** 400/500/600 (+ italic 400)
- Google Fonts: `family=Space+Grotesk:wght@500;600;700&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap`

**Skala (fluidna, clamp)**
- H1: `clamp(32px, 8vw, 54px)`, line-height 1.06, letter-spacing −0.02em
- H1 naslovnica: `clamp(36px, 9.6vw, 62px)`
- H2: `clamp(22px, 6.1vw, 38px)`, letter-spacing −0.015em
- H3 / naslov kartice: 18–19px, weight 600
- Lead: 19–20px, line-height 1.6
- Body: 15.5–17px, line-height 1.6–1.65
- Meta / caption: 13.5–14.5px
- Kicker: 13px, weight 700, letter-spacing 0.12em, uppercase

**Radiusi:** pill `999px` · gumb `12px` · mala kartica `16–18px` · kartica `20px` ·
panel/tablica `24px` · veliki CTA blok `28px` · mockup telefona `40px` (ekran `32px`)

**Sjene**
- header CTA: `0 1px 2px rgba(18,38,26,0.12)`
- logo: `0 2px 8px rgba(18,38,26,0.14)`
- kartica statistike: `0 16px 40px rgba(18,38,26,0.07)`
- dropdown: `0 18px 44px rgba(18,38,26,0.14)`
- mockup telefona: `0 22px 54px rgba(18,38,26,0.2)`

**Spacing**
- Kontejner: `max-width: 1280px` (tekstualne stranice 900–1060px), padding `clamp(16px, 4vw, 32px)`
- Vertikalni ritam sekcije: `clamp(38px, 6.5vw, 84px)`
- Gap između kartica: 12–18px
- Grid: `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` — N = 190/210/230/250/290/300/330/400 po sekciji

---

## Navigacija (`Nav.dc.html`)

Sticky header, `rgba(255,255,255,0.94)` + `backdrop-filter: blur(14px)`, donji rub `#eaf2ec`.

Redoslijed: logo → Kako radi · Slanje paketa · Sigurnost · dropdown **Više** →
(auto margin) → izbornik jezika → CTA "Preuzmi aplikaciju" → hamburger (mobile).

**Dropdown "Više"**: Česta pitanja, Blog, Usporedba s kurirskom službom, Popularne rute —
svaki s podnaslovom. Panel: bijeli, radius 18px, padding 8px, min-width 272px, offset
`top: calc(100% + 10px)`.

**Ponašanje dropdowna:** otvara se na **klik** (ne hover), zatvara klikom izvan headera
ili odabirom stavke. Bitno: prototip je imao bug kad je otvaranje bilo na hover — klik je
odmah zatvarao panel. U produkciji: klik + outside-click listener, ili native `<details>`.

**Breakpointi**
- `>980px`: puni desktop header
- `≤980px`: desktop nav skriven, hamburger vidljiv, meni se otvara ispod headera preko pune širine
- `≤430px`: CTA gumb skriven iz headera (ostaje u hamburger meniju)
- Svi tap targeti u mobilnom meniju ≥44px

---

## Jezici (`i18n.js`)

Tri jezika: **hr** (default), **en**, **de**. Odabir se pamti u `localStorage` pod
`senvia-lang` i emitira `window` event `senvia-lang` da se sve komponente osvježe.

U produkciji preporučeno: **prefiksirane rute** (`/`, `/en/`, `/de/`) + `hreflang`
tagovi + `<html lang>`, jer trenutni client-side prekidač nije indeksabilan. Svi
prijevodi su već napisani i nalaze se u `STR` objektima unutar svake stranice —
treba ih izvući u prijevodne datoteke (npr. `hr.json`, `en.json`, `de.json`).

Nazivi gradova imaju lokalizirane varijante (Beč / Vienna / Wien, München / Munich).

---

## Live podaci — kontrakt s backendom (`routes-data.js`)

Naslovnica prikazuje **žive podatke** koji se osvježavaju svakih 60 s. To je ključna
diferencijacija od kurirskih službi i ne smije biti statični dizajn.

```js
// GET /api/stats
{
  users: 521,          // registriranih korisnika
  rides: 182,          // objavljenih vožnji
  requests: 143,       // objavljenih zahtjeva
  delivered: 96,       // uspješno dostavljenih paketa
  stores: {
    ios:     { rating: 4.9, reviews: 34 },
    android: { rating: 4.8, reviews: 21 }
  },
  updatedAt: "2026-08-06T10:22:00Z"
}
```

```js
// GET /api/routes?active=1
[{
  slug: "bec-zagreb",
  from: "Beč", to: "Zagreb",
  fromEn: "Vienna", toEn: "Zagreb",
  fromDe: "Wien",   toDe: "Zagreb",
  activeDrivers: 14,        // broj trenutno aktivnih vozača
  priceMin: 10, priceMax: 20,
  durationHours: [4, 5],
  routeFaqs: []             // max 2 pitanja specifična za rutu
}]
```

Brojke na naslovnici animiraju se od 0 do vrijednosti (ease-out cubic, ~1.6 s).
Vrijeme osvježavanja prikazuje se kao "Osvježeno u HH:MM" s pulsirajućom zelenom točkom.

---

## Rutne stranice (`Ruta.dc.html`)

Jedan predložak, podaci iz feeda. **Nisu u glavnoj navigaciji** — dostupne preko sitemapa
i internih linkova s `/popularne-rute` i naslovnice.

Pravila:
- Stranica postoji **samo ako ruta ima ≥1 aktivnog vozača**
- Ruta bez vozača → 404 ili redirect na `/slanje-paketa`
- Cijena i trajanje prikazuju se samo ako backend ima podatke
- Sitemap se automatski regenerira s aktivnim rutama
- Meta title: `Slanje paketa {Grad A}–{Grad B} | Senvia`

Trenutno u projektu: 9 primjera (`bec-zagreb`, `graz-zagreb`, `graz-varazdin`,
`bec-osijek`, `bec-rijeka`, `linz-split`, `munchen-split`, `osijek-graz`, `rovinj-bec`).

---

## Pravne stranice

Tri dokumenta, svaki na hrvatskom, engleskom i njemačkom, svaki s `noindex, follow`:

| Datoteka | HR | EN | DE |
|---|---|---|---|
| `Politika privatnosti.dc.html` | `/politika-privatnosti` | `/privacy-policy` | `/datenschutz` |
| `Politika kolacica.dc.html` | `/politika-kolacica` | `/cookie-policy` | `/cookie-richtlinie` |
| `Uvjeti koristenja.dc.html` | `/uvjeti-koristenja` | `/terms-of-service` | `/nutzungsbedingungen` |

Sve tri koriste zajedničku ovojnicu `Pravni dokument.dc.html`, koja crta zaglavlje, sadržaj,
odjeljke, tablice, kontakt blok i WebPage schemu, te upisuje `hreflang` za sva tri jezika.
Sadržaj je u samoj stranici, po jeziku, pa se tekst mijenja s odabirom jezika bez ponovnog učitavanja.

Stranice NISU u sitemapu jer nose `noindex`. Dostupne su bez registracije, jednim klikom
iz podnožja svake stranice. Datum zadnjeg ažuriranja stoji na vrhu svakog dokumenta i mijenja
se u polju `updated` unutar odgovarajućeg jezika.

Adrese e-pošte koje treba otvoriti prije objave: `privacy@senviaapp.com` (privatnost i kolačići)
i `info@senviaapp.com` (uvjeti korištenja).

---

## Pristanak na mjerenje (GDPR)

Mjerenje posjeta ne kreće bez pristanka. Skripta u zaglavlju definira `window.senviaLoadAnalytics()`
i poziva ju samo ako je u `localStorage` pod ključem `senvia-consent` zapisano `yes`.
Traka za pristanak dio je zaglavlja (`Nav.dc.html`), pa se pojavljuje na svim stranicama,
na sva tri jezika, s dva izbora: Prihvaćam sve i Samo neophodno, uz poveznice na politiku
kolačića i politiku privatnosti. Odabir se pamti.

Gumb **Postavke kolačića** u podnožju ponovno otvara traku. Radi preko događaja
`window.dispatchEvent(new CustomEvent('senvia-consent-open'))`, na koji zaglavlje sluša.
Ako zamijenite traku vlastitim rješenjem, zadržite taj događaj da poveznica u podnožju i dalje radi.

Ako uvedete širi sustav pristanka, sačuvajte isti ključ i istu funkciju, ostalo ostaje netaknuto.

---

## Zaglavlja odgovora (postavlja se na poslužitelju)

Statički HTML ne može postaviti sigurnosna zaglavlja, to ide u konfiguraciji poslužitelja
ili CDN-a. Preporuka za produkciju:

```
Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; frame-src https://www.youtube-nocookie.com; connect-src 'self' https://www.google-analytics.com; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Uz to: preusmjeravanje s HTTP na HTTPS i s `senviaapp.com` na `www.senviaapp.com`
(kanonske adrese u kodu koriste `www`).

---

## Analitika i Search Console

Search Console je već upisan i ne treba ga mijenjati. U zaglavlju svake stranice stoji:

`<meta name="google-site-verification" content="PLc_Zs2J4suxgYMasUThqMUF4ZyiGByIoRp1NjluTL8">`

Ostaje samo jedna zamjena: GA4 mjerni broj. Na svakoj stranici stoji `G-H8DBTNDF62` na dva
mjesta, u `window.SENVIA_GA_ID` i u `gtag('config', ...)`. Zamijeni ga pravim identifikatorom.

Vanjska skripta googletagmanager učitava se samo na domeni senviaapp.com, pa u prototipu
ne stvara promet ni pogreške. Na produkciji radi normalno čim upišeš pravi ID.

---

## Društvene mreže i vanjske poveznice

PROVJERITI: adrese društvenih mreža.
U podnožju su ikone za Instagram, Facebook, LinkedIn i YouTube. Adrese su
pretpostavljene (`@senviaapp`) i treba ih zamijeniti stvarnima prije objave.

Poveznice na trgovine: App Store `id6759839112`, Google Play `com.senviaapp.senvia`.
Bez `hl` i `l` parametara, jer ih HTML kodiranje pretvara u neispravan URL.

Na naslovnici je ugrađen YouTube video `mIvm4WbmMMw` preko `youtube-nocookie.com`.

---

## Pravilo za generator rutnih stranica

Ako ruta ima `activeDrivers: 0`, generator NE smije emitirati `<meta name="robots" content="index, follow">`
ni rutni `<title>`. Takva stranica mora vratiti 404, preusmjeriti na `/slanje-paketa` ili barem
nositi `noindex, follow` i naslov praznog stanja, inače Google vidi indeksabilnu stranicu
čiji sadržaj kaže da ruta ne postoji (lažni 404). Ruta bez vozača također ne ide u sitemap.
Primjer u prototipu: `Ruta - rovinj-bec.dc.html`.

---

## Prije objave, obavezno

1. **Google Analytics**: u svakoj stranici stoji `G-H8DBTNDF62` kao rezervirano mjesto.
   Zamijeni ga pravim GA4 identifikatorom (nalazi se u `window.SENVIA_GA_ID` i u `gtag('config', ...)`).
2. **Search Console**: kod je već upisan (`PLc_Zs2J4sux...`) i stoji na svim stranicama.
   Ništa se ne mijenja, samo potvrdi vlasništvo domene u Search Consoleu nakon objave.
3. **Slike** su u WebP formatu (`assets/app-*.webp`, 8 do 49 KB; `assets/partner-vendi.webp` 13 KB).
   PNG izvori ostaju u repozitoriju kao arhiva i ne poslužuju se. Datoteke `uploads/image0.png`
   do `image6.png` nisu u upotrebi i mogu se izbrisati.
4. **HTTPS**: sve adrese u kodu su `https://`, nema mješovitog sadržaja.
   YouTube je ugrađen preko `youtube-nocookie.com`.

---

## Partneri

Stranica `/partneri` (`Partneri.dc.html`) nabraja poslovne partnere s logotipom.
Popis se u prototipu čita iz praznog polja `PARTNERS` u logici stranice, pa se prikazuje
samo poziv na prijavu. U produkciji popis dolazi iz backenda: `{ name, logo, meta, url }`.
Logotip i naziv objavljuju se samo uz suglasnost partnera.

Navigacija: stavka **Za poslovne korisnike** je padajući izbornik s tri poveznice,
kako radi za tvrtke, naši partneri i prijava obrta (`/za-tvrtke#prijava`).

---

## Obrazac Za tvrtke

Stranica `/za-tvrtke` ima prijavni obrazac (naziv, djelatnost, grad polaska,
gradovi dostave, kontakt osoba, e-pošta, telefon, poruka). U prototipu nema backenda,
pa se prijava sastavlja u `mailto:` poruku prema contact@senviaapp.com.

U produkciji zamijeni to pravim slanjem: POST na endpoint koji šalje e-poštu na
contact@senviaapp.com, uz zaštitu od neželjene pošte i poruku o uspjehu umjesto
otvaranja programa za e-poštu. Nazivi polja u obrascu su: tvrtka, djelatnost, grad,
odrediste, osoba, email, telefon, poruka.

---

## SEO zahtjevi (implementirano u prototipovima, mora ostati)

1. **FAQ odgovori u HTML-u od učitavanja.** U prototipu su odgovori obični `<p>` elementi,
   uvijek prisutni u DOM-u. Ako uvodiš accordion, smije samo vizualno sakriti tekst
   (`max-height`/`overflow`), nikad ga ne micati iz DOM-a. Google ga inače ne indeksira.
2. **FAQPage schema.org** na `/faq`, `/sigurnost`, `/slanje-paketa`, `/austrija-hrvatska`.
   Rutne stranice nemaju FAQ blok, pa ni FAQPage schemu. **Važno:** u prototipu se
   `ld+json` ubacuje JavaScriptom jer su ovo statične datoteke. U produkciji sve
   `ld+json` blokove (FAQPage, Article, BreadcrumbList) renderiraj server-side,
   u izvornom HTML-u.
3. **Alt tekstovi** na svim slikama, opisni i na hrvatskom
   (npr. "Senvia aplikacija — pregled dostupnih vožnji za slanje paketa").
4. **Unique title + meta description** po stranici (već napisani u svakom `<helmet>`).
5. **Open Graph + Twitter card** na svim stranicama.
6. **Breadcrumbs** na svim podstranicama, ne na naslovnici.
7. **`sitemap.xml`** — 17 statičnih URL-ova + jedan po ruti koja ima
   `activeDrivers >= 1` (trenutno 24 od 25). Generator MORA primijeniti taj filter:
   ruta bez aktivnih putnika renderira `noindex` stranicu, pa je slanje u sitemap greška
   koju Search Console prijavljuje kao "Submitted URL marked noindex". **`robots.txt`** ne blokira rutne stranice.
8. **Interno linkanje**: naslovnica → sve stranice; podnožje na svakoj stranici vodi na
   naslovnicu, /slanje-paketa, /kako-radi, /sigurnost, /faq, rute i blog članke.
9. **Jedan H1 po stranici**, sadrži primarnu ključnu riječ te stranice.
10. **Canonical + `<link rel="sitemap">`** u `<head>` svake stranice.
11. **Jezici**: prototip mijenja jezik klijentski. U produkciji svaki jezik treba svoj URL
    (npr. /en/, /de/) i hreflang parove, inače Google indeksira samo hrvatsku verziju.
12. **Google Search Console i analitika**: prototipovi nemaju verifikacijski meta tag ni
    mjerni kod. Dodaj ih u produkcijski `<head>` prije objave.

Title naslovnice: `Senvia – Jeftino slanje paketa uz putnika koji putuje` (52 znaka)

---

## Naslovnica — struktura (`Senvia Landing v2.dc.html`)

Svrha: u 5 sekundi objasniti što je Senvia i dovesti do downloada. **Bez** detaljnog
objašnjavanja aplikacije, bez FAQ-a, sigurnosti, cijena, bloga i vodiča — to su zasebne stranice.

1. **Hero** — badge, H1, opis (max 2 rečenice), App Store + Google Play badge, mockup aplikacije, dva pilla ("Besplatno za preuzimanje", "Bez pretplate")
2. **Social proof** — ocjena 5,0 po storeu (bez broja ocjena) + stvarne recenzije s App Storea u vodoravnoj listi
3. **Live statistika** — 4 brojke iz baze, "Osvježeno u HH:MM" s pulsirajućom točkom
4. **Najčešće rute** — dvije trake koje se same vrte u suprotnim smjerovima, samo gradovi, bez klika i bez cijena
5. **Zašto Senvia** — 4 kartice, svaka vodi na podstranicu
6. **Završni CTA** — zeleni blok, oba store badgea
7. **Footer** — 4 kolone SEO linkova

---

## Interakcije i animacije

| Element | Ponašanje |
|---|---|
| Dropdown (Više, jezik) | klik toggle, zatvaranje klikom izvan; chevron rotate 180° |
| Hamburger meni | slide-down ispod headera, ikona → X |
| Tabovi (Popularne rute, Kako radi) | klik mijenja sadržaj; aktivni tab = zelena pill |
| Kako radi — koraci | klik na korak mijenja screenshot telefona, cross-fade `opacity .4s ease` |
| FAQ accordion | `max-height` + `opacity` tranzicija `.35s / .3s ease`, tekst uvijek u DOM-u |
| Statistika | count-up od 0, ease-out cubic ~1.6 s, jednom po učitavanju |
| Live točka | `@keyframes` puls, scale 1→2.4 + fade, 2.2 s infinite |
| Hover kartica | `border-color: #2dbb54`, `background: #f7fbf8` |
| Hover store badge | `translateY(-2px)`, `.2s ease` |

---

## Responsive

Sve stranice su fluidne od ~360px do 1280px+. Nema fiksnih širina osim mockupa telefona
(`min(300px, 82vw)`, `aspect-ratio: 720 / 1588`).

- Grid kolone se prelamaju kroz `auto-fit` + `minmax`, bez media queryja
- Tipografija i padding fluidni preko `clamp()`
- Media queryji samo za navigaciju (980px, 430px)

---

## Assets

| Datoteka | Što je |
|---|---|
| `uploads/1024x1024bb.png` | Senvia logo (App Store ikona) |
| `uploads/Download_on_the_App_Store_Badge.svg.webp` | App Store badge |
| `assets/google-play-badge.png` | Google Play badge |
| `assets/app-home.png` | screenshot: pregled vožnji |
| `assets/app-share.png` | screenshot: objava zahtjeva |
| `assets/app-profile.png` | screenshot: profil s ocjenama |
| `assets/app-chat.png` | screenshot: chat |
| `assets/app-review.png` | screenshot: ocjena nakon dostave |

Ikone su inline SVG (stroke-width 1.9–2.8, `stroke-linecap: round`), bez ikon-fonta i bez
vanjske biblioteke. Ako codebase ima svoj icon set, koristiti njega uz isti vizualni težinski dojam.

---

## Vanjski linkovi

- App Store: `https://apps.apple.com/hr/app/senvia/id6759839112?l=hr`
- Google Play: `https://play.google.com/store/apps/details?id=com.senviaapp.senvia&hl=hr`
- Kontakt: `contact@senviaapp.com`
- Uvjeti: `https://www.senviaapp.com/terms-and-conditions`
- Privatnost: `https://www.senviaapp.com/terms-and-conditions` (privatnost je trenutno dio uvjeta;
  kad dobije vlastitu stranicu, zamijeni ovu adresu u `Podnozje.dc.html` i u traci za pristanak u `Nav.dc.html`)

---

## Što NE mijenjati

- Vizualni identitet, boje i ton komunikacije
- Postojeće recenzije i testimonijale
- Popis ruta ne ide u glavnu navigaciju
- Ne pisati tekst ručno po ruti — sve kroz predložak i backend
- Ne generirati rutnu stranicu bez stvarne pokrivenosti vozačima

---

## Datoteke u paketu

Svi `.dc.html` prototipovi, `i18n.js`, `routes-data.js`, `sitemap.xml`, `robots.txt`,
`assets/` i `uploads/`. `support.js` je runtime prototipa i ne ide u produkciju.

`Popularne rute - standalone.html` je samostalna verzija te stranice (radi offline,
dvoklik u pregledniku) — korisna za brzi pregled bez pokretanja projekta.
