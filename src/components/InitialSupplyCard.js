import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import { useState } from "react";
import React from "react";
import Modal from "react-modal";

function InitialSupplyCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Card
        sx={{
          width: 320,
          height: 280,
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
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
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
              <Typography
                style={{
                  fontFamily: "Lilita One",
                  fontWeight: "50",
                  fontSize: "1rem",
                  color: "white",
                  textTransform: "none",
                  marginTop: "10px",
                }}
              >
                While building complex transactions you might want to supply
                some initial tokens which can be used in later steps. <br />
                <br />
                (Note : You will need to approve the amount of tokens to
                contract in later steps after you done building whole
                transaction.)
              </Typography>
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
            top: "150px",
            left: "200px",
            right: "200px",
            bottom: "150px",
          },
        }}
      ></Modal>
    </>
  );
}

export default InitialSupplyCard;
