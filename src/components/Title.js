import { Typography } from "@mui/material";
import React from "react";

function Title() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 0px 40px 20px #00000",
        padding: "40px",
        borderRadius: "10px",
      }}
    >
      <Typography
        align="center"
        style={{
          fontWeight: "700",
          marginTop: "20px",
          color: "transparent",
          backgroundImage:
            "linear-gradient(90.18deg,#ff026c 12.46%,#6b13ff 49.25%,#1e4fff 88.27%)",
          WebkitBackgroundClip: "text",
          fontSize: "5rem",
          fontFamily: "Lilita One",
        }}
      >
        AaveEase
      </Typography>
      <Typography
        align="center"
        style={{
          fontWeight: "500",
          marginTop: "10px",
          color: "transparent",
          backgroundImage:
            "linear-gradient(90.18deg,#ff026c 12.46%,#6b13ff 49.25%,#1e4fff 88.27%)",
          WebkitBackgroundClip: "text",
          fontSize: "3rem",
          fontFamily: "Lilita One",
        }}
      >
        Streamlining Your Aave Experience
      </Typography>
      <Typography
        style={{
          color: "#e5b8ff",
          textAlign: "center",
          fontWeight: "300",
          fontSize: "1.5rem",
          marginTop: "20px",
          fontFamily: "Lilita One",
        }}
      >
        Powerful tool for optimizing Aave transactions through innovative batch
        and migration features.
      </Typography>
    </div>
  );
}

export default Title;
