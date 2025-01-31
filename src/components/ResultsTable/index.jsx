import React from 'react';
import {Box, Button, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import { useResult } from '../../context/ResultContext';
import { sx } from "./styles";
import {labelsOrder, resultsDescriptions} from "./constants";

const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return (firstLetterCap + remainingLetters).replace(/(btc|apr|usd)/gi, match => match.toUpperCase());
};

const formatResults = (results) => {
    if (!results || !results.tradefi) return [];

    return Object.keys(results.tradefi)
        .map((key) => ({
            label: toCapitalCase(key.replace(/_/g, ' ')),
            tradefi: results.tradefi[key] || '—',
            btc: results.btc[key] || '—',
        }))
        .filter((item) => labelsOrder.includes(item.label))
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

    const formattedData = formatResults(results);

    const getDollarSign = (label, value) => {
        if (label === "Apr" || label === "Loan term" || label === "Multiple" || !value || value === '—') {
            return "";
        } else return "$";
    }

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell}></TableCell>
                        <TableCell sx={sx.tableCell}></TableCell>
                        <TableCell sx={sx.tableCell} align="center">Tradfi</TableCell>
                        <TableCell sx={sx.tableCell} align="center">Bitcoin</TableCell>
                    </TableRow>
                    {formattedData.map(({ label, tradefi, btc }) => (
                        <TableRow key={label} sx={sx.tableRow}>
                            <TableCell sx={sx.descriptionCell}>
                                {resultsDescriptions.find(e => e.label === label)?.description &&
                                    <>
                                        <Button sx={sx.descriptionIcon}>
                                            i
                                        </Button>
                                        <Box className={'description'} sx={sx.description}>
                                            {resultsDescriptions.find(e => e.label === label)?.description}
                                        </Box>
                                    </>
                                }
                            </TableCell>
                            <TableCell sx={sx.tableCell}>{label}</TableCell>
                            <TableCell sx={sx.tableCell} align="center">{getDollarSign(label, tradefi)}{tradefi}</TableCell>
                            <TableCell sx={sx.tableCell} align="center">{getDollarSign(label, btc)}{btc}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;