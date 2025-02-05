import React from 'react';
import {TextField, Box, Typography, Button} from '@mui/material';
import {sx} from './styles';
import {inputDescriptions} from "../FinancialCalculatorForm/constants";

const Input = ({id, label, value, onChange, placeholder, message}) => {

    return (
        <Box sx={sx.container}>
            {label && <Typography sx={sx.label}>{label}</Typography>}
            <TextField
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                variant="outlined"
                fullWidth
                sx={sx.input}
                type={"number"}
            />
            {message && <Typography sx={sx.message}>{message}</Typography>}
        </Box>
    );
};

export default Input;
