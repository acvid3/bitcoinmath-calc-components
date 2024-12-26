import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ResultDashboardComponent = ({ dataResults }) => {
  console.log("data", dataResults);

  const rows = [];
  const keys = new Set([
    ...Object.keys(dataResults.tradfi),
    ...Object.keys(dataResults.btc),
  ]);

  keys.forEach((key) => {
    rows.push({
      label: key
        .replace(/_/g, " ")
        .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase()),
      tradfi:
        dataResults.tradfi[key] !== undefined ? dataResults.tradfi[key] : "",
      btc: dataResults.btc[key] !== undefined ? dataResults.btc[key] : "",
    });
  });
  console.log("res", rows);

  return (
    <>
      {rows.length > 0 &&
        rows.map(({ label, tradfi, btc }) => (
          <Typography key={label}>
            {label}: {typeof tradfi === "number" ? `$${tradfi}` : tradfi},{" "}
            {typeof btc === "number" ? `$${btc}` : btc}{" "}
          </Typography>
        ))}
      {dataResults.difference && (
        <>
          <Typography>
            Difference$ ${dataResults.difference.difference_dollar}
          </Typography>
          <Typography>
            Difference % {dataResults.difference.difference_percent}
          </Typography>
        </>
      )}
    </>
  );
};

export default ResultDashboardComponent;
