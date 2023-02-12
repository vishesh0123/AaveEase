import { AppBar, Container, Toolbar } from "@mui/material";
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
          <Toolbar disableGutters style={{ flexDirection: "row-reverse" }}>
            <Web3Button />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
