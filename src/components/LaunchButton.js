import React from "react";
import { Button, Typography } from "@mui/material";

function LaunchButtons({ change }) {
  const handleClick = () => {
    change(true);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Button
        variant="contained"
        color="primary"
        style={{
          backgroundImage:
            "linear-gradient(90.18deg,#ff026c 12.46%,#6b13ff 49.25%,#1e4fff 88.27%)",
          fontWeight: "bold",
          padding: "15px 50px",
          marginRight: "40px",
        }}
        onClick={handleClick}
      >
        <Typography
          style={{
            color: "white",
            fontSize: "1.1rem",
            fontWeight: "100",
            fontFamily: "Lilita One",
          }}
        >
          Launch Transaction Builder
        </Typography>
      </Button>
    </div>
  );
}

export default LaunchButtons;
