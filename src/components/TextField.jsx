import React from "react";
import { Box, TextField } from "@mui/material";

const CustomTextField = ({ label, type, name, value, handleChange }) => (
  <Box className="m-4 d-flex justify-content-around align-items-center">
    <Box width={125}>{label} :</Box>
    <TextField
      size="small"
      type={type}
      name={name}
      className="form-control mx-2"
      value={value}
      onChange={(e) => handleChange(e)}
    />
  </Box>
);

export default CustomTextField;
