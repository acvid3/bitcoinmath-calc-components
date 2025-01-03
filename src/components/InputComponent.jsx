import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

const CarPriceInput = ({ name, label, value, onChange, placeholder, unit }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Typography
                variant="subtitle1"
                sx={{
                    color: '#2E4E35',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '22px',
                }}
            >
                {label}
            </Typography>
            <TextField
                name={name}
                variant="outlined"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                fullWidth
                sx={{
                    '& .MuiOutlinedInput-root': {
                        padding: '11px 10px',
                        height: '38px',
                        borderRadius: '16px',
                        backgroundColor: '#f9f9f9',
                        '& fieldset': { border: 'none' },
                        '&.Mui-focused fieldset': { border: '2px solid #2E4E35' },
                    },
                }}
            />
            <Typography
                variant="caption"
                sx={{
                    color: '#2E4E35',
                    fontWeight: 600,
                    fontSize: '12px',
                    lineHeight: '14px',
                    opacity: 0.6,
                    paddingLeft: '10px',
                }}
            >
                {unit && `Value in ${unit}`}
            </Typography>
        </Box>
    );
};

export default CarPriceInput;
