import dotenv from 'dotenv';

interface  Env {
    PORT: string;
    BITCOIN_ADDRESS: string;
    BITCOIN_PRIVATE_KEY: string;
    BLOCKCYPHER_API_KEY: string;
}
dotenv.config();

const env:Env = {
    PORT: String(process.env.PORT),
    BITCOIN_ADDRESS: String(process.env.BITCOIN_ADDRESS),
    BITCOIN_PRIVATE_KEY: String(process.env.BITCOIN_PRIVATE_KEY),
    BLOCKCYPHER_API_KEY: String(process.env.BLOCKCYPHER_API_KEY),

}

export default env;