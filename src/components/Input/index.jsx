import React from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { sx } from "./styles";


const Input = ({ id, label, value, onChange, placeholder, handleBlur }) => {

    return (
        <Box sx={sx.container}>
            {label && <Typography sx={sx.label}>{label}</Typography>}
            <TextField
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                // onBlur={(e) => handleBlur(e.target.value)}
                placeholder={placeholder}
                variant="outlined"
                fullWidth
                sx={sx.input}
                type={"number"}
            />
        </Box>
    );
};

export default Input;
