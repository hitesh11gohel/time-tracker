import React from "react";
import { Alert } from "@mui/material";

const AlertBar = ({ setError }) => (
  <Alert severity="error" className="mt-3" onClose={() => setError(false)}>
    Please Fill Start Time and End Time !!!
  </Alert>
);

export default AlertBar;
