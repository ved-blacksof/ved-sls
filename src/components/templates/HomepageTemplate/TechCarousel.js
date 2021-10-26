import React from 'react'
import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { AutoPlay,Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "@egjs/flicking-plugins/dist/pagination.css";

import { ParagraphsBlue } from '../../atoms'


const useStyles = makeStyles((theme) => ({
    newBox: {
        height: 'fit-content',
        display: 'flex',
        marginTop: '8%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start ',
        width:'70%',
        [theme.breakpoints.down('sm')]: {
            width:'100%',
            flexDirection: 'column',
            height: 'fit-content',
        }
    },
    box1: {
        width: '45%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },

    box2: {
        width: '60%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }

    },
    slide: {
        width: '100%',
        margin: "0% 100px",
        padding: '8% 0%',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'unset',
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
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
        }
    },
    boxBig: {
        background: 'white',
        color: 'red',
        height: '13rem',
        width: '15rem',
        '& h1': {
            color: '#D9393E',
            fontSize: '5vw',
            textAlign: 'center'
        },
        '& h2': {
            color: '#003189',
            fontSize: '2vw',
            textAlign: 'center'
        },
        [theme.breakpoints.down('sm')]: {
            height: '12rem',
            width: '12rem',
        }

    },
    boxSmall: {
        height: '10rem',
        width: '10rem',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            height: '8rem',
            width: '8rem',
        },
        "& h3": {
            color: '#D9393E',
            fontSize: '3vw'
        },
        "& h4": {
            font: 'normal normal normal 1.4vw BebasNeue',
            color: '#003189',
            textAlign: 'center'
        }
    },

}))

export function TechCarousel() {

    const classes = useStyles()

    // const Arrows = [new Arrow()]
    const autoPlugins = new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false });

    const paginationsPlugins = new Pagination({ type: 'bullet' });

    const plugins = [ autoPlugins, paginationsPlugins];

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
                        // selector="center"
                        // plugins={autoPlugins}
                        plugins={plugins}
                        align="center"
                        defaultIndex='1'
                        circular={true}
                    >

                        {/* Slide1 */}
                        <Box className={classes.slide} >
                            <div style={{ width: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                <div className={classes.boxBig} >
                                    <h1>356<h2>ENGINEERS</h2></h1>
                                </div>

                                <div className={classes.boxSmall} style={{ background: '#D9393E' }}>
                                    <img src={'./images/Layer 2.svg'} />
                                </div>
                            </div>

                            <div className={classes.boxSmall} style={{ background: 'white' }} >
                                <h3>100+</h3>
                                <h4 >ACTIVE PROJECTS AROUND THE WORLD</h4>
                            </div>
                            <div className={classes.boxSmall} style={{ background: 'transparent', borderBottom: '2px solid white' }}>
                                <img src={'./images/mission.svg'} />

                            </div>
                            <div className={classes.boxSmall} style={{ background: 'white' }} >
                                <h3>06</h3>
                                <h4 >BUSINESS VERTICALS</h4>
                            </div>
                        </Box>


                        {/* Slide2 */}
                        <Box className={classes.slide} >
                            <div style={{ width: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                <div className={classes.boxBig} >
                                    <h1>356<h2>ENGINEERS</h2></h1>
                                </div>

                                <div className={classes.boxSmall} style={{ background: '#D9393E' }}>
                                    <img src={'./images/Layer 2.svg'} />
                                </div>
                            </div>

                            <div className={classes.boxSmall} style={{ background: 'white' }} >
                                <h3>100+</h3>
                                <h4 >ACTIVE PROJECTS AROUND THE WORLD</h4>
                            </div>
                            <div className={classes.boxSmall} style={{ background: 'transparent', borderBottom: '2px solid white' }}>
                                <img src={'./images/mission.svg'} />

                            </div>
                            <div className={classes.boxSmall} style={{ background: 'white' }} >
                                <h3>06</h3>
                                <h4 >BUSINESS VERTICALS</h4>
                            </div>
                        </Box>


                        <ViewportSlot >
                            <span className="flicking-pagination "></span>
                        </ViewportSlot>

                    </Flicking>
                </Box>
            </Container>
        </>
    )
}
