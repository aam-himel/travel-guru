import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { FakeTravelInfo } from '../data/FakeTravelInfo';
import PlaceInfo from '../PlaceInfo/PlaceInfo';

const BookingPlaceDetails = () => {
    return (
        <Grid container spacing={4} justify="center">
            <Grid item style={{padding:'2rem 1rem'}}>
                <Typography variant="h1" gutterBottom='true' paragraph='true'>
                {FakeTravelInfo[0].placeName}
                </Typography>
                <Typography variant='body1' gutterBottom='true'>
                    {FakeTravelInfo[0].details}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default BookingPlaceDetails;
