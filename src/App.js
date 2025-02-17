import React, {useRef, useState, useEffect} from 'react';
import {Box, Paper} from '@mui/material';
import {ResultProvider, useResult} from './context/ResultContext';
import FinancialCalculatorForm from './components/FinancialCalculatorForm';
import ResultsTable from './components/ResultsTable';
import {adjustChartSize} from './utils/resizeObserver';
import ToolbarWithResults from './components/ToolbarWithResults';
import {CagrProvider} from './context/CagrContext';
import DualAreaChart from './components/DualAreaChart';
import CagrInputRange from './components/CagrInputRange';
import {sx} from "./appStyle";
import InfoCard from "./components/InfoCard";
import GetStartedBanner from "./components/GetStartedBanner";
import {FormProvider} from "./context/FormContext";


const App = () => {
    const containerRef = useRef(null);
    const [chartSize, setChartSize] = useState({width: 600, height: 400});
    const [chartData, setChartData] = useState({});
    const [toggleResultsChart, setToggleResultsChart] = useState(true);

    useEffect(() => {
        if (containerRef.current) {
            const resizeObserver = new ResizeObserver(() => adjustChartSize(containerRef, setChartSize));
            resizeObserver.observe(containerRef.current);

            return () => resizeObserver.disconnect();
        }
    }, [containerRef]);

    const {results} = useResult();

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

                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <Box>
                                <Paper sx={{display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: 'none'}}>
                                    <CagrInputRange/>
                                    <ToolbarWithResults toggleResultsChart={toggleResultsChart}
                                                        setToggleResultsChart={setToggleResultsChart}/>
                                </Paper>
                            </Box>
                            <Box sx={results ? sx.resultsBox : {display: 'none'}}>
                                {toggleResultsChart ? (
                                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                                        <Paper ref={containerRef} sx={sx.chartPaper}>
                                            <DualAreaChart data={chartData.data}/>
                                        </Paper>
                                    </Box>
                                ) : (
                                    <Paper sx={{
                                        borderRadius: '30px',
                                        width: '100%',
                                        boxShadow: 'none',
                                        border: '1px solid #E9EBE4',
                                    }}>
                                        <ResultsTable/>
                                    </Paper>
                                )}
                                {/*<InfoCard/>*/}
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
