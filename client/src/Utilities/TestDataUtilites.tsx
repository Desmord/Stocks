import { INDEX, STOCK } from "./UtilitiesData"
import { TransactionType } from "./Transaction"

export const TEST_STOCK_DATA: STOCK[] =
    [
        {
            companyShortcut: "ALIOR",
            mainValue: "48,6200",
            percentageChange: "2,75",
            valueChange:
                "1,3000"

        },
        {
            companyShortcut: "ALLEGRO",
            mainValue: "31,8450",
            percentageChange:
                "-0,48"
            ,
            valueChange:
                "-0,1550"

        },
        {
            companyShortcut: "ASSECOPOL",
            mainValue: "79,9500",
            percentageChange:
                "1,91"
            ,
            valueChange:
                "1,5000"

        },
        {
            companyShortcut: "PEKAO",
            mainValue: "110,8000",
            percentageChange:
                "1,37"
            ,
            valueChange:
                "1,5000"

        },
        {
            companyShortcut: "CDPROJEKT",
            mainValue: "154,4000",
            percentageChange:
                "-0,16"
            ,
            valueChange:
                "-0,2500"

        },
        {
            companyShortcut: "CYFRPLSAT",
            mainValue: "16,5350",
            percentageChange:
                "-0,81"
            ,
            valueChange:
                "-0,1350"

        },
        {
            companyShortcut: "DINOPL",
            mainValue: "472,6000",
            percentageChange:
                "0,55"
            ,
            valueChange:
                "2,6000"

        },
        {
            companyShortcut: "KETY",
            mainValue: "617,0000",
            percentageChange:
                "1,82"
            ,
            valueChange:
                "11,0000"

        },
        {
            companyShortcut: "JSW",
            mainValue: "39,9500",
            percentageChange:
                "-2,06"
            ,
            valueChange:
                "-0,8400"

        },
        {
            companyShortcut: "KGHM",
            mainValue: "111,5500",
            percentageChange:
                "0,95"
            ,
            valueChange:
                "1,0500"

        },
        {
            companyShortcut: "KRUK",
            mainValue: "409,4000",
            percentageChange:
                "1,69"
            ,
            valueChange:
                "6,8000"

        },
        {
            companyShortcut: "LPP",
            mainValue: "13920,0000",
            percentageChange:
                "0,36"
            ,
            valueChange:
                "50,0000"

        },
        {
            companyShortcut: "ORANGEPL",
            mainValue: "7,0100",
            percentageChange:
                "-1,16"
            ,
            valueChange:
                "-0,0820"

        },
        {
            companyShortcut: "PGE",
            mainValue: "7,3140",
            percentageChange:
                "-1,16"
            ,
            valueChange:
                "-0,0860"

        },
        {
            companyShortcut: "PKNORLEN",
            mainValue: "64,2000",
            percentageChange:
                "-2,83"
            ,
            valueChange:
                "-1,8700"

        },
        {
            companyShortcut: "PKOBP",
            mainValue: "36,0800",
            percentageChange:
                "0,00"
            ,
            valueChange:
                "0,0000"

        },
        {
            companyShortcut: "PZU",
            mainValue: "39,5800",
            percentageChange:
                "-0,88"
            ,
            valueChange:
                "-0,3500"

        },
        {
            companyShortcut: "PEPCO",
            mainValue: "36,9200",
            percentageChange:
                "-0,16"
            ,
            valueChange:
                "-0,0600"

        },
        {
            companyShortcut: "SANPL",
            mainValue: "389,2000",
            percentageChange:
                "-0,36"
            ,
            valueChange:
                "-1,4000"

        },
        {
            companyShortcut: "MBANK",
            mainValue: "403,1000",
            percentageChange:
                "-0,71"
            ,
            valueChange:
                "-2,9000"

        }
    ]

