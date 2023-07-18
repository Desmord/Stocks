export type TransactionType = {
    id: string,
    shortcut: string,
    name: string,
    date: string,
    acqusition: boolean,
    disposal: boolean,
    commision: number,
    commisionFreePrice: number,
    quantity: number,
    loss: number,
    totalLoss: number,
    percentageChange: number,
    price: number,
    totalPercentageChange: number,
    profit: number,
    totalPrice: number,
    totalProfit: number,
    transactionReason: string,
    type: string,
    notes: string,
    group: [string],
    divident: {
        date: string,
        name: string,
        percentageProfit: number,
        profit: number,
        totalProfit: number,
    }
}

export type CurrentOwnedStocksType = {
    shortcut: string,
    quantity: number,
    name: string,
    notes: string,
    group: string[],
    currentPrice?: number,
    valueChange?: string,
    percentageChange?: string,
}

export interface StockInterface {
    companyShortcut: string,
    mainValue: string,
    percentageChange: string,
    valueChange: string,
    error?: any,
}
export interface IndexInterface {
    wigName: string,
    mainValue: string,
    percentageChange: string,
    valueChange: string,
    error?: any,
}

