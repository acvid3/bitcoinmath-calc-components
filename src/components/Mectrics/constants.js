export const metricLabels = {
    amount_down: 'Amount down',
    total_financed: 'Total financed',
    monthly_principal: 'Monthly principal',
    monthly_interest: 'Monthly interest',
    total_monthly_payment: 'Total monthly payment',
    annual: 'Annual',
    monthly_cocr: 'Monthly CoCR $',
    annual_cocr: 'Annual CoCR $',
    cocr: 'CoCR %',
    principal_paid: '10Y Principal paid',
    home_value: '10Y Home value',
    net_equity_value: '10Y Net equity value',
    total_bitcoin_purchase: 'Total Bitcoin Purchase(s)',
    bitcoin_acquired: 'BTC acquired',
    ending_bitcoin_value: 'Ending BTC value',
    ending_investment_value: 'Ending investment value',
};

export const resultsDescriptions = [
    { description: '50% less cash down in order to buy Bitcoin. 3-5% Minimum down is standard for most FHA and/or Conventional loans.', label: 'Amount down' },
    { description: 'Home price - Down payment', label: 'Total financed' },

    { description: 'Reflects 1st month in amortized schedule', label: 'Monthly principal' },
    { description: 'Reflects 1st month in amortized schedule', label: 'Monthly interest' },
    { description: 'Monthly principal + Monthly interest', label: 'Total monthly payment' },
    { description: 'Total monthly payments * 12', label: 'Annual' },

    { description: 'Monthly cash on cash return $', label: 'Monthly CoCR' },
    { description: 'Monthly CoCR * 12', label: 'Annual CoCR' },
    { description: 'Cash on cash return % (Annual CoCR $ / Annual payments)', label: 'CoCR' },

    { description: 'Total principal paid after 10 years', label: '10Y Principal paid' },

    { description: 'Home value plus annual appreciation after 10 years', label: '10Y Home value' },
    { description: 'Total equity value in the property after 10 years', label: '10Y Net equity value' },

    { description: 'Total $ amount spent on Bitcoin', label: 'Total Bitcoin Purchase(s)' },
    { description: 'Total number of BTC acquired within the 10-year term', label: 'BTC acquired' },
    { description: 'Total value of all BTC holdings at end of 10-year term', label: 'Ending BTC value' },

    { description: 'Total value of all assets (Real Estate Equity + Bitcoin, Bitcoin Only)', label: 'Ending investment value' },
];
