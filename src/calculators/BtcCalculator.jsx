import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";

import { FormComponent } from "../components/FormComponent";
import { ChartComponent } from "../components/ChartComponent";
import ResultDashboardComponent from "../components/ResultDashboardComponent";
import CarPriceInput from "../components/InputComponent";
import { formatNumber } from "../helpers/index.js";

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
      tradfi: formatNumber(results.tradefi[key]) ?? "",
      btc: formatNumber(results.btc[key]) ?? "",
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
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "20px",
        width: "100%",
        height: { xs: "100%", md: "720px" },
      }}
    >
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
            <Typography
              variant="subtitle1"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#2E4E35",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              Loan term <span>60</span>
            </Typography>
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

      <Box
        item
        xs={12}
        md={4}
        id="results-block"
        sx={{
          flex: 1,
          width: "100%",
          maxWidth: { xs: "100%", md: "50%" },
          height: "100%",
        }}
      >
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
      </Box>

      <Box sx={{ flex: 1, width: "100%", maxWidth: { xs: "100%", md: "50%" } }}>
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
            <ChartComponent chartData={chartData} chartSize={chartSize} />
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
              End term value
            </Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default BtcCalculator;
