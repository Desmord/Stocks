import { useState, useRef } from 'react';

import styles from './Login.module.scss';

const Login = () => {
    const [errorText, setErrorText] = useState(``);
    const [login, setLogin] = useState(``);
    const [password, setPassword] = useState(``);

    const loginInput = useRef(null);
    const passwordInput = useRef(null);

    const displayError = (errorText: string) => {
        const errorDisplayTime = 4000;

        setErrorText(errorText)
        setTimeout(() => {
            setErrorText(``)
        }, errorDisplayTime)
    }

    const handleClick = () => {
        const isLoginEmpty = login ? true : false;
        const isPasswordEmpty = password ? true : false;

        if (!isLoginEmpty) {
            displayError(`Empty login`)
            return 0;
        } else if (!isPasswordEmpty) {
            displayError(`Empty password`)
            return 0;
        }


        // tutaj logujemy


    }

    return (
        <div className={styles.container}>
            <div className={`${errorText ? styles.errorDisplayed : ``} ${styles.error}`}>{errorText}</div>
            <input
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                ref={loginInput}
                type="text"
                placeholder='Login'
                maxLength={50} />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordInput}
                type="password"
                placeholder='Password'
                maxLength={50} />
            <div onClick={() => handleClick()} className={styles.login}>Login</div>
        </div>
    )
}

export default Login