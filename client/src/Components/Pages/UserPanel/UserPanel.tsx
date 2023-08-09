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
import Statistic from './Statistic/Statistic';

import styles from './UserPanel.module.scss'

const UserPanel = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userTransactions = useSelector((state: any) => state.userData.transactions)

    const [currentPage, setCurrentPage] = useState(USER_PANEL_PAGES_CODE.OWNED)
    const [currentStocks, setCurrentStocks] = useState<CurrentOwnedStocksType[]>([])

    const getData = async () => {

        const data = await getUserData();

        dispatch(setID(data[0]._id ? data[0]._id : ``))
        dispatch(setLogin(data[0].login ? data[0].login : ``))
        dispatch(setPassword(data[0].password ? data[0].password : ``))
        dispatch(setTips(data[0].tips ? data[0].tips : []))
        dispatch(setTransaction(data[0].transactions ? data[0].transactions : []))

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

            const purchagePrice = currentStock[index].purchageCost as number;
            const currentPrice = stock.mainValue ? parseFloat(stock.mainValue.replace(`,`, `.`)) : 0;
            const valueChange = stock.valueChange ? stock.valueChange[0] : ``;
            const percentageChange = stock.valueChange ? stock.percentageChange[0] : ``;
            const purchageCost = currentStock[index].totalProfit
            const currentValidation = currentStock[index].quantity * currentPrice;
            const totalPerItemProfit = parseFloat((parseFloat(stock.mainValue) - purchagePrice).toFixed(2));
            const totalProfit = parseFloat(((currentStock[index].quantity * currentPrice) - currentStock[index].totalProfit).toFixed(2));
            const totalPercentageProfit = (totalProfit / purchageCost * 100).toFixed(2);


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

        console.log(newCurrentStock)

        setCurrentStocks(newCurrentStock)

    }

    useEffect(() => {
        getData()
    }, [dispatch]);

    useEffect(() => {
        getCurrentStocksData(getCurrentStocksBasedOnTransactions(userTransactions));
    }, [userTransactions, dispatch])


    useEffect(() => {
        if (!sessionStorage.getItem(`isLogged`)) navigate(URL_ADRESSES.HOME, { replace: true })
    })

    return (
        <div className={styles.container}>
            <UserPanelMainMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {currentPage === USER_PANEL_PAGES_CODE.OWNED ? <Owned currentStocks={currentStocks} /> : ``}
            {currentPage === USER_PANEL_PAGES_CODE.TRANSACTIONS ? <Transactions userTransactions={userTransactions} /> : ``}
            {currentPage === USER_PANEL_PAGES_CODE.STATISTIC ? <Statistic userTransactions={userTransactions}/> : ``}
        </div>
    )

}

export default UserPanel