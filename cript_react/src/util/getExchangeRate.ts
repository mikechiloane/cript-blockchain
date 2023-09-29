import axios from "axios";
const apiUrl = 'https://api.coingecko.com/api/v3/simple/price';

export async function getBitcoinToRandExchangeRate(): Promise<number | null> {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                ids: 'bitcoin',
                vs_currencies: 'zar', // Specify the fiat currency (Rands)
            },
        });

        // Parse the response to get the exchange rate
        return response.data.bitcoin.zar;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        return null;
    }
}
