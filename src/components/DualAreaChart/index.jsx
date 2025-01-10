import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Box } from '@mui/material';
import {useResult} from "../../context/ResultContext";

const DualAreaChart = () => {
    const { results } = useResult();

    const resultData = {
        standard_values: results?.yearly_total_savings,
        btc_values: results?.yearly_total_btc_value,
    }

    console.log("results: ", resultData);

    const chartData = useMemo(() => {

        if (!resultData || !resultData.standard_values || !resultData.btc_values) {
            return [];
        }

        // return resultData.standard_values.map((value, index) => ({
        //     year: value.year || 0,
        //     standard: resultData.standard_values[index]?.investment || 0,
        //     btc: resultData.btc_values[index]?.investment || 0,
        // }));

        return Object.entries(resultData.standard_values).map(([key, value], index) => ({
            year: key || 0,
            standard: value || 0,
            btc: resultData.btc_values[key] || 0,
        }));
    }, [results]);

    if (chartData.length === 0) {
        return <div>No data available</div>;
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
                    <Area type="monotone" dataKey="standard" stroke="#2E4E35" strokeWidth={2} fill="url(#colorStandard)" />
                    <Area type="monotone" dataKey="btc" stroke="#F1B314" strokeWidth={2} fill="url(#colorBTC)" />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default DualAreaChart;