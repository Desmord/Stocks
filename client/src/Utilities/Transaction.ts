export type TransactionType = {
    id: string,
    shortcut: string,
    name: string,
    date: string,
    acqusition: boolean,
    disposal: boolean,
    commision: number,
    commisionFreePrice: number,
    quantity: number,
    loss: number,
    totalLoss: number,
    percentageChange: number,
    price: number,
    totalPercentageChange: number,
    profit: number,
    totalPrice: number,
    totalProfit: number,
    transactionReason: string,
    type: string,
    notes: string,
    group: [string],
    divident: {
        date: string,
        name: string,
        percentageProfit: number,
        profit: number,
        totalProfit: number,
    }
}

// export class Transaction {
//     id: string;
//     name: string;
//     shortcut: string;
//     date: string;
//     acqusition: boolean;
//     disposal: boolean;
//     commision: number;
//     commisionFreePrice: number;
//     quantity: number;
//     loss: number;
//     totalLoss: number;
//     percentageChange: number;
//     price: number;
//     totalPercentageChange: number;
//     profit: number;
//     totalPrice: number;
//     totalProfit: number;
//     transactionReason: string;
//     type: string;
//     notes: string;
//     group: [string];
//     divident: {
//         date: string;
//         name: string;
//         percentageProfit: number;
//         profit: number;
//         totalProfit: number;
//     }

//     constructor(id: string,
//         name: string,
//         shortcut: string,
//         date: string,
//         acqusition: boolean,
//         disposal: boolean,
//         commision: number,
//         commisionFreePrice: number,
//         quantity: number,
//         loss: number,
//         totalLoss: number,
//         percentageChange: number,
//         price: number,
//         totalPercentageChange: number,
//         profit: number,
//         totalPrice: number,
//         totalProfit: number,
//         transactionReason: string,
//         type: string,
//         notes: string,
//         group: [string],
//         divident: {
//             date: string,
//             name: string,
//             percentageProfit: number,
//             profit: number,
//             totalProfit: number,
//         }) {
//         this.id = id ? id : ``;
//         this.name = name;
//         this.shortcut = shortcut;
//         this.date = date;
//         this.acqusition = acqusition;
//         this.disposal = disposal;
//         this.commision = commision;
//         this.commisionFreePrice = commisionFreePrice;
//         this.quantity = quantity;
//         this.loss = loss;
//         this.totalLoss = totalLoss;
//         this.percentageChange = percentageChange;
//         this.price = price;
//         this.totalPercentageChange = totalPercentageChange;
//         this.profit = profit;
//         this.totalPrice = totalPrice;
//         this.totalProfit = totalProfit;
//         this.transactionReason = transactionReason;
//         this.type = type;
//         this.notes = notes;
//         this.group = group;
//         this.divident = divident;
//     }
// }