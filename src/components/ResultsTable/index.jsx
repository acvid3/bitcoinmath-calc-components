import React from 'react';
import {Box, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import { useResult } from '../../context/ResultContext';
import { sx } from "./styles";


const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
};

const formatResults = (results) => {
    if (!results.tradefi) return [];

    const resultsKeys = [...new Set([...Object.keys(results.tradefi), ...Object.keys(results.bitcoin)])];

    return resultsKeys.map((key) => {
        return {
            label: toCapitalCase(key.replace(/_/g, ' ')),
            tradefi: results.tradefi?.[key]?.toLocaleString('en-US') || '—',
            bitcoin: results.bitcoin?.[key]?.toLocaleString('en-US') || '—',
        };
    });
};

const ResultsTable = () => {
    const { results } = useResult();

    if (!results) {
        return <Box sx={{ textAlign: 'center', padding: '20px'}}>No results available.</Box>;
    }

    const formattedData = formatResults(results);

    const noDollarSignsValues = ["Borrowing apr", "Loan term years", "Cocr", "Bitcoin acquired"];
    const percentSignValues = ["Cocr", "Borrowing apr"]

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
            <Table sx={{ fontWeight: 600 }}>
                <TableBody>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell}></TableCell>
                        <TableCell sx={sx.tableCell} align="center">Tradfi</TableCell>
                        <TableCell sx={sx.tableCell} align="center">Bitcoin</TableCell>
                    </TableRow>
                    {formattedData.map(({ label, tradefi, bitcoin }) => (
                        <TableRow sx={sx.tableRow} key={label}>
                            <TableCell sx={sx.tableCell}>{label}</TableCell>
                            <TableCell sx={sx.tableCell} align="center">
                                {getDollarSign(label, tradefi)}{tradefi}{getPercentSign(label, tradefi)}
                            </TableCell>
                            <TableCell sx={sx.tableCell} align="center">
                                {getDollarSign(label, bitcoin)}{bitcoin}{getPercentSign(label, bitcoin)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
