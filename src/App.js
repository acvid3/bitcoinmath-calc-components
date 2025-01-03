import React from 'react';
import axios from 'axios';
import HomePurchaseCalc from './calculators/HomePurchaseCalc';

const App = () => {
    const handleCalculate = async (formData) => {
        try {
            const apiUrl = 'http://13.61.153.104/wp-json/btc-calculator/v1/calculate-home-purchase';
            const response = await axios.post(apiUrl, formData);
            return response.data;
        } catch (error) {
            console.error('Error calculating BTC data:', error);
        }
    };

    return (
        <div className="App">
            <HomePurchaseCalc calculateHandler={handleCalculate} />
        </div>
    );
};

export default App;
