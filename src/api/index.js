import axios from 'axios';


export const calculateSellingCompareBorrowingData = async (data) => {
    try {
        const apiUrl = 'http://13.61.153.104/wp-json/btc-calculator/v1/calculate-selling-compare-borrowing';

        const response = await axios.post(apiUrl, data);

        return response.data;
    } catch (error) {
        console.log(error);
        // return error.response.data;
    }
};



// const inputData = {
//     "total_bitcoin_sold": 5,
//     "cap_gain_tax": 25,
//     "loan_apr": 12,
//     "loan_term_years": 2,
//     "btc_current_price": 93694,
//     "btc_cagr": 30
// };
//
// (async () => {
//     try {
//         const result = await calculateSellingCompareBorrowingData(inputData);
//         console.log('API Response:', result);
//     } catch (error) {
//         console.error('Error occurred:', error.message);
//     }
// })();
