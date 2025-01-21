import React from 'react';
import { Box } from '@mui/material';

const ChartLabels = ({ items }) => (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', fontFamily: 'Raleway', gap: '30px', color: 'rgb(46, 78, 53)' }}>
        {items.map(({ label, color }) => (
            <span key={label} style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                <span
                    style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: color,
                        marginRight: '5px',
                    }}
                ></span>
                {label}
            </span>
        ))}
    </Box>
);

export default ChartLabels;
