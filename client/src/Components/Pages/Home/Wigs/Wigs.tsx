import { INDEX } from '../../../../Utilities/UtilitiesData';

import styles from './Wigs.module.scss';

const Wigs = ({ indexes }: { indexes: INDEX[] }) => {

    const isLoss = (value: string): boolean => !!value.match(/-/gim)

    const isProfit = (value: string): boolean => parseFloat(value.replace(`,`, `.`)) > 0 ? true : false;

    return (
        <div className={styles.container}>
            <div className={styles.indices}>STOCK INDICES</div>
            {indexes.map((stockIndex: INDEX, arrayIndex: number) => {

                if (stockIndex.error) {
                    return (
                        <div className={styles.index} key={arrayIndex}>
                            <span>Network error</span>
                        </div>
                    )
                }

                return (
                    <div className={styles.index} key={arrayIndex}>
                        <span>{stockIndex.wigName}</span>
                        <span>{stockIndex.mainValue}</span>
                        <span
                            className={`
                                ${isLoss(stockIndex.percentageChange) ? styles.loss : ``}
                                ${isProfit(stockIndex.percentageChange) ? styles.profit : ``}
                            `}>
                            {stockIndex.percentageChange}%
                        </span>
                        <span
                            className={`
                                ${isLoss(stockIndex.valueChange) ? styles.loss : ``}
                                ${isProfit(stockIndex.valueChange) ? styles.profit : ``}
                            `}>
                            {stockIndex.valueChange}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Wigs;