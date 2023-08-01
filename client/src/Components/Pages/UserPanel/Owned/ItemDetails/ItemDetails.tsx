import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getCurrentTransactionsByName } from '../../../../../Utilities/UtilitieFunctions'
import { isProfit, isLoss } from '../../../../../Utilities/UtilitieFunctions';
import { CurrentOwnedStocksType, TransactionType, DetailsData } from '../../../../../Utilities/TypesAndInterfaces';


import styles from './ItemDetails.module.scss'

const ItemDetails = ({
    currentSelectetItem,
    currentState,
}: {
    currentSelectetItem: string,
    currentState: CurrentOwnedStocksType[]
}) => {
    const userTransactions = useSelector((state: any) => state.userData.transactions)
    const [stockData, setStockData] = useState<DetailsData>({
        name: ``,
        commision: 0,
        price: 0,
        quantity: 0,
        totalPrice: 0,
        currentPrice: ``,
        currentPercentageChange: ``,
        currentChange: ``,
    })

    useEffect(() => {
        const allTransactions = getCurrentTransactionsByName(userTransactions, currentSelectetItem);
        const currentStockState = currentState
            .filter((stock: CurrentOwnedStocksType) => stock.name === currentSelectetItem ? true : false)[0]
        const currentItemData = {
            name: ``,
            commision: 0,
            price: 0,
            quantity: 0,
            totalPrice: 0,
            currentPrice: currentStockState?.currentPrice ? currentStockState.currentPrice : `0`,
            currentPercentageChange: currentStockState?.percentageChange ? currentStockState.percentageChange : `0`,
            currentChange: currentStockState?.valueChange ? currentStockState.valueChange : `0`,
        }

        allTransactions.forEach((transaction: TransactionType) => {
            currentItemData.name = transaction.name;
            currentItemData.commision = currentItemData.commision + transaction.commision;
            currentItemData.quantity = currentItemData.quantity + transaction.quantity;
            currentItemData.totalPrice = currentItemData.totalPrice + transaction.totalPrice;
            currentItemData.price = parseFloat((currentItemData.totalPrice / currentItemData.quantity).toFixed(2))
        })

        setStockData(currentItemData)

    }, [currentSelectetItem])

    return (
        <div className={styles.container}>{
            currentSelectetItem ? <span>
                <div className={styles.name}>{stockData.name}</div>
                <div className={styles.currentPrice}>{stockData.currentPrice} zł</div>
                <div className={`
                    ${isLoss(stockData.currentPercentageChange ? stockData.currentPercentageChange : ``) ? styles.loss : ``}
                    ${isProfit(stockData.currentPercentageChange ? stockData.currentPercentageChange : ``) ? styles.profit : ``}
                    ${styles.currentState}
                `}>
                    <div className={styles.current}>
                        <div className={styles.currentProfit}>{stockData.currentChange} zł</div>
                        <div className={styles.percentageprofit}>{stockData.currentPercentageChange} %</div>
                        <div className={styles.totalProfit}>{
                            (stockData.quantity * parseFloat(stockData.currentPrice) - stockData.totalPrice).toFixed(2)
                        } zł</div>
                        <div className={styles.profitOnOneItem}>{
                            (parseFloat((stockData.quantity * parseFloat(stockData.currentPrice) - stockData.totalPrice).toFixed(2)) / stockData.quantity).toFixed(2)
                        } zł  &nbsp;&nbsp;/ 1</div>
                    </div>

                    <div className={styles.total}>
                        <div className={styles.commision}>Prowizja: &nbsp;{stockData.commision} zł</div>
                        <div className={styles.startTotalPrice}>Koszt zapuku: &nbsp;{stockData.totalPrice} zł</div>
                        <div className={styles.actualTotalPrice}>Wycena obecna: &nbsp;{stockData.quantity * parseFloat(stockData.currentPrice)} zł</div>
                    </div>


                </div>
            </span> : ``
        }</div>
    )
}

export default ItemDetails