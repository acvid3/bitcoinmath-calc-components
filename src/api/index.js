import axios from 'axios';

export const calculateHomeEquityData = async (data) => {
    try {
        const apiUrl = 'http://13.61.153.104/wp-json/btc-calculator/v1/calculate-home-equity';

        const response = await axios.post(apiUrl, data);

        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const downloadPDF = async (data) => {
    try {
        const response = await fetch('/wp-json/custom/v2/generate-pdf', {
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

// (async () => {
//     const blob = await downloadPDF({
//         svg: "<svg><rect width='100' height='100' style='fill:blue;'/></svg>",
//         node: `<div class="MuiBox-root></div>`,
//     });
//     const url = URL.createObjectURL(blob);
//     window.open(url);
// })();