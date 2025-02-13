export const resultsDescriptions = [
    { description: "Assumes 100% loan to value (LTV) ratio, more common is 80-90%", label: "Loan amount" },

    { description: "Reflects 1st month in amortized schedule", label: "Monthly principal" },
    { description: "Reflects 1st month in amortized schedule", label: "Monthly interest" },
    { description: "Monthly principal + Monthly interest", label: "Total monthly payment" },
    { description: "Total monthly payment * 12", label: "Annual payment" },

    { description: "Total initial Bitcoin investment", label: "BTC investment" },
    { description: "Total amount of BTC acquired", label: "BTC acquired" },
    { description: "The purchased Bitcoin's value at the checkpoint year", label: "Ending BTC value" },

    { description: "Annual payment * (Loan term / 12 months)", label: "Total loan payments" },
    { description: "Ending Bitcoin value - Total loan payments", label: "Net investment value" },

    { description: "Current equity plus AAR each year for the loan term", label: "Equity value after term" },

    { description: "Dollar value difference of the two scenarios (Bitcoin - Tradfi)", label: "Difference $" },
    { description: "Dollar value difference % of the two scenarios ((Bitcoin - Tradfi) / Tradfi)", label: "Difference %" },
    { description: "The difference multiple between the two scenarios (Bitcoin / Tradfi)", label: "Multiple" }
];


export const labelsOrder = [
    "Loan amount",
    "Monthly principal",
    "Monthly interest",
    "Total monthly payment",
    "Annual payment",
    "Annual appreciation",
    "Equity value after term",
    "BTC investment",
    "BTC acquired",
    "Ending BTC value",
    "Total loan payments",
    "Net investment value",
    "Equity value after term",
];