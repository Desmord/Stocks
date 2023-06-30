export const GET_STOCK_URL = "http://localhost:8000/api/webData/getCompanyStockValue/";
export const GET_WIG_URL = "http://localhost:8000/api/webData/getWigValue/";

export const INDEXES = [`wig`, `wig20`, `wig30`, `wig40`, `wig80`];
export const WIG20_SHORCUTS = [
    { name: `Alior Bank`, shortcut: `ALIOR` },
    { name: `Allegro`, shortcut: `ALLEGRO` },
    { name: `Asseco Poland`, shortcut: `ASSECOPOL` },
    { name: `Bank Polska Kasa Opieki Sa`, shortcut: `PEKAO` },
    { name: `CD Projekt`, shortcut: `CDPROJEKT` },
    { name: `Cyfrowy Polsat`, shortcut: `CYFRPLSAT` },
    { name: `Dino Polska`, shortcut: `DINOPL` },
    { name: `Grupa Kenty`, shortcut: `KETY` },
    { name: `Jastrzębska Spólka Węglowa`, shortcut: `JSW` },
    { name: `KGHM Polska Miedź`, shortcut: `KGHM` },
    { name: `Kruk SA`, shortcut: `KRUK` },
    { name: `LPP SA`, shortcut: `LPP` },
    { name: `Orange Polska`, shortcut: `ORANGEPL` },
    { name: `Polska Grupa Energetyczna`, shortcut: `PGE` },
    { name: `Polski Koncern Naftowy ORLEN`, shortcut: `PKNORLEN` },
    { name: `Powszechna Kasa Oszczędności PKO`, shortcut: `PKOBP` },
    { name: `Powszechny Zakład Ubezpieczeń PZU`, shortcut: `PZU` },
    { name: `Pepco Group`, shortcut: `PEPCO` },
    { name: `Santander Bank`, shortcut: `SANPL` },
    { name: `mBank`, shortcut: `MBANK` },
]


export interface STOCK {
    companyShortcut: string,
    mainValue: string,
    percentageChange: string,
    valueChange: string,
    error?: any,
}
export interface INDEX {
    wigName: string,
    mainValue: string,
    percentageChange: string,
    valueChange: string,
    error?:any,
} 
