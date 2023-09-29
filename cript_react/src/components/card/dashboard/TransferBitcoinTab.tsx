import {TabPanel} from "@tremor/react";
import {Checkbox} from "antd";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import criptnet from "../../../config/criptnet.ts";
import {api} from "../../../config/api.ts";
import {setLoading} from "../../../redux/features/appSlice.ts";

interface walletState {
    wallet: {
        balance: {
            balance: number,
            sent: number,
            received: number,
            address: string

        }
    }
}

const TransferBitcoinTab = () => {

    const {balance} = useSelector((state: walletState) => state.wallet);
    const [amount, setAmount] = useState<number>();
    const [recipient, setRecipient] = useState<string>();
    const dispatch = useDispatch();
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseInt(e.target.value));
    }
    const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecipient(e.target.value);
    }

    const handleTransfer = async () => {

        try {
            dispatch(setLoading(true));
            const response = await criptnet.post(api.wallet.transfer, {
                satoshiToSend: amount,
                receiverAddress: recipient,
                senderAddress: balance.address,
            });

            if (response.status !== 200) {
                throw new Error("Transfer failed");
            }
            dispatch(setLoading(false));
        } catch (e) {
            alert("Transfer failed");
            dispatch(setLoading(false));
        }
    }


    return (
        <TabPanel>
            <div className="flex flex-col w-full mt-6">
                <div>
                    <p className="text-lg text-gray-500">Balance</p>
                    <p className="text-[32px] font-semibold prim-text">{balance.balance} <span
                        className="text-sm">satoshi</span></p>
                </div>
                <div className="flex mt-[24px] flex-col">
                    <p className="font-medium mt-4 mb-1 text-[18px] text-gray-700">Amount</p>
                    <input type="number" onChange={(e) => handleAmountChange(e)} className="satoshiInput  w-[180px]"/>
                    <p className="font-medium mt-4 mb-1 text-[18px] text-gray-700">Recipient address</p>
                    <input type="text" onChange={(e) => handleRecipientChange(e)} className="satoshiInput"/>
                </div>

                <Checkbox className="mt-8 text-gray-500">I agree with Terms of Use, Privacy Policy</Checkbox>

                <button onClick={() => handleTransfer()} className="buyBtn">
                    Transfer
                </button>

            </div>
        </TabPanel>
    )
}

export default TransferBitcoinTab;
