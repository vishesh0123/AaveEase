import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

import TokenApproval from "./TokenApproval";

function TokenTable({ state, setState }) {
  return (
    <div>
      <TableContainer component={Paper} style={{ marginTop: "30px" }}>
        <Table
          sx={{
            minWidth: 300,
            backgroundColor: "rgb(42, 46, 63)",
            border: "2px solid #e5b8ff",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  style={{
                    fontFamily: "Lilita One",
                    fontWeight: "30",
                    fontSize: "1rem",
                    marginLeft: "10px",
                    color: "#e5b8ff",
                  }}
                >
                  ID
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  style={{
                    fontFamily: "Lilita One",
                    fontWeight: "30",
                    fontSize: "1rem",
                    marginLeft: "10px",
                    color: "#e5b8ff",
                  }}
                >
                  TOKEN
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  style={{
                    fontFamily: "Lilita One",
                    fontWeight: "30",
                    fontSize: "1rem",
                    marginLeft: "10px",
                    color: "#e5b8ff",
                  }}
                >
                  AMOUNT
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  style={{
                    fontFamily: "Lilita One",
                    fontWeight: "30",
                    fontSize: "1rem",
                    marginLeft: "10px",
                    color: "#e5b8ff",
                  }}
                >
                  APPROVAL
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((row) => {
              return (
                <TableRow key={row.Id}>
                  <TableCell>
                    <Typography
                      style={{
                        fontFamily: "Lilita One",
                        fontWeight: "30",
                        fontSize: "1rem",
                        marginLeft: "10px",
                        color: "white",
                      }}
                    >
                      {row.Id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      style={{
                        fontFamily: "Lilita One",
                        fontWeight: "30",
                        fontSize: "1rem",
                        marginLeft: "10px",
                        color: "white",
                      }}
                    >
                      {row.Token}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      style={{
                        fontFamily: "Lilita One",
                        fontWeight: "30",
                        fontSize: "1rem",
                        marginLeft: "10px",
                        color: "white",
                      }}
                    >
                      {row.Amount}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      style={{
                        fontFamily: "Lilita One",
                        fontWeight: "30",
                        fontSize: "1rem",
                        marginLeft: "10px",
                        color: "white",
                      }}
                    >
                      <TokenApproval
                        id={row.Id}
                        token={row.Token}
                        amount={row.Amount}
                        approval={row.Approval}
                        state={state}
                        setState={setState}
                      />
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TokenTable;
