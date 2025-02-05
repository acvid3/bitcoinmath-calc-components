import React from 'react';
import {TextField, Box, Typography, Button} from '@mui/material';
import {sx} from './styles';

const Input = ({id, label, value, onChange, placeholder, message}) => {
    return (
        <Box sx={sx.container}>
            {label && <Typography sx={sx.label}> {label} </Typography>}
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
            {message && <Typography sx={sx.message}>
                {message}
                <br/>
                {label === "529 CAGR:" && <a href={'https://investor.vanguard.com/investment-products/list/529-portfolios'}>learn more</a>}
            </Typography>}
        </Box>
    );
};

export default Input;
