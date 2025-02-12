import axios from 'axios';

export const calculatePurchaseData = async (data) => {
    const apiUrl = 'http://13.61.153.104/wp-json/btc-calculator/v1/calculate-home-purchase';
    const response = await axios.post(apiUrl, data);
    return response.data;
};

export const calculateAutoPurchaseData = async (data) => {
    try {
        const apiUrl = 'http://13.61.153.104/wp-json/btc-calculator/v1/calculate-auto-purchase';
        const response = await axios.post(apiUrl, data);
        return response.data;
    } catch (error) {
        console.error('Error fetching results:', error);
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

export const calculateRetirementData = async (data) => {
    try {
        const apiUrl = 'http://13.61.153.104/wp-json/btc-calculator/v1/calculate-retirement';

        const response = await axios.post(apiUrl, data);

        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('API Error:', error.response.data);
            // throw new Error(`API Error: ${error.response.data.errors || error.response.data}`);
        } else if (error.request) {
            console.error('Network Error:', error.request);
            // throw new Error('Network Error: Could not connect to API.');
        } else {
            console.error('Error:', error.message);
            // throw new Error('Unexpected Error: ' + error.message);
        }
    }
};

export const downloadPDF = async (data) => {
    try {
        const response = await fetch('http://13.61.153.104/wp-json/custom/v2/generate-pdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/pdf',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error(`Error server: ${response.status}`);

        return response.blob();
    } catch (error) {
        console.error('error bad request PDF:', error);
    }
};

