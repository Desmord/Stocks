import { CurrentOwnedStocksType } from '../../../../../Utilities/TypesAndInterfaces';
import { isLoss, isProfit } from '../../../../../Utilities/UtilitieFunctions';

import styles from './ItemList.module.scss';

const ItemList = ({ items }: { items: CurrentOwnedStocksType[] }) => {
    return (
        <div className={styles.itemList}>
            {items.map((item: CurrentOwnedStocksType, index: number) => {
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
                                    ${isLoss(`-1500`) ? styles.loss : ``}
                                    ${isProfit(`-1500`) ? styles.profit : ``}
                        `}>-1500 zł</div>
                        <div className={`
                                    ${styles.totalChange}
                                    ${isLoss(`-1500`) ? styles.loss : ``}
                                    ${isProfit(`-1500`) ? styles.profit : ``}
                        `}>-15%</div>
                    </div>
                )
            })}

            <div className={styles.properties}>

            </div>
        </div>
    )
}

export default ItemList