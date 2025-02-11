import React from 'react';
import {Box, Button, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import {useResult} from '../../context/ResultContext';
import {sx} from './styles';
import {labelsOrder, resultsDescriptions} from './constants';
import {formatNumber} from "../../utils/numberFormatter";

const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
};

const formatResults = (data) => {
    if (!data || !Array.isArray(data)) return [];

    return data.map((entry) => ({
        year: entry.year,
        annual_income: entry.annual_income,
        btc_price: entry.btc_price,
        btc_acquired: entry.btc_acquired,
        aggregate_btc: entry.aggregate_btc,
        total_btc_value: entry.total_btc_value,
        interest_paid: entry.interest_paid,
        yearly_loan: entry.yearly_loan,
        total_loan: entry.total_loan,
        net_increase: entry.net_increase,
        income_plus_bitcoin: entry.income_plus_bitcoin,
    }));
};

const ResultsTable = () => {
    const {results} = useResult();

    if (!results) {
        return <div style={{textAlign: 'center', padding: '20px'}}>No results available.</div>;
    }

    if (!results?.data?.status === 400) {
        return <div style={{textAlign: 'center', padding: '20px'}}>Bad Request.</div>;
    }

    const formattedData = formatResults(results.data);

    return (
        <TableContainer sx={{padding: '15px 0'}}>
            <Table sx={{fontWeight: 600, }}>
                <TableBody>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell}>Year</TableCell>
                        <TableCell sx={sx.tableCell}>BTC Price</TableCell>
                        <TableCell sx={sx.tableCell}>Annual Income</TableCell>
                        <TableCell sx={sx.tableCell}>BTC Acquired</TableCell>
                        <TableCell sx={sx.tableCell}>Aggregate BTC</TableCell>
                        <TableCell sx={sx.tableCell}>Total BTC Value</TableCell>
                        <TableCell sx={sx.tableCell}>Interest Paid</TableCell>
                        <TableCell sx={sx.tableCell}>Yearly Loan</TableCell>
                        <TableCell sx={sx.tableCell}>Total Loan</TableCell>
                        <TableCell sx={sx.tableCell}>Net Increase</TableCell>
                        <TableCell sx={sx.tableCell}>Income Plus Bitcoin</TableCell>
                    </TableRow>
                    {formattedData.map(e =>
                        <TableRow key={e.year} sx={sx.tableRow}>
                            <TableCell sx={sx.tableCellInfo}>{e.year}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.btc_price.toFixed(0))}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.annual_income.toFixed(0))}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.btc_acquired.toFixed(0))}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.aggregate_btc.toFixed(0))}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.total_btc_value.toFixed(0))}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.interest_paid.toFixed(0))}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.yearly_loan.toFixed(0))}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.total_loan.toFixed(0))}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.net_increase.toFixed(0))}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.income_plus_bitcoin.toFixed(0))}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
