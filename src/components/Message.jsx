import React from "react";
import { Box, Typography } from "@mui/material";

const Message = ({ hours }) => (
  <Box className="mt-4 p-4 text-center">
    <Typography variant="h6">
      🎉 🎉 Great ! You Worked&nbsp;
      <span className="text-danger">{hours}</span> hours 🎉 🎉
    </Typography>
  </Box>
);

export default Message;
