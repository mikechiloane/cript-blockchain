import {Address, PrivateKey, Script, Transaction} from "bitcore-lib";
import {HttpStatusCode, Input, Wallet} from "../config/types";
// @ts-ignore
import {mainet, testnet} from "bitcore-lib/lib/networks";
import {Balance, broadcastTransaction, getBitCoinBalance, validateTransaction} from "../api/bitcoin.apis";
import axios from "axios";
import ApiError from "../exception/ApiError";

export class WalletService {
    constructor() {
    }


    public createWallet(): Wallet {
        const privateKey = new PrivateKey(testnet);
        const address = privateKey.toAddress();

        return {
            privateKey: privateKey.toString(),
            address: address.toString()
        }
    }

    public async sendBitcoin(sourceAddress: string, receiverAddress: string, privateKey: string, amountTosend: number) {
        try {
            const transaction = new Transaction()
            let totalAmountAvailable = await getBitCoinBalance(sourceAddress).then(
                (balance) => {
                    return balance.balance;
                }
            );

            let fee: number = 0;
            let inputCount: number = 0;
            let outputCount: number = 2;
            let inputs: any[] = [];
            const satoshiToSend = amountTosend;

            const recommendedFee = await axios.get(
                "https://mempool.space/api/v1/fees/recommended"
            );

            const resp = await axios({
                method: "GET",
                url: `https://blockstream.info/testnet/api/address/${sourceAddress}/utxo`,
            });
            const utxos = resp.data;

            for (const utxo of utxos) {
                let input: Input = {} as Input;
                input.satoshis = utxo.value;
                input.script = Script.buildPublicKeyHashOut(new Address(sourceAddress)).toString();
                input.address = sourceAddress;
                input.txId = utxo.txid;
                input.outputIndex = utxo.vout;
                inputCount += 1;
                inputs.push(input);
            }

            const transactionSize: number = inputCount * 180 + outputCount * 34 + 10 - inputCount;
            // fee = transactionSize * recommendedFee.data.hourFee/ 3; // satoshi per byte
            fee = transactionSize;


            if (totalAmountAvailable - satoshiToSend - fee < 0) {
                throw new Error("Balance is too low for this transaction");
            }
            //

            transaction.from(inputs);
            transaction.to(receiverAddress, satoshiToSend);

            transaction.change(sourceAddress);

            transaction.fee(Math.round(fee));

            transaction.sign(privateKey);
            return await broadcastTransaction(transaction.serialize());
        } catch (e) {
            throw new ApiError("walletError", HttpStatusCode.INTERNAL_SERVER, true, "Error while sending bitcoin");
        }
    }

    public async checkBalance(address: string): Promise<Balance> {
        try {
            return await getBitCoinBalance(address);
        } catch (error) {
            throw new ApiError("walletError", HttpStatusCode.INTERNAL_SERVER, true, "Error while checking balance");
        }

    }

    public async isValidTransaction(transaction: string): Promise<boolean> {
        const transactionhash = validateTransaction(transaction);
        return transactionhash !== null;
    }


}

