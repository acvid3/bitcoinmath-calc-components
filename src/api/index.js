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

const inputData = {
    monthly_contribution: 500,
    standard_rate: 13,
    btc_rate: 29,
    years_to_retirement: 20,
    current_retirement_savings: 10000,
    current_age: 35,
    retirement_age: 55,
    monthly_budget_in_retirement: 2000,
};

(async () => {
    try {
        const result = await calculateRetirementData(inputData);
        console.log('API Response:', result);
    } catch (error) {
        console.error('Error occurred:', error.message);
    }
})();
