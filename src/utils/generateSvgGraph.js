export function generateSvgGraph(data) {
    const years = data.map(item => item.year);
    const totalSavings = data.map(item => item.standard);
    const totalBtcValue = data.map(item => item.btc);

    const width = 500;
    const height = 300;
    const maxYLabels = 5;  // Максимальна кількість міток по вертикалі

    // Calculate step size for the X-axis based on the number of data points
    const xStep = (width - 150) / (years.length - 1);  // Increased margin for Y-axis

    // Find the maximum value from the savings and BTC data
    const maxValue = Math.max(...totalSavings, ...totalBtcValue);

    // Calculate the interval between the Y-axis labels
    const yInterval = Math.ceil(maxValue / (maxYLabels - 1));

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;

    // Drawing the axes
    svg += `<line x1="100" y1="${height - 50}" x2="${width - 50}" y2="${height - 50}" stroke="black" stroke-width="2"/>`; // X-axis
    svg += `<line x1="100" y1="${height - 50}" x2="100" y2="50" stroke="black" stroke-width="2"/>`; // Y-axis

    // Adding the labels for the X-axis (years)
    for (let i = 0; i < years.length; i++) {
        svg += `<text x="${100 + i * xStep}" y="${height - 20}" text-anchor="middle" font-size="12">${years[i]}</text>`;
    }

    // Adding the labels for the Y-axis (amounts)
    for (let i = 0; i < maxYLabels; i++) {
        const value = i * yInterval;
        svg += `<text x="90" y="${height - 50 - (value * (height - 100) / maxValue)}" text-anchor="end" font-size="12">${value}</text>`;
    }

    // Plotting total savings as a blue line
    for (let i = 0; i < years.length - 1; i++) {
        svg += `<line x1="${100 + i * xStep}" y1="${height - 50 - (totalSavings[i] * (height - 100) / maxValue)}" x2="${100 + (i + 1) * xStep}" y2="${height - 50 - (totalSavings[i + 1] * (height - 100) / maxValue)}" stroke="#2E4E35" stroke-width="2"/>`;
    }

    // Plotting total BTC value as a green line
    for (let i = 0; i < years.length - 1; i++) {
        svg += `<line x1="${100 + i * xStep}" y1="${height - 50 - (totalBtcValue[i] * (height - 100) / maxValue)}" x2="${100 + (i + 1) * xStep}" y2="${height - 50 - (totalBtcValue[i + 1] * (height - 100) / maxValue)}" stroke="#F1B314" stroke-width="2"/>`;
    }

    svg += `</svg>`;

    return svg;
}