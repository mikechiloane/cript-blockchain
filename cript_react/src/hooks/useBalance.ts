import {useEffect, useState} from "react";
import criptnet from "../config/criptnet.ts";
import {api} from "../config/api.ts";
import {useDispatch, useSelector} from "react-redux";
import {setBalance, setExchangeRate} from "../redux/features/walletSlice.ts";
import {getBitcoinToRandExchangeRate} from "../util/getExchangeRate.ts";

interface userState {
    user: {
        email: string,
    }
}

const useBalance = () => {

    const dispatch = useDispatch();
    const email = useSelector((state: userState) => state.user.email);
    const [done, setDone] = useState(false);
    const getBalance = async () => {
        try {
            const response = await criptnet.get(api.wallet.getbalance + email);
            dispatch(setBalance(response.data));
            const exchangeRate = await getBitcoinToRandExchangeRate();
            dispatch(setExchangeRate(exchangeRate));
            setDone(true)

        } catch (error) {
            console.log(error);
            setDone(true)
        }
    }

    useEffect(() => {
        if (email) {
            getBalance()
        }
    }, [email]);

    return done;




}

export default useBalance;