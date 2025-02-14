import React from 'react';
import {Box, Button, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import {useResult} from '../../context/ResultContext';
import {sx} from './styles';
import {labelsOrder, resultsDescriptions} from './constants';
import {formatNumber} from "../../utils/numberFormatter";
import DescriptionIcon from "../DescriptionIcon";

const ResultsTable = () => {
    const {results} = useResult();

    if (!results) {
        return <div style={{textAlign: 'center', padding: '20px'}}>No results available.</div>;
    }

    if (!results?.data?.status === 400) {
        return <div style={{textAlign: 'center', padding: '20px'}}>Bad Request.</div>;
    }

    return (
        <TableContainer sx={{padding: '15px 0', overflowX: 'auto'}}>
            <Table sx={{fontWeight: 600, overflowX: 'auto'}}>
                <TableBody>
                    <TableRow sx={sx.tableRow}>
                        {resultsDescriptions.map(d =>
                            <TableCell key={d.label} sx={sx.tableCell}>
                                <DescriptionIcon resultsDescriptions={resultsDescriptions} label={d.label}/>
                                <Box sx={sx.labelBox}>{d.label}</Box>
                            </TableCell>
                        )}
                    </TableRow>
                    {results?.data && results.data.map(e =>
                        <TableRow key={e.year} sx={sx.tableRow}>
                            <TableCell sx={sx.tableCellInfo}>{e.year}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.btc_price)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.annual_income)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.actual_after_inflation)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.loss_in_purchasing_power)}%</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.btc_acquired)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.aggregate_btc)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.total_btc_value)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.interest_owed)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.yearly_loan)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.total_loan)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.net_increase)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.income_plus_bitcoin)}</TableCell>
                            <TableCell sx={sx.tableCellInfo}>{formatNumber(e.net_increase_percent)}%</TableCell>
                            <TableCell sx={sx.tableCellInfo}>${formatNumber(e.annualized_btc_benefit)}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
