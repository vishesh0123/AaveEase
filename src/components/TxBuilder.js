import React from "react";
import { Grid, Typography } from "@mui/material";
import InitialSupplyCard from "./InitialSupplyCard";
import SupplyToAaveCard from "./SupplyToAaveCard";
import BorrowFromAaveCard from "./BorrowFromAaveCard";
import WithdrawFromAaveCard from "./WithdrawFromAaveCard";
import RepayAaveCard from "./RepayAaveCard";
import FlashloanAaveCard from "./FlashloanAaveCard";
import MigratePositionsCard from "./MigratePositionsCard";

function TxBuilder({ state, changeState }) {
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
          {state.map((key, index) => {
            switch (key) {
              case 1:
                return (
                  <Grid item>
                    <SupplyToAaveCard id={index + 2} />
                  </Grid>
                );
              case 2:
                return (
                  <Grid item>
                    <BorrowFromAaveCard id={index + 2} />
                  </Grid>
                );
              case 3:
                return (
                  <Grid item>
                    <WithdrawFromAaveCard id={index + 2} />
                  </Grid>
                );
              case 4:
                return (
                  <Grid item>
                    <RepayAaveCard id={index + 2} />
                  </Grid>
                );
              case 5:
                return (
                  <Grid item>
                    <FlashloanAaveCard id={index + 2} />
                  </Grid>
                );
              case 7:
                return (
                  <Grid item>
                    <MigratePositionsCard id={index + 2} />
                  </Grid>
                );

              default:
                return <></>;
            }
          })}
        </Grid>
      </div>
    </div>
  );
}

export default TxBuilder;
