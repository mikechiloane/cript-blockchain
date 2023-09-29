import TransactionTable from "../../components/card/dashboard/TransactionTable.tsx";
import useTransactions from "../../hooks/useTransactions.ts";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setLoading} from "../../redux/features/appSlice.ts";


export default function Transactions(){

    const {transactions,done} = useTransactions();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));

        if(done){
            dispatch(setLoading(false));
        }
    }, [done]);

    return (
        <div>
            <div className="flex mb-8">
                <h1 className="text-3xl">Transactions</h1>
            </div>
            {done && <TransactionTable transactions={transactions}/>}
        </div>
    )
}