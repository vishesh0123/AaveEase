import React, { useState } from "react";
import { erc20ABI } from "wagmi";
import { useAccount } from "wagmi";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { useSignTypedData } from "wagmi";
import { decimals, polygonMumbai } from "../../deployedContracts";
import { parseUnits } from "ethers/lib/utils.js";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import CircularProgress from "@mui/material/CircularProgress";
import { Button, Typography } from "@mui/material";

function TokenApproval({ id, token, amount, approval, state, setState }) {
  const [loader, setLoader] = useState(false);
  const { address, isConnecting, isDisconnected } = useAccount();
  const { config } = usePrepareContractWrite({
    address: polygonMumbai[token],
    abi: erc20ABI,
    functionName: "approve",
    args: [
      polygonMumbai[token],
      parseUnits(amount.toString(), decimals[token]),
    ],
  });

  const { write } = useContractWrite({
    ...config,
    onSuccess(data) {
      handleSuccess();
      console.log("success", data);
    },
  });

  const handleSuccess = () => {
    let data = [...state];
    data[id - 1].Approval = true;
    setState(data);
  };

  const handleClick = () => {
    if (isDisconnected === true) {
      console.log("connect wallet");
    } else {
      setLoader(true);
      write();
    }
  };

  return approval ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <CheckIcon style={{ color: "#4FFFB0" }} />
      <Typography
        style={{
          fontFamily: "Lilita One",

          fontSize: "0.9rem",
          color: "#4FFFB0",
        }}
      >
        Approved
      </Typography>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <CancelIcon style={{ color: "#D2122E" }} />
      <Button onClick={handleClick}>
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
      {loader && <CircularProgress />}
    </div>
  );
}

export default TokenApproval;
