import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styled.css'
import { makeStyles, Container, Box, Button } from '@material-ui/core'
import { GeneralHeading } from '../atoms'


const useStyles = makeStyles((theme) => ({
    realText: {
        marginTop: '10%',
        [theme.breakpoints.down('xs')]: {
            margin: "20% 0%"
        }
    },
    mainHead: {
        color: 'black',
    },
    sliderSec: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '3%'
    },
    box: {
        width: '10%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'column',
        margin: ' 0% 2%',
    },
    slider: {
        width: '100%',
        justifyContent: 'space-around',
        [theme.breakpoints.down('xs')]:{
            width:'80%'
        }
    },
    card: {
        boxShadow: '0px 0px 40px #0000001F',
        margin: "0% 1rem",
        borderBottom:'3px solid #354B9C',
        background:'white',
        [theme.breakpoints.down('xs')]:{
            width:'80%'
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
            fontWeight:'bold'
        }
    },
    cardHead: {
        font: 'normal normal normal 1.1rem Access',
        color: 'black',
        marginTop:'3%'

    },
    cardSubHead: {
        color: 'black',
        marginTop:'3%'
    },
    readMore: {
        font: 'normal normal normal 1rem BebasNeue',
        color: '#354B9C',
        paddingTop:'1rem',
    }
}))


export function Realtime({
    data,
    mainhead,
    title,
    image,
    subtitle,
    subtitle1,
    cases,
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
            arrows: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 2,
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

                {/* only slider */}
                <Container fixed className={classes.realText}>
                    <GeneralHeading
                        title={title}
                        image={image}
                        subtitle={subtitle}
                        subtitle1={subtitle1}
                    />

                    <Box fixed className={classes.sliderSec}>

                        
                        <Box className={classes.box}>
                            <img style={{margin:'20% 0%' }} src={"./images/Group 82850.svg"} onClick={previous} />
                            <img src={"./images/Group 82851.svg"} onClick={next} />
                        </Box>



                        <Slider ref={sliderRef} {...settings} className={classes.slider}>

                            {/* CARDS */}

                            {
                                data.map((item, index) => {
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
                                })
                            }



                        </Slider>
                    </Box>
                </Container>
            </>
        )
    }
}
