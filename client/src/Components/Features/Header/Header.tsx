import { MdLogin } from 'react-icons/md';

import styles from './Header.module.scss';

const Header = () => {

    return (
        <div className={styles.container}>
            <MdLogin />
        </div>
    )
}

export default Header;