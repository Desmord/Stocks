import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL_ADRESSES } from '../../../Utilities';
import { logIn } from '../../../UtilitieFunctions';

import styles from './Login.module.scss';

const Login = () => {
    const [errorText, setErrorText] = useState(``);
    const [login, setLogin] = useState(``);
    const [password, setPassword] = useState(``);

    const loginInput = useRef(null);
    const passwordInput = useRef(null);

    const navigate = useNavigate();

    const displayError = (errorText: string) => {
        const errorDisplayTime = 4000;

        setErrorText(errorText)
        setTimeout(() => {
            setErrorText(``)
        }, errorDisplayTime)
    }

    const handleClick = async () => {
        const isLoginEmpty = login ? true : false;
        const isPasswordEmpty = password ? true : false;

        if (!isLoginEmpty) {
            displayError(`Empty login`)
            return 0;
        } else if (!isPasswordEmpty) {
            displayError(`Empty password`)
            return 0;
        }

        
        // const isLogged = await logIn(login, password);
        // trial ------------------------------------------------------------------------
        // ------------------------------------------------------------------------------
        const isLogged = true;
        // end-trial --------------------------------------------------------------------
        // ------------------------------------------------------------------------------


        if (isLogged) {
            sessionStorage.setItem(`isLogged`, `true`)
            navigate(URL_ADRESSES.USER_PANEL, { replace: true })
        } else {
            displayError(`Wrong login or password`)
        }

    }

    return (
        <div className={styles.container}>
            <div className={`${errorText ? styles.errorDisplayed : ``} ${styles.error}`}>{errorText}</div>
            <input
                onKeyDown={(e) => { if (e.key === `Enter`) { handleClick() } }}
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                ref={loginInput}
                type="text"
                placeholder='Login'
                maxLength={50} />
            <input
                onKeyDown={(e) => { if (e.key === `Enter`) { handleClick() } }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordInput}
                type="password"
                placeholder='Password'
                maxLength={50} />
            <div
                onClick={() => handleClick()}
                className={styles.login}>
                Login
            </div>
        </div>
    )
}

export default Login