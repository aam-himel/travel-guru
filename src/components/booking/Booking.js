import { Container } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../layout/Navbar';
import PlaceInfo from '../PlaceInfo/PlaceInfo';
import BookingCallender from './BookingCallender';
import BookingPlaceDetails from './BookingPlaceDetails';

const Booking = () => {

    let {place_id} = useParams();
    
    return (
        <Container>
            
            <h1>booking</h1>
            <BookingPlaceDetails />
            <BookingCallender />
        </Container>
    )
}

export default Booking;

