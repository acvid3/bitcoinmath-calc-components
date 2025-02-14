import React from 'react';
import {Box, Button, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import {useResult} from '../../context/ResultContext';
import {sx} from './styles';
import {formatNumber} from "../../utils/numberFormatter";
import {resultsDescriptions} from "./constants";
import DescriptionIcon from "../DescriptionIcon";

const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
};

const formatResults = (data) => {
    if (!data || !Array.isArray(data.years_data)) return [];

    return data.years_data.map((entry) => ({
        year: entry.year,
        btcPrice: entry.btc_price,
        contributionAmount: entry.contribution_amount,
        totalBTC: entry.total_btc,
        aggregateBTC: entry.aggregate,
        btcNetValue: entry.btc_net_value,
        netValue: entry.net_value,
        differenceDollar: entry.difference_dollar,
        differencePercent: entry.difference_percent,
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
                        <TableCell sx={sx.tableCell}>Contribution Amount</TableCell>
                        <TableCell sx={sx.tableCell}>
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Total BTC"}/>
                            <Box sx={sx.labelBox}>Total BTC</Box>
                        </TableCell>
                        <TableCell sx={sx.tableCell}>
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Aggregate"}/>
                            <Box sx={sx.labelBox}>Aggregate</Box>
                        </TableCell>
                        <TableCell sx={sx.tableCell}>
                            BTC Net Value
                        </TableCell>
                        <TableCell sx={sx.tableCell}>529 Net Value</TableCell>
                        <TableCell sx={sx.tableCell}>Difference $</TableCell>
                        <TableCell sx={sx.tableCell}>Difference %</TableCell>
                    </TableRow>
                    {formattedData.map(e =>
                        <TableRow key={e.year} sx={sx.tableRow}>
                            <TableCell sx={sx.tableCellInfo}>{e.year}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.btcPrice)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.contributionAmount)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.totalBTC.toFixed(2))}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.aggregateBTC.toFixed(2))}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.btcNetValue)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.netValue)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.differenceDollar)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.differencePercent)}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
