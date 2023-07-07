import { useNavigate } from 'react-router-dom';
import { MdLogin } from 'react-icons/md';
import { URL_ADRESSES } from '../../../Utilities';

import styles from './Header.module.scss';
// dodac adresy do utilites
const Header = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(URL_ADRESSES.LOGIN, { replace: true })
    }

    // try catch
    // const clickTest = async () => {

    //     const response = await fetch(`http://localhost:8000/api/dataBase/editUser`, {
    //         method: `POST`,
    //         mode: "cors",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             id: `64a466aa67804a64c96bcfa0`,
    //             login: `mikolaj`,
    //             password: `haslo`,
    //             tips: [
    //                 "Kupować na początku kwietnia i sprzedawać po koniec sierpnia. Najważniejsze",
    //                 "Kupować na początku stycznia i sprzedawać na konću. Ważne.",
    //                 "Kupować na początku grudnia i sprzedawać na koncu stycznia. Mniej ważne."
    //             ],
    //             transactions: [
    //                 {
    //                     id: "1",
    //                     shortcut: "Skrót papieru edytowany",
    //                     name: "Nazwa parieru",
    //                     type: "stock, feature, option, divident",
    //                     acqusition: true,
    //                     disposal: false,
    //                     quantity: 10,
    //                     price: 100.4,
    //                     commision: 1.5,
    //                     totalPrice: 1000.5,
    //                     commisionFreePrice: 9999.5,
    //                     profit: 203.5,
    //                     loss: 0,
    //                     percentageChange: 15.5,
    //                     date: "2023-05-20",
    //                     notes: "Notki do tranzakcji. Np kiedy sprzedac.",
    //                     transactionReason: "Powody kupna/sprzedazy",
    //                     group: [
    //                         "Jakaś grupa 1"
    //                     ],
    //                     divident: {
    //                         date: "2023-05-20",
    //                         totalProfit: 235.6,
    //                         name: "Nazwa firmy z diwidendy.",
    //                         profit: 23,
    //                         percentageProfit: 12
    //                     }
    //                 }
    //             ],
    //         })
    //     });

    //     console.log(await response.json())
    // }

    return (
        <div onClick={() => handleClick()} className={styles.container}>
            <MdLogin />
        </div>
    )
}

export default Header;