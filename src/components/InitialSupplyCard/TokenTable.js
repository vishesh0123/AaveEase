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
import React, { useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { erc20ABI } from "wagmi";
import { polygonMumbai } from "../../deployedContracts";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { parseUnits } from "ethers/lib/utils.js";

function TokenTable({ state }) {
  // const { address, isConnecting, isDisconnected } = useAccount();
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState(0);

  const { config } = usePrepareContractWrite({
    address: token,
    abi: erc20ABI,
    functionName: "approve",
    args: [
      "0xF14f9596430931E177469715c591513308244e8F",
      parseUnits(amount.toString(), 18),
    ],
  });

  const { write } = useContractWrite({
    ...config,
    onSuccess(data) {
      console.log("success", data);
    },
  });

  const handleClick = (token, amount) => {
    setToken(polygonMumbai[token]);
    setAmount(amount);
  };

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
                      {row.Approval ? (
                        <></>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <CancelIcon style={{ color: "#D2122E" }} />
                          <Button
                            onClick={() => handleClick(row.Token, row.Amount)}
                          >
                            <Typography
                              style={{
                                fontFamily: "Lilita One",

                                fontSize: "0.9rem",
                                color: "#4FFFB0",
                              }}
                            >
                              Approve
                            </Typography>
                          </Button>
                        </div>
                      )}
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
