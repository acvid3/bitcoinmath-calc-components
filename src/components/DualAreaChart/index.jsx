import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Box } from '@mui/material';

const DualAreaChart = ({ data }) => {
    const chartData = useMemo(() => {
        if (!data || !data.years || !data.standard_values || !data.btc_values) {
            return [];
        }
        return data.years.map((year, index) => ({
            year,
            standard: data.standard_values[index] || 0,
            btc: data.btc_values[index] || 0,
        }));
    }, [data]);

    if (chartData.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <Box
            sx={{
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                padding: '16px',
                background: '#FFFFFF',
                width: '100%',
                height: '400px',
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
                    <Area type="monotone" dataKey="standard" stroke="#2E4E35" strokeWidth={2} fill="url(#colorStandard)" />
                    <Area type="monotone" dataKey="btc" stroke="#F1B314" strokeWidth={2} fill="url(#colorBTC)" />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default DualAreaChart;
