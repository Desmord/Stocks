import { useState, useEffect } from 'react';
import {
    getStockValues,
    getWigValues,
} from '../../../UtilitieFunctions';
import { STOCK, INDEX, INDEXES, WIG20_SHORCUTS } from '../../../Utilities';

import styles from './Home.module.scss';
// przeniesc funckie bez use jakis nazewnatrz
// przechwicenie danych o kodzie 400 np pustych
//  animacja na loadProgres 100
const Home = () => {
    const [loadProgress, setLoadProgress] = useState(0)
    const [indexes, setIndexes] = useState<INDEX[]>([]);
    const [stocks, setStocks] = useState<STOCK[]>([])

    const downloadIndex = (indexName: string) => {
        return new Promise(async (resolve, reject) => {
            const value = await getWigValues(indexName)
            setLoadProgress(prev => prev + 4)
            resolve(value)
        })
    }

    const downloadStock = (stockName: string) => {
        return new Promise(async (resolve, reject) => {
            const value = await getStockValues(stockName)
            setLoadProgress(prev => prev + 4)
            resolve(value)
        })
    }

    const downloadIndexes = async () => {

        let promisesArray: any[] = [];
        INDEXES.forEach(async (indexName: string) => {
            promisesArray.push(downloadIndex(indexName))
        })

        const indexesValues = await Promise.all(promisesArray)
        setIndexes(indexesValues)
    }

    const downloadStocks = async () => {

        let promisesArray: any[] = [];
        WIG20_SHORCUTS.forEach((company: { name: string; shortcut: string }) => {
            promisesArray.push(downloadStock(company.shortcut))
        })

        const stocksValues = await Promise.all(promisesArray)
        setStocks(stocksValues)

    }

    useEffect(() => {
        downloadIndexes()
        downloadStocks()
    }, [])

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