import React from 'react';
import {Box, Button, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import {useResult} from '../../context/ResultContext';
import {sx} from "./styles";
import {labelsOrder, resultsDescriptions} from "./constants";
import {formatNumber} from "../../utils/numberFormatter";
import DescriptionIcon from "../DescriptionIcon";

const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return (firstLetterCap + remainingLetters)
        .replace(/(Btc|btc|apr|usd)/gi, match => match.toUpperCase())
        .replace(/(Bitcoin|bitcoin)/gi, "BTC");
};

const formatResults = (results) => {
    if (!results || !results.tradefi || !results.btc) return [];

    return [
        ...Object.keys(results.tradefi),
        ...Object.keys(results.btc).filter(key => !Object.keys(results.tradefi).includes(key))
    ]
        .map((key) => ({
            label: toCapitalCase(key.replace(/_/g, ' ')),
            tradefi: formatNumber(results.tradefi[key]) || '—',
            btc: formatNumber(results.btc[key]) || '—',
        }))
        .filter((item) => labelsOrder.includes(item.label))
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

    const formattedData = formatResults(results);

    const getDollarSign = (label, value) => {
        if (label === "Apr" || label === "Loan term" || label === "Multiple" || label === "BTC acquired" || !value || value === '—') {
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
                    {formattedData.map(({label, tradefi, btc}) => (
                        <TableRow key={label} sx={sx.tableRow}>
                            <TableCell sx={sx.descriptionCell}>
                                {resultsDescriptions.find(e => e.label === label)?.description &&
                                    <DescriptionIcon resultsDescriptions={resultsDescriptions} label={label}/>
                                }
                            </TableCell>
                            <TableCell sx={sx.tableCell}>{label}</TableCell>
                            <TableCell sx={sx.tableCell}
                                       align="center">{getDollarSign(label, tradefi)}{tradefi}</TableCell>
                            <TableCell sx={sx.tableCell} align="center">{getDollarSign(label, btc)}{btc}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell}>
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Difference $"}/>
                        </TableCell>
                        <TableCell sx={sx.tableCell} align="left">Difference $</TableCell>
                        <TableCell sx={sx.tableCell} align="center"></TableCell>
                        <TableCell sx={sx.tableCell} align="center">${formatNumber(results?.difference?.dollar) || 0}</TableCell>
                    </TableRow>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell}>
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Difference %"}/>
                        </TableCell>
                        <TableCell sx={sx.tableCell} align="left">Difference %</TableCell>
                        <TableCell sx={sx.tableCell} align="center"></TableCell>
                        <TableCell sx={sx.tableCell} align="center">{formatNumber(results?.difference?.percent) || 0}%</TableCell>
                    </TableRow>
                    <TableRow sx={sx.tableRow}>
                        <TableCell sx={sx.tableCell}>
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Multiple"}/>
                        </TableCell>
                        <TableCell sx={sx.tableCell} align="left">Multiple</TableCell>
                        <TableCell sx={sx.tableCell} align="center"></TableCell>
                        <TableCell sx={sx.tableCell} align="center">{formatNumber(results?.difference?.multiple) || 0}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;