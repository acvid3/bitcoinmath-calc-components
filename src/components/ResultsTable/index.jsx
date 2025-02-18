import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import { sx } from './styles';
import { formatNumber } from '../../utils/numberFormatter';
import { resultsDescriptions } from './constants';
import DescriptionIcon from '../DescriptionIcon';
import { Mectrics } from '../Mectrics';

const ResultsTable = () => {
    const { results } = useResult();

    if (!results) {
        return <Box sx={{ textAlign: 'center', padding: '20px' }}>No results available.</Box>;
    }

    return (
        <TableContainer>
            <Table sx={{ fontWeight: 600 }}>
                <TableBody>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell}></TableCell>
                        <TableCell sx={sx.tableCell} align="center">
                            Tradfi
                        </TableCell>
                        <TableCell sx={sx.tableCell} align="center">
                            Bitcoin
                        </TableCell>
                    </TableRow>
                    <Mectrics />
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell} align="left">
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={'Difference $'} />
                            Difference $
                        </TableCell>
                        <TableCell sx={sx.tableCell} align="center"></TableCell>
                        <TableCell sx={sx.tableCell} align="center">
                            ${formatNumber(results?.difference?.dollar) || 0}
                        </TableCell>
                    </TableRow>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell} align="left">
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={'Difference %'} />
                            Difference %
                        </TableCell>
                        <TableCell sx={sx.tableCell} align="center"></TableCell>
                        <TableCell sx={sx.tableCell} align="center">
                            {formatNumber(results?.difference?.percentage) || 0}%
                        </TableCell>
                    </TableRow>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell} align="left">
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={'Multiple'} />
                            Multiple
                        </TableCell>
                        <TableCell sx={sx.tableCell} align="center"></TableCell>
                        <TableCell sx={sx.tableCell} align="center">
                            {formatNumber(results?.difference?.multiple) || 0}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
