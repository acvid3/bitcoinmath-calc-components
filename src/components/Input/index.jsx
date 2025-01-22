import React from 'react';
import {TextField, Box, Typography, Button} from '@mui/material';
import {sx} from './styles';

const Input = ({id, label, value, onChange, placeholder}) => {
    return (
        <Box sx={sx.container}>
            {label && <Typography sx={sx.label}>
                {label === "CAGR (%)" &&
                    <span>
                    <Button sx={sx.descriptionIcon}>i</Button>
                    <Box className={'description'} sx={sx.description}>
                        Vanguard 529 plans average 4-7%
                    </Box>
                </span>
                }
                {label}
            </Typography>}
            <TextField id={id} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
                       variant="outlined" fullWidth sx={sx.input}/>
        </Box>
    );
};

export default Input;
