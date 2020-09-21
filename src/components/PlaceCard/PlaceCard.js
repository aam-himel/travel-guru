import React from 'react';

import './PlaceCard.css';
function PlaceCard(props) {
    
    const {id, placeName} = props.place;
    const setPlaceInfo = props.placeState;

    
    const handleMouseMoveCard = () => {
        setPlaceInfo(props.place);
    }
    
    return (
        <div className="card" onMouseDown={handleMouseMoveCard}>
            <img src={props.imgSrc} alt="sudorbon"/>
            <div className="card-title">
                <h2>{placeName} </h2>
            </div>
        </div>
    )
}

export default PlaceCard;
