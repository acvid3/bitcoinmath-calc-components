import axios from 'axios';

export const calculateRetirementData = async (data) => {
    try {
        const apiUrl = 'http://13.61.153.104/wp-json/btc-calculator/v1/calculate-retirement';

        const response = await axios.post(apiUrl, data);

        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('API Error:', error.response.data);
            throw new Error(`API Error: ${error.response.data.errors || error.response.data}`);
        } else if (error.request) {
            console.error('Network Error:', error.request);
            throw new Error('Network Error: Could not connect to API.');
        } else {
            console.error('Error:', error.message);
            throw new Error('Unexpected Error: ' + error.message);
        }
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