import axios from 'axios';

export const calculatePurchaseData = async (data) => {
    const apiUrl = 'http://13.61.153.104/wp-json/btc-calculator/v1/calculate-home-purchase';
    const response = await axios.post(apiUrl, data);
    return response.data;
};

export const calculateAutoPurchaseData = async (data) => {
    const apiUrl = 'http://13.61.153.104/wp-json/btc-calculator/v1/calculate-auto-purchase';
    const response = await axios.post(apiUrl, data);
    return response.data;
};
