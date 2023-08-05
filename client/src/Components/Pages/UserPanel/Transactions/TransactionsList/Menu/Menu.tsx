import {
    DATE_FILTER_OPTIONS,
    TRANSACTION_TYPE_OPTIONS,
    SORT_OPTIONS
} from '../Utilities'

import styles from './Menu.module.scss'

const Menu = ({
    dateFilterSelected,
    setDateFilterSelected,
    transactionTypeFilterSelected,
    setTransactionTypeSelected,
    sortSelected,
    setSortSelected,
}: {
    dateFilterSelected: string,
    setDateFilterSelected: Function,
    transactionTypeFilterSelected: string,
    setTransactionTypeSelected: Function,
    sortSelected: string,
    setSortSelected: Function,
}) => {
    return (
        <div className={styles.menu}>

            {/* Date Filters */}
            <div className={`${styles.submenu} ${styles.dateFilterMenu}`}>
                <div>{dateFilterSelected}</div>
                <div onClick={() => setDateFilterSelected(DATE_FILTER_OPTIONS.ALL)}>Wszystkie</div>
                <div onClick={() => setDateFilterSelected(DATE_FILTER_OPTIONS.CURRENT_YEAR)}>Bieżący rok</div>
                <div onClick={() => setDateFilterSelected(DATE_FILTER_OPTIONS.DATE_RANGE)}>Po dacie</div>
            </div>

            {/* Type Filters */}
            <div className={`${styles.submenu} ${styles.typeFilterMenu}`}>
                <div>{transactionTypeFilterSelected}</div>
                <div onClick={() => setTransactionTypeSelected(TRANSACTION_TYPE_OPTIONS.ALL)}>Wszystkie</div>
                <div onClick={() => setTransactionTypeSelected(TRANSACTION_TYPE_OPTIONS.BUY)}>Kupione</div>
                <div onClick={() => setTransactionTypeSelected(TRANSACTION_TYPE_OPTIONS.SELL_LOSS)}>Sprzedane Strata</div>
                <div onClick={() => setTransactionTypeSelected(TRANSACTION_TYPE_OPTIONS.SELL_PROFIT)}>Sprzedane Zysk</div>
            </div>

            {/* Sort  */}
            <div className={`${styles.submenu} ${styles.sort}`}>
                <div>{sortSelected}</div>
                <div onClick={() => setSortSelected(SORT_OPTIONS.CLOSEST)}>Od najbliższych</div>
                <div onClick={() => setSortSelected(SORT_OPTIONS.FARTHEST)}>Od najdalszych</div>
            </div>

            {/* Reset */}
            <div onClick={() => {
                setDateFilterSelected(DATE_FILTER_OPTIONS.ALL)
                setTransactionTypeSelected(TRANSACTION_TYPE_OPTIONS.ALL)
                setSortSelected(SORT_OPTIONS.CLOSEST)
            }} className={`${styles.submenu} ${styles.reset}`}><div>Reset</div></div>

        </div>
    )
}

export default Menu