import React, { useState } from "react";

import LaunchButtons from "./components/LaunchButton";
import Title from "./components/Title";
import TransactionBuilder from "./layout/TransactionBuilder";

function LandingPage({ change }) {
  const [state, setState] = useState(false);
  return (
    <>
      {state ? (
        <TransactionBuilder />
      ) : (
        <>
          <Title />
          <LaunchButtons change={setState} />
        </>
      )}
    </>
  );
}

export default LandingPage;
