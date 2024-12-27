import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";

const ResultDashboardComponent = ({ dataResults, difference }) => {
  console.log(difference);

  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell />
            <TableCell
              align="right"
              sx={{ fontWeight: "bold", color: "#3c6e47" }}
            >
              Tradfi
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: "bold", color: "#f4a261" }}
            >
              Bitcoin
            </TableCell>
          </TableRow>
          {dataResults.map(({ label, tradfi, btc }) => (
            <TableRow key={label}>
              <TableCell>{label}</TableCell>
              <TableCell align="right">{tradfi}</TableCell>
              <TableCell align="right">{btc}</TableCell>
            </TableRow>
          ))}
          {difference && (
            <>
              <TableRow>
                <TableCell>Difference ($)</TableCell>
                <TableCell colSpan={2} align="right">
                  {difference.difference_dollar}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Difference (%)</TableCell>
                <TableCell colSpan={2} align="right">
                  {difference.difference_percent}
                </TableCell>
              </TableRow>
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultDashboardComponent;
