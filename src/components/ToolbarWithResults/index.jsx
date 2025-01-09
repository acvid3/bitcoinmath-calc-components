import React from 'react';
import {Box, Link, Typography} from '@mui/material';
import {styles} from './styles';
import {useResult} from '../../context/ResultContext';

const ToolbarWithResults = ({toggleResultsChart, setToggleResultsChart}) => {
    const {results} = useResult();

    const onChartView = () => {
        setToggleResultsChart(true);
    }

    const onSummaryView = () => {
        setToggleResultsChart(false);
    }

    const index = results?.yearly_values_stocks.length - 1;

    const whatYoullHave = results?.yearly_values_stocks[index].investment || '0';
    const whatYoullNeed = results?.yearly_values_bitcoin[index].investment || '0';

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.title}>Retirement savings</Typography>
            <Box sx={styles.childContainer}>
                <Box>
                    <Typography sx={styles.label}>
                        <Box sx={styles.marker('#2E4E35')}></Box>
                        What you'll have:
                    </Typography>
                    <Typography sx={styles.primaryText}>${whatYoullHave}</Typography>
                </Box>
                <Box>
                    <Typography sx={styles.label}>
                        <Box sx={styles.marker('#F1B314')}></Box>
                        What you'll need:
                    </Typography>
                    <Typography sx={styles.primaryText}>${whatYoullNeed}</Typography>
                </Box>
                <Box sx={styles.tabsContainer}>
                    <Box sx={styles.tabs}>
                        <Box sx={toggleResultsChart ? styles.selectedTab : styles.tab} onClick={onChartView}>
                            Graph view
                        </Box>
                        <Box sx={toggleResultsChart ? styles.tab : styles.selectedTab} onClick={onSummaryView}>
                            Summary view
                        </Box>
                    </Box>
                    <Box sx={{margin: '10px 10px 0 0'}}>
                        <Link href={''} sx={styles.link}>
                            How did we calculate your results?
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ToolbarWithResults;
