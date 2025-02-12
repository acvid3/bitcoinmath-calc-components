import axios from 'axios';

export const calculateCashData = async (data) => {
    try {
        const apiUrl = 'http://13.61.153.104/wp-json/btc-calculator/v1/calculate-cash';

        const response = await axios.post(apiUrl, data);

        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const currencyPriceBtc = async () => {
    try {
        const url = "http://13.61.153.104/wp-json/btc-calculator/v1/cryptocurrency-price?symbol=BTCUSDT";
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching results:', error);
        return error.response.data;
    }
}