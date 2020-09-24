import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import FakeHotelData from '../data/FakeHotelData';
import HotelMap from './HotelMap'
import HotelRoom from './HotelRoom'

const useStyle = makeStyles(theme => ({
    root: {
        marginTop:'2rem',
        borderTop:'2px solid #454544',
        padding:'2rem 0'
    },

}));

const Hotel = () => {
    const classes = useStyle();
    const data = FakeHotelData;
    console.log(data);
    return (
        <div>
            <Container className={classes.root}>
            <h1>Hotel in Cox Bazar!</h1>   
                <Grid container spacing={2}>
                    
                    <Grid item xs={6}>
                       
                       {
                           data.map(d => <HotelRoom data={d} key={d.id}/>)
                       }
                        {/* 
                        <HotelRoom />
                        <HotelRoom /> */}
                    </Grid>
                    <Grid item xs={6}>
                        <HotelMap />             
                    </Grid>
                </Grid>
            </Container>
           
        </div>
    )
}

export default Hotel;
