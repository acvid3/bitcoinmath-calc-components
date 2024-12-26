import React from "react";
import BtcCalculator from "./components/BtcCalculator";
import axios from "axios";

const autoPurchasesData = [
  {
    key: "car_price",
    value: 50000,
    label: "Car Price ($)",
    text: "What is the price of the car?",
  },
  {
    key: "cash_down",
    value: 20000,
    label: "Cash Down ($)",
    text: "How much cash would you put down? ",
  },
  {
    key: "apr",
    value: 2.99,
    label: "APR (%)",
    text: "Annual percentage rate.",
  },
  {
    key: "btc_price",
    value: 97094.04,
    label: "BTC Current Price ($)",
  },
  { key: "cagr", value: 40, label: "CAGR (%)" },
  { key: "loan_term", value: 60, label: "Loan Term (Months)" },
];

const App = () => {
  const handleCalculate = async (formData) => {
    // console.log("Form data before API call:", formData);
    try {
      const apiUrl = "http://13.61.153.104/wp-json/btc-calculator/v1/calculate";
      const response = await axios.post(apiUrl, formData);
      return response.data;
    } catch (error) {
      console.error("Error calculating BTC data:", error);
    }
  };

  return (
    <div className="App">
      <BtcCalculator
        calculateHandler={handleCalculate}
        inputData={autoPurchasesData}
      />
    </div>
  );
};

export default App;
