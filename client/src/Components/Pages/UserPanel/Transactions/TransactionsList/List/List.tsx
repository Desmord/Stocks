import { TransactionType } from '../../../../../../Utilities/TypesAndInterfaces'

import styles from './List.module.scss'

const List = ({
    transactions,
    displayedTransactionId,
    setDisplaySransactionId,
}: {
    transactions: TransactionType[],
    displayedTransactionId: string,
    setDisplaySransactionId: Function
}) => {
    return (
        <div className={styles.container}>
            {transactions ? transactions.map((transaction: TransactionType, index: number) => {
                return (
                    <div
                        onClick={() => displayedTransactionId === transaction.id ?
                            setDisplaySransactionId(``) :
                            setDisplaySransactionId(transaction.id)}
                        className={styles.transaction}
                        data-id={transaction.id}
                        key={index}>
                        <div className={styles.name}>{transaction.name}</div>
                        <div className={styles.date}>{transaction.date}</div>
                        <div className={`
                            ${styles.type} ${transaction.acqusition ? styles.typeProfit : styles.typeLoss}
                        `}>
                            {transaction.acqusition ? `Kupno` : `Sprzedaż`}
                        </div>
                        <div className={styles.price}>{transaction.price} zł</div>
                        <div className={styles.totalPrice}>{transaction.totalPrice} zł</div>
                        {!transaction.acqusition ?
                            <div className={`${styles.sell} ${transaction.totalProfit ? styles.typeProfit : styles.typeLoss}`}>
                                <div>{transaction.loss > 0 ?
                                    `${transaction.totalPercentageChange}` :
                                    transaction.totalPercentageChange} %</div>
                                <div>
                                    {transaction.totalProfit ?
                                        transaction.totalProfit :
                                        `${transaction.totalLoss}`} zł
                                </div>
                            </div> : ``}
                    </div>
                )
            }) : ``}
        </div >
    )
}

export default List