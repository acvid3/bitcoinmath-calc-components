import React from "react";
import {
  BarChart,
  AreaChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const ChartComponent = ({ chartData, type = "bar" }) => {
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
  return (
    <>
      {type === "bar" ? (
        <BarChart
          width={400}
          height={600}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorTradfi" x1="0" y1="0" x2="0" y2="1">
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
          <Legend />
          <Bar
            dataKey="Tradfi"
            fill="url(#colorTradfi)"
            stroke="#b0bcb2"
            radius={[10, 10, 0, 0]}
            barSize={50}
            label={{ position: "top" }}
          />
          <Bar
            dataKey="BTC"
            fill="url(#colorBTC)"
            stroke="#fae1a4"
            radius={[10, 10, 0, 0]}
            barSize={50}
            label={{ position: "top" }}
            fillOpacity={1}
          />
        </BarChart>
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
            <linearGradient id="colorTradfi" x1="0" y1="0" x2="0" y2="1">
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
            fill="url(#colorTradfi)"
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
