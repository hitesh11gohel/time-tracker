import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import moment from "moment";
import CustomTextField from "./TextField";
import AlertBar from "./Alert";
import Message from "./Message";

const FormContainer = () => {
  const [time, setTime] = useState({
    starttime: "",
    endtime: "",
    break: "",
    totalHours: "",
    answer: false,
  });
  const [error, setError] = useState(false);

  // handleChange function called when page input changes
  const handleChange = (e) => {
    setError(false);
    setTime({ ...time, [e.target.name]: e.target.value });
  };

  // getTimeFromMins gives you exact time in hours from minutes
  function getTimeFromMins(mins) {
    let h = (mins / 60) | 0,
      m = mins % 60 | 0;
    let totalHour = moment.utc().hours(h).minutes(m).format("hh:mm");
    const hours = Math.floor(time.break / 60);
    const minutes = time.break % 60;
    const afterMinus = moment(totalHour, "hh:mm").diff(
      moment(`${hours}:${minutes}`, "hh:mm"),
      "minutes"
    );
    afterBreakFunc(afterMinus);
  }

  // afterBreakFunc gives you the total working hours from your totalTime after reducing the break time.
  function afterBreakFunc(mins) {
    let h = (mins / 60) | 0,
      m = mins % 60 | 0;
    let afterBreak = moment.utc().hours(h).minutes(m).format("hh:mm");
    setTime({ ...time, totalHours: afterBreak, answer: true });
  }

  // handleSubmit function calculate the time after user submitted all inputs.
  const handleSubmit = () => {
    if (!time.starttime || !time.endtime) {
      setError(true);
      setTime({ ...time, answer: false });
    } else {
      const totalWorkedTime = moment(time.endtime, "hh:mm").diff(
        moment(time.starttime, "hh:mm"),
        "minutes"
      );
      getTimeFromMins(totalWorkedTime);
    }
  };

  return (
    <React.Fragment>
      {error && <AlertBar setError={setError} />}

      <CustomTextField
        label={"Start Time"}
        type={"time"}
        name={"starttime"}
        value={time.starttime}
        handleChange={handleChange}
      />

      <CustomTextField
        label={"Break"}
        type={"text"}
        name={"break"}
        value={time.break}
        handleChange={handleChange}
      />

      <CustomTextField
        label={"End Time"}
        type={"time"}
        name={"endtime"}
        value={time.endtime}
        handleChange={handleChange}
      />

      <Box textAlign={"center"} margin={4}>
        <Button
          className="submit-btn"
          variant="outlined"
          color="inherit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>

      {time.answer && <Message hours={time.totalHours} />}
    </React.Fragment>
  );
};

export default FormContainer;
