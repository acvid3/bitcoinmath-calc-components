import React from "react";

import axios from "axios";

import HomePurchaseCalc from "./calculators/HomePurchaseCalc";
import BtcCalculator from "./calculators/BtcCalculator";

const autoPurchasesData = [
  {
    key: "car_price",
    value: 50000,
    label: "Car Price",
    text: "What is the price of the car?",
  },
  {
    key: "cash_down",
    value: 20000,
    label: "Cash Down",
    text: "How much cash would you put down? ",
  },
  {
    key: "apr",
    value: 2.99,
    label: "APR%",
    text: "Annual percentage rate.",
  },
  {
    key: "btc_price",
    value: 97094.04,
    label: "BTC Current Price",
  },
  { key: "cagr", value: 40, label: "CAGR" },
];
const homePurchaseData = [
  {
    key: "home_price",
    value: 750000,
    label: "Home Price",
    text: "Purchase price of the home",
  },
  {
    key: "cash_down",
    value: 150000,
    label: "Cash Down",
    text: "How much cash would you put down?",
  },
  {
    key: "apr",
    value: 6.5,
    label: "APR%",
    text: "Annual percentage rate.",
  },
  {
    key: "btc_price",
    value: 97094.04,
    label: "BTC Current Price",
  },
  {
    key: "cagr",
    value: 29.0,
    label: "CAGR",
  },
  {
    key: "term",
    value: 360,
    label: "Term",
    text: "How many months in the loan term?",
  },
  {
    key: "re_aar",
    value: 10.0,
    label: "RE AAR",
    text: "Estimated Annual Average Rate of Return for the home",
  },
  {
    key: "checkpoint_year",
    value: 15,
    label: "Checkpoint Year",
    text: "What year within the term do you want to see?",
  },
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
        inputFieldsData={autoPurchasesData}
      />

      <HomePurchaseCalc
        calculateHandler={handleCalculate}
        inputFieldsData={homePurchaseData}
      />
    </div>
  );
};

export default App;
