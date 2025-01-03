import React from 'react';
import { Box, Paper } from '@mui/material';

export const FormComponent = ({ children }) => {
    return (
        <Box
            sx={{
                flex: 1,
                maxWidth: '325px',
                width: '100%',
                '@media (max-width: 678px)': {
                    maxWidth: 'unset',
                    // width: '100%',
                },

            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: '20px',
                    backgroundColor: '#E9EBE4',
                    borderRadius: '30px',
                    border: '1px solid #E9EBE4',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                    '@media (max-width: 678px)': {
                        width: '100%',
                    },
                }}
            >
                {children}
            </Paper>
        </Box>
    );
};
