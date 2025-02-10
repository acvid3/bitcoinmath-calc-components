import React, {useRef, useState, useEffect} from 'react';
import {Box, Paper} from '@mui/material';
import {ResultProvider, useResult} from './context/ResultContext';
import FinancialCalculatorForm from './components/FinancialCalculatorForm';
import ResultsTable from './components/ResultsTable';
import {adjustChartSize} from './utils/resizeObserver';
import ToolbarWithResults from './components/ToolbarWithResults';
import {CagrProvider} from './context/CagrContext';
import DualAreaChart from './components/DualAreaChart';
import GetStartedBanner from "./components/GetStartedBanner";


const App = () => {
    const containerRef = useRef(null);
    const [chartSize, setChartSize] = useState({width: 600, height: 400});
    const [chartData, setChartData] = useState({});
    const [toggleResultsChart, setToggleResultsChart] = useState(true);

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
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
                justifyContent: 'center',
                '@media (max-width: 678px)': {
                    flexDirection: 'column',
                    width: '100%',
                },
            }}>
                <FinancialCalculatorForm/>

                <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <Box>
                        <Paper sx={{display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: 'none'}}>
                            <ToolbarWithResults
                                toggleResultsChart={toggleResultsChart}
                                setToggleResultsChart={setToggleResultsChart}
                            />
                        </Paper>
                    </Box>
                    <Box sx={results ? {
                        display: 'flex',
                        gap: '20px',
                        width: '1015px',

                        '@media (max-width: 678px)': {
                            flexDirection: 'column',
                            width: '100%',
                        },
                    } : {display: 'none'}}>
                        {toggleResultsChart
                            ? <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                                <Paper
                                    ref={containerRef}
                                    sx={{
                                        width: '1015px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '30px',
                                        boxShadow: 'none',
                                        border: '1px solid #E9EBE4',

                                        '@media (max-width: 678px)': {
                                            maxWidth: '100%',
                                            width: '100%',
                                        },
                                    }}
                                >
                                    <DualAreaChart data={chartData.data}/>
                                </Paper>
                            </Box>
                            : <Paper sx={{
                                borderRadius: '30px',
                                width: '100%',
                                boxShadow: 'none',
                                border: '1px solid #E9EBE4',
                            }}>
                                <ResultsTable/>
                            </Paper>
                        }
                    </Box>
                    {!results && <GetStartedBanner/>}
                </Box>
            </Box>
        </CagrProvider>
    );
};

export default App;
