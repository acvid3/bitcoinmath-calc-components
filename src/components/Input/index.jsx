import React from 'react';
import {TextField, Box, Typography, Button} from '@mui/material';
import {sx} from './styles';

const Input = ({id, label, value, onChange, placeholder}) => {
    return (
        <Box sx={sx.container}>
            {label && <Typography sx={sx.label}>
                {label}
                {label === "529 CAGR:" &&
                    <span>
                        <Button sx={sx.descriptionIcon}
                            href={"https://investor.vanguard.com/investment-products/list/529-portfolios"}>
                            i
                        </Button>
                    <Box className={'description'} sx={sx.description}>
                        Vanguard 529 plans average 4-7%
                        {/*<a href={"https://investor.vanguard.com/investment-products/list/529-portfolios"}> learn more</a>*/}
                    </Box>
                </span>
                }
            </Typography>}
            <TextField id={id} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
                       variant="outlined" fullWidth sx={sx.input}/>
        </Box>
    );
};

export default Input;
