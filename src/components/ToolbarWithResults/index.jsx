import React from 'react';
import {Box, Link, Typography} from '@mui/material';
import {styles} from './styles';
import {useResult} from '../../context/ResultContext';
import {formatNumber} from "../../utils/numberFormatter";

const ToolbarWithResults = ({toggleResultsChart, setToggleResultsChart}) => {
    const {results} = useResult();

    const onChartView = () => {
        setToggleResultsChart(true);
    }

    const onSummaryView = () => {
        setToggleResultsChart(false);
    }

    const dollar = results?.comparison?.difference?.value || '0';
    const percent = results?.comparison?.difference?.percentage || '0';
    const multiple = results?.comparison?.difference?.multiple || '0';

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.title}>Retirement savings</Typography>
            <Box sx={styles.childContainer}>
                <Box>
                    <Typography sx={styles.label}>
                        {/*<Box sx={styles.marker('#2E4E35')}></Box>*/}
                        Difference $
                    </Typography>
                    <Typography sx={styles.primaryText}>${formatNumber(dollar)}</Typography>
                </Box>
                <Box>
                    <Typography sx={styles.label}>
                        {/*<Box sx={styles.marker('#F1B314')}></Box>*/}
                        Difference %
                    </Typography>
                    <Typography sx={styles.primaryText}>{formatNumber(percent)}%</Typography>
                </Box>
                <Box>
                    <Typography sx={styles.label}>
                        {/*<Box sx={styles.marker('#F1B314')}></Box>*/}
                        Multiple
                    </Typography>
                    <Typography sx={styles.primaryText}>{formatNumber(multiple)}</Typography>
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
