import React, { useState } from "react";
import { TextField, Button, Typography, Grid, Paper, Box } from "@mui/material";

export const FormComponent = ({ children }) => {
  return (
    <Grid item sx={{ height: "750px" }}>
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
    </Grid>
  );
};
