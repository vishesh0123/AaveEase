import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";
import { useState } from "react";
import React from "react";
import Modal from "react-modal";
import TokenSelectMenu from "./InitialSupplyCard/TokenSelectMenu";
import TokenTable from "./InitialSupplyCard/TokenTable";

function InitialSupplyCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialSupplyState, setInitialSupplyState] = useState([]);

  return (
    <>
      {console.log("initial supply card")}
      <Card
        sx={{
          width: 480,
          height: 300,
          background:
            "radial-gradient(circle at center center, rgb(42, 46, 63), rgb(38, 41, 55))",
          border: "1px solid white",
        }}
      >
        <CardActionArea
          onClick={(event) => {
            setIsModalOpen(true);
          }}
        >
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                overflowY: "auto",
                overflowX: "hidden",
                height: "300px",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Lilita One",
                  fontSize: "1.5rem",
                  color: "white",
                  textTransform: "none",
                }}
              >
                1. Initial Supply
              </Typography>
              {initialSupplyState.length === 0 || isModalOpen === true ? (
                <Typography
                  style={{
                    fontFamily: "Lilita One",
                    fontSize: "1.6rem",
                    color: "#e5b8ff",
                    textTransform: "none",
                    marginTop: "30px",
                  }}
                >
                  While building complex transactions you might want to supply
                  some initial tokens which can be used in later steps. <br />
                </Typography>
              ) : (
                <TokenTable
                  state={initialSupplyState}
                  setState={setInitialSupplyState}
                />
              )}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        isOpen={isModalOpen}
        style={{
          overlay: {
            position: "fixed",
            backdropFilter: "blur(1px)",
            zIndex: "1",
          },
          content: {
            backgroundColor: "rgb(42, 46, 63)",
            position: "absolute",
            borderRadius: "10px",
            top: "20px",
            left: "450px",
            right: "410px",
            bottom: "20px",
          },
        }}
      >
        <TokenSelectMenu
          state={initialSupplyState}
          changeState={setInitialSupplyState}
        />
        <TokenTable
          state={initialSupplyState}
          setState={setInitialSupplyState}
        />
        <Button
          style={{ marginTop: "20px", marginLeft: "180px" }}
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <Typography
            style={{
              fontFamily: "Lilita One",
              fontWeight: "50",
              fontSize: "1.2rem",
              color: "white",
              textTransform: "none",
            }}
          >
            CLOSE
          </Typography>
        </Button>
      </Modal>
    </>
  );
}

export default InitialSupplyCard;
