import React, {useRef, useState, useEffect} from 'react';
import {Box, Paper} from '@mui/material';
import {ResultProvider} from './context/ResultContext';
import FinancialCalculatorForm from './components/FinancialCalculatorForm';
import ResultsTable from './components/ResultsTable';
import FinancialChart from './components/FinancialChart';
import {adjustChartSize} from './utils/resizeObserver';
import ToolbarWithResults from './components/ToolbarWithResults';
import {CagrProvider} from './context/CagrContext';
import CagrInputRange from './components/CagrInputRange';
import {sx} from "./appStyle";
import InfoCard from "./components/InfoCard";
import {FormProvider} from "./context/FormContext";


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
                <FormProvider>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
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
                                    <Box sx={sx.infoCardBox}>
                                        <Paper ref={containerRef} sx={sx.chartPaper}>
                                            <FinancialChart chartSize={chartSize}/>
                                        </Paper>
                                        <Paper sx={sx.infoCardPaper}><InfoCard/></Paper>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </FormProvider>
            </CagrProvider>
        </ResultProvider>
    );
};

export default App;
