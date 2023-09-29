import {Router} from "express";
import {walletRouter} from "./wallet.route";


export const indexRouter = Router();
indexRouter.use('/wallet', walletRouter);
