import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useResult } from '../../context/ResultContext';

const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
};

const formatResults = (results) => {
    if (!results || !results.tradfi) return [];

    return Object.keys(results.tradfi).map((key) => ({
        label: toCapitalCase(key.replace(/_/g, ' ')),
        tradfi: results.tradfi[key],
        btc: results.btc[key],
    }));
};

const ResultsTable = () => {
    const { results } = useResult();

    if (!results) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>No results available.</div>;
    }

    const formattedData = formatResults(results);

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {formattedData.map(({ label, tradfi, btc }) => (
                        <TableRow key={label}>
                            <TableCell>{label}</TableCell>
                            <TableCell align="right">${tradfi}</TableCell>
                            <TableCell align="right">${btc}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
