import React from 'react'
import { makeStyles, Container, Box, Button } from '@material-ui/core'
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "@egjs/flicking-plugins/dist/pagination.css";


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: '10%',
    },
    head: {
        color: 'black'
    },
    portSubHead: {
        color: 'black',
        width: '40%',
        [theme.breakpoints.down('xs')]: {
            width: '70%',
        },
    },
    redLine: {
        margin: '1% 0%'
    },
    flicks: {
        width: '80%',
        height: '60vh',
        marginTop: '3%',
        [theme.breakpoints.down('sm')]: {
            height: '40vh',
            width: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            height: '30vh',
        }
    },
    BoxWidth: {
        width: '100%',
        height: '60vh',
        margin: "0rem 5rem",
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            height: '40vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '30vh',
        }
    },
    iconBox: {
        width: '6rem',
        height: '5rem',
        background: '#CA0017',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '8%',
        left: '0%',
        zIndex: '1',
        [theme.breakpoints.down('xs')]: {
            width: '4rem',
            height: '3.5rem',
        }

    },
    icon: {
        width: '55%'
    },
    blueBox: {
        position: 'absolute',
        width: '17rem',
        height: '15rem',
        background: '#003189',
        padding: '3%',
        top: '20%',
        left: '8%',
        [theme.breakpoints.down('sm')]: {
            width: '15rem',
            height: '13rem',
        },
        [theme.breakpoints.down('xs')]: {
            // width: '35%',
            // height: '12rem',
            display: 'none'
        },
    },
    blueBoxPara: {
        width: '100%',
        fontSize: '1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.8rem'
        },
    },
    btn: {
        color: 'white',
        border: '2px solid white',
        fontSize: '.6rem',
        marginTop: '3%'
    },
    imageBox: {
        width: '60%',
        height: '80%',
        position: 'absolute',
        top: '5%',
        left: '35%',
        zIndex: '-1',
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            left: '8%',
            top: '10%'
        },
        '& img': {
            maxWidth: '100%',
            maxHeight: '100%'
        }
    },


}))

export function CSRcarousel({
    data
}) {

    const classes = useStyles()

    const Paginations = [new Pagination({ type: 'bullet' })]

    return (
        <>
            <Container fixed className={classes.mainContainer}>
                <h3 className={classes.head}>CSR</h3>
                <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                <h4 className={classes.portSubHead}>How we are helping the world be a better place</h4>

                <Box className={classes.flicks}>
                    <Flicking
                        selector="center"
                        // plugins={Fades}
                        plugins={Paginations}
                        // align="center"
                        defaultIndex='1'
                        circular={true}

                    >

                        {
                            data.map((item,index) => {
                                return (

                                    <Box className={classes.BoxWidth}>
                                        <Box className={classes.iconBox}>
                                            <img className={classes.icon} src={'./images/leaves.svg'} />
                                        </Box>

                                        <Box className={classes.blueBox}>
                                            <h6 className={classes.blueBoxPara}>{item.para}</h6>
                                            <Button variant='outlined'
                                                className={classes.btn}
                                            >Read More</Button>
                                        </Box>

                                        <Box className={classes.imageBox}>
                                            <img className={classes.image}
                                                src={item.images}
                                                alt="Carousel Images" data-aos="fade-up" />
                                        </Box>
                                    </Box>
                                )
                            })
                        }

                        {/* <Box className={classes.BoxWidth}>
                            <img className={classes.BoxImages} src={'/images/side-view-of-data-analyst-pointing-with-finger-at--4DGBGUW.png'} alt="Carousel Images" data-aos="fade-up" />
                        </Box>

                        <Box className={classes.BoxWidth}>
                            <img className={classes.BoxImages} src={'/images/side-view-of-data-analyst-pointing-with-finger-at--4DGBGUW.png'} alt="Carousel Images" data-aos="fade-up" />
                        </Box>

                        <Box className={classes.BoxWidth}>
                            <img className={classes.BoxImages} src={'/images/side-view-of-data-analyst-pointing-with-finger-at--4DGBGUW.png'} alt="Carousel Images" data-aos="fade-up" />
                        </Box> */}


                        <ViewportSlot >
                            <span className="flicking-pagination "></span>
                        </ViewportSlot>
                    </Flicking>
                </Box>

            </Container>
        </>
    )
}
