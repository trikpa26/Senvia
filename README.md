# Predaja developeru: Senvia web (senviaapp.com)

Verzija paketa: **10. 11. 2026.** (prethodni upload: 21. 10. 2026.)

## Što je novo u ovom paketu (pročitaj prvo)

1. **Nova naslovnica.** `index.html` je sada nova naslovnica (izvor: `Senvia Landing v3.dc.html`).
   Isti sadržaj ima i `Senvia Landing v2.dc.html`, da stare poveznice na v2 ne vode na staru verziju.
   Sve tri datoteke imaju canonical `https://www.senviaapp.com/`.
2. **Nove datoteke: 64** (42 stranice i 22 slike), uz **38 izmijenjenih** postojećih datoteka:
   - Blogovi: `paket-od-kuce-za-studente`, `slanje-stvari-sezonskim-radnicima`, `rad-u-drugom-gradu`,
     `zaboravljene-stvari`, `slanje-stvari-iz-njemacke`, te ranije pripremljeni `najjeftinije-slanje-paketa`,
     `slanje-paketa-isti-dan`, `studentska-selidba`, `prijevoz-*` (alat, bicikl, gume, kuhinja, motor, skuter),
     `prijevoz-stvari-s-oglasa`, `slanje-domacih-proizvoda-s-opg-a`, `slanje-poklona-za-bozic`,
     `slanje-stvari-ljeti`, `slanje-stvari-za-uskrs`.
   - Gradovi: `/gradovi/<grad>/` (Beč, Graz, München, Rijeka, Split, Stuttgart, Zagreb, Zürich), predložak `Grad.dc.html`.
   - Kategorije: `/prijevoz/<kategorija>/` (bicikli, dokumenti, domaća hrana, elektronika, namještaj), predložak `Kategorija.dc.html`.
   - Rute: `berlin-zagreb`, `frankfurt-zagreb`, `koln-zagreb`, `nurnberg-zagreb`, `zeneva-zagreb`.
   - `Price korisnika.dc.html` (`/price-korisnika/`).
   - Nove slike u `assets/` (hero fotografije, favicon set, zastave u `assets/flags/`).
3. **Nijedna postojeća adresa nije promijenjena ni obrisana.** Sve datoteke koje su već na GitHubu
   zadržale su isto ime i isti canonical. Zato pozicije na Googleu, Search Console i Analytics ostaju netaknuti.
   **Ništa iz repozitorija ne brisati**, samo prepisati postojeće i dodati nove datoteke.
4. **Blok "Upravo na Senviji" na naslovnici** (žive vožnje i zahtjevi):
   - prvo se vide **vožnje**, zatim kartica **Zahtjevi**;
   - prikazuje se 10 najbližih po datumu, zadnja kartica "Ostale aktivne vožnje / Prikaži sve" otvara sve u mreži;
   - **backend `GET /api/live` mora vraćati SVE aktivne objave, ne samo 10** (vidi "Live podaci").
5. **Jezik se bira automatski** (vidi "Jezici"): hrvatski za Hrvatsku, BiH, Srbiju, Sloveniju i Crnu Goru,
   njemački za Njemačku i Austriju, engleski za sve ostale.
6. **SEO popravci:** engleski i njemački naslovi i opisi na 9 stranica (naslovnica, Sigurnost, Slanje stvari,
   Popularne rute, Usporedba, O nama, Partneri, Brisanje računa, 404); 27 naslova skraćeno na najviše 60 znakova;
   `sitemap.xml` ažuriran (datumi i novi URL-ovi).
7. **Usporedba s klasičnom dostavom** sada je dio bloga (prvi članak na `/blog/`, putanja Senvia / Blog / Usporedba).
   Adresa `/usporedba-s-klasicnom-dostavom/` ostaje ista.
8. **Podnožje:** stupac se zove "Rute i blog" i sadrži Popularne rute i Blog.
9. Gramatika i prijevodi provjereni u sva tri jezika, popravljeno na nizu stranica.

---

## Što je ovo

Senvia web: naslovnica, informativne stranice, blog, stranice gradova i kategorija, pravne stranice
i automatski generirane rutne stranice, na tri jezika (hr, en, de).

