import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";

import { FormComponent } from "../components/FormComponent";
import { ChartComponent } from "../components/ChartComponent";
import ResultDashboardComponent from "../components/ResultDashboardComponent";
import CarPriceInput from "../components/InputComponent";

const formatNumberWithCommas = (value) => {
  if (!value) return "";
  const numericValue = value.replace(/,/g, "");
  if (isNaN(numericValue)) return value;
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const BtcCalculator = ({ calculateHandler, inputFieldsData, initResponse }) => {
  const [results, setResults] = useState(initResponse);
  const [chartSize, setChartSize] = useState({ h: 200, w: 200 });
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
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
    const resultsElement = document.getElementById("results-block");

    if (resultsElement) {
      setChartSize({
        h: resultsElement.offsetHeight,
        w: resultsElement.offsetWidth,
      });
    }
    setTableData([]);
    console.log("res", results);

    const keys = new Set([
      ...Object.keys(results.tradefi),
      ...Object.keys(results.btc),
    ]);

    const newTableData = Array.from(keys).map((key) => ({
      label: key
        .replace(/_/g, " ")
        .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase()),
      tradefi: results.tradefi[key] ?? "",
      btc: results.btc[key] ?? "",
    }));
    setTableData(newTableData);
  }, [results]);

  const chartData = results
    ? [
        {
          name: "End term value",
          Tradefi: results.tradefi.end_term_value || 0,
          BTC: results.btc.end_term_value || 0,
        },
      ]
    : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const clearValue = value.replace(/[$%]/g, "");
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parseFloat(clearValue) || "",
    }));
    console.log(value);
    console.log(formData);
  };

  const handleCalculate = async () => {
    setLoading(true);
    const result = await calculateHandler(formData);

    setResults(result);
    setLoading(false);
  };
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4} sx={{ height: "750px" }}>
        <FormComponent
          handleChange={handleChange}
          formData={formData}
          handleCalculate={handleCalculate}
        >
          {inputFieldsData && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {inputFieldsData.map(({ key, label, text, unit }) => (
                <CarPriceInput
                  key={key}
                  label={label}
                  name={key}
                  value={formData[key]}
                  text={text}
                  onChange={handleChange}
                  unit={unit}
                />
              ))}
            </Box>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleCalculate}
            disabled={loading}
            sx={{
              marginTop: 2,
              backgroundColor: "#3c6e47",
              borderRadius: "30px",
            }}
          >
            Calculate
          </Button>
        </FormComponent>

        <Grid item xs={12} md={4} sx={{ height: "750px" }} id="results-block">
          {results && (
            <Paper
              elevation={3}
              sx={{
                padding: "40px",
                borderRadius: "30px",
                height: "100%",
                boxShadow: "none",
                border: "1px solid #E9EBE4",
                boxShadow: "none",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "23.48px",
                  marginBottom: "40px",
                }}
              >
                Results
              </Typography>
              <ResultDashboardComponent
                dataResults={tableData}
                difference={results.difference}
              />
            </Paper>
          )}
        </Grid>

        <Grid item xs={12} md={4} sx={{ height: "750px" }}>
          {results && (
            <Paper
              elevation={3}
              sx={{
                padding: "40px",
                borderRadius: "30px",
                height: "100%",
                boxShadow: "none",
                border: "1px solid #E9EBE4",
                boxShadow: "none",
              }}
            >
              <ChartComponent
                chartData={chartData}
                chartSize={chartSize}
                title="End term value"
              />
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BtcCalculator;
