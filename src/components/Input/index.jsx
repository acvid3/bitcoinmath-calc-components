import React from 'react';
import {TextField, Box, Typography, Button} from '@mui/material';
import { useResult } from '../../context/ResultContext';
import {sx} from "./styles";

const Input = ({ id, label, value, onChange, placeholder, message }) => {
    const { results } = useResult();

    const isInputError = results?.code?.includes(id);

    return (
        <Box sx={sx.container}>
            {label && <Typography sx={sx.label}>
                {label}
            </Typography>}
            <TextField
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                variant="outlined"
                fullWidth
                sx={sx.input}
                type="number"
                error={results?.data?.status === 400 && isInputError}
                helperText={isInputError ? results?.message : ''}
            />
            {message && <Typography sx={sx.message}>{message}</Typography>}
        </Box>
    );
};

export default Input;
