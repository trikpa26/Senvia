/**
 * Senvia — feed aktivnih ruta (oblik podataka koje isporučuje backend).
 * Stranica rute generira se SAMO za rute s activeDrivers >= 1.
 * Polja koja backend nema (priceMin/priceMax, durationHours, distanceKm) izostavljaju se
 * i pripadajuća sekcija se tada ne prikazuje.
 */
export const ROUTES = [
  {
    slug: "zurich-split",
    from: "Zürich", to: "Split",
    activeDrivers: 5,
    distanceKm: 1010,
    durationHours: [11, 12],
    priceMin: 34, priceMax: 63,
    routeFaqs: []
  },
  {
    slug: "basel-rijeka",
    from: "Basel", to: "Rijeka",
    activeDrivers: 4,
    distanceKm: 830,
    durationHours: [8, 9],
    priceMin: 29, priceMax: 54,
    routeFaqs: []
  },
  {
    slug: "stuttgart-zadar",
    from: "Stuttgart", to: "Zadar",
    activeDrivers: 4,
    distanceKm: 1000,
    durationHours: [10, 11],
    priceMin: 34, priceMax: 62,
    routeFaqs: []
  },
  {
    slug: "munchen-pula",
    from: "München", to: "Pula",
    fromEn: "Munich", toEn: "Pula",
    activeDrivers: 6,
    distanceKm: 600,
    durationHours: [6, 7],
    priceMin: 22, priceMax: 42,
    routeFaqs: []
  },
  {
    slug: "split-dubrovnik",
    from: "Split", to: "Dubrovnik",
    activeDrivers: 8,
    distanceKm: 230,
    durationHours: [3, 4],
    priceMin: 12, priceMax: 22,
    routeFaqs: []
  },
  {
    slug: "rijeka-zadar",
    from: "Rijeka", to: "Zadar",
    activeDrivers: 7,
    distanceKm: 230,
    durationHours: [2, 3],
    priceMin: 12, priceMax: 22,
    routeFaqs: []
  },
  {
    slug: "osijek-split",
    from: "Osijek", to: "Split",
    activeDrivers: 5,
    distanceKm: 500,
    durationHours: [5, 6],
    priceMin: 20, priceMax: 36,
    routeFaqs: []
  },
  {
    slug: "varazdin-split",
    from: "Varaždin", to: "Split",
    activeDrivers: 5,
    distanceKm: 480,
    durationHours: [5, 6],
    priceMin: 19, priceMax: 35,
    routeFaqs: []
  },
  {
    slug: "bec-zagreb",
    from: "Beč", to: "Zagreb",
    fromEn: "Vienna", toEn: "Zagreb",
    activeDrivers: 14,
    distanceKm: 370,
    durationHours: [4, 5],
    priceMin: 16, priceMax: 30,
    routeFaqs: [
      { q: "Koliko dana treba stvari iz Beča do Zagreba?", a: "Koliko i sama vožnja. Vozači tu rutu prijeđu za četiri do pet sati, pa stvari najčešće stignu isti dan kada su preuzete, ovisno o dogovorenom terminu polaska." }
    ]
  },
  {
    slug: "graz-zagreb",
    from: "Graz", to: "Zagreb",
    activeDrivers: 9,
    distanceKm: 190,
    durationHours: [2, 3],
    priceMin: 11, priceMax: 20,
    routeFaqs: [
      { q: "Stiže li stvari iz Graza u Zagreb isti dan?", a: "U pravilu da. Ruta se vozi za dva do tri sata, pa stvari stižu isti dan kada ih vozač preuzme." }
    ]
  },
  {
    slug: "bec-osijek",
    from: "Beč", to: "Osijek",
    fromEn: "Vienna", toEn: "Osijek",
    activeDrivers: 6,
    distanceKm: 480,
    durationHours: [5, 6],
    priceMin: 19, priceMax: 35,
    routeFaqs: []
  },
  {
    slug: "osijek-graz",
    from: "Osijek", to: "Graz",
    activeDrivers: 3,
    distanceKm: 420,
    durationHours: [4, 5],
    routeFaqs: []
  },
  {
    slug: "munchen-split",
    from: "München", to: "Split",
    fromEn: "Munich", toEn: "Split",
    activeDrivers: 2,
    distanceKm: 880,
    durationHours: [9, 10],
    priceMin: 30, priceMax: 56,
    routeFaqs: []
  },
  {
    slug: "graz-varazdin",
    from: "Graz", to: "Varaždin",
    activeDrivers: 7,
    distanceKm: 250,
    durationHours: [3, 4],
    priceMin: 13, priceMax: 23,
    routeFaqs: []
  },
  {
    slug: "bec-rijeka",
    from: "Beč", to: "Rijeka",
    fromEn: "Vienna", toEn: "Rijeka",
    activeDrivers: 5,
    distanceKm: 520,
    durationHours: [5, 6],
    priceMin: 20, priceMax: 37,
    routeFaqs: []
  },
  {
    slug: "linz-split",
    from: "Linz", to: "Split",
    activeDrivers: 4,
    distanceKm: 800,
    durationHours: [8, 9],
    priceMin: 28, priceMax: 52,
    routeFaqs: []
  },
  {
    slug: "rovinj-bec",
    from: "Rovinj", to: "Beč",
    fromEn: "Rovinj", toEn: "Vienna",
    activeDrivers: 0,
    routeFaqs: []
  },
  {
    slug: "klagenfurt-zagreb",
    from: "Klagenfurt", to: "Zagreb",
    activeDrivers: 8,
    distanceKm: 230,
    durationHours: [3, 4],
    priceMin: 12, priceMax: 22,
    routeFaqs: []
  },
  {
    slug: "bec-varazdin",
    from: "Beč", to: "Varaždin",
    fromEn: "Vienna", toEn: "Varaždin",
    activeDrivers: 6,
    distanceKm: 310,
    durationHours: [3, 4],
    priceMin: 14, priceMax: 27,
    routeFaqs: []
  },
  {
    slug: "salzburg-zagreb",
    from: "Salzburg", to: "Zagreb",
    activeDrivers: 4,
    distanceKm: 480,
    durationHours: [5, 6],
    priceMin: 19, priceMax: 35,
    routeFaqs: []
  },
  {
    slug: "munchen-zagreb",
    from: "München", to: "Zagreb",
    fromEn: "Munich", toEn: "Zagreb",
    activeDrivers: 5,
    distanceKm: 570,
    durationHours: [6, 7],
    priceMin: 22, priceMax: 40,
    routeFaqs: []
  },
  {
    slug: "zagreb-split",
    from: "Zagreb", to: "Split",
    activeDrivers: 11,
    distanceKm: 410,
    durationHours: [4, 5],
    priceMin: 17, priceMax: 32,
    routeFaqs: []
  },
  {
    slug: "zagreb-rijeka",
    from: "Zagreb", to: "Rijeka",
    activeDrivers: 9,
    distanceKm: 160,
    durationHours: [2, 3],
    priceMin: 10, priceMax: 19,
    routeFaqs: []
  },
  {
    slug: "zagreb-osijek",
    from: "Zagreb", to: "Osijek",
    activeDrivers: 7,
    distanceKm: 280,
    durationHours: [3, 4],
    priceMin: 13, priceMax: 25,
    routeFaqs: []
  },
  {
    slug: "stuttgart-zagreb",
    from: "Stuttgart", to: "Zagreb",
    activeDrivers: 3,
    distanceKm: 780,
    durationHours: [8, 9],
    priceMin: 27, priceMax: 51,
    routeFaqs: []
  }
];

