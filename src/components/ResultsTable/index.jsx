import React from 'react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import { sx } from './styles';
import { labelsOrder, resultsDescriptions } from './constants';

const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
};

const formatResults = (results) => {
    if (!results || !results.comparison || !results.comparison.standard) return [];

    return Object.keys(results.tradefi).map((key) => ({
        label: toCapitalCase(key.replace(/_/g, ' ')),
        tradefi: results.tradefi[key],
        btc: results.btc[key],
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

    return (
        <TableContainer>
            <Table sx={{ fontWeight: 600 }}>
                <TableBody>
                    {formattedData.map(({ label, tradefi, btc }) => (
                        <TableRow key={label} sx={sx.tableRow}>
                            <TableCell sx={sx.descriptionCell}>
                                {resultsDescriptions.find((e) => e.label === label)?.description && (
                                    <>
                                        <Button sx={sx.descriptionIcon}>i</Button>
                                        <Box className={'description'} sx={sx.description}>
                                            {resultsDescriptions.find((e) => e.label === label)?.description}
                                        </Box>
                                    </>
                                )}
                            </TableCell>
                            <TableCell sx={sx.tableCell}>{label}</TableCell>
                            <TableCell sx={sx.tableCell} align="right">
                                {getDollarSign(label, tradefi)}
                                {tradefi}
                            </TableCell>
                            <TableCell sx={sx.tableCell} align="right">
                                {getDollarSign(label, btc)}
                                {btc}
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow sx={{ fontWeight: 700 }}>
                        <TableCell>Difference $</TableCell>
                        <TableCell align="right"> </TableCell>
                        <TableCell align="right">${results?.comparison?.difference?.value}</TableCell>
                    </TableRow>
                    <TableRow sx={{ fontWeight: 700 }}>
                        <TableCell>Difference %</TableCell>
                        <TableCell align="right"> </TableCell>
                        <TableCell align="right">{results?.comparison?.difference?.percentage}%</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
