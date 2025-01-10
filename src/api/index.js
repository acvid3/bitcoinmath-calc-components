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