import React, {useContext} from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { containerStyles, inputStyles, labelStyles } from './styles';
import {useResult} from "../../context/ResultContext";

const Input = ({ id, label, value, onChange, placeholder }) => {

    const {results} = useResult();

    return (
        <Box sx={containerStyles}>
            {label && <Typography sx={labelStyles}>{label}</Typography>}
            <TextField
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                variant="outlined"
                fullWidth
                sx={inputStyles}
                type="number"
                error={results?.data?.status === 400}
                helperText={results?.message}
            />
        </Box>
    );
};

export default Input;
