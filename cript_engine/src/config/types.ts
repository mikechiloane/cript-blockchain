export interface Wallet {
    privateKey: string;
    address: string;
}

export interface HDWallet {
    mnemonic: string;
    privateKey: string;
    address: string;
}

export interface Input {
    satoshis: number;
    script: string;
    address: string;
    txId: string;
    outputIndex: number;

}

export enum HttpStatusCode {
    OK = 200,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500,
}