**Datoteke su dizajn-reference napisane u HTML-u**, prototipovi koji pokazuju točan izgled i ponašanje.
Ako se web na produkciji gradi u vlastitom okruženju (Next.js, Astro i sl.), ove datoteke su izvor istine
za izgled, tekstove i logiku. **Fidelity: high-fidelity**, rekreirati pixel-perfect.

## Tehnologija u prototipovima

Format `.dc.html`: jedna datoteka sadrži markup (`<x-dc>`) i logiku (`class Component`, React-like state).
`support.js` je runtime tog formata i služi za pregled prototipa (GitHub Pages ga koristi), u vlastitom
produkcijskom okruženju ne treba. Iz svake datoteke treba: markup, inline stilove, tekstove i logiku.

---

## Struktura stranica i URL mapa

| Datoteka | Produkcijski URL | Napomena |
|---|---|---|
| `index.html` = `Senvia Landing v3.dc.html` | `/` | naslovnica |
| `Senvia Landing v2.dc.html` | `/` | ista nova naslovnica, ostaje zbog starih poveznica |
| `Slanje stvari.dc.html` | `/slanje-stvari/` | u glavnoj navigaciji |
| `Kako radi.dc.html` | `/kako-radi/` | u glavnoj navigaciji |
| `Sigurnost.dc.html` | `/sigurnost/` | u glavnoj navigaciji |
| `Za tvrtke.dc.html` | `/za-tvrtke/` | izbornik "Za poslovne korisnike" |
| `Partneri.dc.html` | `/partneri/` | izbornik "Za poslovne korisnike" |
| `FAQ.dc.html` | `/faq/` | podnožje |
| `Blog.dc.html` | `/blog/` | podnožje |
| `Blog - *.dc.html` | `/blog/<slug>/` | članci, slug je u canonicalu svake datoteke |
| `Usporedba.dc.html` | `/usporedba-s-klasicnom-dostavom/` | članak u blogu |
| `Popularne rute.dc.html` | `/popularne-rute/` | podnožje |
| `Ruta - <slug>.dc.html` | `/slanje-stvari/<slug>/` | generirano iz feeda ruta |
| `Grad - <slug>.dc.html` | `/gradovi/<slug>/` | predložak `Grad.dc.html` |
| `Kategorija - <slug>.dc.html` | `/prijevoz/<slug>/` | predložak `Kategorija.dc.html` |
| `Price korisnika.dc.html` | `/price-korisnika/` | podnožje |
| `O nama.dc.html` | `/o-nama/` | podnožje |
| `Politika privatnosti.dc.html` | `/politika-privatnosti/` | noindex |
| `Politika kolacica.dc.html` | `/politika-kolacica/` | noindex |
| `Uvjeti koristenja.dc.html` | `/uvjeti-koristenja/` | noindex |
| `Senvia Account Deletion.dc.html` | `/brisanje-racuna/` | zahtjev App Storea |
| `404.dc.html` | 404 | noindex |
| `Austrija-Hrvatska.dc.html` | `/austrija-hrvatska/` | preusmjerava na `/popularne-rute/` |
| `Blog - Senvia vs kurirska sluzba.dc.html` | stara adresa | preusmjerava na `/usporedba-s-klasicnom-dostavom/` |
| `Blog - Zaradi na voznji.dc.html` | stara adresa | preusmjerava na `/blog/podijeli-troskove-voznje/` |

Zajedničke komponente: `Nav.dc.html` (zaglavlje i traka za kolačiće), `Podnozje.dc.html` (podnožje),
`Clanak.dc.html` (predložak članka), `Ruta.dc.html`, `Grad.dc.html`, `Kategorija.dc.html`, `Pravni dokument.dc.html`.

Predložak članka (`Clanak.dc.html`) sada podržava poveznicu ispod svakog bloka (`href` i `linkLabel`),
koristi se na članku `/blog/kome-koriste-rute/` koji vodi na zasebne vodiče po skupinama korisnika.

---

## Design tokens

**Fontovi:** Outfit 400/500/600/700 za cijeli web.
Google Fonts: `family=Outfit:wght@400;500;600;700&display=swap`

