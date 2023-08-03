import { TransactionType } from '../../../../Utilities/TypesAndInterfaces';

import TransactionsList from './TransactionsList/TransactionsList';
import TransactionPanel from './TransactionPanel/TransactionPanel';

import styles from './Transactions.module.scss';

const Transactions = ({ userTransactions }: { userTransactions: TransactionType[] }) => {
    return (
        <div className={styles.container}>
            <TransactionsList userTransactions={userTransactions}/>
            <TransactionPanel />
        </div>
    )
}

export default Transactions