import React, {useRef, useState, useEffect} from 'react';
import {Box, Paper} from '@mui/material';
import {ResultProvider, useResult} from './context/ResultContext';
import FinancialCalculatorForm from './components/FinancialCalculatorForm';
import ResultsTable from './components/ResultsTable';
import FinancialChart from './components/FinancialChart';
import {adjustChartSize} from './utils/resizeObserver';
import ToolbarWithResults from './components/ToolbarWithResults';
import {CagrProvider} from './context/CagrContext';
import CagrInputRange from './components/CagrInputRange';
import InfoCard from './components/InfoCard';
import {sx} from './appStyle';
import {FormProvider} from "./context/FormContext";
import GetStartedBanner from "./components/GetStartedBanner";

const App = () => {
    const containerRef = useRef(null);
    const [chartSize, setChartSize] = useState({width: 600, height: 400});

    const {results} = useResult();

    useEffect(() => {
        if (containerRef.current) {
            const resizeObserver = new ResizeObserver(() => adjustChartSize(containerRef, setChartSize));
            resizeObserver.observe(containerRef.current);

            return () => resizeObserver.disconnect();
        }
    }, [containerRef]);

    return (
        <CagrProvider>
            <FormProvider>
                <Box sx={sx.parentContainer}>
                    <FinancialCalculatorForm/>

                    <Box sx={sx.infoContainer}>
                        <Box>
                            <Paper sx={sx.toolbarPaper}>
                                <CagrInputRange/>
                                <ToolbarWithResults/>
                            </Paper>
                        </Box>
                        <Box sx={results ? sx.resultsBox : {display: 'none'}}>
                            <Paper sx={sx.resultsPaper}>
                                <ResultsTable/>
                            </Paper>
                            <Box sx={sx.chartBox}>
                                <Paper ref={containerRef} sx={sx.chartPaper}>
                                    <FinancialChart chartSize={chartSize}/>
                                </Paper>
                                <Paper sx={sx.infoCardPaper}>
                                    <InfoCard/>
                                </Paper>
                            </Box>
                        </Box>
                        {!results && <GetStartedBanner/>}
                    </Box>
                </Box>
            </FormProvider>
        </CagrProvider>
    );
};

export default App;
