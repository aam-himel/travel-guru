import React from 'react';
import { Link } from 'react-router-dom';
import { FakeTravelInfo } from '../data/FakeTravelInfo';
import './PlaceInfo.css';


function PlaceInfo(props) {
    
    const [coxbazar] = FakeTravelInfo;
    const place = props.place;

    const handleBooking = (e) => {
        
    }

    return (
        <div className="info">
            {
                place.placeName && <>
                    <h1 className="main-title"> {place.placeName} </h1>
                    <p className="main-subtitle"> {place.details} </p>
                    
                    <Link to="/booking" className="btn btn-booking">
                        Booking
                    </Link>
                    {/* <button className="btn btn-booking" > 
                        
                    </button> */}
                </>
            }
        </div>
    )
}

export default PlaceInfo;
