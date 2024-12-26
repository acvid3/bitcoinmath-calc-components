import { Typography } from "@mui/material";
import React from "react";

const ResultDashboardComponent = ({ results }) => {
  return (
    <>
      {Object.entries(results).map(([key, value]) => {
        const formattedKey = key
          .replace(/_/g, " ")
          .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());

        return (
          <Typography key={key}>
            {formattedKey}: {typeof value === "number" ? `$${value}` : value}
          </Typography>
        );
      })}
    </>
  );
};

export default ResultDashboardComponent;
