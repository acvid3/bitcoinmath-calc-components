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