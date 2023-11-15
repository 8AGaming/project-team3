import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";

const OrderOptions: React.FC = () => {
  return (
    <>
      <Typography variant="h6" color="text.primary" sx={{ marginTop: 2 }}>
        Order Options
      </Typography>
      <TextField
        select
        label="Delivery Option"
        value="standard"
        sx={{ width: "100%", marginTop: 1 }}
      >
        <MenuItem value="standard">Standard Delivery</MenuItem>
        <MenuItem value="express">Express Delivery</MenuItem>
      </TextField>
    </>
  );
};

export default OrderOptions;
