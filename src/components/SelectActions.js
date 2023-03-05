import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function SelectActions({ state, changeState }) {
  const [action, setAction] = useState(0);

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  const handleClick = () => {
    changeState([...state, action]);
  };
  return (
    <div
      style={{
        marginTop: "30px",
        marginLeft: "50px",
        display: "flex",
        border: "1px solid #e5b8ff",
        borderRadius: "2px",
        height: "90px",
        width: "300px",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <FormControl sx={{ minWidth: 200, borderColor: "white" }}>
        <InputLabel
          id="demo-simple-select-label"
          sx={{ fontFamily: "Lilita One", color: "white" }}
        >
          SELECT ACTION
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Select Aave V3 Action"
          id="demo-simple-select"
          value={action}
          onChange={handleChange}
          sx={{
            color: "white",
            fontFamily: "Lilita One",
          }}
        >
          <MenuItem
            value={1}
            style={{ fontFamily: "Lilita One", fontSize: "1.2rem" }}
          >
            Supply To AAVE
          </MenuItem>
          <MenuItem
            value={2}
            style={{ fontFamily: "Lilita One", fontSize: "1.2rem" }}
          >
            Borrow From AAVE
          </MenuItem>
          <MenuItem
            value={3}
            style={{ fontFamily: "Lilita One", fontSize: "1.2rem" }}
          >
            Withdraw From AAVE
          </MenuItem>
          <MenuItem
            value={4}
            style={{ fontFamily: "Lilita One", fontSize: "1.2rem" }}
          >
            Repay Debt
          </MenuItem>
          <MenuItem
            value={5}
            style={{ fontFamily: "Lilita One", fontSize: "1.2rem" }}
          >
            Take a Flashloan
          </MenuItem>
          <MenuItem
            value={6}
            style={{ fontFamily: "Lilita One", fontSize: "1.2rem" }}
          >
            Implement a SWAP
          </MenuItem>
          <MenuItem
            value={7}
            style={{ fontFamily: "Lilita One", fontSize: "1.2rem" }}
          >
            Migrate All Positions
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

export default SelectActions;
