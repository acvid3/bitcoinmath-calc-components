import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import ChartLabels from '../ChartLabels';
import { useResult } from '../../context/ResultContext';

const FinancialChart = ({ chartSize }) => {
    const { results } = useResult();

    const chartItems = [
        { label: 'Tradfi', color: '#2E4E35' },
        { label: 'BTC', color: '#F1B314' },
    ];

    const chartData = [
        {
            name: 'Net Value',
            Tradfi: results?.tradfi?.net_value || 0,
            BTC: results?.btc?.net_value || 0,
        },
    ];

    const formatYAxis = (value) => `$${value.toLocaleString()}`;

    return (
        <>
            <ChartLabels items={chartItems}/>
            <BarChart width={chartSize.width} height={chartSize.height} data={chartData}>
                <defs>
                    <linearGradient id="colorTradfi" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2E4E3566" stopOpacity={1} />
                        <stop offset="100%" stopColor="#FFFFFF66" stopOpacity={1} />
                    </linearGradient>

                    <linearGradient id="colorBTC" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F1B31466" stopOpacity={1} />
                        <stop offset="100%" stopColor="#FFFFFF66" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <CartesianGrid horizontal={true} vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} tickFormatter={formatYAxis} width={80} />
                <Tooltip />
                <Bar
                    dataKey="Tradfi"
                    fill="url(#colorTradfi)"
                    radius={[10, 10, 0, 0]}
                    label={{
                        position: 'top',
                        formatter: (value) => `$${value.toLocaleString()}`,
                        fontSize: 12,
                        fill: '#2E4E35',
                    }}
                />
                <Bar
                    dataKey="BTC"
                    fill="url(#colorBTC)"
                    radius={[10, 10, 0, 0]}
                    label={{
                        position: 'top',
                        formatter: (value) => `$${value.toLocaleString()}`,
                        fontSize: 12,
                        fill: '#F1B314',
                    }}
                />
            </BarChart>
        </>
    );
};

export default FinancialChart;
