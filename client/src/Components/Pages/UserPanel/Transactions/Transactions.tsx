import TransactionsList from './TransactionsList/TransactionsList';
import TransactionPanel from './TransactionPanel/TransactionPanel';

import styles from './Transactions.module.scss';

const Transactions = () => {
    return (
        <div className={styles.container}>
            <TransactionsList />
            <TransactionPanel />
        </div>
    )
}

export default Transactions