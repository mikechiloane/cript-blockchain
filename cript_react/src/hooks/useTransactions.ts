import {useSelector} from "react-redux";
import {api} from "../config/api.ts";
import criptnet from "../config/criptnet.ts";
import {useEffect, useState} from "react";
import {RootState} from "../redux/store.ts";

interface  Transaction {
    satoshi: number;
    sender: string;
    receiver: string;
    date: string;
    hash: string;


}

const useTransactions = () => {

    const email  = useSelector((state: RootState) => state.user.email);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [done, setDone] = useState(false);
    const getTransactions = async () => {

        try {

            const response = await criptnet.get(api.wallet.getTransactions + email);
            setTransactions(response.data);
            setDone(true);
        } catch (error) {
            setDone(true);
        }
    }

    useEffect(() => {
        if(email) {
            getTransactions();
        }

    }, [email]);

    return {transactions,done};
}

export default useTransactions;