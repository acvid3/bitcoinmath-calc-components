import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useResult } from '../../context/ResultContext';

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
            tradefi: results.tradefi?.[key]?.toLocaleString('en-US') || '-',
            bitcoin: results.bitcoin?.[key]?.toLocaleString('en-US') || '-',
        };
    });
};

const ResultsTable = () => {
    const { results } = useResult();

    if (!results) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>No results available.</div>;
    }

    const formattedData = formatResults(results);
    console.log({ formattedData });

    return (
        <TableContainer>
            <Table sx={{ fontWeight: 600 }}>
                <TableBody>
                    {formattedData.map(({ label, tradefi, bitcoin }) => (
                        <TableRow key={label}>
                            <TableCell>{label}</TableCell>
                            <TableCell align="right">${tradefi}</TableCell>
                            <TableCell align="right">${bitcoin}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
