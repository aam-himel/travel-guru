import React, { useState } from "react";
import {
    Button,
  FilledInput,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
// import {
//     MuiPickersUtilsProvider,
//     KeyboardTimePicker,
//     KeyboardDatePicker,
//   } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "3rem 1rem",
    padding: "1rem",
  },
  paper: {
    padding: "2rem",
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(60),
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#F9A51A",
    "&:hover": {
      background: "#F9A318",
    },
    color: "black",
  },
  input: {
    padding: "2rem",
  },
  space: {
    // margin: theme.spacing(2)
  },
  marginTop: {
    margin: "2rem 0",
  },
}));
const BookingCallender = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <Grid className={`${classes.input}`}>
      <Typography variant="body1" gutterBottom>
        Origin
      </Typography>
      <FilledInput
        fullWidth
        disableUnderline
        margin="dense"
        placeholder="Dhaka"
      ></FilledInput>
      <br />
      <br />
      <Typography variant="body1" gutterBottom>
        Destination
      </Typography>
      <FilledInput
        fullWidth
        disableUnderline
        margin="dense"
        placeholder="Cox's bazar"
      ></FilledInput>

      <Grid container className={classes.marginTop}>
        <Grid item xs={6}>
          <FilledInput disableUnderline margin="dense"></FilledInput>
        </Grid>
        <Grid item xs={6}>
          <FilledInput disableUnderline margin="dense" gutterBottom></FilledInput>
        </Grid>
        <Link to="/hotel">
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              Start Booking
          </Button>
            </Link>
      </Grid>
    </Grid>
  );
};

export default BookingCallender;
