import React, { useRef, useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import { ResultProvider } from './context/ResultContext';
import FinancialCalculatorForm from './components/FinancialCalculatorForm';
import { adjustChartSize } from './utils/resizeObserver';
import { CagrProvider } from './context/CagrContext';
import DualAreaChart from './components/DualAreaChart';
import CagrInputRange from './components/CagrInputRange';

const App = () => {
    const containerRef = useRef(null);
    const [setChartSize] = useState({ width: 600, height: 400 });

    useEffect(() => {
        if (containerRef.current) {
            const resizeObserver = new ResizeObserver(() => adjustChartSize(containerRef, setChartSize));
            resizeObserver.observe(containerRef.current);

            return () => resizeObserver.disconnect();
        }
    }, [containerRef]);

    return (
        <ResultProvider>
            <CagrProvider>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '20px',
                        justifyContent: 'center',
                        padding: '30px',
                        '@media (max-width: 678px)': {
                            flexDirection: 'column',
                            width: '100%',
                        },
                    }}
                >
                    <FinancialCalculatorForm />

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Box>
                            <Paper sx={{ display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: 'none' }}>
                                <CagrInputRange />
                            </Paper>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '20px',
                                width: '1015px',

                                '@media (max-width: 678px)': {
                                    flexDirection: 'column',
                                    width: '100%',
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <Paper
                                    ref={containerRef}
                                    sx={{
                                        width: '1015px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '30px',
                                        '@media (max-width: 678px)': {
                                            maxWidth: '100%',
                                            width: '100%',
                                        },
                                    }}
                                >
                                    <DualAreaChart data={[]} />
                                </Paper>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </CagrProvider>
        </ResultProvider>
    );
};

export default App;
