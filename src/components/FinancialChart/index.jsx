import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import ChartLabels from '../ChartLabels';
import {useResult} from '../../context/ResultContext';
import {CustomLabel, CustomShape, CustomShapeBTC} from "../ChartUtils";

const FinancialChart = ({chartSize}) => {
    const {results} = useResult();

    const chartItems = [
        {label: 'Tradfi', color: '#2E4E35'},
        {label: 'BTC', color: '#F1B314'},
    ];

    const chartData = [
        {
            name: 'End Term Value',
            Tradfi: results?.tradefi?.end_term_value || 0,
            BTC: results?.btc?.end_term_value || 0,
        },
    ];

    const formatYAxis = (value) => `$${value?.toLocaleString('en-US')}`;

    return (
        <>
            <ChartLabels items={chartItems}/>
            <BarChart width={chartSize.width} height={chartSize.height} data={chartData}>
                <defs>
                    <linearGradient id="colorTradfi" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2E4E3566" stopOpacity={1}/>
                        <stop offset="100%" stopColor="#FFFFFF66" stopOpacity={1}/>
                    </linearGradient>

                    <linearGradient id="colorBTC" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F1B31466" stopOpacity={1}/>
                        <stop offset="100%" stopColor="#FFFFFF66" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <CartesianGrid horizontal={true} vertical={false}/>
                <XAxis dataKey="name" tickLine={false} axisLine={false}/>
                <YAxis tickLine={false} axisLine={false} tickFormatter={formatYAxis} width={80}/>
                <Tooltip/>
                <Bar
                    dataKey="Tradfi"
                    fill="url(#colorTradfi)"
                    radius={[10, 10, 0, 0]}
                    label={{
                        position: 'insideTop',
                        offset: 45,
                        color: '#2E4E35',
                        formatter: (value) => `$${value?.toLocaleString('en-US')}`,
                        fontSize: 14,
                        fill: '#2E4E35',
                        fontWeight: '600',
                        fontFamily: 'Raleway',
                    }}
                    shape={<CustomShape />}
                />
                <Bar
                    dataKey="BTC"
                    fill="url(#colorBTC)"
                    radius={[10, 10, 0, 0]}
                    label={<CustomLabel />}
                    shape={<CustomShapeBTC />}
                />
            </BarChart>
        </>
    );
};

export default FinancialChart;