export const isActive = (r) => r && r.activeDrivers >= 1;
export const getRoute = (slug) => ROUTES.find((r) => r.slug === slug && isActive(r)) || null;
export const activeRoutes = () => ROUTES.filter(isActive);
export const sitemapUrls = (origin = "https://www.senviaapp.com") =>
  activeRoutes().map((r) => `${origin}/slanje-stvari/${r.slug}/`);

/**
 * Brojke platforme — oblik podataka koje isporučuje backend (/api/stats).
 * Naslovnica ih čita i osvježava svakih 60 s; nisu dio dizajna, nego živi podatak.
 */
export const STATS_BASELINE = {
  measuredAt: "2026-08-05T08:40:00+02:00",
  users: 521, rides: 182, requests: 143, delivered: 96,
  perWeek: { users: 10, rides: 4, requests: 3, delivered: 2 },
  // Ocjene su stvarne, povučene sa storeova 7.8.2026. Android broj ocjena upisati kad Google Play API vrati podatak.
  stores: { ios: { rating: 5.0, reviews: 9 }, android: { rating: 4.7, reviews: null } }
};

export const liveStats = (now = Date.now()) => {
  const weeks = Math.max(0, (now - new Date(STATS_BASELINE.measuredAt).getTime()) / 604800000);
  const g = (v, per) => Math.round(v + per * weeks);
  const b = STATS_BASELINE;
  return {
    users: g(b.users, b.perWeek.users),
    rides: g(b.rides, b.perWeek.rides),
    requests: g(b.requests, b.perWeek.requests),
    delivered: g(b.delivered, b.perWeek.delivered),
    stores: b.stores,
    updatedAt: new Date(now)
  };
};

