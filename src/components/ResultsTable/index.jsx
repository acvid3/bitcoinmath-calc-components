import React from 'react';
import {Box, Button, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import {useResult} from '../../context/ResultContext';
import {sx} from "./styles";
import {resultsDescriptions} from "./constants";
import {formatNumber} from "../../utils/numberFormatter";

const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return (firstLetterCap + remainingLetters)
        .replace(/(Btc|Apr|btc|apr|usd)/gi, match => match.toUpperCase());
};

const formatResults = (results) => {
    if (!results || !results.btc || !results.tradefi) return [];

    const allKeys = [...Object.keys(results.tradefi)];

    const maxLength = [
        ...Object.keys(results.tradefi),
        ...Object.keys(results.btc).filter(key => !Object.keys(results.tradefi).includes(key))
    ].length;

    const tradefiKeys = Object.keys(results.tradefi);
    const btcKeys = Object.keys(results.btc);

    for (let i = 0; i < tradefiKeys.length; i++) {
        if (!tradefiKeys.includes(btcKeys[i])) {
            allKeys.splice(i+2, 0, btcKeys[i]);
        }
    }
    // console.log(allKeys)

    return allKeys.map((key) => ({
        label: toCapitalCase(key.replace(/_/g, ' ')),
        tradefi: formatNumber(results.tradefi[key]) || '—',
        btc: formatNumber(results.btc[key]) || '—',
    }));
};

const ResultsTable = () => {
    const {results} = useResult();

    if (!results) {
        return <div style={{textAlign: 'center', padding: '20px'}}>No results available.</div>;
    }

    if (!results?.data?.status === 400) {
        return <div style={{textAlign: 'center', padding: '20px'}}>Bad Request.</div>;
    }

    const formattedData = formatResults(results);

    const getDollarSign = (label, value) => {
        if (label === "Apr" || label === "Annual depreciation" || label === "BTC acquired" || value === '—') {
            return "";
        } else return "$";
    }

    const getPercentSign = (label, value) => {
        if (label === "Annual depreciation" && value !== '—') {
            return "%";
        } else return "";
    }

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell}></TableCell>
                        <TableCell sx={sx.tableCell}></TableCell>
                        <TableCell sx={sx.tableCell} align="center">Tradfi</TableCell>
                        <TableCell sx={sx.tableCell} align="center">Bitcoin</TableCell>
                    </TableRow>
                    {formattedData.map(({label, tradefi, btc}) => (
                        <TableRow key={label} sx={sx.tableRow}>
                            <TableCell sx={sx.descriptionCell}>
                                {resultsDescriptions.find(e => e.label === label)?.description &&
                                    <>
                                        <Button sx={sx.descriptionIcon}>
                                            i
                                        </Button>
                                        <Box className={'description'} sx={sx.description}>
                                            <Box sx={sx.descriptionBackground}>
                                                {resultsDescriptions.find(e => e.label === label)?.description}
                                            </Box>
                                        </Box>
                                    </>
                                }
                            </TableCell>
                            <TableCell sx={sx.tableCell}>
                                {label}
                            </TableCell>
                            <TableCell sx={sx.tableCell} align="center">
                                {getDollarSign(label, tradefi)}{tradefi}{getPercentSign(label, tradefi)}
                            </TableCell>
                            <TableCell sx={sx.tableCell} align="center">
                                {getDollarSign(label, btc)}{btc}{getPercentSign(label, btc)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
