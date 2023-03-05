import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Modal from "react-modal";
import SupplyMenu from "./SupplyToAaveCard/SupplyMenu";
import SupplyTable from "./SupplyToAaveCard/SupplyTable";

function SupplyToAaveCard({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [supplyState, setSupplyState] = useState([]);
  return (
    <>
      <Card
        sx={{
          width: 730,
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
                {id}. Supply To Aave
              </Typography>
              {supplyState.length === 0 ? (
                <Typography
                  style={{
                    fontFamily: "Lilita One",
                    fontSize: "1.3rem",
                    color: "#e5b8ff",
                    textTransform: "none",
                    marginTop: "25px",
                  }}
                >
                  Parameters:
                  <br />
                  Asset : Token to Supply
                  <br />
                  Amount : Amount of token to supply
                  <br />
                  onBehalfOf: Address which will recieve a Tokens
                  <br />
                  <br />
                  Whatever tokens and their amounts entered here should be
                  approved in initial supply component at the initial of
                  transaction
                </Typography>
              ) : (
                <SupplyTable state={supplyState} />
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
            top: "100px",
            left: "180px",
            right: "190px",
            bottom: "100px",
          },
        }}
      >
        <SupplyMenu state={supplyState} setState={setSupplyState} />
        <SupplyTable state={supplyState} />
        <Button
          style={{ marginTop: "20px", marginLeft: "400px" }}
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

export default SupplyToAaveCard;
