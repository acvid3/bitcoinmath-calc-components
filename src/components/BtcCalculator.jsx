import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';

const BtcCalculator = ({ calculateBTC }) => {
    const [formData, setFormData] = useState({
        car_price: 60000,
        cash_down: 25000,
        apr: 2.99,
        btc_price: 97094.04,
        cagr: 40,
        loan_term: 60,
    });

    const [results, setResults] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: parseFloat(value) || '',
        }));
    };

    const handleCalculate = async () => {
        try {
            const data = await calculateBTC(formData);
            setResults(data);
        } catch (error) {
            console.error('Error calculating BTC data:', error);
        }
    };

    const chartData = results
        ? [
              { name: 'Tradfi', value: results.tradfi.end_term_value, color: '#3c6e47' },
              { name: 'BTC', value: results.btc.end_term_value, color: '#f4a261' },
          ]
        : [];

    return (
        <Box sx={{ padding: 4, backgroundColor: '#f8f9f8', borderRadius: 4 }}>
            <Grid container spacing={4} alignItems="stretch">
                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 3,
                            backgroundColor: '#e9ede9',
                            borderRadius: 3,
                            height: '100%',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Auto Purchase
                        </Typography>
                        <TextField fullWidth label="Car Price ($)" name="car_price" type="number" value={formData.car_price} onChange={handleChange} margin="normal" sx={{ borderRadius: 10 }} />
                        <TextField fullWidth label="Cash Down ($)" name="cash_down" type="number" value={formData.cash_down} onChange={handleChange} margin="normal" sx={{ borderRadius: 10 }} />
                        <TextField fullWidth label="APR (%)" name="apr" type="number" value={formData.apr} onChange={handleChange} margin="normal" sx={{ borderRadius: 10 }} />
                        <TextField fullWidth label="BTC Current Price ($)" name="btc_price" type="number" value={formData.btc_price} onChange={handleChange} margin="normal" sx={{ borderRadius: 10 }} />
                        <TextField fullWidth label="CAGR (%)" name="cagr" type="number" value={formData.cagr} onChange={handleChange} margin="normal" sx={{ borderRadius: 10 }} />
                        <TextField fullWidth label="Loan Term (Months)" name="loan_term" type="number" value={formData.loan_term} onChange={handleChange} margin="normal" sx={{ borderRadius: 10 }} />
                        <Button variant="contained" color="primary" fullWidth onClick={handleCalculate} sx={{ marginTop: 2, backgroundColor: '#3c6e47' }}>
                            Calculate
                        </Button>
                    </Paper>
                </Grid>

                {results && (
                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                backgroundColor: '#ffffff',
                                borderRadius: 3,
                                height: '100%',
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                Results
                            </Typography>
                            <TableContainer>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell />
                                            <TableCell align="right" sx={{ fontWeight: 'bold', color: '#3c6e47' }}>
                                                Tradfi
                                            </TableCell>
                                            <TableCell align="right" sx={{ fontWeight: 'bold', color: '#f4a261' }}>
                                                Bitcoin
                                            </TableCell>
                                        </TableRow>
                                        {Object.keys(results.tradfi).map((key) => (
                                            <TableRow key={key}>
                                                <TableCell>{key.replace(/_/g, ' ')}</TableCell>
                                                <TableCell align="right">{results.tradfi[key]}</TableCell>
                                                <TableCell align="right">{results.btc[key]}</TableCell>
                                            </TableRow>
                                        ))}
                                        <TableRow>
                                            <TableCell>Difference ($)</TableCell>
                                            <TableCell colSpan={2} align="right">
                                                {results.difference.difference_dollar}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Difference (%)</TableCell>
                                            <TableCell colSpan={2} align="right">
                                                {results.difference.difference_percent}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                )}

                {results && (
                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                backgroundColor: '#ffffff',
                                borderRadius: 3,
                                height: '100%',
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                End Term Value Comparison
                            </Typography>
                            <BarChart width={350} height={350} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <defs>
                                    <linearGradient id="gradTradfi" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#2E4E3566" />
                                        <stop offset="100%" stopColor="#FFFFFF66" />
                                    </linearGradient>
                                    <linearGradient id="gradBTC" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#F1B31466" />
                                        <stop offset="100%" stopColor="#FFFFFF66" />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />

                                {console.log('GG')}
                                <Bar dataKey="value" isAnimationActive={false} barSize={40} fill={'url(#gradBTC)'} sx={{ borderRadius: 10 }}>
                                    <LabelList dataKey="value" position="top" formatter={(value) => `$${value}`} />
                                </Bar>
                            </BarChart>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default BtcCalculator;
