import React from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { parseUnits } from "ethers/lib/utils.js";
import { erc20ABI } from "wagmi";

function ApproveToken({ id, token, amount, state, changeState }) {
  const { config } = usePrepareContractWrite({
    address: token,
    abi: erc20ABI,
    functionName: "approve",
    args: [parseUnits(amount.toString(), 18)],
  });

  const { write } = useContractWrite({
    ...config,
    onSuccess(data) {
      console.log("success", data);
    },
  });

  const change = () => {
    changeState({ ...state, [id]: write });
  };

  return change();
}

export default ApproveToken;