export const TEST_INDEXES_DATA: INDEX[] = [
    {
        wigName: "WIG",
        mainValue: "67142,59",
        percentageChange:
            "-0,15"
        ,
        valueChange:
            "-102,6900"

    },
    {
        wigName: "WIG 20",
        mainValue: "2056,33",
        percentageChange:
            "-0,28"
        ,
        valueChange:
            "-5,7800"

    },
    {
        wigName: "WIG 30",
        mainValue: "2529,68",
        percentageChange:
            "-0,18"
        ,
        valueChange:
            "-4,5100"

    },
    {
        wigName: "WIG 40",
        mainValue: "4842,03",
        percentageChange:
            "00,0"
        ,
        valueChange:
            "0,0000",
    },
    {
        wigName: "WIG 80",
        mainValue: "21649,34",
        percentageChange:
            "0,57"
        ,
        valueChange:
            "122,5800"

    }
]

export const TEST_TRANSACTIONS:   TransactionType[] = [
    {
        id: "1",
        shortcut: "PLAYWAY",
        name: "PlayWay SA",
        type: "stock",
        // type: "stock, feature, option, divident",
        acqusition: true,
        disposal: false,
        quantity: 11,
        price: 261.50,
        commision: 11.22,
        totalPrice: 2887.72,
        commisionFreePrice:2876.5,
        totalProfit: 0,             // if acuisition 0 ( and not divident? )
        profit:0,                   // if acuisition 0 ( and not divident? )
        totalLoss: 0 ,                // if acuisition 0   
        loss: 0,                    // if acusition 0
        totalPercentageChange:0,    // if acusition 0
        percentageChange: 0,        // if acusition 0
        date: "2022-05-20",
        notes: "Probna notka do transakcji payway",
        transactionReason: "Brak",
        group: [
            "Grupa test 1"
        ],
        divident: {
            date: "0",
            totalProfit: 0,
            name: "",
            profit: 0,
            percentageProfit: 0
        }
    },
    {
        id: "2",
        shortcut: "PLAYWAY",
        name: "PlayWay SA",
        type: "stock",
        acqusition: false,
        disposal: true,
        quantity: 11,
        price: 390.00,
        commision: 16.73,
        totalPrice: 4306.73,
        commisionFreePrice:4290,
        totalProfit: 1419.01,         // if acuisition 0 ( and not divident? )
        profit:1385.55,               // if acuisition 0 ( and not divident? )
        totalLoss: 0 ,                // if acuisition 0   
        loss: 0,                      // if acusition 0
        totalPercentageChange:67,      // if acusition 0
        percentageChange: 48,          // if acusition 0
        date: "2022-05-25",
        notes: "Probna notka do transakcji payway",
        transactionReason: "Brak",
        group: [
            "Grupa test 1"
        ],
        divident: {
            date: "0",
            totalProfit: 0,
            name: "",
            profit: 0,
            percentageProfit: 0
        }
    },
    {
        id: "3",
        shortcut: "11BIT",
        name: "11 bit studios",
        type: "stock",
        // type: "stock, feature, option, divident",
        acqusition: true,
        disposal: false,
        quantity: 3,
        price: 544,
        commision: 6.36,
        totalPrice: 1638.36,
        commisionFreePrice:1632,
        totalProfit: 0,             // if acuisition 0 ( and not divident? )
        profit:0,                   // if acuisition 0 ( and not divident? )
        totalLoss: 0 ,                // if acuisition 0   
        loss: 0,                    // if acusition 0
        totalPercentageChange:0,    // if acusition 0
        percentageChange: 0,        // if acusition 0
        date: "2022-06-20",
        notes: "Probna notka do transakcji 11bit",
        transactionReason: "Brak",
        group: [
            "Grupa test 1"
        ],
        divident: {
            date: "0",
            totalProfit: 0,
            name: "",
            profit: 0,
            percentageProfit: 0
        }
    },
    {
        id: "4",
        shortcut: "11BIT",
        name: "11 bit studios",
        type: "stock",
        // type: "stock, feature, option, divident",
        acqusition: false,
        disposal: true,
        quantity: 3,
        price: 553.5,
        commision: 6.48,
        totalPrice: 1666.98,
        commisionFreePrice:1660.5,
        totalProfit: 28.62,             // if acuisition 0 ( and not divident? )
        profit:15.66,                   // if acuisition 0 ( and not divident? )
        totalLoss: 0 ,                // if acuisition 0   
        loss: 0,                        // if acusition 0
        totalPercentageChange:1.01,        // if acusition 0
        percentageChange: 0.96,        // if acusition 0
        date: "2022-06-29",
        notes: "Probna notka do transakcji 11bit",
        transactionReason: "Brak",
        group: [
            "Grupa test 1"
        ],
        divident: {
            date: "0",
            totalProfit: 0,
            name: "",
            profit: 0,
            percentageProfit: 0
        }
    },
    {
        id: "5",
        shortcut: "ARTIFEX",
        name: "Artifex Mundi SA",
        type: "stock",
        // type: "stock, feature, option, divident",
        acqusition: true,
        disposal: false,
        quantity: 293,
        price: 9.60,
        commision: 10.97,
        totalPrice: 2823.77,
        commisionFreePrice:2812.8,
        totalProfit: 0,             // if acuisition 0 ( and not divident? )
        profit:0,                   // if acuisition 0 ( and not divident? )
        totalLoss: 0 ,                // if acuisition 0   
        loss: 0,                    // if acusition 0
        totalPercentageChange:0,    // if acusition 0
        percentageChange: 0,        // if acusition 0
        date: "2023-03-10",
        notes: "Probna notka do transakcji Artifex",
        transactionReason: "DM TRIGON Kacper kapron rekomendacja",
        group: [
            "Grupa test 1"
        ],
        divident: {
            date: "0",
            totalProfit: 0,
            name: "",
            profit: 0,
            percentageProfit: 0
        }
    },
    {
        id: "6",
        shortcut: "ARTIFEX",
        name: "Artifex Mundi SA",
        type: "stock",
        // type: "stock, feature, option, divident",
        acqusition: false,
        disposal: true,
        quantity: 293,
        price: 12.40,
        commision: 14.17,
        totalPrice: 3647.37,
        commisionFreePrice:3633.2,
        totalProfit: 823.6,             // if acuisition 0 ( and not divident? )
        profit:795.26,                   // if acuisition 0 ( and not divident? )
        totalLoss: 0 ,                // if acuisition 0   
        loss: 0,                    // if acusition 0
        totalPercentageChange:30,    // if acusition 0
        percentageChange: 28.16,        // if acusition 0
        date: "2023-04-11",
        notes: "Probna notka do transakcji Artifex",
        transactionReason: "DM TRIGON Kacper kapron rekomendacja",
        group: [
            "Grupa test 1"
        ],
        divident: {
            date: "0",
            totalProfit: 0,
            name: "",
            profit: 0,
            percentageProfit: 0
        }
    },
    {
        id: "7",
        shortcut: "ALLEGRO",
        name: "Allegro",
        type: "stock",
        // type: "stock, feature, option, divident",
        acqusition: true,
        disposal: false,
        quantity: 22,
        price: 84.93,
        commision: 7.26,
        totalPrice: 1875.72,
        commisionFreePrice:1868.46,
        totalProfit: 0,             // if acuisition 0 ( and not divident? )
        profit:0,                   // if acuisition 0 ( and not divident? )
        totalLoss: 0 ,                // if acuisition 0   
        loss: 0,                    // if acusition 0
        totalPercentageChange:0,    // if acusition 0
        percentageChange: 0,        // if acusition 0
        date: "2023-01-10",
        notes: "Probna notka do transakcji Allegro",
        transactionReason: "DM TRIGON Kacper kapron rekomendacja",
        group: [
            "Grupa test 2"
        ],
        divident: {
            date: "0",
            totalProfit: 0,
            name: "",
            profit: 0,
            percentageProfit: 0
        }
    },
    {
        id: "8",
        shortcut: "ALLEGRO",
        name: "Allegro",
        type: "stock",
        // type: "stock, feature, option, divident",
        acqusition: false,
        disposal: true,
        quantity: 22,
        price: 73.55,
        commision: 6.31,
        totalPrice: 1624.41,
        commisionFreePrice:1618.1,
        totalProfit: 0,             // if acuisition 0 ( and not divident? )
        profit:0,                   // if acuisition 0 ( and not divident? )
        totalLoss: 257.62,                // if acuisition 0   
        loss: 244.05,                    // if acusition 0
        totalPercentageChange:14.5,    // if acusition 0
        percentageChange: 13.5,        // if acusition 0
        date: "2023-02-24",
        notes: "Probna notka do transakcji Allegro",
        transactionReason: "DM TRIGON Kacper kapron rekomendacja",
        group: [
            "Grupa test 2"
        ],
        divident: {
            date: "0",
            totalProfit: 0,
            name: "",
            profit: 0,
            percentageProfit: 0
        }
    },
    {
        id: "9",
        shortcut: "COMARCH",
        name: "Comarch SA",
        type: "stock",
        // type: "stock, feature, option, divident",
        acqusition: true,
        disposal: false,
        quantity: 17,
        price: 197.5,
        commision: 13.09,
        totalPrice: 3370.59,
        commisionFreePrice:3357.5,
        totalProfit: 0,             // if acuisition 0 ( and not divident? )
        profit:0,                   // if acuisition 0 ( and not divident? )
        totalLoss: 0 ,                // if acuisition 0   
        loss: 0,                    // if acusition 0
        totalPercentageChange:0,    // if acusition 0
        percentageChange: 0,        // if acusition 0
        date: "2023-01-20",
        notes: "Probna notka do transakcji Cormach",
        transactionReason: "Brak",
        group: [
            "Grupa test 1"
        ],
        divident: {
            date: "0",
            totalProfit: 0,
            name: "",
            profit: 0,
            percentageProfit: 0
        }
    },
    {
        id: "10",
        shortcut: "COMARCH",
        name: "Comarch SA",
        type: "stock",
        // type: "stock, feature, option, divident",
        acqusition: false,
        disposal: true,
        quantity: 17,
        price: 196,
        commision: 12.99,
        totalPrice:3332,
        commisionFreePrice:3319.01,  // w przypadku sprzedazy to komision dodajemy tutaj
        totalProfit: 0,             // if acuisition 0 ( and not divident? )
        profit:0,                   // if acuisition 0 ( and not divident? )
        totalLoss: 51.58 ,                // if acuisition 0   
        loss: 25.5,                    // if acusition 0
        totalPercentageChange:1.78,    // if acusition 0
        percentageChange: 1.51,        // if acusition 0
        date: "2023-01-28",
        notes: "Probna notka do transakcji Cormach",
        transactionReason: "Brak",
        group: [
            "Grupa test 2"
        ],
        divident: {
            date: "0",
            totalProfit: 0,
            name: "",
            profit: 0,
            percentageProfit: 0
        }
    },
    {
        id: "11",
        shortcut: "CDPROJEKT",
        name: "CD Projekt SA",
        type: "stock",
        // type: "stock, feature, option, divident",
        acqusition: true,
        disposal: false,
        quantity: 31,
        price: 149.15,
        commision: 18.03,
        totalPrice: 4641.68,
        commisionFreePrice:4623.65,
        totalProfit: 0,             // if acuisition 0 ( and not divident? )
        profit:0,                   // if acuisition 0 ( and not divident? )
        totalLoss: 0 ,                // if acuisition 0   
        loss: 0,                    // if acusition 0
        totalPercentageChange:0,    // if acusition 0
        percentageChange: 0,        // if acusition 0
        date: "2023-05-07",
        notes: "Probna notka do transakcji CD Projekt",
        transactionReason: "Brak",
        group: [
            "Grupa test 2"
        ],
        divident: {
            date: "0",
            totalProfit: 0,
            name: "",
            profit: 0,
            percentageProfit: 0
        }
    },
]


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
    //                 "Kupować na początku grudnia i sprzedawać na koncu stycznia. Mniej ważne.",
    //                  "Nie moze byc strzsze zle ck ..."
    //                  "czy ma diwidente dodatkowy plus"
    //                  "Powyzej jakiejs kwoty jest niska prowizja"
//                         "fundamenty wazniejsze niz techniczna ktora tylko do wsparcia"
    //             ],
    //             transactions: [  
    //                  ...
    //             ],
    //         })
    //     });

    //     console.log(await response.json())
    // }