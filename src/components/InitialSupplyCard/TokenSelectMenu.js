import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import icons from "../../icons";

function TokenSelectMenu({ state, changeState }) {
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState(0);

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleClick = () => {
    changeState([
      ...state,
      {
        Id: state.length + 1,
        Token: token,
        Amount: amount,
        Approval: false,
      },
    ]);
    // if (state.length === 0) {
    //   changeState([
    //     ...state,
    //     {
    //       Id: 1,
    //       Token: token,
    //       Amount: amount,
    //       Approval: false,
    //     },
    //   ]);
    // } else {
    //   let changed = false;
    //   for (let i in state) {
    //     let s = state;
    //     if (state[i].Token === token) {
    //       s[i].Amount = Number(s[i].Amount) + Number(amount);
    //       s[i].Approval = false;
    //       changeState(s);
    //       changed = true;
    //       break;
    //     }
    //   }

    //   if (!changed) {

    //   }
    // }
  };
  console.log("token select menu");

  return (
    <div>
      <FormControl sx={{ minWidth: 200, height: 100, borderColor: "white" }}>
        <InputLabel
          id="demo-simple-select-label"
          sx={{ fontFamily: "Lilita One", color: "white" }}
        >
          SELECT TOKEN TO ADD
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Select Aave V3 Action"
          id="demo-simple-select"
          value={token}
          onChange={handleTokenChange}
          sx={{
            color: "white",
            fontFamily: "Lilita One",
          }}
        >
          {Object.keys(icons).map((key) => {
            return (
              <MenuItem
                value={key}
                style={{ backgroundColor: "rgb(42, 46, 63)" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={icons[key]} style={{ width: "30px" }} alt="" />
                  <Typography
                    style={{
                      fontFamily: "Lilita One",
                      fontWeight: "30",
                      fontSize: "1rem",
                      marginLeft: "10px",
                      color: "white",
                    }}
                  >
                    {key}
                  </Typography>
                </div>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <TextField
        sx={{
          marginLeft: "10px",
          width: "150px",
        }}
        label="ENTER AMOUNT"
        InputLabelProps={{
          style: {
            fontFamily: "Lilita One",
            color: "white",
            fontSize: "1rem",
          },
        }}
        InputProps={{
          style: {
            fontFamily: "Lilita One",
            fontSize: "1rem",
            color: "white",
          },
        }}
        variant="outlined"
        onChange={handleAmountChange}
      />
      <Button
        onClick={handleClick}
        endIcon={<AddCircleIcon style={{ color: "white", fontSize: "40px" }} />}
      ></Button>
    </div>
  );
}

export default TokenSelectMenu;
