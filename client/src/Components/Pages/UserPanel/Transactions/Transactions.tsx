import { useState } from 'react';
import { TransactionType } from '../../../../Utilities/TypesAndInterfaces';

import TransactionsList from './TransactionsList/TransactionsList';
import TransactionPanel from './TransactionPanel/TransactionPanel';

import styles from './Transactions.module.scss';

const Transactions = ({ userTransactions }: { userTransactions: TransactionType[] }) => {

    const [displayedTransactionId, setDisplaySransactionId] = useState(``)

    return (
        <div className={styles.container}>
            <TransactionsList
                userTransactions={userTransactions}
                displayedTransactionId={displayedTransactionId}
                setDisplaySransactionId={setDisplaySransactionId}
            />
            <TransactionPanel
                userTransactions={userTransactions}
                displayedTransactionId={displayedTransactionId}
            />
        </div>
    )
}

export default Transactions