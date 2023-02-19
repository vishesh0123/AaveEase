import { Button, Typography } from "@mui/material";
import React from "react";

function BuildTransaction() {
  return (
    <div style={{ margin: "10px", display: "flex", justifyContent: "center" }}>
      <Button style={{ border: "1px solid white" }}>
        <Typography
          style={{
            fontFamily: "Lilita One",
            fontWeight: "50",
            fontSize: "1.5rem",
            color: "white",
            textTransform: "none",
          }}
        >
          Build Transaction
        </Typography>
      </Button>
    </div>
  );
}

export default BuildTransaction;
