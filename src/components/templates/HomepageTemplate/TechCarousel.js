import React from 'react'
import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

const useStyles = makeStyles((theme) => ({
    newBox: {
        display: 'flex',
        marginTop: '8%',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    },
    box1: {
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginBottom:'5%'

        }
    },
    redLine:{
        margin:'2% 0%'
    },
    UL: {
        font: 'normal normal normal 1rem Access',
        color: 'white',
        listStyle: 'inside',
        marginTop: '3%'
    },
    LI: {
        marginLeft: '4%'
    },

    box2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        border: '2px solid yellow',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }

    },
    slide: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '80%',
        width: '80%',
        margin: "5% 100px",
        [theme.breakpoints.down('xs')]: {

        }
    },
    boxBig: {
        border: '2px solid red',
        height: '10rem',
        width: '10rem'

    },
    boxSmall: {
        border: '2px solid red',
        height: '5rem',
        width: '5rem'
    },

}))

export function TechCarousel() {

    const classes = useStyles()

    // const Arrows = [new Arrow()]

    const Paginations = [new Pagination({ type: 'bullet' })]

    return (

        <>
            <Container className={classes.newBox}>
                <Box className={classes.box1}>
                    <h3>TECHNOLOGY PARTNERS IN <br /> HARDWARE AND SOFTWARE OFFERINGS</h3>
                    <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                    <h4 style={{ width: '80%' }}>Serving as a turnkey technology solution provider for the past 20 years.</h4>
                    <ul className={classes.UL}>We specialize in-
                        <li className={classes.LI}>Research & Development</li>
                        <li className={classes.LI}> Product Design</li>
                        <li className={classes.LI}> Manufacturing</li>
                    </ul>
                </Box>
                <Box className={classes.box2}>
                    <Flicking circular={true}
                        align="center"
                        defaultIndex='1'
                        plugins={Paginations}
                        circular={true}
                    >

                        <div className={classes.slide} >
                            <div className={classes.boxBig} ><h2>356+</h2></div>
                            <div className={classes.boxSmall}><h3>356+</h3></div>
                            <div className={classes.boxSmall}><h3>356+</h3></div>
                            <div className={classes.boxSmall}><h3>100+</h3></div>
                            <div className={classes.boxSmall}><h3>06</h3></div>
                        </div>


                        <div className={classes.slide} >
                            <div className={classes.boxBig} ><h2>356+</h2></div>
                            <div className={classes.boxSmall}><h3>356+</h3></div>
                            <div className={classes.boxSmall}><h3>356+</h3></div>
                            <div className={classes.boxSmall}><h3>100+</h3></div>
                            <div className={classes.boxSmall}><h3>06</h3></div>
                        </div>

                        <ViewportSlot >
                            <span className="flicking-pagination "></span>
                        </ViewportSlot>

                    </Flicking>
                </Box>
            </Container>
        </>
    )
}
