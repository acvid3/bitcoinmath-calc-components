import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useResult } from '../../context/ResultContext';

const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
};

const formatResults = (results) => {
    if (!results || !results.comparison || !results.comparison.standard) return [];

    return Object.keys(results.comparison.standard).map((key) => ({
        label: toCapitalCase(key.replace(/_/g, ' ')),
        tradefi: results.comparison.standard[key].toLocaleString('en-US'),
        btc: results.comparison.bitcoin[key].toLocaleString('en-US'),
    }));
};

const ResultsTable = () => {
    const { results } = useResult();

    if (!results) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>No results available.</div>;
    }

    const formattedData = formatResults(results);
    console.log("difference: ", results);

    return (
        <TableContainer>
            <Table sx={{fontWeight: 600}}>
                <TableBody>
                    {formattedData.map(({ label, tradefi, btc }) => (
                        <TableRow key={label}>
                            <TableCell>{label}</TableCell>
                            <TableCell align="right">${tradefi}</TableCell>
                            <TableCell align="right">${btc}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow sx={{fontWeight: 700}}>
                        <TableCell>Difference $</TableCell>
                        <TableCell align="right">{" "}</TableCell>
                        <TableCell align="right">${results?.comparison?.difference?.value}</TableCell>
                    </TableRow>
                    <TableRow sx={{fontWeight: 700}}>
                        <TableCell>Difference %</TableCell>
                        <TableCell align="right">{" "}</TableCell>
                        <TableCell align="right">{results?.comparison?.difference?.percentage}%</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
