import React, {useRef, useState, useEffect} from 'react';
import {Box, Paper} from '@mui/material';
import {ResultProvider} from './context/ResultContext';
import FinancialCalculatorForm from './components/FinancialCalculatorForm';
import ResultsTable from './components/ResultsTable';
import {adjustChartSize} from './utils/resizeObserver';
import ToolbarWithResults from './components/ToolbarWithResults';
import {CagrProvider} from './context/CagrContext';
import CagrInputRange from './components/CagrInputRange';
import { sx } from "./appStyle";
import DualAreaChart from "./components/DualAreaChart";

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
                <Box sx={sx.parentContainer}>
                    <FinancialCalculatorForm/>

                    <Box sx={sx.infoContainer}>
                        <Box>
                            <Paper sx={sx.toolbarPaper}>
                                <CagrInputRange/>
                                <ToolbarWithResults/>
                            </Paper>
                        </Box>
                        <Box sx={sx.resultsBox}>
                            <Paper sx={sx.resultsPaper}>
                                <ResultsTable/>
                            </Paper>
                            <Box sx={sx.chartBox}>
                                <Paper ref={containerRef} sx={sx.chartPaper}>
                                    <DualAreaChart/>
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
