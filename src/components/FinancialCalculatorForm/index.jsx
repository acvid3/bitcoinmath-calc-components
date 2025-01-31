import React, { useEffect, useState } from 'react';
import { Box, Paper, Button } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import { calculateAutoPurchaseData } from '../../api';
import { inputFields } from './constants';
import { styles } from './styles';
import Input from '../Input';
import { useCagr } from '../../context/CagrContext';
import { useForm } from "../../context/FormContext";

const FinancialCalculatorForm = () => {
    const {formData, setFormData} = useForm();
    const { setResults } = useResult();

    const { cagrValue } = useCagr();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                if (cagrValue) {
                    const updatedFormData = { ...formData, term: 60, cagr: cagrValue };
                    const results = await calculateAutoPurchaseData(updatedFormData);
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
            ? { ...formData, term: 60, cagr: cagrValue }
            : { ...formData };
        const results = await calculateAutoPurchaseData(updatedFormData);
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
                            message={message || ''}
                        />
                    ))}
                    <Box sx={styles.term}>
                        <span>Loan term</span>
                        <span>60</span>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleCalculate}
                        sx={{ marginTop: '28px', backgroundColor: '#3c6e47', borderRadius: '30px' }}
                    >
                        Calculate
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default FinancialCalculatorForm;
