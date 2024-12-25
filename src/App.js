import React from 'react';
import BtcCalculator from './components/BtcCalculator';
import axios from 'axios';

const App = () => {
    const calculateBTC = async (formData) => {
        const apiUrl = 'http://13.61.153.104/wp-json/btc-calculator/v1/calculate';
        const response = await axios.post(apiUrl, formData);
        return response.data;
    };

    return (
        <div className="App">
            <BtcCalculator calculateBTC={calculateBTC} />
        </div>
    );
};

export default App;
