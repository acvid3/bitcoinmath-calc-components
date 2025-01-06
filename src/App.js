import React, { useRef, useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import { ResultProvider } from './context/ResultContext';
import FinancialCalculatorForm from './components/FinancialCalculatorForm';
import ResultsTable from './components/ResultsTable';
import FinancialChart from './components/FinancialChart';
import { adjustChartSize } from './utils/resizeObserver';
import ToolbarWithResults from './components/ToolbarWithResults';
import { CagrProvider } from './context/CagrContext';
import CagrInputRange from './components/CagrInputRange';
import InfoCard from './components/InfoCard';
import DualAreaChart from './components/DualAreaChart';

const App = () => {
    const containerRef = useRef(null);
    const [chartSize, setChartSize] = useState({ width: 600, height: 400 });
    const [chartData, setChartData] = useState({
        status: 'success',
        data: {
            years: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            standard_values: [6000, 12780, 20441.4, 29098.78, 38881.62, 49936.23, 62427.95, 76543.58, 92494.24, 110518.49, 130885.9, 153901.07, 179908.2, 209296.27, 242504.79, 280030.41, 322434.36, 370350.83, 424496.44, 485680.97],
            btc_values: [6000, 13740, 23724.6, 36604.73, 53220.11, 74653.94, 102303.58, 137971.62, 183983.39, 243338.57, 319906.75, 418679.71, 546096.83, 710464.91, 922499.74, 1196024.66, 1548871.81, 2004044.63, 2591217.58, 3348670.68],
        },
    });

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
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                    <FinancialCalculatorForm />

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Box>
                            <Paper sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <CagrInputRange />
                                <ToolbarWithResults />
                            </Paper>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '20px' }}>
                            <Paper sx={{ borderRadius: '30px' }}>
                                <ResultsTable />
                            </Paper>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <Paper
                                    ref={containerRef}
                                    sx={{
                                        height: '600px',
                                        width: '497px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '30px',
                                    }}
                                >
                                    <FinancialChart chartSize={chartSize} />
                                </Paper>
                                <Paper sx={{ width: '497px' }}>
                                    <InfoCard />
                                </Paper>
                            </Box>
                        </Box>
                    </Box>
                    <DualAreaChart data={chartData.data} />
                </Box>
            </CagrProvider>
        </ResultProvider>
    );
};

export default App;
