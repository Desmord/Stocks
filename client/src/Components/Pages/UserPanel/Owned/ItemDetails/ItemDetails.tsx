import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getCurrentTransactionsByName } from '../../../../../Utilities/UtilitieFunctions'
import { isProfit, isLoss } from '../../../../../Utilities/UtilitieFunctions';
import { CurrentOwnedStocksType, TransactionType } from '../../../../../Utilities/TypesAndInterfaces';


import styles from './ItemDetails.module.scss'

const ItemDetails = ({
    currentSelectetItem,
    currentState,
}: {
    currentSelectetItem: string,
    currentState: CurrentOwnedStocksType[]
}) => {
    const userTransactions = useSelector((state: any) => state.userData.transactions)
    const [currentTransactions, setCurrentTransactions] = useState<TransactionType[]>([]);
    const [stockData, setStockData] = useState<CurrentOwnedStocksType>({
        shortcut: ``,
        quantity: 0,
        name: ``,
        notes: ``,
        group: [],
        currentPrice: ``,
        valueChange: ``,
        percentageChange: ``,
        commision: 0,
        totalProfit: 0,
        purchageCost: 0,
        totalPercentageProfit: 0,
        totalPerItemProfit: 0,
        currentValidation: 0,
    })

    useEffect(() => {
        setCurrentTransactions(getCurrentTransactionsByName(userTransactions, currentSelectetItem))
        setStockData(currentState
            .filter((stock: CurrentOwnedStocksType) => stock.name === currentSelectetItem ? true : false)[0])
    }, [currentSelectetItem])

    return (
        <div className={styles.container}>{
            currentSelectetItem && stockData ?
                <span>
                    <div className={styles.name}>{stockData.name}</div>
                    <div className={styles.currentPrice}>{stockData.currentPrice} zł</div>
                    <div className={`
                        ${isLoss(stockData.valueChange ? stockData.valueChange : ``) ? styles.loss : ``}
                        ${isProfit(stockData.valueChange ? stockData.valueChange : ``) ? styles.profit : ``}
                        ${styles.currentState}
                    `}>

                        <div className={styles.current}>
                            <div>Obecna sesja: </div>
                            <div className={styles.currentProfit}>{stockData.valueChange} zł</div>
                            <div className={styles.percentageprofit}>{stockData.percentageChange} %</div>
                        </div>

                        <div className={`
                            ${styles.current}
                            ${isLoss(stockData.totalProfit ? `${stockData.totalProfit}` : ``) ? styles.loss : ``}
                            ${isProfit(stockData.totalProfit ? `${stockData.totalProfit}` : ``) ? styles.profit : ``}
                        `}>
                            <div>Od zakupu: </div>
                            <div className={styles.currentProfit}>{stockData.totalPercentageProfit} %</div>
                            <div className={styles.currentProfit}>{stockData.totalProfit.toFixed(2)} zł</div>
                            <div className={styles.currentProfit}>{stockData.totalPerItemProfit?.toFixed(2)} zł / 1szt.</div>
                        </div>

                        <div className={styles.total}>
                            <div className={styles.commision}>Prowizja: &nbsp;{stockData.commision} zł</div>
                            <div className={styles.startTotalPrice}>Koszt zapuku:&nbsp;
                                {stockData.purchageCost ? stockData.purchageCost : 0 * stockData.quantity} zł
                            </div>
                            <div className={styles.actualTotalPrice}>
                                {[1].map((ele, i) => {
                                    const currentPrice = stockData.currentPrice ? parseFloat(stockData.currentPrice) : 0;
                                    const quantity = stockData.quantity;

                                    return <div key={i}>Wycena dzisiaj:&nbsp; {currentPrice * quantity} zł</div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={styles.notes}>Notki:&nbsp;&nbsp; {stockData.notes}</div>
                    <div className={styles.transactions}>{
                        currentTransactions.map((transaction: TransactionType, index) => {
                            return (
                                <div key={index}>
                                    {transaction.date} -  &nbsp;
                                    {transaction.quantity} szt. - &nbsp;
                                    cena szt.: &nbsp; {transaction.price} zł - &nbsp;
                                    cena totalna:  &nbsp;{transaction.totalPrice} zł
                                </div>
                            )
                        })
                    }</div>
                    {stockData.group ? <div className={styles.group}>
                        {stockData.group.map((group: string, indexnumber) => {
                            return `${group} `
                        })}
                    </div> : ``}
                </span> : ``
        }</div>
    )
}

export default ItemDetails