**Boje**
| Uloga | Hex |
|---|---|
| Pozadina stranice | `#faf9f6` |
| Kartice | `#ffffff`, rub `#e6e3da` |
| Neutralna površina (blokovi) | `#f2f0ea`, `#f5f4f0` |
| Brand zelena (CTA, aktivno) | `#2dbb54`, hover `#26a449` |
| Zelena tekst / linkovi | `#1a9e44`, hover `#0e7c31` |
| Zeleni naglasak na svijetlom | `#167a38` na `#e8f7ee` |
| Tamna (tekst, tamne sekcije) | `#12261a` |
| Tekst sekundarni | `#3c5346` |
| Tekst meta | `#5b6f62`, `#6b8272` |
| Separator | `#eeebe4` |
| Zvjezdice | `#f5b301` |

Napomena: pozadine su namjerno neutralne (topla bijela i siva), bez zelenkastih tonova.

**Radiusi:** pill `999px` · gumb `12–14px` · kartica `20–24px` · veliki blok `28–32px`.
**Kontejner:** `max-width: 1360px`, tekstualne stranice 820–860px, padding `clamp(16px, 4vw, 32px)`.

---

## Navigacija (`Nav.dc.html`)

Sticky zaglavlje: logo, Kako radi?, Sigurnost, padajući izbornik **Za poslovne korisnike**
(Naši partneri, Kako radi i prijava obrta), izbornik jezika (HR / EN / DE), na mobitelu gumb Menu.
Blog, FAQ i Popularne rute namjerno su samo u podnožju.

## Podnožje (`Podnozje.dc.html`)

Četiri stupca: **Senvia** (Kako radi?, Slanje stvari, Sigurnost, FAQ, Priče korisnika),
**Rute i blog** (Popularne rute, Blog), **Za tvrtke** (Senvia za tvrtke, Naši partneri, Prijavi svoj obrt),
**Pravno** (O nama, Politika privatnosti, Politika kolačića, Uvjeti korištenja, Brisanje računa, Postavke kolačića).

---

## Jezici (`i18n.js`)

Tri jezika: **hr** (zadano, adresa bez parametra), **en** (`?lang=en`), **de** (`?lang=de`).
Odabir se pamti u `localStorage` (`senvia-lang`), a promjena emitira `window` event `senvia-lang`.
Pri promjeni jezika ažuriraju se adresa, `<html lang>`, canonical, hreflang, naslov i opis stranice.

**Automatski odabir pri prvom posjetu** (dok korisnik sam ne odabere):
1. Tražilice (Googlebot i sl.) uvijek dobivaju hrvatski na adresi bez `?lang`.
2. Preglednik na hrvatskom, bosanskom, srpskom, crnogorskom ili slovenskom → **hr** (pokriva i dijasporu).
3. Vremenska zona Zagreb, Sarajevo, Beograd, Ljubljana, Podgorica → **hr**.
4. Vremenska zona Beč ili Berlin, ili preglednik `de-DE` / `de-AT` → **de**.
5. Sve ostalo → **en**.

Ako se u produkciji uvode prefiksirane rute (`/en/`, `/de/`), zadrži ista pravila i hreflang parove.

---

## Live podaci, kontrakt s backendom (`routes-data.js`)

Prototip čita podatke iz `routes-data.js`. U produkciji ih isporučuje backend u istom obliku.

```js
// GET /api/stats  (osvježava se svakih 60 s)
{ users, rides, requests, delivered,
  stores: { ios: { rating, reviews }, android: { rating, reviews } }, updatedAt }
```

```js
// GET /api/routes?active=1
[{ slug: "bec-zagreb", from: "Beč", to: "Zagreb", fromEn: "Vienna", toEn: "Zagreb",
   activeDrivers: 14, distanceKm: 370, durationHours: [4, 5], priceMin: 16, priceMax: 30, routeFaqs: [] }]
```

```js
// GET /api/live   (blok "Upravo na Senviji" na naslovnici)
{ rides:    [{ from, to, date: 'YYYY-MM-DD', time: 'HH:MM', arrive: 'HH:MM', maxSize: 'S'|'M'|'L'|'XL'|'XXL', priceFrom }],
  requests: [{ from, to, size: 'S'|'M'|'L'|'XL'|'XXL', dateFrom: 'YYYY-MM-DD', dateTo: 'YYYY-MM-DD', price }],
  ridesCount, requestsCount }
```
**Važno za `/api/live`:** vraćati **sve** buduće vožnje i zahtjeve kojima rok nije istekao, bez ograničenja na 10.
Bez imena, slika, adresa i kontakata. Gradovi na hrvatskom (Beč, München...).
Naslovnica sama sortira po datumu, prikazuje prvih 10, a ostale nakon klika na "Prikaži sve".

