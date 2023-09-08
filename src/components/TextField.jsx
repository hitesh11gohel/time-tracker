import React from "react";
import { Box, TextField } from "@mui/material";

const CustomTextField = ({ label, type, name, value, handleChange }) => (
  <Box className="mx-5 my-4 d-flex justify-content-around align-items-center flex-column flex-sm-row">
    <Box className="custom-text-field-label">{label} :</Box>
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
