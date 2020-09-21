import React, { useState } from 'react';
import Navbar from '../layout/Navbar';

import './Home.css'; 
import PlaceCard from '../PlaceCard/PlaceCard';
import PlaceInfo from '../PlaceInfo/PlaceInfo';
import { Container } from '@material-ui/core';
import { FakeTravelInfo } from '../data/FakeTravelInfo';

import img1 from '../../Images/Sajek.png';
import img2 from '../../Images/Sreemongol.png';
import img3 from '../../Images/sundorbon.png';


function TravelHome() {
    
    const [coxBazar, sreeMangal, sundarBans] = FakeTravelInfo;
    console.log(coxBazar, sreeMangal, sundarBans);

    const [placeInfo, setPlaceInfo] = useState([]);

    return (
        <header className="hero">
            <Container>
            <div className="carousel">
                <div className="place-info">
                    <PlaceInfo place={placeInfo}/>
                </div>
                
                <div className="carousel-cards">
                    <PlaceCard place={coxBazar} imgSrc={img1} placeState={setPlaceInfo}/>
                    <PlaceCard place={sreeMangal} imgSrc={img2} placeState={setPlaceInfo}/>
                    <PlaceCard place={sundarBans} imgSrc={img3} placeState={setPlaceInfo}/>
                </div>
            </div>
            </Container>
        </header>
    )
}

export default TravelHome;
