import React, { useEffect, useState } from 'react';
import { Box, Paper, Button } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import { calculateSellingCompareBorrowingData } from '../../api';
import { inputFields } from './constants';
import { styles } from './styles';
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
                    const updatedFormData = { ...formData, btc_cagr: cagrValue };
                    const results = await calculateSellingCompareBorrowingData(updatedFormData);
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
            ? { ...formData, btc_cagr: cagrValue }
            : { ...formData };
        const results = await calculateSellingCompareBorrowingData(updatedFormData);
        setResults(results);
    };

    const handleInputChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: Number(value) }));
    };

    return (
        <Box sx={styles.container}>
            <Paper elevation={3} sx={styles.paper}>
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
                    <Button variant="contained" color="primary" fullWidth onClick={handleCalculate} sx={styles.button}>
                        Calculate
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default FinancialCalculatorForm;
