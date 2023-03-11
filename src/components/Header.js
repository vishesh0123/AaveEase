import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Web3Button } from "@web3modal/react";

function Header() {
  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              style={{
                fontFamily: "Lilita One",
                fontSize: "1.9rem",
                color: "#e5b8ff",
                textTransform: "none",
              }}
            >
              AaveEase
            </Typography>
            <div
              style={{
                marginLeft: "500px",
                borderRadius: "5px",
                width: "200px",
                height: "50px",
                alignItems: "center",
              }}
            >
              <Web3Button />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
