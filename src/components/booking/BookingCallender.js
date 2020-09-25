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
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
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
    display:'block',
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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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

      <Grid container  >
      
      <div className="date-sec" style={{ padding: "20px 20px 20px 0", color: "#fff", display:'flex' }}>
        <div style={{marginRight:'2rem'}}>
          <p>From</p>
          <DatePicker
            selected={startDate}
            className="date-picker"
            onChange={date => setStartDate(date)}
            // calendarContainer={MyContainer}
          />
        </div>
        <div>
          <p>To</p>
          <DatePicker
            selected={endDate}
            className="date-picker"
            onChange={date => setEndDate(date)}
          />
        </div>
         
        
      </div>
      
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
