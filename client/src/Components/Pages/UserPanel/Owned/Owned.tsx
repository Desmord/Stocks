import { CurrentOwnedStocksType } from '../../../../Utilities/TypesAndInterfaces';
import { useState } from 'react'

import ItemList from './ItemsList/ItemList';
import ItemDetails from './ItemDetails/ItemDetails';

import styles from './Owned.module.scss';


const Owned = ({ currentStocks }: { currentStocks: CurrentOwnedStocksType[] }) => {
    const [currentSelectetItem, setCurrentSelectemItem] = useState(``)

    return (
        <div className={styles.container}>
            <ItemList
                items={currentStocks}
                currentSelectetItem={currentSelectetItem}
                setCurrentSelectemItem={setCurrentSelectemItem} />
            <ItemDetails
                currentSelectetItem={currentSelectetItem}
                currentState={currentStocks}
            />
        </div>
    )
}

export default Owned