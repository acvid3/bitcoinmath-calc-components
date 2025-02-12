import React, {useMemo} from 'react';
import {Box, Button, ButtonBase, Link, Paper, Typography} from '@mui/material';
import {sx} from './styles';
import {useResult} from '../../context/ResultContext';
import {formatNumber} from "../../utils/numbersFormatter";
import {downloadPDF} from "../../api";

const ToolbarWithResults = (props) => {
    const { results } = useResult();

    const resultData = {
        standard_values: results?.yearly_total_savings,
        btc_values: results?.yearly_total_btc_value,
    }

    const chartData = useMemo(() => {
        if (!resultData || !resultData.standard_values || !resultData.btc_values) {
            return [];
        }

        return Object.entries(resultData.standard_values).map(([key, value], index) => ({
            year: key || 0,
            standard: value || 0,
            btc: resultData.btc_values[key] || 0,
        }));
    }, [results]);

    function generateSvgGraph(data) {
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

    const handleDownloadPdf = async () => {

        const openPdfLink = document.getElementById("open-pdf");
        console.log(openPdfLink);

        const resultsHtml = document.getElementById("results-table").innerHTML;
        const resultsChart = generateSvgGraph(chartData);

        const blob = await downloadPDF({
            // svg: "<svg width='100' height='100'><rect width='100' height='100' style='fill:blue;'/></svg>",
            svg: resultsChart,
            // svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"500\" height=\"300\" viewBox=\"0 0 500 300\"><line x1=\"50\" y1=\"250\" x2=\"450\" y2=\"250\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"50\" y1=\"250\" x2=\"50\" y2=\"50\" stroke=\"black\" stroke-width=\"2\"/><text x=\"100\" y=\"270\" text-anchor=\"middle\" font-size=\"12\">1</text><text x=\"200\" y=\"270\" text-anchor=\"middle\" font-size=\"12\">2</text><text x=\"300\" y=\"270\" text-anchor=\"middle\" font-size=\"12\">3</text><text x=\"400\" y=\"270\" text-anchor=\"middle\" font-size=\"12\">4</text><text x=\"40\" y=\"250\" text-anchor=\"end\" font-size=\"12\">0</text><text x=\"40\" y=\"183.33333333333331\" text-anchor=\"end\" font-size=\"12\">1</text><text x=\"40\" y=\"116.66666666666666\" text-anchor=\"end\" font-size=\"12\">2</text><text x=\"40\" y=\"50\" text-anchor=\"end\" font-size=\"12\">3</text><line x1=\"100\" y1=\"250\" x2=\"200\" y2=\"250\" stroke=\"blue\" stroke-width=\"2\"/><line x1=\"200\" y1=\"250\" x2=\"300\" y2=\"183.33333333333331\" stroke=\"blue\" stroke-width=\"2\"/><line x1=\"300\" y1=\"183.33333333333331\" x2=\"400\" y2=\"183.33333333333331\" stroke=\"blue\" stroke-width=\"2\"/><line x1=\"100\" y1=\"183.33333333333331\" x2=\"200\" y2=\"116.66666666666666\" stroke=\"green\" stroke-width=\"2\"/><line x1=\"200\" y1=\"116.66666666666666\" x2=\"300\" y2=\"116.66666666666666\" stroke=\"green\" stroke-width=\"2\"/><line x1=\"300\" y1=\"116.66666666666666\" x2=\"400\" y2=\"50\" stroke=\"green\" stroke-width=\"2\"/></svg>",
            node: `<div class='MuiBox-root'>${resultsHtml}</div>`.replace(/\\"/g, "'"),
        });

        const url = URL.createObjectURL(blob);
        openPdfLink.href = url;
        window.open(url);
    };

    return (
        <Box sx={sx.container}>
            <Box sx={{
                display: 'none',

                '@media (max-width: 678px)': {
                    display: 'flex',
                },
            }}>
                <Link sx={sx.xLink}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.6673 8.80458L17.8877 1.72412H16.4145L11.0116 7.87044L6.69895 1.72412H1.72412L8.24619 11.0196L1.72412 18.4437H3.19734L8.89952 11.9514L13.4544 18.4437H18.4292M3.72918 2.81194H5.99251L16.4129 17.4089H14.1487"
                            fill="#2E4E35"/>
                    </svg>
                </Link>
                <Button onClick={handleDownloadPdf} sx={sx.button}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
                            stroke="#18391F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.83331 8.33334L9.99998 12.5L14.1666 8.33334" stroke="#18391F" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 12.5V2.5" stroke="#18391F" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                    Export To PDF
                </Button>
            </Box>
            <Box>
                <Typography sx={sx.label}>Difference $</Typography>
                <Typography sx={sx.primaryText}>${formatNumber(results?.difference?.dollar) || 0}</Typography>
            </Box>
            <Box>
                <Typography sx={sx.label}>Benefit Multiple</Typography>
                <Typography sx={sx.primaryText}>{results?.difference?.percent?.replace(/(%)/gi, '') || '0'}</Typography>
            </Box>
            <Box sx={sx.buttonsBox}>
                <Box sx={{
                    display: 'flex',
                    '@media (max-width: 678px)': {
                        display: 'none',
                    },
                }}>
                    <Link sx={sx.xLink}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.6673 8.80458L17.8877 1.72412H16.4145L11.0116 7.87044L6.69895 1.72412H1.72412L8.24619 11.0196L1.72412 18.4437H3.19734L8.89952 11.9514L13.4544 18.4437H18.4292M3.72918 2.81194H5.99251L16.4129 17.4089H14.1487"
                                fill="#2E4E35"/>
                        </svg>
                    </Link>
                    <Button sx={sx.button}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
                                stroke="#18391F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.83331 8.33334L9.99998 12.5L14.1666 8.33334" stroke="#18391F" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 12.5V2.5" stroke="#18391F" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                        Export To PDF
                    </Button>
                </Box>
                <Box sx={sx.linkBox}>
                    <Link href={''} sx={sx.link}>
                        Leave Feedback
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default ToolbarWithResults;
