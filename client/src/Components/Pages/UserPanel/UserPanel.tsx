import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL_ADRESSES } from '../../../Utilities';

import styles from './UserPanel.module.scss'

const UserPanel = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem(`isLogged`)) navigate(URL_ADRESSES.HOME, { replace: true })
    })

    return (
        <div className={styles.container}>UserPanel</div>
    )

}

export default UserPanel