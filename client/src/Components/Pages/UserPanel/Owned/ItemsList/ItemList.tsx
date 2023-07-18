import { CurrentOwnedStocksType } from '../../../../../Utilities/TypesAndInterfaces';
import { isLoss, isProfit } from '../../../../../Utilities/UtilitieFunctions';

import styles from './ItemList.module.scss';

const ItemList = ({ items }: { items: CurrentOwnedStocksType[] }) => {
    return (
        <div className={styles.itemList}>
            {items.map((item: CurrentOwnedStocksType, index: number) => {
                return (
                    <div key={index} className={styles.item}>
                        <span>{item.name}</span>
                        <span>{item.currentPrice}</span>
                        <span
                            className={`
                                    ${isLoss(item.percentageChange ? item.percentageChange : ``) ? styles.loss : ``}
                                    ${isProfit(item.percentageChange ? item.percentageChange : ``) ? styles.profit : ``}
                                `}>
                            {item.percentageChange}%
                        </span>
                        <span
                            className={`
                                    ${isLoss(item.valueChange ? item.valueChange : ``) ? styles.loss : ``}
                                    ${isProfit(item.valueChange ? item.valueChange : ``) ? styles.profit : ``}
                                `}>
                            {item.valueChange}
                        </span>
                    </div>
                )
            })}

            <div className={styles.properties}>

            </div>
        </div>
    )
}

export default ItemList