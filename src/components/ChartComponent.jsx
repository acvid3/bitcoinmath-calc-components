import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  BarChart,
  AreaChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const RenderLegend = ({ value, color }) => {
  return (
    <span
      style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
    >
      <span
        style={{
          display: "inline-block",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: color,
          marginRight: "5px",
        }}
      ></span>
      {value}
    </span>
  );
};

export const ChartComponent = ({
  chartData,
  type = "bar",
  chartSize,
  title,
}) => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const formatYAxis = (value) => `$${value}`;

  console.log(chartSize);

  if (chartSize.h < 300) chartSize.h = 400;

  return (
    <>
      {type === "bar" ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <RenderLegend value="Tradfo" color="#2E4E35" />
            <RenderLegend value="BTC" color="#F1B314" />
          </Box>

          <BarChart
            width={chartSize.w - 80}
            height={chartSize.h - 80}
            data={chartData}
          >
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
            <CartesianGrid
              horizontal={true}
              vertical={false}
              strokeDasharray=""
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={formatYAxis}
              tick={{ fill: "#2E4E35" }}
            />
            {/* <Legend verticalAlign="top" height={36} /> */}
            <Bar
              dataKey="Tradefi"
              fill="url(#colorTradefi)"
              stroke="#2E4E35"
              radius={[10, 10, 0, 0]}
              barSize={100}
              label={{
                position: "top",
                fill: "#2E4E35",
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
                position: "top",
                fill: "#2E4E35",
                fontSize: 14,
                formatter: formatYAxis,
              }}
            />
          </BarChart>
          <Typography
            variant="h6"
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "18px",
              margin: "0px",
              textAlign: "center",
              color: "#2E4E35",
              marginTop: "20px",
            }}
          >
            {title}
          </Typography>
        </>
      ) : (
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorTradefi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#b0bcb2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#b0bcb2" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorBTC" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fae1a4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#fae1a4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            fill="url(#colorTradefi)"
            stroke="#b0bcb2"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            fill="url(#colorBTC)"
            stroke="#fae1a4"
          />
        </AreaChart>
      )}
    </>
  );
};
