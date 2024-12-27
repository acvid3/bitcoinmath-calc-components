import React, { useState } from "react";
import { TextField, InputAdornment, Typography, Box } from "@mui/material";

const CarPriceInput = ({ label, name, value, onChange, text }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Typography
        variant="subtitle1"
        sx={{
          color: "#2E4E35",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "22px",
        }}
      >
        {label}
      </Typography>
      <TextField
        name={name}
        variant="outlined"
        value={value}
        onChange={onChange}
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            padding: "11px 10px",
            height: "38px",
            borderRadius: "16px",
            backgroundColor: "#f9f9f9",
            border: "none",
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "2px solid #2E4E35",
            },
          },
          "& .MuiInputBase-input": {
            fontWeight: "bold",
            color: "#2E7D32",
          },
        }}
      />
      <Typography
        variant="caption"
        sx={{
          width: "245px",
          color: "#2E4E35",
          fontWeight: 600,
          fontSize: "12px",
          lineHeight: "14px",
          opacity: 0.6,
          paddingX: "10px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default CarPriceInput;
