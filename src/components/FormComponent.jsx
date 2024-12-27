import React, { useState } from "react";
import { TextField, Button, Typography, Grid, Paper, Box } from "@mui/material";

export const FormComponent = ({ children }) => {
  return (
    <Grid item sx={{ height: "100%" }}>
      <Paper
        elevation={3}
        sx={{
          padding: "40px",
          backgroundColor: "#E9EBE4",
          borderRadius: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {children}
      </Paper>
    </Grid>
  );
};
