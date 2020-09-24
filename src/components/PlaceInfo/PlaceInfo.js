import React from 'react';
import { Link } from 'react-router-dom';
import { FakeTravelInfo } from '../data/FakeTravelInfo';
import './PlaceInfo.css';


function PlaceInfo(props) {
    
    const [coxbazar] = FakeTravelInfo;
    const place = props.place;

    const handleBooking = (e) => {
        e.preventDefault();
    }

    return (
        <div className="info">
            {
                place.placeName && <>
                    <h1 className="main-title"> {place.placeName} </h1>
                    <p className="main-subtitle"> {place.details} </p>
                    <button className="btn btn-booking" onClick={handleBooking}>Booking! </button>
                </>
            }
        </div>
    )
}

export default PlaceInfo;
