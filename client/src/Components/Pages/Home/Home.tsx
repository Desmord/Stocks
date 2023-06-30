import { useState, useEffect, useRef } from 'react';
import { getStockValues, getWigValues, } from '../../../UtilitieFunctions';
import { STOCK, INDEX, INDEXES, WIG20_SHORCUTS } from '../../../Utilities';

import Wigs from './Wigs/Wigs';
import Stocks from './Stocks/Stocks';
// trial ------------------------------------------------------------------------
// ------------------------------------------------------------------------------
import { TEST_STOCK_DATA, TEST_INDEXES_DATA } from '../../../TestDataUtilites';
// end-trial --------------------------------------------------------------------
// ------------------------------------------------------------------------------
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

    const createDownloadPromise = (itemName: string, getFunction: Function) => {
        return new Promise(async (resolve, reject) => {
            const value = await getFunction(itemName)
            setLoadProgress(prev => prev + 4)
            resolve(value)
        })
        
    }

    const createIndexesPromiseArray = () => {
        let promisesArray: any[] = [];

        INDEXES.forEach(async (indexName: string) => {
            promisesArray.push(createDownloadPromise(indexName, getWigValues))
        })
        return promisesArray
    }

    const createStocksPromiseArray = () => {
        let promisesArray: any[] = [];

        WIG20_SHORCUTS.forEach((company: { name: string; shortcut: string }) => {
            promisesArray.push(createDownloadPromise(company.shortcut, getStockValues))
        })
        return promisesArray
    }

    const formatData = (data: any[]): any[] => {
        return data.map((item) => {
            if (item.error) return item;
            return {
                ...item,
                percentageChange: item.percentageChange[0],
                valueChange: item.valueChange[0]
            }
        })
    }

    const downloadIndexes = async () => {
        let indexesValues = await Promise.all(createIndexesPromiseArray())

        indexesValues = formatData(indexesValues)
        setIndexes(indexesValues)
        setIndexesLoaded(true)
    }

    const downloadStocks = async () => {
        let stocksValues = await Promise.all(createStocksPromiseArray())

        stocksValues = formatData(stocksValues)
        setStocks(stocksValues)
        setStocksLoaded(true)
    }

    const showIndexes = () => {
        wigsContainer.current?.setAttribute(`style`, `display: block;`);
        stocksContainer.current?.setAttribute(`style`, `display: block;`);
        // wait moment and start displaying
        setTimeout(() => {
            wigsContainer.current?.classList.add(styles.shown);
            stocksContainer.current?.classList.add(styles.shown);
        }, 100);

    }

    // trial ------------------------------------------------------------------------
    // ------------------------------------------------------------------------------
    const getTestData = () => {
        setStocks(TEST_STOCK_DATA)
        setIndexes(TEST_INDEXES_DATA)
    }
    // end-trial --------------------------------------------------------------------
    // ------------------------------------------------------------------------------


    useEffect(() => {
        // downloadIndexes()
        // downloadStocks()

        // trial ------------------------------------------------------------------------
        // ------------------------------------------------------------------------------
        getTestData()
        setIndexesLoaded(true)
        setStocksLoaded(true)
        // end-trial --------------------------------------------------------------------
        // ------------------------------------------------------------------------------
    }, [])



    // trial ------------------------------------------------------------------------
    // ------------------------------------------------------------------------------
    // useEffect(() => {
    //     console.log(stocks);
    //     console.log(indexes);
    // }, [stocks, indexes])
    // end-trial --------------------------------------------------------------------
    // ------------------------------------------------------------------------------



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
                <Wigs indexes={indexes} />
            </div>
            <div ref={stocksContainer} className={styles.wig20Stocks}>
                <Stocks stocks={stocks}/>
            </div>
        </div>
    )
}

export default Home;