Prikaz kartica:
- grad i zastava države iza naziva grada (zastave su lokalne datoteke u `assets/flags/`: hr, at, de, ch);
- vožnja: vrijeme polaska i dolaska uz gradove, dolje datum (npr. "11. stu"), cijena "od X €"
  i "Veličine: S, M, L" (sve veličine do `maxSize`);
- zahtjev: dolje raspon datuma (npr. "10.–13. stu"), cijena i "Veličina: M";
- na mobitelu klik na karticu vodi u App Store ili Google Play, na računalu kartica nije poveznica.

U `routes-data.js` ispravljena je greška: pet ruta (Frankfurt, Berlin, Nürnberg, Köln, Ženeva) bilo je
greškom u popisu recenzija, sada su u `ROUTES`. Ukupno 30 ruta, od toga 29 aktivnih.

---

## Rutne stranice (`Ruta.dc.html`)

Jedan predložak, podaci iz feeda. Nisu u glavnoj navigaciji, dostupne preko sitemapa, `/popularne-rute/`,
stranica gradova i blogova.

- Stranica postoji samo ako ruta ima barem jednog aktivnog vozača.
- Ruta bez vozača (`activeDrivers: 0`) ne smije biti indeksabilna: 404, preusmjeravanje na `/slanje-stvari/`
  ili barem `noindex, follow`. Primjer: `Ruta - rovinj-bec.dc.html`. Takva ruta ne ide u sitemap.
- Cijena i trajanje prikazuju se samo ako backend ima podatke.
- Meta title: `Slanje stvari {Grad A}–{Grad B} | Senvia`.

---

## Pravne stranice

| Datoteka | HR | EN | DE |
|---|---|---|---|
| `Politika privatnosti.dc.html` | `/politika-privatnosti/` | `/privacy-policy/` | `/datenschutz/` |
| `Politika kolacica.dc.html` | `/politika-kolacica/` | `/cookie-policy/` | `/cookie-richtlinie/` |
| `Uvjeti koristenja.dc.html` | `/uvjeti-koristenja/` | `/terms-of-service/` | `/nutzungsbedingungen/` |

Sve s `noindex, follow`, zajednička ovojnica `Pravni dokument.dc.html`. Kontakt: `contact@senviaapp.com`.

## Pristanak na kolačiće (GDPR)

Mjerenje ne kreće bez pristanka. `window.senviaLoadAnalytics()` se poziva samo ako je u `localStorage`
pod `senvia-consent` zapisano `yes`. Traka za pristanak je u `Nav.dc.html` (sve stranice, sva tri jezika).
Gumb "Postavke kolačića" u podnožju je otvara događajem `senvia-consent-open`. Ako mijenjate traku,
zadržite isti ključ, funkciju i događaj.

---

## Analitika i Search Console (bez promjena)

- Search Console: `<meta name="google-site-verification" content="PLc_Zs2J4suxgYMasUThqMUF4ZyiGByIoRp1NjluTL8">`
  stoji na svim stranicama, isti kao do sada. Ništa ne mijenjati.
- GA4: `G-H8DBTNDF62` na svim stranicama (`window.SENVIA_GA_ID` i `gtag('config', ...)`), isti kao do sada.
  Skripta se učitava samo na domeni senviaapp.com i samo uz pristanak.
- Nakon objave pošalji `sitemap.xml` ponovno u Search Console (nove stranice brže ulaze u indeks).

## Zaglavlja odgovora (na poslužitelju)

```
Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://unpkg.com; frame-src https://www.youtube-nocookie.com; connect-src 'self' https://www.google-analytics.com; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains
```
`https://unpkg.com` treba samo ako se poslužuju sami prototipovi (`support.js` odande učitava React 18.3.1).
Preusmjeravanje s HTTP na HTTPS i s `senviaapp.com` na `www.senviaapp.com`.

---

## SEO pravila (implementirano, mora ostati)

