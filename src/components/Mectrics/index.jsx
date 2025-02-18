import React from 'react';
import { useResult } from '../../context/ResultContext';
import { metricLabels, resultsDescriptions } from './constants';
import { sx } from './styles';
import DescriptionIcon from '../DescriptionIcon';
import { TableCell, TableRow } from '@mui/material';
import { formatNumber } from '../../utils/numberFormatter';

const getSimbolMetric = (key, value) => {
    if (!value) return '-';

    if (key === 'cocr') return `${formatNumber(value)}%`;

    if (key === 'bitcoin_acquired') return formatNumber(value);

    return `$${formatNumber(value)}`;
};

export const Mectrics = () => {
    const { results } = useResult();

    return Object.keys(metricLabels).map((key) => (
        <TableRow sx={sx.tableRow} key={metricLabels[key]}>
            <TableCell sx={sx.tableCell}>
                <DescriptionIcon resultsDescriptions={resultsDescriptions} label={metricLabels[key]} />
                {metricLabels[key]}
            </TableCell>
            <TableCell sx={sx.tableCell} align="center">
                {getSimbolMetric(key, results.tradefi[key])}
            </TableCell>
            <TableCell sx={sx.tableCell} align="center">
                {getSimbolMetric(key, results.bitcoin[key])}
            </TableCell>
        </TableRow>
    ));
};
