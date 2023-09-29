"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletRouter = void 0;
//express route
const express_1 = require("express");
const wallet_controller_1 = require("../controller/wallet.controller");
exports.walletRouter = (0, express_1.Router)();
const walletController = new wallet_controller_1.WalletController();
exports.walletRouter.get('/', (req, res) => {
    let wallet = walletController.createWallet();
    res.send(wallet);
});