1. Jedan H1 po stranici, jedinstven title (najviše 60 znakova) i meta description po stranici i po jeziku.
2. Canonical, hreflang (hr, en, de, x-default), Open Graph i Twitter card na svim stranicama.
3. FAQ odgovori uvijek u HTML-u (accordion smije samo vizualno sakriti tekst).
4. Strukturirani podaci: FAQPage, Article, BreadcrumbList, Organization. U prototipu se ubacuju
   JavaScriptom; u vlastitom okruženju renderirati ih server-side.
5. Breadcrumbs na svim podstranicama.
6. `sitemap.xml`: 85 URL-ova (statične stranice, blog, gradovi, kategorije i 29 aktivnih ruta).
   Pravne stranice i 404 nisu u sitemapu jer su noindex. `robots.txt` ne blokira ništa.
7. Alt tekstovi na svim slikama.
8. Adrese završavaju kosom crtom (`/kako-radi/`).

## 301 preusmjeravanja (ostaje od prošle verzije)

- `/slanje-paketa/` → `/slanje-stvari/`
- `/slanje-paketa/<slug>` → `/slanje-stvari/<slug>/`
- `/blog/kako-poslati-paket-u-austriju/` → `/blog/kako-poslati-stvari-u-austriju/`
- `/blog/koliko-kosta-slanje-paketa/` → `/blog/koliko-kosta-slanje-stvari/`
- `/blog/dijaspora-paket-doma/` → `/blog/dijaspora-stvari-doma/`
- `/blog/slanje-paketa-unutar-hrvatske/` → `/blog/slanje-stvari-unutar-hrvatske/`
- `/blog/paket-nach-kroatien-schicken/` → `/blog/sachen-nach-kroatien-schicken/`

---

## Naslovnica, struktura (`index.html` / `Senvia Landing v3.dc.html`)

1. **Hero:** H1 "Pošalji stvari ili ponudi prijevoz. Sve na jednom mjestu.", podnaslov, App Store i Google Play
   s ocjenama, tri kartice s fotografijama stvari i veličinom (S do XXL) koje se izmjenjuju.
2. **Upravo na Senviji:** kartice Vožnje (prve) i Zahtjevi, vodoravni niz, "Prikaži sve" / "Prikaži manje".
3. **Prazno mjesto u autu:** tamni blok s tri prednosti.
4. **CO₂ blok:** manje ispušnih plinova.
5. **Što kažu korisnici:** ocjene trgovina i recenzije (vodoravni niz).
6. **Zašto Senvia:** četiri kartice.
7. **Česta pitanja:** pet pitanja i poveznica na FAQ.
8. **Podnožje.**

Title naslovnice (hr): `Senvia – Jeftino slanje stvari uz putnika koji putuje`.

---

## Obrazac Za tvrtke

`/za-tvrtke/` ima prijavni obrazac. U prototipu se šalje kao `mailto:` na contact@senviaapp.com;
u produkciji zamijeniti POST-om na endpoint koji šalje e-poštu, uz zaštitu od neželjene pošte.
Polja: tvrtka, djelatnost, grad, odrediste, osoba, email, telefon, poruka.

## Partneri

`/partneri/` čita popis iz `partners-data.js` (`{ name, meta, logo, url }`), u produkciji iz `GET /api/partners`.
Logotip i naziv objavljuju se samo uz suglasnost partnera.

## Vanjske poveznice

- App Store: `https://apps.apple.com/app/id6759839112`
- Google Play: `https://play.google.com/store/apps/details?id=com.senviaapp.senvia`
- Kontakt: `contact@senviaapp.com`
- Društvene mreže u podnožju: Instagram `senvia.app`, Facebook, TikTok `senvia_app`, LinkedIn `senviaapp`, YouTube.
- YouTube video na webu ide preko `youtube-nocookie.com`.

---

## Datoteke u paketu

Sve `.dc.html` stranice i komponente, `index.html`, `i18n.js`, `routes-data.js`, `partners-data.js`,
`image-slot.js`, `support.js`, `sitemap.xml`, `robots.txt`, `.nojekyll`, mapa `assets/` (uključujući `assets/flags/`)
i `Popularne rute - standalone.html` (samostalna verzija za brzi pregled).

## Ne objavljivati

Radne datoteke iz dizajn projekta nisu u paketu i ne idu na produkciju: `Rute - generator`, `Hero opcije`,
`Font usporedba`, `Mobilni pregled`, stara `Senvia Landing`, mapa `_radne-datoteke/`.
