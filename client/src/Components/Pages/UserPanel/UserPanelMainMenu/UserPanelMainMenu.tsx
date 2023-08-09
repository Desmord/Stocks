import { USER_PANEL_PAGES_CODE } from '../../../../Utilities/UtilitiesData';

import styles from './UserPanelMainMenu.module.scss';

const UserPanelMainMenu = (
    { currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: Function }
) => {

    const handleClick = (buttonCode: string) => {
        setCurrentPage(buttonCode)
    }

    return (
        <div className={styles.container}>
            <div
                onClick={() => handleClick(USER_PANEL_PAGES_CODE.OWNED)}
                className={`
                    ${styles.button} 
                    ${currentPage === USER_PANEL_PAGES_CODE.OWNED ? styles.buttonActive : ``}
                `}>
                Posiadanie
            </div>
            <div
                onClick={() => handleClick(USER_PANEL_PAGES_CODE.TRANSACTIONS)}
                className={`
                    ${styles.button} 
                    ${currentPage === USER_PANEL_PAGES_CODE.TRANSACTIONS ? styles.buttonActive : ``}
                `}>
                Transakcje
            </div>
            <div
                onClick={() => handleClick(USER_PANEL_PAGES_CODE.STATISTIC)}
                className={`
                    ${styles.button} 
                    ${currentPage === USER_PANEL_PAGES_CODE.STATISTIC ? styles.buttonActive : ``}
                `}>
                Stastyki
            </div>
        </div>
    )
}

export default UserPanelMainMenu