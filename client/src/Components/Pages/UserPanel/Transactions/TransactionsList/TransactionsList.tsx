import { TransactionType } from '../../../../../Utilities/TypesAndInterfaces';

import MenuLogic from './Menu/MenuLogic';
import Menu from './Menu/Menu';

import styles from './TransactionsList.module.scss';

const TransactionsList = ({ userTransactions }: { userTransactions: TransactionType[] }) => {

    const {
        dateFilterSelected, setDateFilterSelected,
        transactionTypeFilterSelected, setTransactionTypeSelected,
        sortSelected, setSortSelected,
        transactionAfterSort,
    } = MenuLogic(userTransactions)

    return (
        <div className={styles.container}>
            <Menu
                dateFilterSelected={dateFilterSelected}
                setDateFilterSelected={setDateFilterSelected}
                setSortSelected={setSortSelected}
                setTransactionTypeSelected={setTransactionTypeSelected}
                sortSelected={sortSelected}
                transactionTypeFilterSelected={transactionTypeFilterSelected}
            />
            {/* <div>transakcjie lista</div> */}
        </div>
    )
}

export default TransactionsList