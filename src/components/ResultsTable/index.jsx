import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import { sx } from "./styles";
import { resultsDescriptions } from "./constants";
import {formatNumber} from "../../utils/numberFormatter";
import DescriptionIcon from "../DescriptionIcon";


const toCapitalCase = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
};

const formatResults = (results) => {
    if (!results || !results.comparison || !results.comparison.standard) return [];

    return Object.keys(results.comparison.standard).map((key) => ({
        label: toCapitalCase(key.replace(/_/g, ' ')),
        tradefi: formatNumber(results.comparison.standard[key]),
        btc: formatNumber(results.comparison.bitcoin[key]),
    }));
};

const ResultsTable = () => {
    const { results } = useResult();

    if (!results) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>No results available.</div>;
    }

    const formattedData = formatResults(results);
    console.log("difference: ", results);

    return (
        <TableContainer>
            <Table sx={{fontWeight: 600}}>
                <TableBody>
                    {formattedData.map(({ label, tradefi, btc }) => (
                        <TableRow key={label} sx={sx.tableRow}>
                            <TableCell sx={sx.tableCell}>
                                <DescriptionIcon resultsDescriptions={resultsDescriptions} label={label}/>
                                {label}
                            </TableCell>
                            <TableCell align="right">${tradefi}</TableCell>
                            <TableCell align="right">${btc}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell>
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Difference $"}/>
                            Difference $
                        </TableCell>
                        <TableCell align="right">{" "}</TableCell>
                        <TableCell align="right">${formatNumber(results?.comparison?.difference?.value) || 0}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Difference %"}/>
                            Difference %
                        </TableCell>
                        <TableCell align="right">{" "}</TableCell>
                        <TableCell align="right">{formatNumber(results?.comparison?.difference?.percentage) || 0}%</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <DescriptionIcon resultsDescriptions={resultsDescriptions} label={"Multiple"}/>
                            Multiple
                        </TableCell>
                        <TableCell align="right">{" "}</TableCell>
                        <TableCell align="right">{formatNumber(results?.comparison?.difference?.multiple) || 0}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;