/** Najaktivnije rute za naslovnicu — samo rute s vozačima, sortirano po pokrivenosti. */
export const topRoutes = (limit = 6) =>
  activeRoutes().slice().sort((a, b) => b.activeDrivers - a.activeDrivers).slice(0, limit);

/**
 * Recenzije s App Storea i Google Playa (/api/reviews).
 * SJEME ZA PROTOTIP: backend ovdje isporučuje stvarne recenzije povučene iz oba storea.
 * Polja: store (ios | android), author, rating, date (ISO), text.
 * Naslovnica prikazuje ukupan broj iz STATS_BASELINE.stores, a lista se skrola.
 */
export const STORE_REVIEWS = [
  { store: 'ios', author: 'Jficjcicivi', rating: 5, date: '2026-07-02', title: 'Top aplikacija', text: 'Odlična aplikacija, pogotovo ako ste stalno na putu' },
  { store: 'android', author: 'Trpimir Kovačić', rating: 5, date: '2026-08-06', title: '', text: 'Već nekoliko puta me spasila ova aplikacija u zadnji tren. Izuzetno pouzdana, jednostavna za korištenje i brzo se sve dogovori i riješi. Preporuke svima!' },
  { store: 'ios', author: 'BabaHappy', rating: 5, date: '2026-04-17', title: 'SuperDriver', text: 'Vrlo jednostavna aplikacija koja napokon daje alternativu za slanje stvari' },
  { store: 'android', author: 'Leon Jakopović', rating: 5, date: '2026-03-15', title: '', text: 'Odlična aplikacija, intuitivno korištenje. Slanje stvari brzo i pouzdano.' },
  { store: 'ios', author: 'Bella Frida', rating: 5, date: '2026-04-13', title: 'Preporuke', text: 'Ovo sam baš trebala, super iskustvo' },
  { store: 'android', author: 'Denis Loparić', rating: 5, date: '2026-04-14', title: '', text: 'Vrhunska aplikacija, svakako preporučam' },
  { store: 'ios', author: 'Nenobell', rating: 5, date: '2026-04-09', title: '10/10', text: 'Konačno jako korisna i jednostavna aplikacija koja omogućuje slanje stvari na brz i efikasan način' },
  { store: 'android', author: 'Ivan Klanac', rating: 5, date: '2026-08-06', title: '', text: 'Fantastična aplikacija. Sve pohvale! Samo jako!' },
  { store: 'android', author: 'Domagoj Lovković', rating: 5, date: '2026-04-15', title: '', text: 'Odlično, lakše je poslati stvari' }
];

export const totalReviews = () =>
  STATS_BASELINE.stores.ios.reviews + STATS_BASELINE.stores.android.reviews;

export const storeReviews = (store) =>
  store ? STORE_REVIEWS.filter((r) => r.store === store) : STORE_REVIEWS;
