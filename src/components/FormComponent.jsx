import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";

export const FormComponent = ({ children }) => {
  return (
    <Box
      ite
      sx={{
        flex: 1,
        width: "100%",

        maxWidth: { xs: "100%", md: "325px" },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "40px",
          backgroundColor: "#E9EBE4",
          borderRadius: "30px",
          border: "1px solid #E9EBE4",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "none",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};
