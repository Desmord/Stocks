import { useState } from 'react';

import styles from './Home.module.scss';

const Home = () => {
    const [loadProgress, setLoadProgress] = useState(0)

    

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.loaderList}>
                    <div className={`${styles.loaderOne} ${styles.loaderTypeOne}`}></div>
                    <div className={`${styles.loaderTwo} ${styles.loaderTypeTwo}`}></div>
                    <div className={`${styles.loaderThree} ${styles.loaderTypeOne}`}></div>
                    <div className={`${styles.loaderFour} ${styles.loaderTypeTwo}`}></div>
                </div>
                <div className={styles.progress}>
                    <span>{loadProgress}</span>
                    <span>%</span>
                </div>
            </div>
            <div className={styles.mainWigs}>Main Wigs</div>
            <div className={styles.wig20Stocks}>vig20 stocks</div>
        </div>
    )
}

export default Home;


// on animation end i wtedy wyswietlamy