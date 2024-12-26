import React, { useState } from "react";
import { TextField, Button, Typography, Grid, Paper } from "@mui/material";

export const FormComponent = ({
  inputData,
  setResultsData,
  calculateHandler,
}) => {
  const initialFormData = inputData.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parseFloat(value) || "",
    }));
  };

  const handleCalculate = async () => {
    const result = await calculateHandler(formData);
    setResultsData(result);
  };
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Input Parameters
        </Typography>
        {inputData && (
          <>
            {inputData.map(({ key, label }) => (
              <TextField
                key={key}
                fullWidth
                label={label}
                name={key}
                type="number"
                value={formData[key] || ""}
                onChange={handleChange}
                margin="normal"
              />
            ))}
          </>
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleCalculate}
          sx={{ marginTop: 2 }}
        >
          Calculate
        </Button>
      </Paper>
    </Grid>
  );
};
