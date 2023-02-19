import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import icons from "../../icons";

function RepayMenu({ state, setState }) {
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [intrest, setIntrest] = useState(false);

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleIntrestChange = (event) => {
    setIntrest(event.target.value);
  };

  const handleClick = (event) => {
    setState([
      ...state,
      { Token: token, Amount: amount, Address: address, Intrest: intrest },
    ]);
  };
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
            height: 56,
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
      <TextField
        sx={{
          marginLeft: "10px",
          width: "500px",
        }}
        label="ADDRESS OF USER WHO WILL INCURR DEBT"
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
        onChange={handleAddressChange}
      />
      <FormControl
        sx={{
          minWidth: 200,
          height: 100,
          borderColor: "white",
          marginLeft: "10px",
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{ fontFamily: "Lilita One", color: "white" }}
        >
          SELECT INTREST RATE
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Select Aave V3 Action"
          id="demo-simple-select"
          value={intrest}
          defaultValue={0}
          onChange={handleIntrestChange}
          sx={{
            color: "white",
            fontFamily: "Lilita One",
            height: 56,
          }}
        >
          <MenuItem value={0} style={{ backgroundColor: "rgb(42, 46, 63)" }}>
            <Typography
              style={{
                fontFamily: "Lilita One",
                fontWeight: "30",
                fontSize: "1rem",
                marginLeft: "10px",
                color: "white",
              }}
            >
              STABLE
            </Typography>
          </MenuItem>
          <MenuItem value={1} style={{ backgroundColor: "rgb(42, 46, 63)" }}>
            <Typography
              style={{
                fontFamily: "Lilita One",
                fontWeight: "30",
                fontSize: "1rem",
                marginLeft: "10px",
                color: "white",
              }}
            >
              VARIABLE
            </Typography>
          </MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={handleClick}
        endIcon={<AddCircleIcon style={{ color: "white", fontSize: "40px" }} />}
      ></Button>
    </div>
  );
}

export default RepayMenu;
