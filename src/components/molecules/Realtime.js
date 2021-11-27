import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styled.css'
import { makeStyles, Container, Box, Button } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos, KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import { GeneralHeading, MainContainer } from '../atoms'
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
    realText: {
        marginTop: '10%',
        [theme.breakpoints.down('sm')]: {
            margin: "20% auto"
        },
    },
    sliderSec: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '3%'
    },
    box: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {

        },
    },
    btn: {
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        border: '2px solid #182AC3',
        marginTop: '10%',
        color: '#182AC3',
        "&:hover": {
            background: '#182AC3',
            color: 'white'
        },
        [theme.breakpoints.down('sm')]: {
            width: '40px',
            height: '40px',
        },
    },

    //slider section
    slider: {
        width: '100%',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    card: {
        boxShadow: '0px 0px 20px #0000001F',
        margin: "0% 1rem",
        borderBottom: '3px solid #354B9C',
        background: 'white',
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        }
    },
    cardImage: {
        width: '100%',
        height: '100%',

    },
    cardTxt: {
        padding: '5%'
    },
    smallBtn: {
        font: 'normal normal normal .7rem Access',
        background: '#182AC3',
        border: 'none',
        color: 'white',
        padding: '1% 2%',
        '&:hover': {
            color: '#182AC3',
            fontWeight: 'bold'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '.6rem'
        }
    },
    cardHead: {
        // font: 'normal normal normal 1.1rem Access',
        color: 'black',
        marginTop: '3%',
        fontWeight: 'bold'

    },
    cardSubHead: {
        color: 'black',
        marginTop: '3%'
    },
    readMore: {
        // font: 'normal normal normal 1.2rem BebasNeue',
        color: '#182AC3',
        fontFamily: 'BebasNeue',
        marginTop: '3%',
    },
    filters: {
        display: 'flex',
        marginLeft: '70px',
        "& h6": {
            color: '#182AC3',
            fontWeight: 'bold',
            marginRight: '3%',
            cursor: 'pointer',
            "&:hover": {
                color: '#D9393E'
            }
        },
        [theme.breakpoints.down('sm')]: {
            // fontSize:'1rem',
            marginLeft: '0%',

        }
    },
    boxes: {
        margin: "1% 1rem",
        width: '17vw',
        height: '17vw',
        boxShadow: '0px 0px 20px #0000001F',
        background: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: "2rem",
        '& h4': {
            color: 'black'
        },
        '& img': {
            width: '100%',
            maxHeight: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '12rem',
            height: '12rem'
        },


    },
    imgBox: {
        height: "100%",
    },
    iconBox: {
        margin: '15% 0%',
        width: '100%',
        '& img': {
            width: '100%',
            maxHeight: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        }
    }
}))


export function Realtime({
    data,
    squarecarddata,
    mainhead,
    title,
    title1,
    filters,
    image,
    subtitle,
    subtitle1,
    cases,
    redline,
    grpicons,
    br
}) {
    const classes = useStyles()

    const sliderRef = useRef();

    const next = () => {
        sliderRef.current.slickNext();
    };
    const previous = () => {
        sliderRef.current.slickPrev();
    };
    {
        var settings = {
            // dots: true,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
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
                        slidesToScroll: 1,
                        // dots: true,
                    }
                }
            ]
        };

        return (
            <>

                <MainContainer>
                    {/* only slider */}
                    <Container fixed className={classes.realText}>
                        <GeneralHeading
                            title={title}
                            title1={title1}
                            image={image}
                            subtitle={subtitle}
                            subtitle1={subtitle1}
                            redline={redline}
                            br={br}
                        />
                        {
                            filters ? <Box className={classes.filters}>
                                <h6>All</h6>
                                <h6>NEWS & EVENTS</h6>
                                <h6>CSR</h6>
                                <h6>BLOGS</h6>
                                <h6>CASE STUDIES</h6>
                            </Box> : ''
                        }

                        <Box className={classes.sliderSec}>

                            <Box className={classes.box}>

                                {/* <img style={{ margin: '20% 0%' }} src={"./images/Group 82850.svg"} onClick={previous} />
                                    <img src={"./images/Group 82851.svg"} onClick={next} /> 
                                */}
                                {/* <ArrowBackIos className={classes.btn}/> */}


                                <Box><Fade left><KeyboardArrowLeft className={classes.btn} onClick={previous} /></Fade></Box>
                                <Box><Fade right><KeyboardArrowRight className={classes.btn} onClick={next} /></Fade></Box>
                            </Box>

                            <Slider ref={sliderRef} {...settings} className={classes.slider}>

                                {/* CARDS */}

                                {
                                    data ? data.map((item, index) => {
                                        return (
                                            <Box>
                                                <Box className={classes.card} >
                                                    <Fade bottom><img className={classes.cardImage} src={item.images} alt="Robot Hand" /> </Fade>
                                                    <Box className={classes.cardTxt}>
                                                        {
                                                            cases ? <Button className={classes.smallBtn} >{item.case}</Button> : ''
                                                        }
                                                        <Fade bottom>
                                                            <h4 className={classes.cardHead}>{item.head}</h4>
                                                            <h6 className={classes.cardSubHead}>{item.para}</h6>
                                                            <h4 className={classes.readMore}>
                                                                <a href="/#" >{item.read}</a>
                                                            </h4>
                                                        </Fade>
                                                    </Box>
                                                </Box>
                                            </Box>

                                        )
                                    }) : ''
                                }

                                {
                                    squarecarddata ? squarecarddata.map((item, index) => {
                                        return (
                                            <Box >
                                                <Box className={classes.boxes}>
                                                    <Box className={classes.imgBox}>
                                                        <img src={item.images} alt="Mission Icon" />
                                                    </Box>
                                                    <h4>{item.subtitle} </h4>
                                                </Box>
                                            </Box>
                                        )
                                    }) : ''
                                }



                            </Slider>
                        </Box>
                        {
                            grpicons ? <Box className={classes.iconBox}>
                                <Fade bottom><img src={grpicons} /></Fade>
                            </Box> : ''
                        }
                    </Container>

                </MainContainer>
            </>
        )
    }
}
