export const api = {
    baseUrl:"http://localhost:8081/api/v1",
    user:{
        getUser:"/user?email=",
        createUser:"/user",
    },
    wallet:{
        chart:"/wallet/chart",
        buy:"/wallet/buy",
        transfer:"/wallet/transfer",
        getWallet:"/wallet?email=",
        getbalance:"/wallet/balance?email=",
        getTransactions:"/wallet/transactions?email=",
    }

}


