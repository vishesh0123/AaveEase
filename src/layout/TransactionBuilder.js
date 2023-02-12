import React, { useState } from "react";
import BuildTransaction from "../components/BuildTransaction";
import Header from "../components/Header";
import SelectActions from "../components/SelectActions";
import TxBuilder from "../components/TxBuilder";

function TransactionBuilder() {
  const [appState, setState] = useState([]);
  return (
    <>
      <Header />
      <SelectActions />
      <TxBuilder />
      <BuildTransaction />
    </>
  );
}

export default TransactionBuilder;
