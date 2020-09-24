import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';
import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../layout/Navbar';
import PlaceInfo from '../PlaceInfo/PlaceInfo';
import BookingCallender from './BookingCallender';
import BookingPlaceDetails from './BookingPlaceDetails';

const useStyles =  makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent:'flex-start',
        alignItems: 'center',
        margin: '3rem 1rem',
        padding:'1rem'
    },
    
}))



const Booking = () => {
    const classes = useStyles();
    let {place_id} = useParams();
    return (
        <Container>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={6}> 
                <BookingPlaceDetails />
                </Grid>

                <Grid item xs={6}> 
                    <Paper>
                    <BookingCallender />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Booking;

