//express route
import {Router} from 'express';
import {WalletController} from "../controller/wallet.controller";

export const walletRouter = Router();
const walletController = new WalletController();

walletRouter.get('/',walletController.CreateWallet);
walletRouter.post('/send',walletController.SendBitcoin);
walletRouter.get('/balance/:address',walletController.GetBalance);
walletRouter.post('/sell',walletController.SellBitcoin);
