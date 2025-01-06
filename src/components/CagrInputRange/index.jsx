import React from 'react';
import { Slider, Box, Typography } from '@mui/material';
import { useCagr } from '../../context/CagrContext';
import { marks } from './constants';
import { styles } from './styles';

const CagrInputRange = () => {
    const { cagrValue, setCagrValue } = useCagr();

    const handleChange = (event, newValue) => {
        setCagrValue(newValue);
    };

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.typography}>CAGR</Typography>
            <Slider value={cagrValue} onChange={handleChange} aria-labelledby="cagr-slider" min={0} max={100} step={1} marks={marks} sx={styles.slider} />
        </Box>
    );
};

export default CagrInputRange;