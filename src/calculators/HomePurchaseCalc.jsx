import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { FormComponent } from '../components/FormComponent';
import { ChartComponent } from '../components/ChartComponent';
import ResultDashboardComponent from '../components/ResultDashboardComponent';
import CarPriceInput from '../components/InputComponent';

const HomePurchaseCalc = ({ calculateHandler }) => {
    const [results, setResults] = useState(null);
    const [formData, setFormData] = useState({});
    const [chartSize, setChartSize] = useState({ w: 600, h: 400 });
    const parentRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (parentRef.current) {
                const { offsetWidth, offsetHeight } = parentRef.current;

                const calculatedWidth = Math.max(offsetWidth / 3, 300);
                const calculatedHeight = Math.max(offsetHeight / 2, 300);

                setChartSize({ w: calculatedWidth, h: calculatedHeight });
            }
        };

        handleResize();

        const resizeObserver = new ResizeObserver(handleResize);
        if (parentRef.current) {
            resizeObserver.observe(parentRef.current);
        }

        return () => {
            if (parentRef.current) {
                resizeObserver.unobserve(parentRef.current);
            }
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: parseFloat(value) || '',
        }));
    };

    const handleCalculate = async () => {
        const result = await calculateHandler(formData);
        setResults(result);
    };

    const inputFields = [
        { name: 'home_price', label: 'Home Price', unit: '$', placeholder: 'Enter home price' },
        { name: 'cash_down', label: 'Cash Down', unit: '$', placeholder: 'Enter cash down' },
        { name: 'apr', label: 'APR%', unit: '%', placeholder: 'Enter APR' },
        { name: 'btc_price', label: 'BTC Price', unit: '$', placeholder: 'Enter BTC price' },
        { name: 'cagr', label: 'CAGR', unit: '%', placeholder: 'Enter CAGR' },
        { name: 'term', label: 'Term', unit: '', placeholder: 'Enter term in months' },
        { name: 're_aar', label: 'RE AAR', unit: '%', placeholder: 'Enter RE AAR' },
        { name: 'checkpoint_year', label: 'Checkpoint Year', unit: '', placeholder: 'Enter checkpoint year' },
    ];

    return (
        <Box
            ref={parentRef}
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: '20px',
                width: '100%',
                height: '100%',
            }}
        >
            <FormComponent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {inputFields.map(({ name, label, unit, placeholder }) => (
                        <CarPriceInput key={name} name={name} label={label} unit={unit} placeholder={placeholder} value={formData[name] || ''} onChange={handleChange} />
                    ))}
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleCalculate}
                        sx={{
                            marginTop: 2,
                            backgroundColor: '#3c6e47',
                            borderRadius: '30px',
                        }}
                    >
                        Calculate
                    </Button>
                </Box>
            </FormComponent>
            {results && (
                <>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: '40px',
                            borderRadius: '30px',
                            boxShadow: 'none',
                            border: '1px solid #E9EBE4',
                            width: '100%',
                            flex: 1,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '20px',
                                fontWeight: 700,
                                lineHeight: '23.48px',
                                marginBottom: '40px',
                            }}
                        >
                            Results
                        </Typography>
                        <ResultDashboardComponent dataResults={{ tradfi: results.tradfi, btc: results.btc }} difference={results.comparison} />
                    </Paper>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: '40px',
                            borderRadius: '30px',
                            boxShadow: 'none',
                            border: '1px solid #E9EBE4',
                            width: '100%',
                            flex: 1,
                        }}
                    >
                        <ChartComponent chartData={[{ name: 'Net Value', Tradfi: results.tradfi.net_value, BTC: results.btc.net_value }]} chartSize={chartSize} title="Financial Comparison" />
                    </Paper>
                </>
            )}
        </Box>
    );
};

export default HomePurchaseCalc;
