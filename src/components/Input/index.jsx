import React from 'react';
import {TextField, Box, Typography, Button} from '@mui/material';
import {sx} from './styles';
import {inputDescriptions} from "../FinancialCalculatorForm/constants";

const Input = ({id, label, value, onChange, placeholder, handleBlur}) => {

    const description = inputDescriptions.find(d => d.label === label)?.description;

    return (
        <Box sx={sx.container}>
            {label && <Typography sx={sx.label}>
                {label}
                {description &&
                    <span>
                        <Button sx={sx.descriptionIcon}>i</Button>
                        <Box className={'description'} sx={sx.description}>
                            {description}
                        </Box>
                    </span>
                }
            </Typography>}
            <TextField
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                // onBlur={(e) => handleBlur(e.target.value)}
                placeholder={placeholder}
                variant="outlined"
                fullWidth
                sx={sx.input}
            />
        </Box>
    );
};

export default Input;
