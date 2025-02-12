import React, { useEffect, useState } from 'react';
import { Box, Paper, Button } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import {calculateCashData, currencyPriceBtc} from '../../api';
import { inputFields } from './constants';
import { sx } from './styles';
import Input from '../Input';
import { useCagr } from '../../context/CagrContext';
import {useForm} from "../../context/FormContext";

const FinancialCalculatorForm = () => {
    const {formData, setFormData} = useForm();
    const { setResults } = useResult();

    const { cagrValue } = useCagr();

    const [btcPrice, setBtcPrice] = useState();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                if (cagrValue) {
                    const updatedFormData = {
                        // ...formData,
                        cagr: cagrValue,
                        apy: formData?.apy,
                        inflation_percent: formData?.inflation_percent,
                        number_of_years: formData?.number_of_years,
                        total_cash_savings: formData?.total_cash_savings
                    };
                    const results = await calculateCashData(updatedFormData);
                    setResults(results);
                }
            } catch (error) {
                console.error('Error fetching results with CAGR:', error);
            }
        };

        fetchResults();
    }, [cagrValue, formData]);

    useEffect(async () => {
        const data = await currencyPriceBtc();
        setBtcPrice(Number(data.price).toFixed(2));
    }, []);

    const handleCalculate = async () => {
        const updatedFormData = {
            // ...formData,
            cagr: cagrValue || 0,
            apy: formData?.apy,
            inflation_percent: formData?.inflation_percent,
            number_of_years: formData?.number_of_years,
            total_cash_savings: formData?.total_cash_savings
        };
        const results = await calculateCashData(updatedFormData);
        setResults(results);
    };

    const handleInputChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: Number(value) }));
    };

    return (
        <Box sx={sx.container}>
            <Paper elevation={3} sx={sx.paper}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {inputFields.map(({ id, label, placeholder, message }) => (
                        <Input
                            key={id}
                            id={id}
                            label={label}
                            placeholder={placeholder}
                            value={formData[id] || ''}
                            onChange={(value) => handleInputChange(id, value)}
                            message={message}
                        />
                    ))}
                    <Box sx={sx.term}>
                        <span>BTC current price</span>
                        <span>{btcPrice}</span>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleCalculate}
                        sx={sx.button}
                    >
                        Calculate
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default FinancialCalculatorForm;
