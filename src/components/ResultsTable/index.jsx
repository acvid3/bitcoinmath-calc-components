import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import { sx } from "./styles";


const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return (firstLetterCap + remainingLetters).replace(/(Btc|btc|apr|usd|apy)/gi, match => match.toUpperCase());
};

const formatResults = (results) => {
    if (!results || !results.tradefi) return [];

    return Object.keys(results.tradefi).map((key) => ({
        label: toCapitalCase(key.replace(/_/g, ' ')),
        tradefi: results.tradefi[key]?.toLocaleString(),
        btc: results.btc[key]?.toLocaleString(),
    }));
};

const ResultsTable = () => {
    const { results } = useResult();

    if (!results) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>No results available.</div>;
    }

    if (!results?.data?.status === 400) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>Bad Request.</div>;
    }

    const formattedData = formatResults({tradefi: results.tradefi, btc: results.btc});

    const getDollarSign = (label) => {
        if (label === "Apr" || label === "Loan term" || label === "Real APY") {
            return "";
        } else return "$";
    }

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell}></TableCell>
                        <TableCell sx={sx.tableCell} align="center">Tradfi</TableCell>
                        <TableCell sx={sx.tableCell} align="center">Bitcoin</TableCell>
                    </TableRow>
                    {formattedData.map(({ label, tradefi, btc }) => (
                        <TableRow sx={sx.tableRow} key={label}>
                            <TableCell sx={sx.tableCell}>{label}</TableCell>
                            <TableCell sx={sx.tableCell} align="center">{getDollarSign(label)}{tradefi}</TableCell>
                            <TableCell sx={sx.tableCell} align="center">{getDollarSign(label)}{btc}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
