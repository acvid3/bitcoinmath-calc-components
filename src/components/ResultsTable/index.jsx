import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import { sx } from "./styles";
import {resultsDescriptions} from "./constants";

const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
};

const formatResults = (results) => {
    if (!results || !results.btc || !results.tradefi) return [];

    return [...new Set([...Object.keys(results.btc), ...Object.keys(results.tradefi)])].map((key) => ({
        label: toCapitalCase(key.replace(/_/g, ' ')),
        tradefi: results.tradefi[key] || '—',
        btc: results.btc[key] || '—',
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

    const formattedData = formatResults(results);

    const getDollarSign = (label, value) => {
        if (label === "Apr" || label === "Annual depreciation" || value === '—') {
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
                    {formattedData.map(({ label, tradefi, btc }) => (
                        <TableRow
                            key={label}
                            sx={sx.tableRow}
                            title={resultsDescriptions.find(e => e.label === label)?.description}
                        >
                            <TableCell sx={sx.tableCell}>
                                {label}
                            </TableCell>
                            <TableCell sx={sx.tableCell} align="right">
                                {getDollarSign(label, tradefi)}{tradefi}{getPercentSign(label, tradefi)}
                            </TableCell>
                            <TableCell sx={sx.tableCell} align="right">
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
