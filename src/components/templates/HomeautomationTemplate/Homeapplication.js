import React from 'react'
// import "./molecule.css";
import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import { Research } from '../../molecules'
import { homeapp } from '../../molecules/PortfolioData'



const useStyles = makeStyles((theme) => ({
    whiteBox: {
        marginTop: '20%',
        padding:'30% 0%',
        [theme.breakpoints.down('sm')]: {
            height: '20vh'
        }
    },
    expand: {
        color: 'black'
    },
    blueBox: {
        position: 'relative',
        background: '#003189',
        padding:'18% 0%',
        display:'flex',
        justifyContent:'center',
        [theme.breakpoints.down('sm')]: {
            padding:'20% 0%'
        },
    },
    carouselPos: {
        width:'100%',
        position: 'absolute',
        bottom: '40%',
    }
}))

export function Homeapplication() {
    const classes = useStyles();

    return (
        <>
            <Container fixed className={classes.whiteBox}>
                <h2 style={{ color: 'black', textAlign: 'center' }}>Application</h2>
            </Container>
            <Box className={classes.blueBox}>
                <Container fixed className={classes.carouselPos}>
                    <Research
                        data={homeapp}
                        text="HOME"
                    // className={classes.}
                    />
                </Container>
            </Box>
        </>
    )
}
