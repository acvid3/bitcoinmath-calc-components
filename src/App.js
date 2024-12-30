import React from "react";
import axios from "axios";

import HomePurchaseCalc from "./calculators/HomePurchaseCalc";
import BtcCalculator from "./calculators/BtcCalculator";

const autoPurchasesData = [
  {
    key: "car_price",
    value: 50000,
    unit: "$",
    label: "Car Price",
    text: "What is the price of the car?",
  },
  {
    key: "cash_down",
    value: 20000,
    unit: "$",
    label: "Cash Down",
    text: "How much cash would you put down?",
  },
  {
    key: "apr",
    value: 2.99,
    unit: "%",
    label: "APR%",
    text: "Annual percentage rate.",
  },
  {
    key: "btc_price",
    value: 97094.04,
    unit: "$",
    label: "BTC Current Price",
  },
  {
    key: "cagr",
    value: 40,
    unit: "%",
    label: "CAGR",
  },
];
const initResultAutoPurchases = {
  tradefi: {
    car_price: 50000,
    amount_down: 20000,
    total_financed: 30000,
    apr: "2.99%",
    monthly_principal: 464.18,
    monthly_interest: 74.75,
    total_monthly_payment: 538.93,
    btc_investment: 0,
    btc_acquired: 0,
    term_appreciation: 0,
    ending_btc_value: 0,
    monthly_savings: 299,
    total_savings: 17964,
    annual_depreciation: "-12.50%",
    down_payment_depreciation: 10258.18,
    end_term_value: 24354.55,
  },
  btc: {
    car_price: 50000,
    amount_down: 6666.67,
    total_financed: 43333.33,
    apr: "2.99%",
    monthly_principal: 670.48,
    monthly_interest: 107.97,
    total_monthly_payment: 778.45,
    btc_investment: 43333.33,
    btc_acquired: 0.44630271,
    term_appreciation: 130000,
    ending_btc_value: 130000,
    monthly_savings: 0,
    total_savings: 0,
    annual_depreciation: "-12.50%",
    down_payment_depreciation: 3419.39,
    end_term_value: 104354.55,
  },
  difference: {
    difference_dollar: 80000,
    difference_percent: "328.48%",
  },
};

const homePurchaseData = [
  {
    key: "home_price",
    value: 750000,
    unit: "$",
    label: "Home Price",
    text: "Purchase price of the home",
  },
  {
    key: "cash_down",
    value: 150000,
    unit: "$",
    label: "Cash Down",
    text: "How much cash would you put down?",
  },
  {
    key: "apr",
    unit: "%",
    value: 6.5,
    label: "APR%",
    text: "Annual percentage rate.",
  },
  {
    key: "btc_price",
    value: 97094.04,
    label: "BTC Current Price",
    unit: "$",
  },
  {
    key: "cagr",
    value: 29.0,
    unit: "%",
    label: "CAGR",
  },
  {
    key: "term",
    value: 360,
    unit: "",
    label: "Term",
    text: "How many months in the loan term?",
  },
  {
    key: "re_aar",
    value: 10.0,
    unit: "%",
    label: "RE AAR",
    text: "Estimated Annual Average Rate of Return for the home",
  },
  {
    key: "checkpoint_year",
    value: 15,
    unit: "",
    label: "Checkpoint Year",
    text: "What year within the term do you want to see?",
  },
];

const App = () => {
  const handleCalculate = async (formData) => {
    // console.log("Form data before API call:", formData);
    try {
      const apiUrl =
        "http://13.61.153.104/wp-json/btc-calculator/v1/calculate-auto-purchase";
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
        initResponse={initResultAutoPurchases}
      />

      {/* <HomePurchaseCalc
        calculateHandler={handleCalculate}
        inputFieldsData={homePurchaseData}
        initResponse={initResultAutoPurchases}
      /> */}
    </div>
  );
};

export default App;
