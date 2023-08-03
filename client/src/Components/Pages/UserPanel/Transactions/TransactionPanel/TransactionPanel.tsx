import { useEffect, useState } from 'react';
import { TransactionType } from '../../../../../Utilities/TypesAndInterfaces';

import styles from './TransactionPanel.module.scss';

const TransactionPanel = ({
    userTransactions,
    displayedTransactionId
}: {
    userTransactions: TransactionType[],
    displayedTransactionId: string
}) => {

    const [transaction, setTransaction] = useState<TransactionType | undefined>()
    const [error, setError] = useState(``)

    const displayError = (errorText: string) => {
        const errorDisplayTime = 4000;

        setError(errorText)
        setTimeout(() => {
            setError(``)
        }, errorDisplayTime)
    }

    useEffect(() => {
        console.log(userTransactions
            .find((transaction: TransactionType) => transaction.id === displayedTransactionId))
        setTransaction(userTransactions
            .find((transaction: TransactionType) => transaction.id === displayedTransactionId))
    }, [displayedTransactionId])

    return (
        transaction ? <div className={styles.container}>
            <div className={styles.error}>{error}</div>
            <div className={styles.menu}>
                <div>Dodaj</div>
                <div>Edytuj</div>
                <div>Usuń</div>
            </div>
            <div className={styles.name}>{transaction.name}</div>
        </div> : <div></div>
    )
}

export default TransactionPanel