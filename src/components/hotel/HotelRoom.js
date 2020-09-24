import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import FakeHotelData from '../data/FakeHotelData';
import img1 from '../../Images/hotel1.png';
import starImg from '../../Icon/star.png'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
const useStyle = makeStyles(theme => ({
    root: {
        margin:'.2rem 0',
        padding:'8px 10px 8px 0',
        height:'250px'
    },
    px: {
        padding: '1rem'
    },
    img: {
        width: '100%'
    },
    imgSmall: {
        width: '18px'
    },
    dFlex: {
        margin: '1rem 0 0 0',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    py: {
        padding: '.8rem 0'
    }

}));

const HotelRoom = (props) => {
    const classes = useStyle();
    const {id, description, imgUrl, pricePerNight, roomTitle, stars, facilities, price} = props.data;
    return (
        <Grid container justify="center" className={classes.root} spacing={2}> 
        
            <Grid item xs={6} className={classes.px}>
               <img src={img1} alt="hotel 1" className={classes.img} />
            </Grid>
            <Grid item xs={6} className={classes.px}>
                <h3 style={{marginBottom: '1rem'}}> {roomTitle} </h3>
                <Typography variant="p" className={classes.py}>
                   {facilities.guests} guest {facilities.beds} beds {facilities.bedRooms} bedrooms
                </Typography>
                <Typography variant="body1" className={classes.py}>{description}</Typography>

                <Grid container >
                    <Grid item  className={classes.dFlex}>
                        <img src={starImg} alt="rating" className={classes.imgSmall}/>
                        <Typography variant='body1' >{stars}</Typography>
                        <Typography variant='body1' className={classes.px}>
                        {<b>${pricePerNight}</b>}/Night 
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HotelRoom;
