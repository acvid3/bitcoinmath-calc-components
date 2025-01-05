import React from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { containerStyles, inputStyles, labelStyles } from './styles';

const Input = ({ id, label, value, onChange, placeholder }) => {
    return (
        <Box sx={containerStyles}>
            {label && <Typography sx={labelStyles}>{label}</Typography>}
            <TextField id={id} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} variant="outlined" fullWidth sx={inputStyles} />
        </Box>
    );
};

export default Input;
