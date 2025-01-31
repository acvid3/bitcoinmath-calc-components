import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Rectangle} from 'recharts';
import ChartLabels from '../ChartLabels';
import {useResult} from '../../context/ResultContext';


const CustomLabel = ({ x, y, width, value }) => {
    const centerX = x + width / 2;
    const centerY = y + 55;

    return (
        <g transform={`translate(${centerX}, ${centerY})`} textAnchor="middle">
            <text
                fontSize="14"
                fill="#2E4E35"
                fontWeight="600"
                fontFamily="Raleway"
            >
                ${value.toLocaleString()}
            </text>
            <svg x="-10" y='10' width="24" height="32" viewBox="0 0 24 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.3118 15.3155C18.9306 15.528 19.5433 15.7156 20.1309 15.9531C22.6564 16.9658 24.0817 19.7601 23.469 22.4106C22.8877 24.9111 21.2499 26.4239 18.9181 27.2991C18.5306 27.4429 18.1305 27.5554 17.7179 27.6367C17.4429 27.6929 17.3553 27.7992 17.3616 28.0805C17.3803 29.1995 17.3741 30.3247 17.3741 31.4436V31.4499C17.3741 31.7562 17.1303 32 16.824 32H13.8422C13.5358 32 13.292 31.7562 13.292 31.4499V28.0742H10.6915V31.4499C10.6915 31.7562 10.4477 32 10.1414 32H7.13459C6.82828 32 6.58449 31.7562 6.58449 31.4499V28.068H1.20844C0.752097 28.068 0.389526 27.6992 0.389526 27.2491C0.389526 27.2491 0.389526 27.2491 0.389526 27.2428V25.5425C0.389526 25.0924 0.752097 24.7298 1.20219 24.7236H1.20844C1.47099 24.7173 1.73979 24.7111 2.00234 24.6861C2.80875 24.6173 3.16507 24.2672 3.17757 23.4546C3.20258 21.8918 3.20258 20.329 3.20883 18.7662C3.21508 15.7781 3.21508 12.7962 3.20883 9.80817C3.20883 9.36433 3.20258 8.92674 3.17757 8.48916C3.12756 7.72026 2.75874 7.36394 1.97734 7.32018C1.71478 7.30768 1.45223 7.28892 1.18343 7.28267H1.17718C0.745846 7.27642 0.402029 6.9201 0.395777 6.49502V4.76343C0.395777 4.31959 0.752097 3.96327 1.19593 3.96327H6.57824V0.400078C6.57824 0.181285 6.75952 0 6.97831 0.00625122H10.2665C10.4852 0.00625122 10.6665 0.187537 10.6665 0.406329V3.92577H13.2858V0.400078C13.2858 0.181285 13.4608 0 13.6859 0H16.9865C17.2053 0 17.3803 0.175034 17.3803 0.393827V0.400078C17.3803 1.55655 17.3928 2.71928 17.3803 3.87576C17.3741 4.16956 17.4804 4.26958 17.7492 4.31959C18.9181 4.53839 20.0121 5.06349 20.906 5.85114C23.2377 7.87654 23.3503 11.4585 21.1186 13.6027C20.7185 13.984 20.2747 14.3153 19.7996 14.6029C19.3307 14.8779 18.8181 15.0717 18.3118 15.3155ZM9.17249 17.2409V18.7349C9.17874 20.2352 9.17249 21.7292 9.20375 23.2295C9.2225 24.0484 9.39128 24.1797 10.2102 24.1922C10.9791 24.1985 11.748 24.2297 12.5106 24.1922C13.2858 24.1485 14.0734 24.0985 14.8298 23.9234C16.3364 23.5734 17.3178 22.2231 17.3366 20.604C17.3553 19.0162 16.5552 17.941 14.9299 17.5284C13.0545 17.0533 11.1291 17.3096 9.17249 17.2409ZM9.19125 13.7152C9.58507 13.7152 9.94764 13.7277 10.3102 13.7152C11.6042 13.6589 12.8982 13.6339 14.1922 13.5276C14.9611 13.4776 15.6738 13.1213 16.1864 12.5525C16.9428 11.696 17.0615 10.7021 16.6865 9.65189C16.3114 8.60168 15.48 8.10158 14.436 8.01407C13.0608 7.90154 11.673 7.88904 10.2915 7.84528C9.92889 7.83278 9.57257 7.84528 9.19125 7.84528V13.7152Z"
                    fill="#FFC122"/>
            </svg>
        </g>
    );
};


const FinancialChart = ({chartSize}) => {
    const {results} = useResult();

    const chartItems = [
        {label: 'Selling', color: '#2E4E35'},
        {label: 'Borrowing', color: '#F1B314'},
    ];

    const chartData = [
        {
            name: 'End of term value',
            selling: results?.selling?.end_of_term_value || 0,
            borrowing: results?.borrowing?.end_of_term_value || 0,
        },
    ];
    console.log("chart data: ", chartData);

    const formatYAxis = (value) => `$${value.toLocaleString()}`;

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
                    dataKey="selling"
                    fill="url(#colorTradfi)"
                    radius={[10, 10, 0, 0]}
                    label={{
                        position: 'insideTop',
                        offset: 45,
                        color: '#2E4E35',
                        formatter: (value) => `$${value.toLocaleString()}`,
                        fontSize: 14,
                        fill: '#2E4E35',
                        fontWeight: '600',
                        fontFamily: 'Raleway',
                    }}
                    // shape={(props) => (
                    //     <Rectangle
                    //         {...props}
                    //         stroke="#2E4E35"
                    //         strokeWidth={1}
                    //         clipPath="url(#no-bottom-border)"
                    //     />
                    // )}
                />
                <Bar
                    dataKey="borrowing"
                    fill="url(#colorBTC)"
                    radius={[10, 10, 0, 0]}
                    label={<CustomLabel />}
                />
            </BarChart>
        </>
    );
};

export default FinancialChart;
