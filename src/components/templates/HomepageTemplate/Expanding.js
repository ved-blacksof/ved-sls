import React from 'react'
// import "./molecule.css";
import {
    Box,
    Container,
    Tabs,
    Tab,
    Typography,
    makeStyles,
} from '@material-ui/core';
import { VerticalTab } from '../../molecules'



const useStyles = makeStyles((theme) => ({
    whiteBox: {
        marginTop:'20%',
        height: '20vh',
        [theme.breakpoints.down('xs')]:{
            height:'10vh'
        }
    },
    expand: {
        color: 'black'
    },
    blueBox: {
        background: '#003189',
        height: '65vh',
        [theme.breakpoints.down('sm')]:{
            height:'50vh'
        },
        [theme.breakpoints.down('xs')]:{
            height:'fit-content'
        }
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
                <Container fixed>
                    <VerticalTab />
                </Container>
            </Box>
        </>
    )
}
