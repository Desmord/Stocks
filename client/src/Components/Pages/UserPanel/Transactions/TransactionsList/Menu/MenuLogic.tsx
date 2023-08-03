import { useEffect, useState } from 'react';
import { TransactionType } from '../../../../../../Utilities/TypesAndInterfaces';
import {
    DATE_FILTER_OPTIONS,
    TRANSACTION_TYPE_OPTIONS,
    SORT_OPTIONS,
    getFiltredTransactionsByDate,
    formatDate,
} from '../Utilities';

const MenuLogic = ((userTransactions: TransactionType[]) => {
    const [dateFilterSelected, setDateFilterSelected] = useState(DATE_FILTER_OPTIONS.ALL)
    const [transactionTypeFilterSelected, setTransactionTypeSelected] = useState(TRANSACTION_TYPE_OPTIONS.ALL)
    const [sortSelected, setSortSelected] = useState(SORT_OPTIONS.CLOSEST)

    const [transactionAfterDateFilter, setTransactionsAfterDateFilter] = useState<TransactionType[]>([])
    const [transactionAfterTypeFilter, setTransactionAfterTypeFilter] = useState<TransactionType[]>([])
    const [transactionAfterSort, setTransactionAfterSort] = useState<TransactionType[]>([])

    useEffect(() => {
        if (userTransactions.length) {

            switch (dateFilterSelected) {
                case DATE_FILTER_OPTIONS.ALL:
                    setTransactionsAfterDateFilter(userTransactions);
                    break;
                case DATE_FILTER_OPTIONS.CURRENT_YEAR:
                    setTransactionsAfterDateFilter(
                        getFiltredTransactionsByDate(
                            `2023-01-01`,
                            `${new Date().getFullYear()}-${formatDate((new Date().getMonth() + 1).toString())}-${formatDate((new Date().getDate().toString()))}`,
                            userTransactions
                        ));
                    break;
                default:
                    setTransactionsAfterDateFilter(
                        getFiltredTransactionsByDate(
                            `2023-01-01`,
                            `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
                            userTransactions
                        ));
                    break;
            }

        }
    }, [userTransactions, dateFilterSelected])

    useEffect(() => {

        if (transactionAfterDateFilter.length) {

            switch (transactionTypeFilterSelected) {
                case TRANSACTION_TYPE_OPTIONS.ALL:
                    setTransactionAfterTypeFilter(transactionAfterDateFilter)
                    break;
                case TRANSACTION_TYPE_OPTIONS.BUY:
                    setTransactionAfterTypeFilter(
                        transactionAfterDateFilter
                            .filter((transaction: TransactionType) => transaction.acqusition ? true : false))
                    break;
                case TRANSACTION_TYPE_OPTIONS.SELL_LOSS:
                    setTransactionAfterTypeFilter(
                        transactionAfterDateFilter
                            .filter((transaction: TransactionType) =>
                                !transaction.acqusition && transaction.profit < 0 ? true : false))
                    break;
                default:
                    setTransactionAfterTypeFilter(
                        transactionAfterDateFilter
                            .filter((transaction: TransactionType) =>
                                !transaction.acqusition && transaction.profit >= 0 ? true : false))
                    break;
            }

        }

    }, [transactionAfterDateFilter, transactionTypeFilterSelected])


    useEffect(() => {

        if (transactionAfterTypeFilter.length) {

            switch (sortSelected) {
                case SORT_OPTIONS.CLOSEST:
                    setTransactionAfterSort(JSON.parse(JSON.stringify(transactionAfterTypeFilter)).reverse())
                    break;
                default:
                    setTransactionAfterSort(transactionAfterTypeFilter)
                    break;
            }
        }

    }, [transactionAfterTypeFilter, sortSelected])

    useEffect(() => {
        console.log(transactionAfterSort)
    }, [transactionAfterSort])

    return {
        dateFilterSelected, setDateFilterSelected,
        transactionTypeFilterSelected, setTransactionTypeSelected,
        sortSelected, setSortSelected,
        transactionAfterDateFilter, setTransactionsAfterDateFilter,
        transactionAfterTypeFilter, setTransactionAfterTypeFilter,
        transactionAfterSort, setTransactionAfterSort,
    }

})

export default MenuLogic