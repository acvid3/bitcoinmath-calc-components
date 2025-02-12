import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import { sx } from "./styles";
import {formatNumber} from "../../utils/numberFormatter";
import DescriptionIcon from "../DescriptionIcon";
import {resultsDescriptions} from "./constants";


const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return (firstLetterCap + remainingLetters).replace(/(Btc|btc|apr|usd|apy)/gi, match => match.toUpperCase());
};

const formatResults = (results) => {
    if (!results || !results.tradefi) return [];

    return Object.keys(results.tradefi).map((key) => ({
        label: toCapitalCase(key.replace(/_/g, ' ')),
        tradefi: formatNumber(results.tradefi[key]) || '—',
        btc: formatNumber(results.btc[key]) || '—',
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

    const formattedData = formatResults({tradefi: results.tradefi, btc: results.btc});

    const noDollarSignsValues = ["APR", "Loan term", "Real APY"];
    const percentSignValues = ["Real APY"];

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
                        <TableCell sx={sx.tableCell}></TableCell>
                        <TableCell sx={sx.tableCell} align="center">Tradfi</TableCell>
                        <TableCell sx={sx.tableCell} align="center">Bitcoin</TableCell>
                    </TableRow>
                    {formattedData.map(({ label, tradefi, btc }) => (
                        <TableRow sx={sx.tableRow} key={label}>
                            <TableCell sx={sx.tableCell}>
                                <DescriptionIcon resultsDescriptions={resultsDescriptions} label={label}/>
                            </TableCell>
                            <TableCell sx={sx.tableCell}>{label}</TableCell>
                            <TableCell sx={sx.tableCell} align="center">
                                {getDollarSign(label, tradefi)}
                                {tradefi}
                                {getPercentSign(label, tradefi)}
                            </TableCell>
                            <TableCell sx={sx.tableCell} align="center">
                                {getDollarSign(label, btc)}
                                {btc}
                                {getPercentSign(label, btc)}
                            </TableCell>
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
