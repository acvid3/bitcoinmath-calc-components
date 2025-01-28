import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import {sx} from "./styles";
import {labelsOrder} from "./constants";


const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
};

const formatResults = (results) => {
    if (!results || !results.borrowing) return [];

    const allKeys = [
        ...Object.keys(results.borrowing),
        ...Object.keys(results.selling).filter(key => !Object.keys(results.borrowing).includes(key))
    ];

    return allKeys.map((key) => ({
        label: toCapitalCase(key.replace(/_/g, ' ')),
        borrowing: results.borrowing[key] || '—',
        selling: results.selling[key] || '—',
    })).filter((item) => labelsOrder.includes(item.label))
        .sort((a, b) => {
            const indexA = labelsOrder.indexOf(a.label);
            const indexB = labelsOrder.indexOf(b.label);
            return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
        });
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

    const noDollarSignsValues = ["Borrowing apr", "Loan term years", "Cap gain tax", "Total btc"];
    const percentSignValues = ["Cap gain tax", "Borrowing apr"]

    const getDollarSign = (label, value) => {
        if (value === "—" || noDollarSignsValues.includes(label)) {
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
            <Table>
                <TableBody>
                    {formattedData.map(({ label, borrowing, selling }) => (
                        <TableRow key={label} sx={sx.tableRow}>
                            <TableCell sx={sx.tableCell}>{label}</TableCell>
                            <TableCell sx={sx.tableCell} align="right">
                                {getDollarSign(label, borrowing)}{selling}{getPercentSign(label, selling)}
                            </TableCell>
                            <TableCell sx={sx.tableCell} align="right">
                                {getDollarSign(label, selling)}{borrowing}{getPercentSign(label, borrowing)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
