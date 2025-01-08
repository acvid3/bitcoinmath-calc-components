import React from 'react';
import { Box, Button, ButtonBase, Link, Paper, Typography } from '@mui/material';
import { buttonStyles, labelStyles, linkStyles, primaryTextStyles, xLinkStyles } from './styles';
import { useResult } from '../../context/ResultContext';

const ToolbarWithResults = (props) => {
    const { results } = useResult();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: '30px',
                border: '1px solid #E9EBE4',
                padding: '20px',
                width: '100%',
                boxSizing: 'border-box',
                '@media (max-width: 678px)': {
                    flexDirection: 'column',
                    gap: '30px',
                },
            }}
        >
            <Box>
                <Typography sx={labelStyles}>Difference $</Typography>
                <Typography sx={primaryTextStyles}>${results?.difference?.dollar || 0}</Typography>
            </Box>
            <Box>
                <Typography sx={labelStyles}>Difference %</Typography>
                <Typography sx={primaryTextStyles}>{results?.difference?.percent || '0%'}</Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
                <Box sx={{ display: 'flex' }}>
                    <Link sx={xLinkStyles}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6673 8.80458L17.8877 1.72412H16.4145L11.0116 7.87044L6.69895 1.72412H1.72412L8.24619 11.0196L1.72412 18.4437H3.19734L8.89952 11.9514L13.4544 18.4437H18.4292M3.72918 2.81194H5.99251L16.4129 17.4089H14.1487" fill="#2E4E35" />
                        </svg>
                    </Link>
                    <Button sx={buttonStyles}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#18391F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.83331 8.33334L9.99998 12.5L14.1666 8.33334" stroke="#18391F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 12.5V2.5" stroke="#18391F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Export To PDF
                    </Button>
                </Box>
                <Box sx={{ margin: '10px 10px 0 0' }}>
                    <Link href={''} sx={linkStyles}>
                        Leave Feedback
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default ToolbarWithResults;
