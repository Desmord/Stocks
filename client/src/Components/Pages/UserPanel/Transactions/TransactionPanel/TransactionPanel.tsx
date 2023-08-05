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

    const [name, setName] = useState(``);
    const [shorcut, setShortCut] = useState(``);
    const [date, setDate] = useState(``);
    const [price, setPrice] = useState(``);
    const [isAcqusition, setIsAcqusition] = useState(true);
    const [commision, setCommision] = useState(``);
    const [commisionFreePrice, setCommisionFreePrice] = useState(``)
    const [totalPrice, setTotalPrice] = useState(``)
    const [quantity, setQuantity] = useState(``)
    const [profit, setProfit] = useState(``)
    const [profitWithoutCommision, setProfitWithoutCommision] = useState(``)
    const [percentageChange, setPercentageChange] = useState(``);
    const [percentageChangeWithoutCommision, setPercentageChangeWithoutCommision] = useState(``)
    const [type, setType] = useState(`stock`)
    const [reason, setReason] = useState(``)
    const [notes, setNotes] = useState(``)

    const displayError = (errorText: string) => {
        const errorDisplayTime = 4000;

        setError(errorText)
        setTimeout(() => {
            setError(``)
        }, errorDisplayTime)
    }

    const clearFields = () => {
        setName(``)
        setShortCut(``)
        setDate(``)
        setPrice(``)
        setCommision(``)
        setCommisionFreePrice(``)
        setIsAcqusition(true)
        setTotalPrice(``)
        setQuantity(``)
        setProfit(``)
        setProfitWithoutCommision(``)
        setPercentageChangeWithoutCommision(``)
        setPercentageChange(``)
        setType(``)
        setReason(``)
        setNotes(``)
    }

    useEffect(() => {
        console.log(userTransactions
            .find((transaction: TransactionType) => transaction.id === displayedTransactionId))
        setTransaction(userTransactions
            .find((transaction: TransactionType) => transaction.id === displayedTransactionId))
    }, [displayedTransactionId, userTransactions])

    useEffect(() => {
        if (transaction) {
            setName(transaction.name)
            setShortCut(transaction.shortcut)
            setDate(transaction.date)
            setPrice(`${transaction.price}`)
            setCommision(`${transaction.commision}`)
            setCommisionFreePrice(`${transaction.commisionFreePrice}`)
            setIsAcqusition(transaction.acqusition ? true : false)
            setTotalPrice(`${transaction.totalPrice}`)
            setQuantity(`${transaction.quantity}`)
            setProfit(`${transaction.profit ? transaction.profit : transaction.loss}`)
            setProfitWithoutCommision(`${transaction.profit ? transaction.totalProfit : transaction.totalLoss}`)
            setPercentageChangeWithoutCommision(`${transaction.totalPercentageChange}`)
            setPercentageChange(`${transaction.percentageChange}`)
            setType(transaction.type)
            setReason(transaction.transactionReason)
            setNotes(transaction.notes)
        }
    }, [transaction])

    return (
        transaction ? <div className={styles.container}>
            <div className={styles.error}>{error}</div>
            <div className={styles.menu}>
                <div>Dodaj</div>
                <div>Edytuj</div>
                <div>Usuń</div>
                <div onClick={() => clearFields()}>Wyczyść</div>
            </div>
            {/* 1 */}
            <input
                className={styles.myInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={`Nazwa`}></input>
            {/* 2 */}
            <input
                className={styles.myInput}
                value={shorcut}
                onChange={(e) => setShortCut(e.target.value)}
                placeholder={`Skrót`}></input>
            {/* 3 */}
            <input
                className={styles.myInput}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder={`Data`}></input>
            <div className={styles.accusition}>
                <div onClick={() => setIsAcqusition(true)} className={`${isAcqusition ? styles.active : ``}`}>Kupno</div>
                <div onClick={() => setIsAcqusition(false)} className={`${!isAcqusition ? styles.active : ``}`}> Sprzedaż</div>
            </div>
            {/* 4 */}
            <input
                className={styles.myInput}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder={`Cena`}></input>
            {/* 5 */}
            <input
                className={styles.myInput}
                value={commision}
                onChange={(e) => setCommision(e.target.value)}
                placeholder={`Prowizja`}></input>
            {/* 6 */}
            <input
                className={styles.myInput}
                value={commisionFreePrice}
                onChange={(e) => setCommisionFreePrice(e.target.value)}
                placeholder={`Wycena bez prowizji`}></input>
            {/* 7 */}
            <input
                className={styles.myInput}
                value={totalPrice}
                onChange={(e) => setTotalPrice(e.target.value)}
                placeholder={`Wycena z prowizją`}></input>
            {/* 8 */}
            <input
                className={styles.myInput}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder={`Ilość`}></input>
            {/* 9 */}
            {!isAcqusition ? <div>
                <input
                    className={styles.myInput}
                    value={profit}
                    onChange={(e) => setProfit(e.target.value)}
                    placeholder={`Zysk`}></input>
                <input
                    className={styles.myInput}
                    value={profitWithoutCommision}
                    onChange={(e) => setProfitWithoutCommision(e.target.value)}
                    placeholder={`Zysk bez prowizji`}></input>
                <input
                    className={styles.myInput}
                    value={percentageChange}
                    onChange={(e) => setPercentageChange(e.target.value)}
                    placeholder={`Procentowy zysk z prowizją`}></input>
                <input
                    className={styles.myInput}
                    value={percentageChangeWithoutCommision}
                    onChange={(e) => setPercentageChangeWithoutCommision(e.target.value)}
                    placeholder={`Procentowy zysk bez prowizji`}></input>
            </div> : ``}
            <input
                className={styles.myInput}
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder={`Typ`}></input>
            <input
                className={styles.myInput}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder={`Powód`}></input>
            <textarea
                className={styles.myTextArea}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={`Notki`}></textarea>

            {/* zrobic diwidende i wyswietlanie odpowienich pol w zaleznosci od dwidendy */}
            {/* dodac minus w przypadku spadku do procentow w ilscie */}

        </div> : <div></div>
    )
}

export default TransactionPanel