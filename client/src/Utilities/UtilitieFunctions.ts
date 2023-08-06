import {
    GET_STOCK_URL,
    GET_WIG_URL,
    GET_LOGIN_URL,
    GET_USER_URL,
    EDIT_USER_URL,
} from './UtilitiesData';
import {
    StockInterface,
    IndexInterface,
    CurrentOwnedStocksType,
    TransactionType
} from './TypesAndInterfaces';


/**
 * 
 * @param stockName string
 * @returns { companyShortcut: string, mainValue: string, percentageChange: string, valueChange: string } object
 */
export const getStockValues = async (stockShortcut: string): Promise<StockInterface> => {
    const response = await fetch(`${GET_STOCK_URL}${stockShortcut}`)
    const jsonData = await response.json();

    return jsonData;
}

/**
 * 
 * @param wigName string
 * @returns  { mainValue: string, percentageChange: string , valueChange: string } object
 */
export const getWigValues = async (wigName: string): Promise<IndexInterface> => {
    const response = await fetch(`${GET_WIG_URL}${wigName}`)
    const jsonData = await response.json();

    return jsonData;
}

export const deleteDuplicatesFromObjectArray = <T>(arr: T[]): T[] => {

    const uniqueArray = arr.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === arr.findIndex(obj => {
            return JSON.stringify(obj) === _value;
        });
    });

    return uniqueArray
}

export const logIn = async (login: string, password: string) => {

    const response = await fetch(GET_LOGIN_URL, {
        method: `POST`,
        mode: `cors`,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            login,
            password,
        })
    });

    return await response.json()
}

export const getUserData = async () => {

    const response = await fetch(`${GET_USER_URL}`)
    const jsonData = await response.json();

    return jsonData;

}

export const editUserData = async (objectToSave: any) => {
    const response = await fetch(`${EDIT_USER_URL}`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objectToSave)
    })
    const jsonData = await response.json();

    return jsonData
}

const addToQuantity = (
    currentTransaction: TransactionType[],
    transactionIndex: number,
    quantity: number,
    totalPrice: number,
    commision: number,
): TransactionType[] => {
    currentTransaction[transactionIndex].quantity =
        currentTransaction[transactionIndex].quantity + quantity
    currentTransaction[transactionIndex].totalPrice =
        parseFloat((currentTransaction[transactionIndex].totalPrice + totalPrice).toFixed(2))
    currentTransaction[transactionIndex].commision =
        parseFloat((currentTransaction[transactionIndex].commision + commision).toFixed(2))
    return currentTransaction
}

const substractQuantity = (
    currentTransaction: TransactionType[],
    transactionIndex: number,
    quantity: number,
    shortcut: string,
    totalPrice: number,
    commision: number,
): TransactionType[] => {
    if (currentTransaction[transactionIndex].quantity > quantity) {
        currentTransaction[transactionIndex].quantity =
            currentTransaction[transactionIndex].quantity - quantity
        currentTransaction[transactionIndex].totalPrice =
            parseFloat((currentTransaction[transactionIndex].totalPrice - totalPrice).toFixed(2))
        currentTransaction[transactionIndex].commision =
            parseFloat((currentTransaction[transactionIndex].commision - commision).toFixed(2))
    } else {
        currentTransaction = currentTransaction.filter((transaction: TransactionType) => {
            return transaction.shortcut !== shortcut ? true : false
        })
    }

    return currentTransaction
}

export const getCurrentStocksBasedOnTransactions = (transactions: TransactionType[]): any[] => {

    const allTransactions = JSON.parse(JSON.stringify(transactions));
    let currentTransaction: TransactionType[] = [];

    allTransactions.forEach((element: TransactionType) => {
        const transactionIndex = currentTransaction.map(e => e.shortcut).indexOf(element.shortcut)
        const isAqusition = element.acqusition ? true : false;
        const isStockAlreadyExits = currentTransaction.some((currentTransaction: TransactionType) =>
            currentTransaction.shortcut === element.shortcut ? true : false)

        if (isStockAlreadyExits) {

            if (isAqusition) {
                currentTransaction = addToQuantity(
                    currentTransaction,
                    transactionIndex,
                    parseInt(`${element.quantity}`),
                    element.totalPrice,
                    element.commision,
                )
            } else {
                currentTransaction = substractQuantity(
                    currentTransaction,
                    transactionIndex,
                    parseInt(`${element.quantity}`),
                    element.shortcut,
                    element.totalPrice,
                    element.commision,
                )
            }

        } else {
            currentTransaction.push(element)
        }



    });

    return currentTransaction.map((transactions: TransactionType): CurrentOwnedStocksType => {
        return {
            totalProfit: transactions.totalPrice,
            shortcut: transactions.shortcut,
            quantity: transactions.quantity,
            name: transactions.name,
            notes: transactions.notes,
            group: transactions.group,
            commision: transactions.commision,
            purchageCost:transactions.price
        }
    })

}

export const isLoss = (value: string): boolean => !!value.match(/-/gim)

export const isProfit = (value: string): boolean => parseFloat(value.replace(`,`, `.`)) > 0 ? true : false;

export const getCurrentTransactionsByName = (transactions: TransactionType[], name: string): TransactionType[] => {

    if (name === ``) return []

    return transactions.filter((transaction: TransactionType) => transaction.name === name ? true : false)

}