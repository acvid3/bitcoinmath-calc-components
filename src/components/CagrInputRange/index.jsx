import React, {useCallback, useState} from 'react';
import {Slider, Box, Typography, Button} from '@mui/material';
import {useCagr} from '../../context/CagrContext';
import {marks} from './constants';
import {styles} from './styles';

const CagrInputRange = () => {
    const {cagrValue, setCagrValue} = useCagr();
    const [tempValue, setTempValue] = useState(cagrValue);

    const handleChange = (event, newValue) => {
        setTempValue(newValue);
    };

    const handleChangeCommitted = (event, newValue) => {
        setCagrValue(newValue);
    };


    return (
        <Box sx={styles.container}>
            <Typography sx={styles.typography}>BTC CAGR (%)</Typography>
            <Slider
                value={tempValue}
                onChange={handleChange}
                onChangeCommitted={handleChangeCommitted}
                aria-labelledby="cagr-slider"
                min={0}
                max={100}
                step={1}
                marks={marks} sx={styles.slider}
                valueLabelDisplay={cagrValue == "0" ? "off" : "on"}
            />
        </Box>
    );
};

export default CagrInputRange;
