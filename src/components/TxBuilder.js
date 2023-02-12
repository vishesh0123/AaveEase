import React from "react";
import { Grid, Typography } from "@mui/material";
import InitialSupplyCard from "./InitialSupplyCard";

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
      }}
    >
      <Typography
        style={{
          fontFamily: "Lilita One",
          fontWeight: "30",
          fontSize: "1.1rem",
          color: "white",
          textTransform: "none",
          transform: "rotate(270deg)",
        }}
      >
        Create a Transaction
      </Typography>
      <div>
        <Grid
          container
          spacing={3}
          style={{
            display: "grid",
            gridAutoFlow: "column",
            height: "350px",
            maxWidth: "1230px",
            overflowX: "auto",
            marginTop: "20px",
          }}
        >
          <Grid item>
            <InitialSupplyCard />
          </Grid>
          <Grid item>
            <InitialSupplyCard />
          </Grid>
          <Grid item>
            <InitialSupplyCard />
          </Grid>
          <Grid item>
            <InitialSupplyCard />
          </Grid>
          <Grid item>
            <InitialSupplyCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default TxBuilder;
