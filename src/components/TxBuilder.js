import React from "react";
import { Grid, Typography } from "@mui/material";
import InitialSupplyCard from "./InitialSupplyCard";
import SupplyToAaveCard from "./SupplyToAaveCard";
import BorrowFromAaveCard from "./BorrowFromAaveCard";
import WithdrawFromAaveCard from "./WithdrawFromAaveCard";
import RepayAaveCard from "./RepayAaveCard";
import FlashloanAaveCard from "./FlashloanAaveCard";
import MigratePositionsCard from "./MigratePositionsCard";

function TxBuilder() {
  return (
    <div
      style={{
        marginTop: "5px",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        boxSizing: "border-box",
        flexDirection: "row",
        height: "400px",
        justifyContent: "flex-start",
      }}
    >
      <Typography
        style={{
          fontFamily: "Lilita One",
          fontSize: "1.005rem",
          color: "white",
          transform: "rotate(270deg)",
        }}
      >
        TRANSACTION FLOW
      </Typography>
      <div>
        <Grid
          container
          spacing={3}
          style={{
            display: "grid",
            gridAutoFlow: "column",
            height: "360px",
            maxWidth: "1230px",
            overflowX: "auto",
            marginTop: "10px",
          }}
        >
          <Grid item>
            <InitialSupplyCard />
          </Grid>
          <Grid item>
            <SupplyToAaveCard />
          </Grid>
          <Grid item>
            <BorrowFromAaveCard />
          </Grid>
          <Grid item>
            <WithdrawFromAaveCard />
          </Grid>
          <Grid item>
            <RepayAaveCard />
          </Grid>
          <Grid item>
            <FlashloanAaveCard />
          </Grid>
          <Grid item>
            <MigratePositionsCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default TxBuilder;
