"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletController = void 0;
const bitcore_lib_1 = require("bitcore-lib");
// @ts-ignore
const bitcore_mnemonic_1 = require("bitcore-mnemonic");
class WalletController {
    constructor() {
    }
    createWallet() {
        const privateKey = new bitcore_lib_1.PrivateKey();
        const address = privateKey.toAddress();
        return {
            privateKey: privateKey.toString(),
            address: address.toString()
        };
    }
    createHDWallet() {
        let passphrase = new bitcore_mnemonic_1.Mnemonic(bitcore_mnemonic_1.Mnemonic.Words.SPANISH);
        let hdPrivateKey = passphrase.toHDPrivateKey();
        let address = hdPrivateKey.publicKey.toAddress();
        return {
            mnemonic: passphrase.toString(),
            privateKey: hdPrivateKey.toString(),
            address: address.toString()
        };
    }
    checkBalance(address) {
        return 0;
    }
}
exports.WalletController = WalletController;
