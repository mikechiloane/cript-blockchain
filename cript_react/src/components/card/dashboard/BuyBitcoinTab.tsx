import {Checkbox} from "antd";
import {TabPanel} from "@tremor/react";
import {RootState} from "../../../redux/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import criptnet from "../../../config/criptnet.ts";
import {api} from "../../../config/api.ts";
import {setBuyAmount, setLoading} from "../../../redux/features/appSlice.ts";

export default function BuyBitcoinTab(){

    const {exchangeRate} = useSelector((state:RootState)=>state.wallet);
    const {address} = useSelector((state:RootState)=>state.wallet);
    const [amount, setAmount] = useState<number>();
    const dispatch = useDispatch();
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseInt(e.target.value));
        dispatch(setBuyAmount(parseInt(e.target.value)));
    }

    const handleBuy = async () => {
        try {
            dispatch(setLoading(true));
            const response = await criptnet.post(api.wallet.buy, {
                satoshiToBuy: amount,
                receiverAddress: address,
            });

            if (response.status !== 200) {
                throw new Error("Buy failed");
            }
            dispatch(setLoading(false));
        }
        catch (e) {
            alert("Buy failed");
            dispatch(setLoading(false));
        }
    }



    return(
        <TabPanel>
            <div className="flex flex-col w-full mt-6">
                <div className="flex mt-[24px] flex-col">
                    <p className="font-medium mt-4 mb-1 text-[18px]  ">Amount</p>
                    <input onChange={handleAmountChange} placeholder="Price in rands" className="satoshiInput placeholder-gray-400"/>
                    <p className="text-gray-400 my-2 font-normal">{exchangeRate/100000000} Rand</p>
                </div>
                <Checkbox  className="mt-8 text-gray-500">I agree with Terms of Use, Privacy Policy</Checkbox>

                <button onClick={()=>handleBuy()} className="buyBtn">
                    Buy
                </button>

            </div>
        </TabPanel>
    );
}

