import React from 'react'
// import "./molecule.css";
import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import { VerticalTab } from '../../molecules'



const useStyles = makeStyles((theme) => ({
    whiteBox: {
        marginTop:'20%',
        paddingBottom:'5%'
    },
    expand: {
        color: 'black'
    },
    blueBox: {
        background: '#354B9C',
    }
}))

export function Expanding() {
    const classes = useStyles();



    return (
        <>
            <Container fixed className={classes.whiteBox}>
                <h3 className={classes.expand}>EXPANDING THE CORE  <br/> OF OUR PRIMARY OFFERINGS</h3>
            </Container>
            <Box className={classes.blueBox}>
                <Container fixed  style={{padding:'5% 0%'}}> 
                    <VerticalTab />
                </Container>
            </Box>
        </>
    )
}
