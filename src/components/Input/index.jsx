import React from 'react';
import {TextField, Box, Typography, Button} from '@mui/material';
import { useResult } from '../../context/ResultContext';
import {sx} from "./styles";
import {inputDescriptions} from "./constants";

const Input = ({ id, label, value, onChange, placeholder, message }) => {
    const { results } = useResult();

    const isInputError = results?.code?.includes(id);

    const description = inputDescriptions.find(d => d.label === label)?.description;

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
            {description && <Typography sx={sx.message}>{description}</Typography>}
        </Box>
    );
};

export default Input;
