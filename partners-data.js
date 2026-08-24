// Poslovni partneri. U produkciji ovaj popis dolazi iz backenda (GET /api/partners).
// Polja: name (naziv), meta (grad ili kratki opis), logo (URL logotipa),
// url (poveznica na partnera). Logotip i naziv objavljuju se samo uz suglasnost partnera.
export const PARTNERS = [
  {
    name: 'Vendi',
    meta: 'Rabljeni namještaj, Koprivnica',
    logo: 'assets/partner-vendi.webp',
    url: 'https://www.vendi-namjestaj.hr/'
  }
];

export const PARTNERS_ENDPOINT = '/api/partners';
