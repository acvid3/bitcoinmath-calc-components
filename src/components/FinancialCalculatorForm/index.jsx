import React, { useEffect, useState } from 'react';
import { Box, Paper, Button } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import {calculateHomeEquityData} from '../../api';
import { inputFields } from './constants';
import { sx } from './styles';
import Input from '../Input';
import { useCagr } from '../../context/CagrContext';
import {useForm} from "../../context/FormContext";

const FinancialCalculatorForm = () => {
    const {formData, setFormData} = useForm();
    const { setResults } = useResult();

    const { cagrValue } = useCagr();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                if (cagrValue) {
                    const updatedFormData = { ...formData, cagr: cagrValue };
                    const results = await calculateHomeEquityData(updatedFormData);
                    setResults(results);
                }
            } catch (error) {
                console.error('Error fetching results with CAGR:', error);
            }
        };

        fetchResults();
    }, [cagrValue, formData]);

    const handleCalculate = async () => {
        const updatedFormData = cagrValue
            ? { ...formData, cagr: cagrValue }
            : { ...formData, cagr: 0 };
        const results = await calculateHomeEquityData(updatedFormData);
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
