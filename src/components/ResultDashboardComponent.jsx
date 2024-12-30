import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { formatNumber } from "../helpers/index.js/js";

const StyledRow = styled(TableRow)({
  "&:not(:last-child) td": {
    borderBottom: "10px solid transparent",
  },
});

const StyledCell = styled(TableCell)(
  ({ fontWeight, fontSize, lineHeight, ...otherProps }) => ({
    padding: "4px",
    border: "none",
    fontWeight: fontWeight || 600,
    fontSize: fontSize || "14px",
    lineHeight: lineHeight || "normal",
    color: "#2E4E35",
    ...otherProps,
  })
);

const ResultDashboardComponent = ({ dataResults, difference }) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <StyledRow>
            <StyledCell />
            <StyledCell opacity="60%" align="center">
              Tradefi
            </StyledCell>
            <StyledCell opacity="60%" align="center">
              Bitcoin
            </StyledCell>
          </StyledRow>

          {dataResults.map(({ label, tradefi, btc }) => (
            <StyledRow key={label}>
              <StyledCell>{label}</StyledCell>
              <StyledCell align="center">{tradefi}</StyledCell>
              <StyledCell align="center">{btc}</StyledCell>
            </StyledRow>
          ))}

          {difference && (
            <>
              <StyledRow>
                <StyledCell height="10px"></StyledCell>
              </StyledRow>
              <StyledRow>
                <StyledCell fontWeight={700} fontSize="16px">
                  Difference $
                </StyledCell>
                <StyledCell></StyledCell>
                <StyledCell
                  colSpan={2}
                  align="center"
                  fontWeight={700}
                  fontSize="16px"
                >
                  ${formatNumber(difference.difference_dollar)}
                </StyledCell>
              </StyledRow>

              <StyledRow>
                <StyledCell fontWeight={700} fontSize="16px">
                  Difference %
                </StyledCell>
                <StyledCell></StyledCell>
                <StyledCell
                  colSpan={2}
                  align="center"
                  fontWeight={700}
                  fontSize="16px"
                >
                  {difference.difference_percent}
                </StyledCell>
              </StyledRow>
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultDashboardComponent;
