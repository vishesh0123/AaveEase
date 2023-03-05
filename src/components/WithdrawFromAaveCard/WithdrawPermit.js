import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import CircularProgress from "@mui/material/CircularProgress";
import { Button, Typography } from "@mui/material";
import { useAccount } from "wagmi";
import { decimals, polygonMumbai } from "../../deployedContracts";
import { useSignTypedData } from "wagmi";
import { parseUnits } from "ethers/lib/utils.js";
import { fromRpcSig } from "ethereumjs-util";

function WithdrawPermit({ id, token, amount, permit, state, setState }) {
  const [loader, setLoader] = useState(false);
  const { address, isDisconnected } = useAccount();

  const { signTypedData } = useSignTypedData({
    domain: {
      name: `a${token}`,
      version: "1",
      chainId: 80001,
      verifyingContract: polygonMumbai[`a${token}`],
    },
    types: {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
      ],
      Permit: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
        { name: "value", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "deadline", type: "uint256" },
      ],
    },
    value: {
      owner: address,
      spender: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
      value: parseUnits(amount.toString(), decimals[token]),
      nonce: 1,
      deadline: 100000000000000,
    },
    onSuccess(data) {
      handleSuccess(data);
    },
  });

  const handleSuccess = (sig) => {
    const { v, r, s } = fromRpcSig(sig);
    let data = [...state];
    data[id - 1].Permit = true;
    data[id - 1].V = v;
    data[id - 1].R = r;
    data[id - 1].S = s;
    setState(data);
  };

  const handleClick = async () => {
    if (isDisconnected === true) {
      console.log("connect wallet");
    } else {
      setLoader(true);
      signTypedData();
    }
  };
  console.log(state);
  return permit ? (
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

export default WithdrawPermit;
