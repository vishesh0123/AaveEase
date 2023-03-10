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

function WithdrawFromAaveCard({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [withdrawState, setWithdrawState] = useState([]);
  return (
    <>
      <Card
        sx={{
          width: 840,
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
                {id}. Withdraw From Aave
              </Typography>
              {withdrawState.length === 0 ? (
                <Typography
                  style={{
                    fontFamily: "Lilita One",
                    fontSize: "1.39rem",
                    color: "#e5b8ff",
                    textTransform: "none",
                    marginTop: "15px",
                  }}
                >
                  Parameters:
                  <br />
                  Asset: &nbsp; Token to Withdraw
                  <br />
                  Amount: &nbsp; Amount of token to withdraw
                  <br />
                  To: &nbsp; address of user who will incur the debt.
                  <br />
                  <br />
                  You will need to approve aTokens to our contract via permit -
                  Gasless Approval .
                </Typography>
              ) : (
                <WithdrawTable
                  state={withdrawState}
                  setState={setWithdrawState}
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
            top: "100px",
            left: "240px",
            right: "220px",
            bottom: "100px",
          },
        }}
      >
        <WithdrawMenu state={withdrawState} changeState={setWithdrawState} />
        <WithdrawTable state={withdrawState} setState={setWithdrawState} />
        <Button
          style={{ marginTop: "20px", marginLeft: "380px" }}
          onClick={() => {
            console.log("clse");
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
