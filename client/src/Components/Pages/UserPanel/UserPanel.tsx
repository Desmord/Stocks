import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { URL_ADRESSES, USER_PANEL_PAGES_CODE } from '../../../Utilities/UtilitiesData';
import { getUserData } from '../../../Utilities/UtilitieFunctions';
import { setUser } from '../../../Redux/UserDataSlice';

import UserPanelMainMenu from './UserPanelMainMenu/UserPanelMainMenu';

// trial ------------------------------------------------------------------------
// ------------------------------------------------------------------------------
import { TEST_TRANSACTIONS } from '../../../Utilities/TestDataUtilites';
// end-trial --------------------------------------------------------------------
// ------------------------------------------------------------------------------

import styles from './UserPanel.module.scss'

const UserPanel = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(USER_PANEL_PAGES_CODE.OWNED)

    const getData = async () => {
        // const data = await getUserData();
        // dispatch(setUser({
        //     _id: data._id ? data._id : ``,
        //     login: data.login ? data.login : ``,
        //     password: data.password ? data.password : ``,
        //     tips: data.tips ? data.tips : [],
        //     transactions: data.transactions ? data.transactions : [],
        // }))


        // trial ------------------------------------------------------------------------
        // ------------------------------------------------------------------------------
        dispatch(setUser({
            _id: `1`,
            login: `mikolaj`,
            password: `haslo`,
            tips: [`tip 1`],
            transactions: TEST_TRANSACTIONS,
        }))
        // end-trial --------------------------------------------------------------------
        // ------------------------------------------------------------------------------


    }

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        if (!sessionStorage.getItem(`isLogged`)) navigate(URL_ADRESSES.HOME, { replace: true })
    })

    return (
        <div className={styles.container}>
            <UserPanelMainMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )

}

export default UserPanel