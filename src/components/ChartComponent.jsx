import { Box, Typography } from '@mui/material';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const RenderLegend = ({ value, color }) => {
    return (
        <span style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
            <span
                style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: color,
                    marginRight: '5px',
                }}
            ></span>
            {value}
        </span>
    );
};

export const ChartComponent = ({ chartData, type = 'bar', chartSize, title }) => {
    const formatYAxis = (value) => `$${value}`;
    // if (chartSize.h < 300) chartSize.h = 400;

    return (
        <>
            {type === 'bar' ? (
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '10px',
                        }}
                    >
                        <RenderLegend value="Tradfi" color="#2E4E35" />
                        <RenderLegend value="BTC" color="#F1B314" />
                    </Box>

                    <BarChart width={chartSize.w - 80} height={chartSize.h - 80} data={chartData}>
                        <defs>
                            <linearGradient id="colorTradefi" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2E4E3566" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#2E4E3566" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorBTC" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#F1B31466" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#F1B31466" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid horizontal={true} vertical={false} />
                        <YAxis tickLine={false} axisLine={false} tickFormatter={formatYAxis} tick={{ fill: '#2E4E35' }} />
                        <Bar
                            dataKey="Tradfi"
                            fill="url(#colorTradefi)"
                            stroke="#2E4E35"
                            radius={[10, 10, 0, 0]}
                            barSize={100}
                            label={{
                                position: 'top',
                                fill: '#2E4E35',
                                fontSize: 14,
                                formatter: formatYAxis,
                            }}
                        />
                        <Bar
                            dataKey="BTC"
                            fill="url(#colorBTC)"
                            stroke="#F1B314"
                            radius={[10, 10, 0, 0]}
                            barSize={100}
                            label={{
                                position: 'top',
                                fill: '#2E4E35',
                                fontSize: 14,
                                formatter: formatYAxis,
                            }}
                        />
                    </BarChart>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: '12px',
                            fontWeight: 400,
                            lineHeight: '18px',
                            margin: '0px',
                            textAlign: 'center',
                            color: '#2E4E35',
                            marginTop: '20px',
                        }}
                    >
                        {title}
                    </Typography>
                </>
            ) : (
                <Typography variant="body1" sx={{ textAlign: 'center', color: '#2E4E35' }}>
                    Unsupported chart type
                </Typography>
            )}
        </>
    );
};
