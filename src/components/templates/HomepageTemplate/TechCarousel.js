import React from 'react'
import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { AutoPlay, Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "@egjs/flicking-plugins/dist/pagination.css";

import { ParagraphsBlue, MainContainer } from '../../atoms'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    newBox: {
        height: '90vh',
        display: 'flex',
        paddingBottom:'8%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center ',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            height: 'fit-content',
        }
    },
    box1: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },

    box2: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        "& .flicking-pagination": {
            bottom: '0%',
            left: '0px',
        },
        "& .flicking-pagination-bullet": {
            width: '2.5rem !important',
            height: '.33rem !important',
            margin: '0 .2rem !important',
            borderRadius: '1rem !important',
            backgroundColor: 'rgb(255, 255, 255) !important',
        },
        "& .flicking-pagination-bullet-active": {
            backgroundColor: '#ff0000 !important'
        }

    },
    slide: {
        width: '100%',
        margin: "0% 100px",
        padding: '3% 0%',
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
        padding:'1%',
        color: 'red',
        width: '16vw',
        height: '16vw',
        '& h1': {
            color: '#D9393E',
            fontSize: '5vw',
            textAlign: 'center',
            [theme.breakpoints.down('sm')]:{
                fontSize:'1.8rem'
            }
        },
        '& h2': {
            color: '#003189',
            fontSize: '2vw',
            textAlign: 'center',
            [theme.breakpoints.down('sm')]:{
                fontSize:'1.2rem'
            }
        },
        [theme.breakpoints.down('sm')]: {
            height: '40vw',
            width: '40vw',
        }

    },
    boxSmall: {
        height: '11vw',
        width: '10vw',
        padding:'1%',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            height: '28vw',
            width: '26vw',
        },
        "& h3": {
            color: '#D9393E',
            fontSize: '3vw',
            [theme.breakpoints.down('sm')]:{
                fontSize:'1rem'
            }
        },
        "& h4": {
            font: 'normal normal normal 1.4vw BebasNeue',
            color: '#003189',
            textAlign: 'center',
            [theme.breakpoints.down('sm')]:{
                fontSize:'1rem'
            }
        }
    },

}))

export function TechCarousel() {

    const classes = useStyles()

    // const Arrows = [new Arrow()]
    const autoPlugins = new AutoPlay({ duration: 4000, direction: "NEXT", stopOnHover: false });

    const paginationsPlugins = new Pagination({ type: 'bullet' });

    const plugins = [autoPlugins, paginationsPlugins];

    return (

        <>
            <MainContainer>
                <Container fixed className={classes.newBox}>
                    <Box className={classes.box1}>
                        <Fade bottom>
                            <ParagraphsBlue
                                title="TECHNOLOGY PARTNERS "
                                title1="IN HARDWARE AND SOFTWARE OFFERINGS"
                                subtitle="Serving as a turnkey technology solution provider for the past 20 years."
                                list="We specialize in -"
                                firstli="Research & Development"
                                secli=" Product Design"
                                thirdli="Manufacturing"
                            />
                        </Fade>
                    </Box>

                    <Box className={classes.box2}>
                        <Flicking
                            // selector="center"
                            // plugins={autoPlugins}
                            duration="1000"
                            plugins={plugins}
                            align="center"
                            defaultIndex='1'
                            circular={true}
                        >

                            {/* Slide1 */}
                            <Box className={classes.slide} >

                                <div style={{ width: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <div className={classes.boxBig} >
                                        <Fade bottom><h1>300+<h2>ENGINEERS</h2></h1></Fade>
                                    </div>

                                    <div className={classes.boxSmall} style={{ background: '#D9393E' }}>
                                        <Fade bottom><img src={'./images/Layer 2.svg'} /></Fade>
                                    </div>
                                </div>

                                <div className={classes.boxSmall} style={{ background: 'white' }} >
                                    <Fade bottom><h3>100+</h3></Fade>
                                    <Fade bottom><h4 >ACTIVE PROJECTS AROUND THE WORLD</h4></Fade>
                                </div>
                                <div className={classes.boxSmall} style={{ background: 'transparent', borderBottom: '2px solid white' }}>
                                    <Fade bottom><img src={'./images/mission.svg'} /></Fade>
                                </div>
                                <div className={classes.boxSmall} style={{ background: 'white' }} >
                                    <Fade bottom><h3>06+</h3></Fade>
                                    <Fade bottom><h4 >BUSINESS VERTICALS</h4></Fade>
                                </div>

                            </Box>


                            {/* Slide2 */}
                            <Box className={classes.slide} >
                                <Fade bottom>
                                    <div style={{ width: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                        <div className={classes.boxBig} >
                                            <h1>01<h2>Manufacturing Unit</h2></h1>
                                        </div>

                                        <div className={classes.boxSmall} style={{ background: '#D9393E' }}>
                                            <img src={'./images/Layer 2.svg'} />
                                        </div>
                                    </div>

                                    <div className={classes.boxSmall} style={{ background: 'white' }} >
                                        <h4 style={{  textAlign:'center', color:'#D9393E', fontSize:'2vw' }}>Operating Bases</h4>
                                        <h4 >India, UK, USA</h4>
                                    </div>
                                    <div className={classes.boxSmall} style={{ background: 'transparent', borderBottom: '2px solid white' }}>
                                        <img src={'./images/mission.svg'} />

                                    </div>
                                    <div className={classes.boxSmall} style={{ background: 'white' }} >
                                        <h3 style={{textTransform:'lowercase'}}>Clients</h3>
                                        <h4 >in 18+ Countries</h4>
                                    </div>
                                </Fade>
                            </Box>


                            <ViewportSlot >
                                <span className="flicking-pagination "></span>
                            </ViewportSlot>

                        </Flicking>
                    </Box>
                </Container>
            </MainContainer>
        </>
    )
}
