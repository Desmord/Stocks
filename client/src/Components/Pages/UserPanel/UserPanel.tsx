import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { URL_ADRESSES, USER_PANEL_PAGES_CODE } from '../../../Utilities/UtilitiesData';
import { getUserData, getCurrentStocksBasedOnTransactions } from '../../../Utilities/UtilitieFunctions';
import { setUser, getUser, setID, setLogin, setPassword, setTips, setTransaction } from '../../../Redux/UserDataSlice';


import UserPanelMainMenu from './UserPanelMainMenu/UserPanelMainMenu';
import Owned from './Owned/Owned';
import Transactions from './Transactions/Transactions';

// trial ------------------------------------------------------------------------
// ------------------------------------------------------------------------------
import { TEST_TRANSACTIONS } from '../../../Utilities/TestDataUtilites';
// end-trial --------------------------------------------------------------------
// ------------------------------------------------------------------------------

import styles from './UserPanel.module.scss'

const UserPanel = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userTransactions = useSelector((state: any) => state.userData.transactions)

    const [currentPage, setCurrentPage] = useState(USER_PANEL_PAGES_CODE.OWNED)

    const getData = async () => {
        // const data = await getUserData();

        // dispatch(setID(data[0]._id ? data[0]._id : ``))
        // dispatch(setLogin(data[0].login ? data[0].login : ``))
        // dispatch(setPassword(data[0].password ? data[0].password : ``))
        // dispatch(setTips(data[0].tips ? data[0].tips : []))
        // dispatch(setTransaction(data[0].transactions ? data[0].transactions : []))


        // trial ------------------------------------------------------------------------
        // ------------------------------------------------------------------------------
        dispatch(setID(`1`))
        dispatch(setLogin(`mikolaj`))
        dispatch(setPassword(`haslo`))
        dispatch(setTips([`tip 1`]))
        dispatch(setTransaction(TEST_TRANSACTIONS))
        // end-trial --------------------------------------------------------------------
        // ------------------------------------------------------------------------------


    }

    useEffect(() => {
        getData()
    }, [dispatch]);

    useEffect(() => {
        // console.log(`Wszystkie`, userTransactions)
        console.log(getCurrentStocksBasedOnTransactions(userTransactions))
    }, [userTransactions, dispatch])

    useEffect(() => {
        if (!sessionStorage.getItem(`isLogged`)) navigate(URL_ADRESSES.HOME, { replace: true })
    })

    return (
        <div className={styles.container}>
            <UserPanelMainMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {currentPage === USER_PANEL_PAGES_CODE.OWNED ? <Owned /> : ``}
            {currentPage === USER_PANEL_PAGES_CODE.TRANSACTIONS ? <Transactions /> : ``}
        </div>
    )

}

export default UserPanel