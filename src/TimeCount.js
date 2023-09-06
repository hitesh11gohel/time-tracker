import React, { Fragment, useState } from "react";
import { Alert, Box, Button, Card, TextField, Typography } from "@mui/material";
import moment from "moment-timezone";

const TimeCount = () => {
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
    <Fragment>
      <Box
        className="d-flex justify-content-center align-items-center"
        sx={{ height: "100vh" }}
      >
        <Card className="p-5 bg-light">
          <Box className="bg-dark text-light p-4 text-center">
            <Typography variant="h4">⏱ Time Tracker ⏱</Typography>
          </Box>

          {error && (
            <Alert
              severity="error"
              className="mt-3"
              onClose={() => setError(false)}
            >
              Please Fill Start Time and End Time !!!
            </Alert>
          )}

          <Box className="m-4 d-flex justify-content-around align-items-center">
            <Box width={125}>Start Time :</Box>
            <TextField
              size="small"
              type="time"
              name="starttime"
              className="form-control mx-2"
              id="starttime"
              value={time.starttime}
              onChange={(e) => handleChange(e)}
            />
          </Box>

          <Box className="m-4 d-flex justify-content-around align-items-center">
            <Box width={125}>Break :</Box>
            <TextField
              size="small"
              type="text"
              name="break"
              className="form-control mx-2"
              id="break"
              value={time.break}
              onChange={(e) => handleChange(e)}
            />
          </Box>

          <Box className="m-4 d-flex justify-content-around align-items-center">
            <Box width={125}>End Time :</Box>
            <TextField
              size="small"
              type="time"
              name="endtime"
              className="form-control mx-2"
              id="endtime"
              value={time.endtime}
              onChange={(e) => handleChange(e)}
            />
          </Box>

          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>

          {time.answer && (
            <Box className="mt-4 p-4 text-center">
              <Typography variant="h6">
                🎉 🎉 Great ! You Worked&nbsp;
                <span className="text-danger">{time.totalHours}</span> hours 🎉
                🎉
              </Typography>
            </Box>
          )}
        </Card>
      </Box>
    </Fragment>
  );
};

export default TimeCount;
