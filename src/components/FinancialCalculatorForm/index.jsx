import React, { useEffect, useState } from 'react';
import { Box, Paper, Button } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import {calculateRetirementData, currencyPriceBtc} from '../../api';
import { inputFields } from './constants';
import { styles } from './styles';
import Input from '../Input';
import { useCagr } from '../../context/CagrContext';

const FinancialCalculatorForm = () => {
    const [formData, setFormData] = useState({});
    const { setResults } = useResult();

    const { cagrValue } = useCagr();
    const [btcPrice, setBtcPrice] = useState();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                if (cagrValue) {
                    const updatedFormData = { ...formData, cagr: cagrValue };
                    const results = await calculateRetirementData(updatedFormData);
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
        try {
            const results = await calculateRetirementData(formData);
            setResults(results);
        } catch (error) {
            console.error('Error fetching results:', error);
        }
    };

    const handleInputChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
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
                            message={message}
                            placeholder={placeholder}
                            value={formData[id] || ''}
                            onChange={(value) => handleInputChange(id, value)}
                        />
                    ))}
                    <Box sx={styles.term}>
                        <span>BTC current price</span>
                        <span>{btcPrice}</span>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleCalculate}
                        sx={{ marginTop: '28px', backgroundColor: '#3c6e47', borderRadius: '30px', boxShadow: 'none' }}
                    >
                        Calculate
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default FinancialCalculatorForm;
