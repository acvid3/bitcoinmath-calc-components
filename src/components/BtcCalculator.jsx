import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BtcCalculator = ({ calculateBTC }) => {
    const [formData, setFormData] = useState({
        car_price: 50000,
        cash_down: 20000,
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

        console.log({
            ...formData,
            [name]: parseFloat(value) || '',
        });
    };

    const handleCalculate = async () => {
        console.log('Form data before API call:', formData);
        try {
            const data = await calculateBTC(formData);
            console.log('API Response:', data);
            setResults(data);
        } catch (error) {
            console.error('Error calculating BTC data:', error);
        }
    };

    const chartData = results
        ? [
              { name: 'Tradfi', value: results.end_term_value },
              { name: 'BTC', value: results.ending_btc_value },
          ]
        : [];

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                Bitcoin Auto Purchase Calculator
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Input Parameters
                        </Typography>
                        <TextField fullWidth label="Car Price ($)" name="car_price" type="number" value={formData.car_price} onChange={handleChange} margin="normal" />
                        <TextField fullWidth label="Cash Down ($)" name="cash_down" type="number" value={formData.cash_down} onChange={handleChange} margin="normal" />
                        <TextField fullWidth label="APR (%)" name="apr" type="number" value={formData.apr} onChange={handleChange} margin="normal" />
                        <TextField fullWidth label="BTC Current Price ($)" name="btc_rice" type="number" value={formData.btc_price} onChange={handleChange} margin="normal" />
                        <TextField fullWidth label="CAGR (%)" name="cagr" type="number" value={formData.cagr} onChange={handleChange} margin="normal" />
                        <TextField fullWidth label="Loan Term (Months)" name="loan_term" type="number" value={formData.loan_term} onChange={handleChange} margin="normal" />
                        <Button variant="contained" color="primary" fullWidth onClick={handleCalculate} sx={{ marginTop: 2 }}>
                            Calculate
                        </Button>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    {results && (
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                Results
                            </Typography>
                            <Typography>Car Price: ${results.car_price}</Typography>
                            <Typography>Amount Down: ${results.amount_down}</Typography>
                            <Typography>Total Financed: ${results.total_financed}</Typography>
                            <Typography>APR: {results.apr}</Typography>
                            <Typography>Monthly Principal: ${results.monthly_principal}</Typography>
                            <Typography>Monthly Interest: ${results.monthly_interest}</Typography>
                            <Typography>Total Monthly Payment: ${results.total_monthly_payment}</Typography>
                            <Typography>BTC Investment: ${results.btc_investment}</Typography>
                            <Typography>BTC Acquired: {results.btc_acquired} BTC</Typography>
                            <Typography>BTC Term Appreciation: ${results.term_appreciation}</Typography>
                            <Typography>Ending BTC Value: ${results.ending_btc_value}</Typography>
                            <Typography>Monthly Savings: ${results.monthly_savings}</Typography>
                            <Typography>Total Savings: ${results.total_savings}</Typography>
                            <Typography>Annual Depreciation: {results.annual_depreciation}</Typography>
                            <Typography>Down Payment Depreciation: ${results.down_payment_depreciation}</Typography>
                            <Typography>End Term Value: ${results.end_term_value}</Typography>
                            <Typography>Difference: ${results.difference}</Typography>
                            <Typography>Difference (%): {results.difference_percent}</Typography>
                        </Paper>
                    )}
                </Grid>

                <Grid item xs={12} md={4}>
                    {results && (
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                Chart
                            </Typography>
                            <BarChart width={300} height={200} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#82ca9d" />
                            </BarChart>
                        </Paper>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default BtcCalculator;
