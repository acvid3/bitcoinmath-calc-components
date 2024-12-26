import React, { useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

import { FormComponent } from "./FormComponent";
import { ChartComponent } from "./ChartComponent";
import ResultDashboardComponent from "./ResultDashboardComponent";

const BtcCalculator = ({ calculateHandler, inputData }) => {
  const [results, setResults] = useState(null);

  const chartData = results
    ? [
        {
          Tradfi: results.btc.end_term_value,
          BTC: results.tradfi.end_term_value,
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
              <ResultDashboardComponent dataResults={results} />
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
