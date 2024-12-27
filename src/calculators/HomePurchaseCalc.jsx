import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";

import { FormComponent } from "../components/FormComponent";
import { ChartComponent } from "../components/ChartComponent";
import ResultDashboardComponent from "../components/ResultDashboardComponent";
import CarPriceInput from "../components/InputComponent";

const HomePurchaseCalc = ({ calculateHandler, inputFieldsData }) => {
  const [results, setResults] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState(
    inputFieldsData.reduce(
      (acc, item) => {
        acc[item.key] = item.value;
        return acc;
      },
      { loan_term: 60 }
    )
  );

  useEffect(() => {
    if (!results) return;
    setTableData([]);
    console.log("res", results);

    const keys = new Set([
      ...Object.keys(results.tradefi),
      ...Object.keys(results.btc),
    ]);

    keys.forEach((key) => {
      setTableData((prevData) => [
        ...prevData,
        {
          label: key
            .replace(/_/g, " ")
            .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase()),
          tradefi:
            results.tradefi[key] !== undefined ? results.tradefi[key] : "",
          btc: results.btc[key] !== undefined ? results.btc[key] : "",
        },
      ]);
    });
  }, [results]);

  const chartData = results
    ? [
        {
          Tradefi: results.tradefi.end_term_value || 0,
          BTC: results.btc.end_term_value || 0,
        },
      ]
    : [];
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parseFloat(value) || "",
    }));
  };
  const handleCalculate = async () => {
    const result = await calculateHandler(formData);

    setResults(result);
  };
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        <FormComponent
          inputFieldsData={inputFieldsData}
          handleChange={handleChange}
          formData={formData}
          handleCalculate={handleCalculate}
        >
          {inputFieldsData && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {inputFieldsData.map(({ key, label, text }) => (
                <CarPriceInput
                  key={key}
                  label={label}
                  name={key}
                  text={text}
                  value={formData[key]}
                  onChange={handleChange}
                />
              ))}
            </Box>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleCalculate}
            sx={{
              marginTop: 2,
              backgroundColor: "#3c6e47",
              borderRadius: "30px",
            }}
          >
            Calculate
          </Button>
        </FormComponent>
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

export default HomePurchaseCalc;
