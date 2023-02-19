import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Modal from "react-modal";
import WithdrawMenu from "./WithdrawFromAaveCard/WithdrawMenu";
import WithdrawTable from "./WithdrawFromAaveCard/WithdrawTable";

function WithdrawFromAaveCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [withdrawState, setWithdrawState] = useState([]);
  return (
    <>
      <Card
        sx={{
          width: 370,
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
                4. Withdraw From Aave
              </Typography>
              {withdrawState.length === 0 ? (
                <Typography
                  style={{
                    fontFamily: "Lilita One",
                    fontSize: "1.1rem",
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
                  interestRateMode: &nbsp; the type of borrow debt. Stable: 1,
                  Variable: 2
                  <br />
                  onBehalfOf: &nbsp; address of user who will incur the debt.
                  <br />
                  <br />
                  (NOTE : You must have supplied enough collateral via supply()
                  and have delegated credit to our contract via
                  approveDelegation() , you will be asked to do this once you
                  complete building whole transaction.)
                </Typography>
              ) : (
                <WithdrawTable state={withdrawState} />
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
            left: "450px",
            right: "430px",
            bottom: "100px",
          },
        }}
      >
        <WithdrawMenu state={withdrawState} changeState={setWithdrawState} />
        <WithdrawTable state={withdrawState} />
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

export default WithdrawFromAaveCard;
