import { CurrentOwnedStocksType } from '../../../../../Utilities/TypesAndInterfaces';
import { isLoss, isProfit } from '../../../../../Utilities/UtilitieFunctions';

import styles from './ItemList.module.scss';

const ItemList = ({ items }: { items: CurrentOwnedStocksType[] }) => {
    return (
        <div className={styles.itemList}>
            {items.map((item: CurrentOwnedStocksType, index: number) => {

                const currentPrice = item.currentPrice ? parseFloat(item.currentPrice) : 1;
                const currentTotalResult = parseFloat((item.quantity * currentPrice - item.totalPrice).toFixed(2));
                const currentTotalPercentageChange = parseFloat((currentTotalResult / item.totalPrice * 100).toFixed(2));

                return (
                    <div key={index} className={styles.item}>
                        <div className={styles.itemName}>{item.name}</div>
                        <div className={styles.currentPrice}>{item.currentPrice}</div>
                        <div
                            className={`
                                    ${styles.percentageChange}
                                    ${isLoss(item.percentageChange ? item.percentageChange : ``) ? styles.loss : ``}
                                    ${isProfit(item.percentageChange ? item.percentageChange : ``) ? styles.profit : ``}
                                `}>
                            {item.percentageChange}%
                        </div>
                        <div
                            className={`
                                    ${styles.valueChange}
                                    ${isLoss(item.valueChange ? item.valueChange : ``) ? styles.loss : ``}
                                    ${isProfit(item.valueChange ? item.valueChange : ``) ? styles.profit : ``}
                                `}>
                            {item.valueChange}
                        </div>
                        <div className={`
                                    ${styles.totalPercentageChange}
                                    ${isLoss(`${currentTotalResult}`) ? styles.loss : ``}
                                    ${isProfit(`${currentTotalResult}`) ? styles.profit : ``}
                        `}>{currentTotalResult} zł</div>
                        <div className={`
                                    ${styles.totalChange}
                                    ${isLoss(`${currentTotalResult}`) ? styles.loss : ``}
                                    ${isProfit(`${currentTotalResult}`) ? styles.profit : ``}
                        `}>{currentTotalPercentageChange} %</div>
                    </div>
                )
            })}

            <div className={styles.properties}>

            </div>
        </div>
    )
}

export default ItemList