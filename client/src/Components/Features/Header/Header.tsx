import { useNavigate } from 'react-router-dom';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { URL_ADRESSES } from '../../../Utilities/UtilitiesData';

import styles from './Header.module.scss';

const Header = () => {

    const navigate = useNavigate();

    const handleClick = () => {

        if (sessionStorage.getItem(`isLogged`)) {
            sessionStorage.removeItem(`isLogged`)
            navigate(URL_ADRESSES.HOME, { replace: true })
        } else {
            navigate(URL_ADRESSES.LOGIN, { replace: true })
        }

    }

    return (
        <div onClick={() => handleClick()} className={styles.container}>
            {sessionStorage.getItem(`isLogged`) ? <RiLogoutBoxLine /> : <div className={styles.signIn}>Sign in</div>}
        </div>
    )
}

export default Header;