import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    URL_ADRESSES,
    USER_PANEL_PAGES_CODE
} from '../../../Utilities/UtilitiesData';
import {
    getUserData,
    getCurrentStocksBasedOnTransactions,
    getStockValues,
} from '../../../Utilities/UtilitieFunctions';
import {
    setUser
    , getUser,
    setID,
    setLogin,
    setPassword,
    setTips,
    setTransaction
} from '../../../Redux/UserDataSlice';
import { CurrentOwnedStocksType } from '../../../Utilities/TypesAndInterfaces';


import UserPanelMainMenu from './UserPanelMainMenu/UserPanelMainMenu';
import Owned from './Owned/Owned';
import Transactions from './Transactions/Transactions';

// trial ------------------------------------------------------------------------
// ------------------------------------------------------------------------------
import { TEST_TRANSACTIONS } from '../../../Utilities/TestDataUtilites';
// end-trial --------------------------------------------------------------------
// ------------------------------------------------------------------------------

import styles from './UserPanel.module.scss'

const UserPanel = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userTransactions = useSelector((state: any) => state.userData.transactions)

    const [currentPage, setCurrentPage] = useState(USER_PANEL_PAGES_CODE.OWNED)
    const [currentStocks, setCurrentStocks] = useState<CurrentOwnedStocksType[]>([])

    const getData = async () => {
        // const data = await getUserData();

        // dispatch(setID(data[0]._id ? data[0]._id : ``))
        // dispatch(setLogin(data[0].login ? data[0].login : ``))
        // dispatch(setPassword(data[0].password ? data[0].password : ``))
        // dispatch(setTips(data[0].tips ? data[0].tips : []))
        // dispatch(setTransaction(data[0].transactions ? data[0].transactions : []))


        // trial ------------------------------------------------------------------------
        // ------------------------------------------------------------------------------
        dispatch(setID(`1`))
        dispatch(setLogin(`mikolaj`))
        dispatch(setPassword(`haslo`))
        dispatch(setTips([`tip 1`]))
        dispatch(setTransaction(TEST_TRANSACTIONS))
        // end-trial --------------------------------------------------------------------
        // ------------------------------------------------------------------------------


    }

    const createDownloadPromise = (itemName: string, getFunction: Function) => {
        return new Promise(async (resolve, reject) => {
            const value = await getFunction(itemName)
            resolve(value)
        })

    }

    const getCurrentStocksData = async (currentStock: CurrentOwnedStocksType[]) => {

        let promisesArray: any[] = [];
        let newCurrentStock = JSON.parse(JSON.stringify(currentStock))

        currentStock.forEach((stock: { shortcut: string }) => {
            promisesArray.push(createDownloadPromise(stock.shortcut, getStockValues))
        })

        let stocksValues = await Promise.all(promisesArray)

        stocksValues.forEach((
            stock: { mainValue: string, percentageChange: string, valueChange: string },
            index: number
        ) => {

            const currentPrice = stock.mainValue ? parseFloat(stock.mainValue.replace(`,`, `.`)) : 0;
            const valueChange = stock.valueChange ? stock.valueChange[0] : ``;
            const percentageChange = stock.valueChange ? stock.percentageChange[0] : ``;
            const totalProfit = (currentStock[index].quantity * currentPrice) - currentStock[index].totalProfit
            const purchageCost = currentStock[index].totalProfit
            const totalPercentageProfit = parseFloat((totalProfit / purchageCost * 100).toFixed(2));
            const totalPerItemProfit = totalProfit / currentStock[index].quantity;
            const currentValidation = currentStock[index].quantity * currentPrice;

            newCurrentStock[index] = {
                ...newCurrentStock[index],
                currentPrice,
                valueChange,
                percentageChange,
                totalProfit,
                purchageCost,
                quantity: currentStock[index].quantity,
                totalPercentageProfit,
                totalPerItemProfit,
                currentValidation,
                commision: currentStock[index].commision,
            }
        })

        setCurrentStocks(newCurrentStock)

    }


    // trial ------------------------------------------------------------------------
    // ------------------------------------------------------------------------------
    const getTestCurrentData = (currentStock: CurrentOwnedStocksType[]) => {

        let newCurrentStock = JSON.parse(JSON.stringify(currentStock))

        const isPositive = Math.floor(Math.random() * (1000 - 1 + 1) + 1) % 2 === 0 ? true : false;

        newCurrentStock = newCurrentStock.map((current: CurrentOwnedStocksType) => {
            return {
                ...current,
                currentPrice: Math.floor(Math.random() * (500 - 1 + 1) + 1),
                valueChange: `${isPositive ? `` : `-`}${Math.floor(Math.random() * (400 - 1 + 1) + 1)}`,
                percentageChange: `${isPositive ? `` : `-`}${Math.floor(Math.random() * (100 - 1 + 1) + 1)}`,
                totalProfit: 100,
                purchageCost: 1000,
                quantity: 50,
                totalPercentageProfit: 10,
                totalPerItemProfit: 15,
                currentValidation: 1500,
                commision: 15,
            }
        })

        setCurrentStocks(newCurrentStock)

    }
    // end-trial --------------------------------------------------------------------
    // ------------------------------------------------------------------------------



    useEffect(() => {
        getData()
    }, [dispatch]);

    useEffect(() => {
        // getCurrentStocksData(getCurrentStocksBasedOnTransactions(userTransactions));

        // tutaj obliczac dane


        // trial ------------------------------------------------------------------------
        // ------------------------------------------------------------------------------
        getTestCurrentData(getCurrentStocksBasedOnTransactions(userTransactions))
        // end-trial --------------------------------------------------------------------
        // ------------------------------------------------------------------------------
    }, [userTransactions, dispatch])


    // trial ------------------------------------------------------------------------
    // ------------------------------------------------------------------------------
    // useEffect(() => {
    //     console.log(currentStocks)
    // }, [currentStocks])
    // end-trial --------------------------------------------------------------------
    // ------------------------------------------------------------------------------

    useEffect(() => {
        if (!sessionStorage.getItem(`isLogged`)) navigate(URL_ADRESSES.HOME, { replace: true })
    })

    return (
        <div className={styles.container}>
            <UserPanelMainMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {currentPage === USER_PANEL_PAGES_CODE.OWNED ? <Owned currentStocks={currentStocks} /> : ``}
            {currentPage === USER_PANEL_PAGES_CODE.TRANSACTIONS ? <Transactions /> : ``}
        </div>
    )

}

export default UserPanel