import { CurrentOwnedStocksType } from '../../../../../Utilities/TypesAndInterfaces';
import { isLoss, isProfit } from '../../../../../Utilities/UtilitieFunctions';

import styles from './ItemList.module.scss';

const ItemList = ({
    items,
    currentSelectetItem,
    setCurrentSelectemItem
}: {
    items: CurrentOwnedStocksType[],
    currentSelectetItem: string,
    setCurrentSelectemItem: Function
}) => {
    return (
        <div className={styles.itemList}>
            {items.map((item: CurrentOwnedStocksType, index: number) => {

                // const currentPrice = item.currentPrice ? parseFloat(item.currentPrice) : 1;
                // const currentTotalResult = parseFloat((item.quantity * currentPrice - item.totalProfit).toFixed(2));
                // const currentTotalPercentageChange = parseFloat((currentTotalResult / item.totalProfit * 100).toFixed(2));

                return (
                    <div
                        key={index}
                        className={`${styles.item} ${currentSelectetItem === item.name ? styles.selected : ``}`}
                        onClick={() => setCurrentSelectemItem((prev: string) => item.name === prev ? `` : item.name)}>
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
                                    ${isLoss(`${item.totalProfit}`) ? styles.loss : ``}
                                    ${isProfit(`${item.totalProfit}`) ? styles.profit : ``}
                        `}>{item.totalProfit.toFixed(2)} zł</div>
                        <div className={`
                                    ${styles.totalChange}
                                    ${isLoss(`${item.totalProfit}`) ? styles.loss : ``}
                                    ${isProfit(`${item.totalProfit}`) ? styles.profit : ``}
                        `}>{item.totalPercentageProfit} %</div>
                    </div>
                )
            })}

        </div>
    )
}

export default ItemList