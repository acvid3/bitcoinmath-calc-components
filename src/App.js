import React, { useRef, useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import { ResultProvider } from './context/ResultContext';
import FinancialCalculatorForm from './components/FinancialCalculatorForm';
import ResultsTable from './components/ResultsTable';
import FinancialChart from './components/FinancialChart';
import { adjustChartSize } from './utils/resizeObserver';

const App = () => {
    const containerRef = useRef(null);
    const [chartSize, setChartSize] = useState({ width: 600, height: 400 });

    useEffect(() => {
        if (containerRef.current) {
            const resizeObserver = new ResizeObserver(() => adjustChartSize(containerRef, setChartSize));
            resizeObserver.observe(containerRef.current);

            return () => resizeObserver.disconnect();
        }
    }, [containerRef]);

    return (
        <ResultProvider>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <FinancialCalculatorForm />
                <Paper>
                    <ResultsTable />
                </Paper>
                <Paper ref={containerRef} sx={{ width: '497px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <FinancialChart chartSize={chartSize} />
                </Paper>
            </Box>
        </ResultProvider>
    );
};

export default App;
