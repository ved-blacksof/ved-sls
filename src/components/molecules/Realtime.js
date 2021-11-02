import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styled.css'
import { makeStyles, Container, Box, Button } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import { GeneralHeading } from '../atoms'


const useStyles = makeStyles((theme) => ({
    realText: {
        marginTop: '10%',
        [theme.breakpoints.down('xs')]: {
            margin: "20% 0%"
        }
    },
    sliderSec: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '3%'
    },
    box: {
        width: '5%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            width: '20%'
        },
    },
    btn: {
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #354B9C',
        borderRadius: '0px',
        marginTop: '10%',
        color: '#354B9C',
        "&:hover": {
            background: '#354B9C',
            color: 'white'
        }
    },
    slider: {
        width: '95%',
        justifyContent: 'space-around',
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    },
    card: {
        boxShadow: '0px 0px 40px #0000001F',
        margin: "0% 1rem",
        borderBottom: '3px solid #354B9C',
        background: 'white',
        [theme.breakpoints.down('xs')]: {
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
        font: 'normal normal normal .5rem Access',
        background: '#354B9C',
        border: 'none',
        color: 'white',
        padding: '1% 2%',
        '&:hover': {
            color: '#354B9C',
            fontWeight: 'bold'
        }
    },
    cardHead: {
        font: 'normal normal normal 1.1rem Access',
        color: 'black',
        marginTop: '3%'

    },
    cardSubHead: {
        color: 'black',
        marginTop: '3%'
    },
    readMore: {
        font: 'normal normal normal 1rem BebasNeue',
        color: '#354B9C',
        paddingTop: '1rem',
    },
    filters: {
        display: 'flex',
        margin: '0% 5%',
        "& h6": {
            color: '#354B9C',
            fontWeight: 'bold',
            marginRight: '3%',
            cursor: 'pointer',
            "&:hover": {
                color: '#D9393E'
            }
        },
    },
    boxes: {
        margin: "3%",
        width: '15rem',
        height: '15rem',
        boxShadow: '0px 0px 20px #0000000F',
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
    },
    imgBox:{
        height:"80%",
    },
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
                            <img src={"./images/Group 82851.svg"} onClick={next} /> */}
                            {/* <ArrowBackIos className={classes.btn}/> */}
                            <Box className={classes.btn} onClick={previous} ><ArrowBackIos /></Box>
                            <Box className={classes.btn} onClick={next}><ArrowForwardIos /></Box>
                        </Box>

                        <Slider ref={sliderRef} {...settings} className={classes.slider}>

                            {/* CARDS */}

                            {
                                data ? data.map((item, index) => {
                                    return (
                                        <Box>
                                            <Box className={classes.card} >
                                                <img className={classes.cardImage} src={item.images} alt="Robot Hand" />

                                                <Box className={classes.cardTxt}>
                                                    {
                                                        cases ? <Button className={classes.smallBtn} >{item.case}</Button> : ''
                                                    }
                                                    <h4 className={classes.cardHead}>{item.head}</h4>
                                                    <h6 className={classes.cardSubHead}>{item.para}</h6>
                                                    <a href="/#" className={classes.readMore}>{item.read}</a>
                                                </Box>
                                            </Box>
                                        </Box>

                                    )
                                }) : ''
                            }

                            {
                                squarecarddata ? squarecarddata.map((item, index) => {
                                    return (
                                        <Box style={{ padding:'2rem',}}>
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
                </Container>
            </>
        )
    }
}
