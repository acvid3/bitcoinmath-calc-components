import React, {useRef, useState, useEffect} from 'react';
import {Box, Paper} from '@mui/material';
import {ResultProvider, useResult} from './context/ResultContext';
import FinancialCalculatorForm from './components/FinancialCalculatorForm';
import {adjustChartSize} from './utils/resizeObserver';
import {CagrProvider} from './context/CagrContext';
import DualAreaChart from './components/DualAreaChart';
import CagrInputRange from './components/CagrInputRange';
import {sx} from "./appStyle";
import ResultsTable from "./components/ResultsTable";
import InfoCard from "./components/InfoCard";
import {FormProvider} from "./context/FormContext";
import GetStartedBanner from "./components/GetStartedBanner";
import ToolbarWithResults from "./components/ToolbarWithResults";

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
                            <Box sx={results ? sx.resultsBox : {display: 'none'}}>
                                <Box sx={sx.chartBox}>
                                    <Paper ref={containerRef} sx={sx.chartPaper}>
                                        <DualAreaChart data={[]}/>
                                    </Paper>
                                </Box>
                                <Box sx={sx.infoCardBox}>
                                    <Paper sx={sx.resultsPaper}><ResultsTable/></Paper>
                                    <Paper sx={sx.infoCardPaper}><InfoCard/></Paper>
                                </Box>
                            </Box>
                            {!results && <GetStartedBanner/>}
                        </Box>
                    </Box>
                </Box>
            </FormProvider>
        </CagrProvider>
    );
};

export default App;
