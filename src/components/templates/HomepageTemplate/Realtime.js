import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styled.css'
import { makeStyles, Container, Box, Button } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    realText: {
        marginTop: '10%'
    },
    head: {
        color: 'black'
    },
    redLine: {
        margin: '1% 0%'
    },
    portSubHead: {
        color: 'black',
        width: '40%',
        [theme.breakpoints.down('xs')]: {
            width: '70%',
        },
    },
    arrows: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        marginRight: '1%',

    },
    sliderSec: {
        display: 'flex',
        justifyContent:'space-between',
        width: '100%',
        marginTop:'3%'
    },
    slider: {
        width: '100%',
       
    },
    card: {
        boxShadow:'0px 0px 2px black'
    },
    cardImage: {
        width: '100%',
        height: '100%'
    },
    cardTxt: {
        padding: '5%'
    },
    smallBtn: {
        font: 'normal normal normal .8rem Access',
        background: '#003189',
        border: 'none',
        color: 'white',
        padding: '1% 2%',
        '&:hover': {
            color: '#003189'
        }
    },
    cardHead: {
        font: 'normal normal normal 1.2rem Access',
        color: 'black',

    },
    cardSubHead:{
        font:'normal normal normal .8rem Access',
    },
    readMore:{
        font:'normal normal normal 1.4rem BebasNeue',
        color:'#003189'
    }
}))

export function Realtime() {

    const classes = useStyles()
    {
        var settings = {
            dots: true,
            arrows:true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <>
                <Container fixed className={classes.realText}>
                    <h3 className={classes.head}>GET ACQUAINTED WITH INDUSTRY <br /> TRENDS IN REAL-TIME</h3>
                    <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                    <h4 className={classes.portSubHead}>Our newsroom is designed to keep you updated about every major or minor breakthrough in the related industries.</h4>
                </Container>

                {/* only slider */}

                <Container fixed className={classes.sliderSec}>
                    <Box className={classes.arrows} >
                        <img src={'./images/Group 82851.svg'} />
                        <img src={'./images/Group 82850.svg'} />
                    </Box>
                    <Slider {...settings} className={classes.slider}>
                        {/* CARDS */}

                        <Box className={classes.card} >
                            <img className={classes.cardImage} src={'./images/thisisengineering-raeng-sbVu5zitZt0-unsplash.png'} alt="Robot Hand" />

                            <Box className={classes.cardTxt}>
                                <Button className={classes.smallBtn} > CASE STUDIES </Button>
                                <h6 className={classes.cardHead}>Heading</h6>
                                <p className={classes.cardSubHead}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/#" className={classes.readMore}>Read More</a>
                            </Box>
                        </Box>
                        <Box className={classes.card} >
                            <img className={classes.cardImage} src={'./images/nasa-Q1p7bh3SHj8-unsplash.png'} alt="Robot Hand" />

                            <Box className={classes.cardTxt}>
                                <Button className={classes.smallBtn}> CASE STUDIES </Button>
                                <h6 className={classes.cardHead}>Heading</h6>
                                <p className={classes.cardSubHead}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/#" className={classes.readMore}>Read More</a>
                            </Box>
                        </Box>
                        <Box className={classes.card} >
                            <img className={classes.cardImage} src={'./images/thisisengineering-raeng-Kzx7m3JwkcQ-unsplash.png'} alt="Robot Hand" />

                            <Box className={classes.cardTxt}>
                                <Button className={classes.smallBtn}> CASE STUDIES </Button>
                                <h6 className={classes.cardHead}>Heading</h6>
                                <p className={classes.cardSubHead}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/#" className={classes.readMore}>Read More</a>
                            </Box>
                        </Box>
                        <Box className={classes.card} >
                            <img className={classes.cardImage} src={'./images/nasa-Q1p7bh3SHj8-unsplash.png'} alt="Robot Hand" />

                            <Box className={classes.cardTxt}>
                                <Button className={classes.smallBtn}> CASE STUDIES </Button>
                                <h6 className={classes.cardHead}>Heading</h6>
                                <p className={classes.cardSubHead}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/#" className={classes.readMore}>Read More</a>
                            </Box>
                        </Box>
                        <Box className={classes.card} >
                            <img className={classes.cardImage} src={'./images/nasa-Q1p7bh3SHj8-unsplash.png'} alt="Robot Hand" />

                            <Box className={classes.cardTxt}>
                                <Button className={classes.smallBtn}> CASE STUDIES </Button>
                                <h6 className={classes.cardhead}>Heading</h6>
                                <p className={classes.cardSubHead}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/#" className={classes.readMore}>Read More</a>
                            </Box>
                        </Box>
                        <Box className={classes.card} >
                            <img className={classes.cardImage} src={'./images/nasa-Q1p7bh3SHj8-unsplash.png'} alt="Robot Hand" />

                            <Box className={classes.cardTxt}>
                                <Button className={classes.smallBtn}> CASE STUDIES </Button>
                                <h6 className={classes.cardHead}>Heading</h6>
                                <p className={classes.cardSubHead}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/#" className={classes.readMore}>Read More</a>
                            </Box>
                        </Box>

                    </Slider>
                </Container>
            </>
        )
    }
}
