import React, {useRef, useState, useEffect} from 'react';
import {Box, Paper} from '@mui/material';
import {ResultProvider} from './context/ResultContext';
import FinancialCalculatorForm from './components/FinancialCalculatorForm';
import ResultsTable from './components/ResultsTable';
import FinancialChart from './components/FinancialChart';
import {adjustChartSize} from './utils/resizeObserver';
import ToolbarWithResults from "./components/ToolbarWithResults";
import {CagrProvider} from './context/CagrContext';
import CagrInputRange from "./components/CagrInputRange";

const App = () => {
    const containerRef = useRef(null);
    const [chartSize, setChartSize] = useState({width: 600, height: 400});

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
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                    <FinancialCalculatorForm/>
                    <Paper sx={{borderRadius: '30px'}}>
                        <ResultsTable/>
                    </Paper>
                    <Paper
                        ref={containerRef}
                        sx={{
                            width: '497px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '30px',
                        }}
                    >
                        <FinancialChart chartSize={chartSize}/>
                    </Paper>
                    <Paper>
                        <CagrInputRange/>
                        <ToolbarWithResults/>
                    </Paper>
                </Box>
            </CagrProvider>
        </ResultProvider>
    );
};

export default App;
