import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Modal from "react-modal";
import BorrowMenu from "./BorrowToAaveCard/BorrowMenu";
import BorrowTable from "./BorrowToAaveCard/BorrowTable";

function BorrowFromAaveCard({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [borrowState, setBorrowState] = useState([]);
  return (
    <>
      <Card
        sx={{
          width: 870,
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
                {id}. Borrow From Aave
              </Typography>
              {borrowState.length === 0 ? (
                <Typography
                  style={{
                    fontFamily: "Lilita One",
                    fontSize: "1.2rem",
                    color: "#e5b8ff",
                    textTransform: "none",
                    marginTop: "15px",
                  }}
                >
                  Parameters:
                  <br />
                  Asset: &nbsp; Token to Supply
                  <br />
                  Amount: &nbsp; Amount of token to supply
                  <br />
                  interestRateMode: &nbsp; Stable or Variable
                  <br />
                  onBehalfOf: &nbsp; address of user who will incur the debt.
                  <br />
                  <br />
                  You must have supplied enough collateral via supply and have
                  delegated credit to our contract via approveDelegation() ,
                  Borrowed assets will be sent to your address
                </Typography>
              ) : (
                <BorrowTable state={borrowState} />
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
            left: "80px",
            right: "120px",
            bottom: "100px",
          },
        }}
      >
        <BorrowMenu state={borrowState} setState={setBorrowState} />
        <BorrowTable state={borrowState} />
        <Button
          style={{ marginTop: "20px", marginLeft: "480px" }}
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <Typography
            style={{
              fontFamily: "Lilita One",
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

export default BorrowFromAaveCard;
