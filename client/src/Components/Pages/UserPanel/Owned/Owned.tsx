import { CurrentOwnedStocksType } from '../../../../Utilities/TypesAndInterfaces';
import { isLoss, isProfit } from '../../../../Utilities/UtilitieFunctions';

import ItemList from './ItemsList/ItemList';

import styles from './Owned.module.scss';


const Owned = ({ items }: { items: CurrentOwnedStocksType[] }) => {
    return (
        <div className={styles.container}>
            <ItemList items={items} />

        </div>
    )
}

export default Owned