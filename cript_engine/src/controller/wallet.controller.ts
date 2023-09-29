import {WalletService} from "../service/wallet.service";
import {NextFunction, Request, Response} from "express";
import env from "../config/env";

export class WalletController {

    constructor() {
    }

    public CreateWallet(req: Request, res: Response) {
        const walletService = new WalletService();
        const wallet = walletService.createWallet();
        res.send(wallet);
    }

    public async SendBitcoin(req: Request, res: Response, next:NextFunction) {

        try {
            const walletService = new WalletService();
            const {senderAddress, receiverAddress, privateKey, satoshiToSend} = req.body;
            const hash = await walletService.sendBitcoin(senderAddress, receiverAddress, privateKey, satoshiToSend);
            return res.json({
                hash: hash
            });
        }
        catch (error) {
            next(error);
        }
    }

    public async SellBitcoin(req: Request, res: Response,next:NextFunction) {
        try {
            const walletService = new WalletService();
            const {receiverAddress, satoshiToBuy} = req.body;
            const hash = await walletService.sendBitcoin(env.BITCOIN_ADDRESS, receiverAddress, env.BITCOIN_PRIVATE_KEY, satoshiToBuy);
            return res.json({
                hash: hash
            });
        }
        catch (error) {
            next(error);
        }
    }


    public async GetBalance(req: Request, res: Response, next:NextFunction) {

        try {
            const walletService = new WalletService();
            const {address} = req.params;
            const balance = await walletService.checkBalance(address);
            res.json(balance);
        }
        catch (error) {
            next(error);
        }
    }

    public async ValidateTransaction(req: Request, res: Response) {
        const walletService = new WalletService();
        const {transaction} = req.body;
        const isValid = await walletService.isValidTransaction(transaction);
        res.json(isValid);
    }


}