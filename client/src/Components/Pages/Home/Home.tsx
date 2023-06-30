import { useState, useEffect, useRef } from 'react';
import { getStockValues, getWigValues, } from '../../../UtilitieFunctions';
import { STOCK, INDEX, INDEXES, WIG20_SHORCUTS } from '../../../Utilities';

import styles from './Home.module.scss';


const Home = () => {
    const [loadProgress, setLoadProgress] = useState(0);
    const [indexesLoaded, setIndexesLoaded] = useState(false);
    const [stocksLoaded, setStocksLoaded] = useState(false);
    const [indexes, setIndexes] = useState<INDEX[]>([]);
    const [stocks, setStocks] = useState<STOCK[]>([])

    const loader = useRef<HTMLDivElement>(null);
    const wigsContainer = useRef<HTMLDivElement>(null);
    const stocksContainer = useRef<HTMLDivElement>(null);

    const downloadIndexPromise = (indexName: string) => {
        return new Promise(async (resolve, reject) => {
            const value = await getWigValues(indexName)
            setLoadProgress(prev => prev + 4)
            resolve(value)
        })
    }

    const downloadStockPromise = (stockName: string) => {
        return new Promise(async (resolve, reject) => {
            const value = await getStockValues(stockName)
            setLoadProgress(prev => prev + 4)
            resolve(value)
        })
    }

    const downloadIndexes = async () => {

        let promisesArray: any[] = [];
        INDEXES.forEach(async (indexName: string) => {
            promisesArray.push(downloadIndexPromise(indexName))
        })

        const indexesValues = await Promise.all(promisesArray)

        setIndexes(indexesValues)
        setIndexesLoaded(true)
    }

    const downloadStocks = async () => {

        let promisesArray: any[] = [];
        WIG20_SHORCUTS.forEach((company: { name: string; shortcut: string }) => {
            promisesArray.push(downloadStockPromise(company.shortcut))
        })

        const stocksValues = await Promise.all(promisesArray)

        setStocks(stocksValues)
        setStocksLoaded(true)

    }

    const showIndexes = () => {
        // display elements (opacity 0)
        wigsContainer.current?.setAttribute(`style`, `display: block;`);
        stocksContainer.current?.setAttribute(`style`, `display: block;`);
        // wait moment and start displaying
        setTimeout(() => {
            wigsContainer.current?.classList.add(styles.shown);
            stocksContainer.current?.classList.add(styles.shown);
        }, 100);

    }

    useEffect(() => {
        downloadIndexes()
        downloadStocks()
    }, [])

    return (
        <div className={styles.container}>
            <div
                ref={loader}
                onAnimationEnd={() => showIndexes()}
                className={`${styles.title} ${indexesLoaded && stocksLoaded ? styles.hidden : ``}`}>
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
            <div ref={wigsContainer} className={styles.mainWigs}>
                {/* tutaj compioenet z danymi zeby nie robic forwardref */}
            </div>
            <div ref={stocksContainer} className={styles.wig20Stocks}>
                {/* tutaj compioenet z danymi zeby nie robic forwardref */}
            </div>
        </div>
    )
}

export default Home;
