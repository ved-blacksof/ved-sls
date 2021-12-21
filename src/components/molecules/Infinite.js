import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styled.css'
import { makeStyles, Container, Box, Button } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import { GeneralHeading, MainContainer } from '../atoms'
import Fade from 'react-reveal/Fade';
import clsx from 'clsx';
import "./molecule.css"


const useStyles = makeStyles((theme) => ({

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
        height: '200px',

        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        "& .slick-center": {
            transition: 'all 700ms ease-in-out !important',
            "& $imgBox": {
                transform: 'scale(1.3) !important',  //for red line
            }
        }
    },
    images: {
        maxHeight: '100%',
        width: '100%',
    },

    boxes: {
        width: '80%',
        height: '200px',
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0% 10%',
        cursor: 'pointer',
        transition: 'all 300ms ease-in-out',
        transform: 'width 600ms ease-in-out',  //for red line
        [theme.breakpoints.down('sm')]: {
            // width: '12rem',
            // height: '12rem'
        },
        '& h4': {
            color: 'black'
        },
        "&:hover": {
            transform: 'scale(1.1)'
        }

    },
    imgBox: {
        width: '70%',
        transition: 'all 600ms ease-in-out',
        // marginBottom: '2%'
    },
    image: {
        width: '100%',
        maxHeight: '100%'
    },

}))


export function Infinite({
    data,
    data1,
    squarecarddata,
    mainhead,
    maintitle,
    title,
    title1,
    filters,
    image,
    style,
    subtitle,
    subtitle1,
    cases,
    download, // to download certifications
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
            className: "center",
            centerMode: true,
            infinite: true,
            // centerPadding: "200px",
            arrows: false,
            speed: 2000,
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 3,
            autoplay: true,
            autoplaySpeed: 4000,
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
                            maintitle={maintitle}
                            title={title}
                            title1={title1}
                            image={image}
                            subtitle={subtitle}
                            subtitle1={subtitle1}
                            redline={redline}
                            br={br}
                        />

                        <Box className={classes.sliderSec}>

                            {/* <Box className={clsx(classes.box)} style={style} >
                                <Box><Fade left><KeyboardArrowLeft className={classes.btn} onClick={previous} /></Fade></Box>
                                <Box><Fade right><KeyboardArrowRight className={classes.btn} onClick={next} /></Fade></Box>
                            </Box> */}

                            <Slider ref={sliderRef} {...settings} className={classes.slider}>

                                {
                                    squarecarddata ? squarecarddata.map((item, index) => {
                                        return (
                                            < >
                                                <Box>
                                                    <a href={item.link} style={{ textDecoration: 'none' }} target="_blank">
                                                        <Box className={classes.boxes}>
                                                            <Box className={classes.imgBox}>
                                                                <img className={classes.image} src={item.images} alt="Mission Icon" />
                                                            </Box>
                                                            {/* <h4>{item.subtitle} </h4> */}
                                                        </Box>
                                                    </a>
                                                </Box>
                                            </>
                                        )
                                    }) : ''
                                }
                            </Slider>
                        </Box>

                    </Container>

                </MainContainer>
            </>
        )
    }
}
