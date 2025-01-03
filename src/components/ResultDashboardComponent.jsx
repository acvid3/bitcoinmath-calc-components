import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledRow = styled(TableRow)({
    '&:not(:last-child) td': {
        borderBottom: '10px solid transparent',
    },
});

const StyledCell = styled(TableCell)({
    padding: '4px',
    border: 'none',
    fontWeight: 600,
    fontSize: '14px',
    color: '#2E4E35',
});

const ResultDashboardComponent = ({ dataResults, difference }) => {
    const formatNumber = (value) => (typeof value === 'number' ? value.toLocaleString('en-US') : value || '-');

    const formattedData =
        dataResults && Object.keys(dataResults.tradfi).length > 0
            ? Object.keys(dataResults.tradfi).map((key) => ({
                  label: key.replace(/_/g, ' ').replace(/(^|\s)\S/g, (letter) => letter.toUpperCase()),
                  tradfi: formatNumber(dataResults.tradfi[key]),
                  btc: formatNumber(dataResults.btc[key]),
              }))
            : [];

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    <StyledRow>
                        <StyledCell />
                        <StyledCell align="center">Tradfi</StyledCell>
                        <StyledCell align="center">Bitcoin</StyledCell>
                    </StyledRow>

                    {formattedData.length > 0 ? (
                        formattedData.map(({ label, tradfi, btc }) => (
                            <StyledRow key={label}>
                                <StyledCell>{label}</StyledCell>
                                <StyledCell align="center">{tradfi}</StyledCell>
                                <StyledCell align="center">{btc}</StyledCell>
                            </StyledRow>
                        ))
                    ) : (
                        <StyledRow>
                            <StyledCell colSpan={3} align="center">
                                No data available
                            </StyledCell>
                        </StyledRow>
                    )}

                    {difference && (
                        <>
                            <StyledRow>
                                <StyledCell>Difference $</StyledCell>
                                <StyledCell colSpan={2} align="center">
                                    {formatNumber(difference.difference_dollar)}
                                </StyledCell>
                            </StyledRow>
                            <StyledRow>
                                <StyledCell>Difference %</StyledCell>
                                <StyledCell colSpan={2} align="center">
                                    {difference.difference_percent}
                                </StyledCell>
                            </StyledRow>
                        </>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultDashboardComponent;
