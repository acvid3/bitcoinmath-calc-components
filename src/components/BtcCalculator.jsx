import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

import { FormComponent } from "./FormComponent";
import { ChartComponent } from "./ChartComponent";
import ResultDashboardComponent from "./ResultDashboardComponent";

const BtcCalculator = ({ calculateHandler, inputData }) => {
  const [results, setResults] = useState(null);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (!results) return;
    setTableData([]);
    const keys = new Set([
      ...Object.keys(results.tradfi),
      ...Object.keys(results.btc),
    ]);

    keys.forEach((key) => {
      setTableData((prevData) => [
        ...prevData,
        {
          label: key
            .replace(/_/g, " ")
            .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase()),
          tradfi: results.tradfi[key] !== undefined ? results.tradfi[key] : "",
          btc: results.btc[key] !== undefined ? results.btc[key] : "",
        },
      ]);
    });
  }, [results]);
  console.log(results);

  const chartData = results
    ? [
        {
          Tradfi: results.tradfi.end_term_value,
          BTC: results.btc.end_term_value,
        },
      ]
    : [];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Bitcoin Auto Purchase Calculator
      </Typography>

      <Grid container spacing={4}>
        <FormComponent
          inputData={inputData}
          setResultsData={setResults}
          calculateHandler={calculateHandler}
        />
        <Grid item xs={12} md={4}>
          {results && (
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Results
              </Typography>
              <ResultDashboardComponent
                dataResults={tableData}
                difference={results.difference}
              />
            </Paper>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          {results && (
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Chart
              </Typography>
              <ChartComponent chartData={chartData} />
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BtcCalculator;
