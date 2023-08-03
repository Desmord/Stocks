import { TransactionType } from "../../../../../Utilities/TypesAndInterfaces"

export const DATE_FILTER_OPTIONS = {
    ALL: `Wszytkie`,
    CURRENT_YEAR: `Bieżący rok`,
    DATE_RANGE: `Wybrana data`
}

export const TRANSACTION_TYPE_OPTIONS = {
    ALL: `Wszyskie`,
    BUY: `Kupione`,
    SELL_LOSS: `Sprzedane strata`,
    SELL_PROFIT: `Sprzedana zysk`,
}

export const SORT_OPTIONS = {
    CLOSEST: `Od najbliższych`,
    FARTHEST: `od najdalszych`
}

export const formatDate = (date: string): string => date.length < 2 ? `0${date}` : date

export const getFiltredTransactionsByDate = (startDate: string, endDate: string, transactions: TransactionType[]): TransactionType[] => {
    const start = parseFloat(startDate.replaceAll(`-`, ``));
    const end = parseFloat(endDate.replaceAll(`-`, ``));

    return transactions.filter((transaction: TransactionType) => (
        parseFloat(transaction.date.replaceAll(`-`, ``)) < end &&
        parseFloat(transaction.date.replaceAll(`-`, ``)) > start
    ) ? true : false)

}