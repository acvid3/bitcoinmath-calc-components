import React from 'react';
import {Box, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import {useResult} from '../../context/ResultContext';
import {sx} from "./styles";
import {formatNumber} from "../../utils/numberFormatter";
import {labelsOrder, resultsDescriptions} from "./constants";
import DescriptionIcon from "../DescriptionIcon";


const tenYearsArray = ['Principal paid', 'Home value', 'Net equity value'];

const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    const resultWord = (firstLetterCap + remainingLetters)
        .replace(/(Btc|btc|apr|usd)/gi, match => match.toUpperCase())
        .replace(/(Bitcoin|bitcoin)/gi, "BTC")
        .replace(/(cocr)/gi, "CoCR");

    return tenYearsArray.includes(resultWord) ? '10Y ' + resultWord : resultWord;
};

const formatResults = (results) => {
    if (!results.tradefi) return [];

    const resultsKeys = [...new Set([...Object.keys(results.tradefi), ...Object.keys(results.bitcoin)])];

    return resultsKeys.map((key) => {
        return {
            label: toCapitalCase(key.replace(/_/g, ' ')),
            tradefi: formatNumber(results.tradefi?.[key]) || '—',
            bitcoin: formatNumber(results.bitcoin?.[key]) || '—',
        };
    }).filter((item) => labelsOrder.includes(item.label))
        .sort((a, b) => {
            const indexA = labelsOrder.indexOf(a.label);
            const indexB = labelsOrder.indexOf(b.label);
            return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
        });
};

const ResultsTable = () => {
    const {results} = useResult();

    if (!results) {
        return <Box sx={{textAlign: 'center', padding: '20px'}}>No results available.</Box>;
    }

    const formattedData = formatResults(results);

    const noDollarSignsValues = ["Borrowing APR", "Loan term years", "CoCR", "BTC acquired"];
    const percentSignValues = ["CoCR", "Borrowing APR"]

    const getDollarSign = (label, value) => {
        if (value === '—' || noDollarSignsValues.includes(label)) {
            return "";
        } else return "$";
    }

    const getPercentSign = (label, value) => {
        if (percentSignValues.includes(label) && value !== '—') {
            return "%";
        } else return "";
    }

    return (
        <TableContainer>
            <Table sx={{fontWeight: 600}}>
                <TableBody>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell}></TableCell>
                        <TableCell sx={sx.tableCell} align="center">Tradfi</TableCell>
                        <TableCell sx={sx.tableCell} align="center">Bitcoin</TableCell>
                    </TableRow>
                    {formattedData.map(({label, tradefi, bitcoin}) => (
                        <TableRow sx={sx.tableRow} key={label}>
                            <TableCell sx={sx.tableCell}>
                                <DescriptionIcon resultsDescriptions={resultsDescriptions} label={label}/>
                                {label}
                            </TableCell>
                            <TableCell sx={sx.tableCell} align="center">
                                {getDollarSign(label, tradefi)}{tradefi}{getPercentSign(label, tradefi)}
                            </TableCell>
                            <TableCell sx={sx.tableCell} align="center">
                                {getDollarSign(label, bitcoin)}{bitcoin}{getPercentSign(label, bitcoin)}
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell} align="left">
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Difference $"}/>
                            Difference $
                        </TableCell>
                        <TableCell sx={sx.tableCell} align="center"></TableCell>
                        <TableCell sx={sx.tableCell} align="center">${formatNumber(results?.difference?.dollar) || 0}</TableCell>
                    </TableRow>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell} align="left">
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Difference %"}/>
                            Difference %
                        </TableCell>
                        <TableCell sx={sx.tableCell} align="center"></TableCell>
                        <TableCell sx={sx.tableCell} align="center">{formatNumber(results?.difference?.percent) || 0}%</TableCell>
                    </TableRow>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell} align="left">
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Multiple"}/>
                            Multiple
                        </TableCell>
                        <TableCell sx={sx.tableCell} align="center"></TableCell>
                        <TableCell sx={sx.tableCell} align="center">{formatNumber(results?.difference?.multiple) || 0}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
