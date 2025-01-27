import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import { sx } from "./styles";


const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
};

const formatResults = (results) => {
    if (!results || !results.btc) return [];

    return Object.keys(results.btc).map((key) => ({
        label: toCapitalCase(key.replace(/_/g, ' ')),
        status_quo: results.status_quo[key] ? "$" + results.status_quo[key] : "-",
        btc: results.btc[key] ? "$" + results.btc[key] : "-",
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

    const formattedData = formatResults({status_quo: results.status_quo, btc: results.btc});

    const getDollarSign = (label) => {
        if (label === "Apr" || label === "Loan term") {
            return "";
        } else return "$";
    }

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {formattedData.map(({ label, status_quo, btc }) => (
                        <TableRow key={label} sx={sx.tableRow}>
                            <TableCell sx={sx.tableCell}>{label}</TableCell>
                            <TableCell sx={sx.tableCell} align="right">{status_quo}</TableCell>
                            <TableCell sx={sx.tableCell} align="right">{btc}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
