import React, { useEffect, useState } from 'react';
import { Box, Paper, Button } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import {calculateCollegeSavings, currencyPriceBtc} from '../../api';
import { inputFields } from './constants';
import { styles } from './styles';
import Input from '../Input';
import { useCagr } from '../../context/CagrContext';
import {useForm} from "../../context/FormContext";

const FinancialCalculatorForm = () => {
    const { setResults } = useResult();
    const {formData, setFormData} = useForm();

    const { cagrValue } = useCagr();
    const [btcPrice, setBtcPrice] = useState();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                if (cagrValue) {
                    const updatedFormData = { ...formData, bitcoin_cagr: cagrValue, years: 18 };
                    const results = await calculateCollegeSavings(updatedFormData);
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
            const results = await calculateCollegeSavings({ ...formData, bitcoin_cagr: cagrValue, years: 18 });
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
                            placeholder={placeholder}
                            value={formData[id] || ''}
                            onChange={(value) => handleInputChange(id, value)}
                            message={message}
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
                        sx={{ marginTop: 2, backgroundColor: '#3c6e47', borderRadius: '30px', boxShadow: 'none' }}
                    >
                        Calculate
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default FinancialCalculatorForm;
