import axios from "axios";
import env from "../config/env";
import ApiError from "../exception/ApiError";
import {HttpStatusCode} from "../config/types";

export interface Balance {
    balance: number;
    sent: number;
    received: number;
    address: string;
}
export const getBitcoinPrice = async ():Promise<number> => {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const response = await axios.get(url);
    return response.data.bpi.USD.rate_float;
}

// @ts-ignore
export const getBitCoinBalance = async (address: string):Promise<Balance> => {
    const url = `https://api.blockcypher.com/v1/btc/test3/addrs/${address}`;
    const response = await axios.get(url,
        {
            headers: {
                Authorization: `Token ${env.BLOCKCYPHER_API_KEY}`,
            },

        });
    return {
        balance: response.data.final_balance,
        sent: response.data.total_sent,
        received: response.data.total_received,
        address: response.data.address
    }


}



export const broadcastTransaction = async (transaction: string):Promise<string> => {
    const url = "https://api.blockcypher.com/v1/btc/test3/txs/push";
    const response = await axios.post(url, {tx: transaction});
    return response.data.tx.hash;
}

export  const validateTransaction = async (transaction: string): Promise<boolean> =>{
    const url = "https://api.blockcypher.com/v1/btc/test3/txs/send";
    const response = await axios.post(url, {tx: transaction});
    return response.data.tx.hash;
}