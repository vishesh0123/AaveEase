import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Modal from "react-modal";
import RepayMenu from "./RepayDebtAaveCard/RepayMenu";
import RepayTable from "./RepayDebtAaveCard/RepayTable";

function RepayAaveCard({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [repayState, setRepayState] = useState([]);
  return (
    <>
      <Card
        sx={{
          width: 750,
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
                {id}. Repay Debt
              </Typography>
              {repayState.length === 0 ? (
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
                <RepayTable state={repayState} />
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
            right: "80px",
            bottom: "100px",
          },
        }}
      >
        <RepayMenu state={repayState} setState={setRepayState} />
        <RepayTable state={repayState} />
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

export default RepayAaveCard;
