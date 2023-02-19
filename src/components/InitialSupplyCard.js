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
      <Card
        sx={{
          width: 350,
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
                  fontWeight: "50",
                  fontSize: "1.2rem",
                  color: "white",
                  textTransform: "none",
                }}
              >
                1. Initial Supply
              </Typography>
              {initialSupplyState.length === 0 ? (
                <Typography
                  style={{
                    fontFamily: "Lilita One",
                    fontWeight: "50",
                    fontSize: "1.05rem",
                    color: "#e5b8ff",
                    textTransform: "none",
                    marginTop: "25px",
                  }}
                >
                  While building complex transactions you might want to supply
                  some initial tokens which can be used in later steps. <br />
                  <br />
                  (Note : You will need to approve the amount of tokens to
                  contract in later steps after you done building whole
                  transaction.)
                </Typography>
              ) : (
                <TokenTable state={initialSupplyState} />
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
            right: "430px",
            bottom: "20px",
          },
        }}
      >
        <TokenSelectMenu
          state={initialSupplyState}
          changeState={setInitialSupplyState}
        />
        <TokenTable state={initialSupplyState} />
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
