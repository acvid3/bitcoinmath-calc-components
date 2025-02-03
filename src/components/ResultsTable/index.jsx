import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import {useResult} from '../../context/ResultContext';
import {sx} from "./styles";
import {labelsOrder} from "./constants";


const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return (firstLetterCap + remainingLetters)
        .replace(/(Btc|Apr|btc|apr|usd)/gi, match => match.toUpperCase())
        .replace(/(Bitcoin)/gi, "BTC");
};

const formatResults = (results) => {
    if (!results || !results.btc) return [];

    return [
        ...Object.keys(results.btc),
        ...Object.keys(results.status_quo).filter(key => !Object.keys(results.btc).includes(key))
    ].map((key) => ({
        label: toCapitalCase(key.replace(/_/g, ' ')),
        status_quo: results.status_quo[key] ? results.status_quo[key] : "—",
        btc: results.btc[key] ? results.btc[key] : "—",
    })).filter((item) => labelsOrder.includes(item.label))
        .sort((a, b) => {
            const indexA = labelsOrder.indexOf(a.label);
            const indexB = labelsOrder.indexOf(b.label);
            return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
        });
};

const ResultsTable = () => {
    const {results} = useResult();

    if (!results) {
        return <div style={{textAlign: 'center', padding: '20px'}}>No results available.</div>;
    }

    if (!results?.data?.status === 400) {
        return <div style={{textAlign: 'center', padding: '20px'}}>Bad Request.</div>;
    }

    const formattedData = formatResults({status_quo: results.status_quo, btc: results.btc});

    const noDollarSignsValues = ["APR", "Loan term", "Term months", "Annual appreciation", "BTC acquired"];
    const percentSignValues = ["Cap gain tax", "Annual appreciation"]


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
            <Table>
                <TableBody>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell}></TableCell>
                        <TableCell sx={sx.tableCell} align="center">Status Quo</TableCell>
                        <TableCell sx={sx.tableCell} align="center">Bitcoin</TableCell>
                    </TableRow>
                    {formattedData.map(({label, status_quo, btc}) => (
                        <TableRow key={label} sx={sx.tableRow}>
                            <TableCell sx={sx.tableCell}>{label}</TableCell>
                            <TableCell sx={sx.tableCell} align="center">
                                {getDollarSign(label, status_quo)}
                                {status_quo}
                                {getPercentSign(label, status_quo)}
                            </TableCell>
                            <TableCell sx={sx.tableCell} align="center">
                                {getDollarSign(label, btc)}
                                {btc}
                                {getPercentSign(label, btc)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
