import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Box } from '@mui/material';
import { useResult } from '../../context/ResultContext';
// import results from '../../api/testResult.json';

const DualAreaChart = ({ data }) => {
    const { results } = useResult();

    const chartData = useMemo(() => {
        if (!results?.['rental_re_plus_bitcoin']) {
            return [];
        }

        return results['rental_re_plus_bitcoin'].map((yearData, index) => ({
            year: index + 1,
            total_value_rental: yearData['total_value_rental'],
            bitcoin_price: yearData['bitcoin_price'],
        }));
    }, [results]);

    if (chartData.length === 0) {
        return <Box sx={{ textAlign: 'center', padding: '20px'}}>No results available.</Box>;
    }

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
            }}
        >
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                    <CartesianGrid horizontal vertical={false} stroke="#E0E0E0" strokeDasharray="0" />
                    <XAxis dataKey="year" tick={{ fill: '#4F4F4F', fontSize: 12 }} axisLine={{ stroke: '#E0E0E0', strokeWidth: 1 }} tickLine={false} label={{ value: 'Age', position: 'insideBottom', offset: -10, fill: '#4F4F4F', fontSize: 14 }} />
                    <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)} mm`} tick={{ fill: '#4F4F4F', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <Tooltip
                        formatter={(value) => `$${value.toLocaleString()}`}
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
                    <Area type="monotone" dataKey="total_value_rental" stroke="#2E4E35" strokeWidth={2} fill="url(#colorStandard)" />
                    <Area type="monotone" dataKey="bitcoin_price" stroke="#F1B314" strokeWidth={2} fill="url(#colorBTC)" />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default DualAreaChart;
