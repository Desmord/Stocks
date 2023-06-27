const DATA_PAGE_URL = `https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=`
const DATA_PAGE_URL_WIG = `https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=WIG`;
const DATA_PAGE_URL_WIG20 = `https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=WIG20`;
const DATA_PAGE_URL_WIG30 = `https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=WIG30`;
const DATA_PAGE_URL_WIG40 = `https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=MWIG40`;
const DATA_PAGE_URL_WIG80 = `https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=SWIG80`;

const VALUE_REGEX_PATTERN = new RegExp(`-*[0-9,]+`, `gim`)
const MAIN_VALUE_REGEX_PATTERN = new RegExp(`<div class="profilLast">.*<\/div>`, `gim`);
const MINOR_VALUE_REGEX_PATTERN = new RegExp(`<span class="value">.*<\/span>`, `gim`)

const WIG20_SHORCUTS = [
    { name: `Alior Bank`, shorcut: `ALIOR` },
    { name: `Allegro`, shorcut: `ALLEGRO` },
    { name: `Asseco Poland`, shorcut: `ASSECOPOL` },
    { name: `Bank Polska Kasa Opieki Sa`, shorcut: `PEKAO` },
    { name: `CD Projekt`, shorcut: `CDPROJEKT` },
    { name: `Cyfrowy Polsat`, shorcut: `CYFRPLSAT` },
    { name: `Dino Polska`, shorcut: `DINOPL` },
    { name: `Grupa Kenty`, shorcut: `KETY` },
    { name: `Jastrzębska Spólka Węglowa`, shorcut: `JSW` },
    { name: `KGHM Polska Miedź`, shorcut: `KGHM` },
    { name: `Kruk SA`, shorcut: `KRUK` },
    { name: `LPP SA`, shorcut: `LPP` },
    { name: `Orange Polska`, shorcut: `ORANGEPL` },
    { name: `Polska Grupa Energetyczna`, shorcut: `PGE` },
    { name: `Polski Koncern Naftowy ORLEN`, shorcut: `PKNORLEN` },
    { name: `Powszechna Kasa Oszczędności PKO`, shorcut: `PKOBP` },
    { name: `Powszechny Zakład Ubezpieczeń PZU`, shorcut: `PZU` },
    { name: `Pepco Group`, shorcut: `PEPCO` },
    { name: `Santander Bank`, shorcut: `SANPL` },
    { name: `mBank`, shorcut: `MBANK` },
]

module.exports = {
    VALUE_REGEX_PATTERN,
    MAIN_VALUE_REGEX_PATTERN,
    MINOR_VALUE_REGEX_PATTERN,
    WIG20_SHORCUTS,
    DATA_PAGE_URL,
    DATA_PAGE_URL_WIG,
    DATA_PAGE_URL_WIG20,
    DATA_PAGE_URL_WIG30,
    DATA_PAGE_URL_WIG40,
    DATA_PAGE_URL_WIG80
}