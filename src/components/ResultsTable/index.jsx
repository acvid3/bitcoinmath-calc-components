import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useResult } from '../../context/ResultContext';

const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
};

const formatResults = (results) => {
    if (!results || !results.borrowing) return [];

    return Object.keys(results.borrowing).map((key) => ({
        label: toCapitalCase(key.replace(/_/g, ' ')),
        borrowing: results.borrowing[key] || '—',
        selling: results.selling[key] || '—',
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

    const formattedData = formatResults({selling: results.selling, borrowing: results.borrowing});

    const getDollarSign = (label, value) => {
        if (value === "—" || label === "Borrowing apr" || label === "Loan term years") {
            return "";
        } else return "$";
    }

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {formattedData.map(({ label, borrowing, selling }) => (
                        <TableRow key={label}>
                            <TableCell>{label}</TableCell>
                            <TableCell align="right">{getDollarSign(label, borrowing)}{borrowing}</TableCell>
                            <TableCell align="right">{getDollarSign(label, selling)}{selling}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
