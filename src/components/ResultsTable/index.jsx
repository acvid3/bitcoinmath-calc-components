import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import {useResult} from '../../context/ResultContext';
import {sx} from "./styles";
import {labelsOrder} from "./constants";
import {formatNumber} from "../../utils/numberFormatter";
import DescriptionIcon from "../DescriptionIcon";
import {resultsDescriptions} from "./constants";


const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return (firstLetterCap + remainingLetters)
        .replace(/(Btc|btc|apr|usd)/gi, match => match.toUpperCase())
        .replace(/(Bitcoin|bitcoin)/gi, "BTC");
};

const formatResults = (results) => {
    if (!results || !results.borrowing) return [];

    const allKeys = [
        ...Object.keys(results.borrowing),
        ...Object.keys(results.selling).filter(key => !Object.keys(results.borrowing).includes(key))
    ];

    return allKeys.map((key) => ({
        label: toCapitalCase(key.replace(/_/g, ' ')),
        borrowing: formatNumber(results.borrowing[key]) || '—',
        selling: formatNumber(results.selling[key]) || '—',
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

    const formattedData = formatResults({selling: results.selling, borrowing: results.borrowing});

    const noDollarSignsValues = ["Borrowing apr", "Loan term years", "Total btc"];
    const percentSignValues = ["Borrowing apr"];

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
        <TableContainer sx={sx.table}>
            <Table>
                <TableBody>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCellTop}></TableCell>
                        <TableCell sx={sx.tableCellTop}></TableCell>
                        <TableCell sx={sx.tableCellTop} align="center">Selling</TableCell>
                        <TableCell sx={sx.tableCellTop} align="center">Borrowing</TableCell>
                    </TableRow>
                    {formattedData.map(({label, borrowing, selling}) => (
                        <TableRow key={label} sx={sx.tableRow}>
                            <TableCell sx={sx.descriptionCell}>
                                {resultsDescriptions.find(e => e.label === label)?.description &&
                                    <DescriptionIcon resultsDescriptions={resultsDescriptions} label={label}/>
                                }
                            </TableCell>
                            <TableCell sx={sx.tableLabel}>{label}</TableCell>
                            <TableCell sx={sx.tableCell} align="center">
                                {getDollarSign(label, selling)}{selling}{getPercentSign(label, selling)}
                            </TableCell>
                            <TableCell sx={sx.tableCell} align="center">
                                {getDollarSign(label, borrowing)}{borrowing}{getPercentSign(label, borrowing)}
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.descriptionCell}>
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Difference $"}/>
                        </TableCell>
                        <TableCell sx={sx.tableCell} align="left">Difference $</TableCell>
                        <TableCell sx={sx.tableCell} align="center"></TableCell>
                        <TableCell sx={sx.tableCell}
                                   align="center">${formatNumber(results?.difference?.dollar) || 0}</TableCell>
                    </TableRow>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.descriptionCell}>
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Difference %"}/>
                        </TableCell>
                        <TableCell sx={sx.tableCell} align="left">Difference %</TableCell>
                        <TableCell sx={sx.tableCell} align="center"></TableCell>
                        <TableCell sx={sx.tableCell}
                                   align="center">{formatNumber(results?.difference?.percentage) || 0}%</TableCell>
                    </TableRow>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.descriptionCell}>
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Multiple"}/>
                        </TableCell>
                        <TableCell sx={sx.tableCell} align="left">Multiple</TableCell>
                        <TableCell sx={sx.tableCell} align="center"></TableCell>
                        <TableCell sx={sx.tableCell}
                                   align="center">{formatNumber(results?.difference?.multiple) || 0}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
