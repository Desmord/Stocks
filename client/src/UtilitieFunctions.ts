import {
    GET_STOCK_URL,
    GET_WIG_URL,
    GET_LOGIN_URL,
    STOCK,
    INDEX
} from './Utilities';

/**
 * 
 * @param stockName string
 * @returns { companyShortcut: string, mainValue: string, percentageChange: string, valueChange: string } object
 */
export const getStockValues = async (stockName: string): Promise<STOCK> => {
    const response = await fetch(`${GET_STOCK_URL}${stockName}`)
    const jsonData = await response.json();

    return jsonData;
}

/**
 * 
 * @param wigName string
 * @returns  { mainValue: string, percentageChange: string , valueChange: string } object
 */
export const getWigValues = async (wigName: string): Promise<INDEX> => {
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