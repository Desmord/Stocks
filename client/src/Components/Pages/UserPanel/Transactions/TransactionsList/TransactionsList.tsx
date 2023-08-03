import { TransactionType } from '../../../../../Utilities/TypesAndInterfaces';

import MenuLogic from './Menu/MenuLogic';
import Menu from './Menu/Menu';
import List from './List/List';

import styles from './TransactionsList.module.scss';

const TransactionsList = ({
    userTransactions,
    displayedTransactionId,
    setDisplaySransactionId,
}: {
    userTransactions: TransactionType[],
    displayedTransactionId: string,
    setDisplaySransactionId: Function
}) => {

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
            <List
                transactions={transactionAfterSort}
                displayedTransactionId={displayedTransactionId}
                setDisplaySransactionId={setDisplaySransactionId}
            />
        </div>
    )
}

export default TransactionsList