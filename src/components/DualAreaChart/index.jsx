import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Box } from '@mui/material';
import { useResult } from '../../context/ResultContext';
import ChartLabels from '../ChartLabels';
import {formatNumber} from "../../utils/numberFormatter";

const DualAreaChart = (props) => {
    const { results } = useResult();

    const chartData = useMemo(() => {
        if (!results?.data.years_data) {
            return [];
        }

        return results?.data.years_data.map((value, index) => ({
            year: value.year || 0,
            net_value: results?.data.years_data[index]?.net_value || 0,
            btc_net_value: results?.data.years_data[index]?.btc_net_value || 0,
        }));
    }, [results]);

    if (chartData.length === 0) {
        return <div>No data available</div>;
    }

    const chartItems = [
        { label: `529 Net Value: ${formatNumber(chartData[chartData.length - 1].net_value)}`, color: '#2E4E35' },
        { label: `BTC Net Value: ${formatNumber(chartData[chartData.length - 1].btc_net_value)}`, color: '#F1B314' },
    ];

    return (
        <Box
            sx={{
                border: '1px solid #E0E0E0',
                borderRadius: '30px',
                padding: '16px',
                background: '#FFFFFF',
                width: '100%',
                height: '400px',
                boxSizing: 'border-box',
                paddingBottom: '30px',
            }}
        >
            <ResponsiveContainer width="100%" height="100%">
                <ChartLabels items={chartItems} />
                <AreaChart data={chartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                    <CartesianGrid horizontal vertical={false} stroke="#E0E0E0" strokeDasharray="0" />
                    <XAxis
                        height={60}
                        dataKey="year"
                        tick={{ fill: 'rgb(46, 78, 53)', fontSize: 12, fontFamily: 'Raleway' }}
                        axisLine={{ stroke: '#E0E0E0', strokeWidth: 1 }}
                        tickLine={false}
                        label={{ value: 'Age', position: 'insideBottom', offset: -10, fill: '#4F4F4F', fontSize: 14 }}
                    />
                    <YAxis
                        width={90}
                        tickFormatter={(value) => `$${formatNumber(value.toFixed(1))}`}
                        tick={{ fill: 'rgb(46, 78, 53)', fontSize: 12, fontFamily: 'Raleway' }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        formatter={(value) => `$${formatNumber(value)}`}
                        labelFormatter={(label) => `Year: ${label}`}
                        contentStyle={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '8px',
                            border: '1px solid #E0E0E0',
                        }}
                        itemStyle={{ color: '#4F4F4F' }}
                    />
                    <defs>
                        <linearGradient id="colorStandard" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="40%" stopColor="#2E4E3566" />
                            <stop offset="100%" stopColor="#FFFFFF66" />
                        </linearGradient>
                        <linearGradient id="colorBTC" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="40%" stopColor="#F1B31466" />
                            <stop offset="100%" stopColor="#FFFFFF66" />
                        </linearGradient>
                    </defs>
                    <Area type="stepAfter" dataKey="net_value" stroke="#2E4E35" strokeWidth={2} fill="url(#colorStandard)" />
                    <Area type="stepAfter" dataKey="btc_net_value" stroke="#F1B314" strokeWidth={2} fill="url(#colorBTC)" />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default DualAreaChart;
