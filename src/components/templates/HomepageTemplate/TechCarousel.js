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
import { FrameGrid, FrameGridOptions } from "@egjs/grid";
import { ParagraphsBlue } from '../../atoms'


const useStyles = makeStyles((theme) => ({
    newBox: {
        display: 'flex',
        marginTop: '8%',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center ',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            height: 'fit-content',
            margin: '8% auto',
        }
    },
    box1: {
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginBottom: '5%'

        }
    },

    box2: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '50%',
        height:'60vh',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: 'fit-content'
        }

    },
    slide: {
        height: '40vh',
        width: '100%',
        margin: "5% 100px",
        display: 'inline-flex',
        gap: '0px',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        '& div': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '& img': {
            width: '40%',
            height: '40%',
        },
        [theme.breakpoints.down('xs')]: {
            height: '30vh',
        }
    },
    boxBig: {
        border: '2px solid red',
        background: 'white',
        color: 'red',
        // padding:'2rem',
        height: '13vw',
        width: '15vw',
        margin: '0%',
        '& h1': {
            color: '#CA0017',
            fontSize: '5vw',
            textAlign: 'center'
        },
        '& h2': {
            color: '#003189',
            fontSize: '2vw',
            textAlign: 'center'
        },

        [theme.breakpoints.down('xs')]: {
            height: '10rem',
            width: '10rem',
        }

    },
    boxSmall: {
        border: '2px solid red',
        height: '8vw',
        width: '10vw',
        // padding: '2rem',
        margin: '0%',
        background: 'white',
        [theme.breakpoints.down('xs')]: {
            height: '6rem',
            width: '6rem',
        }
    },

}))

export function TechCarousel() {

    const classes = useStyles()

    // const Arrows = [new Arrow()]

    const Paginations = [new Pagination({ type: 'bullet' })]

    return (

        <>
            <Container fixed className={classes.newBox}>
                <Box className={classes.box1}>
                    <ParagraphsBlue
                        title="TECHNOLOGY PARTNERS IN HARDWARE AND SOFTWARE OFFERINGS"
                        subtitle="Serving as a turnkey technology solution provider for the past 20 years."
                        list="We specialize in -"
                        firstli="Research & Development"
                        secli=" Product Design"
                        thirdli="Manufacturing"
                    />
                </Box>
                <Box className={classes.box2}>
                    <Flicking
                        circular={true}
                        // align="start"
                        defaultIndex='1'
                        plugins={Paginations}
                        circular={true}
                    >

                       


                         <div className={classes.slide} >
                            <div style={{ width: '100%', justifyContent: 'flex-end',alignItems:'flex-end' }}>
                                <div className={classes.boxBig} ><h1>356+ <h2>ENGINEERS</h2></h1> </div>
                                <div className={classes.boxSmall} style={{ background: '#CA0017' }}><h2>356+</h2></div>
                            </div>
                            <div className={classes.boxSmall} style={{ background: '#CA0017' }}><h3>356+</h3></div>
                            <div className={classes.boxSmall} style={{ background: '#CA0017' }}><h3>100+</h3></div>
                            <div className={classes.boxSmall} style={{ background: '#CA0017' }}><h3>06</h3></div>
                        </div> 
                         <div className={classes.slide} >
                            <div style={{ width: '100%', justifyContent: 'flex-end',alignItems:'flex-end' }}>
                                <div className={classes.boxBig} ><h1>356+ <h2>ENGINEERS</h2></h1> </div>
                                <div className={classes.boxSmall} style={{ background: '#CA0017' }}><h2>356+</h2></div>
                            </div>
                            <div className={classes.boxSmall} style={{ background: '#CA0017' }}><h3>356+</h3></div>
                            <div className={classes.boxSmall} style={{ background: '#CA0017' }}><h3>100+</h3></div>
                            <div className={classes.boxSmall} style={{ background: '#CA0017' }}><h3>06</h3></div>
                        </div> 
                         <div className={classes.slide} >
                            <div style={{ width: '100%', justifyContent: 'flex-end',alignItems:'flex-end' }}>
                                <div className={classes.boxBig} ><h1>356+ <h2>ENGINEERS</h2></h1> </div>
                                <div className={classes.boxSmall} style={{ background: '#CA0017' }}><h2>356+</h2></div>
                            </div>
                            <div className={classes.boxSmall} style={{ background: '#CA0017' }}><h3>356+</h3></div>
                            <div className={classes.boxSmall} style={{ background: '#CA0017' }}><h3>100+</h3></div>
                            <div className={classes.boxSmall} style={{ background: '#CA0017' }}><h3>06</h3></div>
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
