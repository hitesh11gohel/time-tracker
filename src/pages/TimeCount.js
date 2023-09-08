import React from "react";
import { Box, Card } from "@mui/material";
import Header from "../components/Header";
import FormContainer from "../components/Form";

const TimeCount = () => (
  <Box
    className="d-flex justify-content-center align-items-center"
    sx={{ height: "100vh" }}
  >
    <Card className="p-5 bg-light">
      <Header />
      <FormContainer />
    </Card>
  </Box>
);

export default TimeCount;
