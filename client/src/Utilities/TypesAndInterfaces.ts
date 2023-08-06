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
    currentPrice?: string,
    valueChange?: string,
    percentageChange?: string,
    commision?: number,
    totalProfit: number,
    purchageCost?: number,
    totalPercentageProfit?: number,
    totalPerItemProfit?: number,
    currentValidation?: number,
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

export interface DetailsData {
    name: string,
    commision: number,
    price: number,
    quantity: number,
    totalPrice: number,
    currentPrice: string,
    currentPercentageChange: string,
    currentChange: string,
}