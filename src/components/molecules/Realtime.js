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
import './molecule.css'


const useStyles = makeStyles((theme) => ({
    realText: {
        margin: '15% auto',
        [theme.breakpoints.down('sm')]: {
            margin: "20% auto",
            overflow: 'hidden'
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
    box3: {
        opacity: '0',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            flexDirection: 'column',
            opacity: '1'
        },
    },
    btn: {
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #182AC3',
        marginTop: '10%',
        color: '#182AC3',
        cursor: 'pointer',
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
        margin: "1% 1rem",
        borderBottom: '3px solid #182AC3',
        background: 'white',
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        }
    },
    cardImage: {
        height: '15vw',
        width: '100%',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            height: '50vw',
        }
    },
    cardImage1: {
        height: '15vw',
        width: '100%',
        padding: '5% 8%',
        textAlign: 'center',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
        },
        [theme.breakpoints.down('xs')]: {
            height: '50vw',
        }
    },
    images1: {
        height: '100%',
        maxWidth: '100%',
        margin: '0% auto'
    },
    images: {
        maxHeight: '100%',
        width: '100%',
        margin: '0% auto'

    },
    cardTxt: {
        padding: '5%'
    },
    smallBtn: {
        font: 'normal normal normal .7rem Access',
        background: '#182AC3',
        border: 'none',
        color: 'white',
        padding: '8px 15px',
        '&:hover': {
            background: 'blue'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '.6rem'
        }
    },
    cardHead: {
        color: 'black',
        marginTop: '1%',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            // height:'2rem',
        }

    },
    cardSubHead: {
        color: 'black',
        marginTop: '3%'
    },
    readMore: {
        // font: 'normal normal normal 1.8rem BebasNeue',
        marginTop: '3%',
        "& a": {
            color: '#182AC3',
            // textDecoration:'none'
        }
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
            marginLeft: '0%',

        }
    },
    boxes: {
        width: '18vw',
        height: '19vw',
        border: '1px solid #dcdcdc70',
        boxShadow: '0px 0px 10px #00000017',
        background: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: "1rem",
        margin: '0% 4%',
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 300ms ease-in-out',
        transform: 'width .6s ease-in-out',  //for red line
        [theme.breakpoints.down('md')]: {
            width: '20vw',
            height: '21vw',
        },
        [theme.breakpoints.down('sm')]: {
            width: '12rem',
            height: '12rem'
        },
        '& h4': {
            color: 'black',
            lineHeight: '1.2'
        },
        '& h6': {
            color: 'black'
        },
        "&::before": {
            content: "''",
            height: '5px',
            width: '0',
            background: '#DE141A',
            position: 'absolute',
            bottom: '5%',
            left: '5%',
            transition: 'all 800ms ease-in-out',
            [theme.breakpoints.down('sm')]: {
                height: '5px'
            }
        },
        "&:hover": {
            color: '#182AC3',
            boxShadow: '0px 0px 10px #00000017',
            border: '1px solid white',
            "& $imgBox": {
                transform: 'scale(1.15)'
            },
            "&::before": {
                height: '5px',
                width: '90%',
                opacity: '1',
                [theme.breakpoints.down('sm')]: {
                    height: '5px'
                }
            },
        },
    },
    imgBox: {
        width: '80%',
        transition: 'all 500ms ease-in-out',
        marginBottom: '6%',
    },
    image: {
        width: '100%',
        maxHeight: '100%'
    },
    // imgBox: {
    //     height: "100%",
    //     transition: 'all .3s ease-in-out',
    //     "& img": {
    //         transition: 'all 500ms ease-in-out',
    //         width: '100%',
    //         maxHeight: '100%',
    //     },
    // },
    // image: {
    //     width: '100%',
    //     maxHeight: '100%'
    // },
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
    },

    //red line
    reddiv: {
        transition: 'all .3s linear',
        overflow: 'hidden',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            height: '2px',
            background: 'red'
        },
        "&::before": {
            content: '""',
            height: '6px',
            width: '0%',
            position: 'absolute',
            top: '0',
            background: 'black'
        },
        "&::after": {
            content: '""',
            height: '6px',
            position: 'absolute',
            top: '0',
            width: '100%',
        }
    },

    "@keyframes redbar": {
        "0%": {
            opacity: 0,
            transform: "translateX(-200%)"
        },
        "100%": {
            opacity: 1,
            transform: "translateX(0)"
        },
    },
    "@keyframes redbar1": {
        "100%": {
            opacity: 0,
            transform: "translateX(-200%)"
        },
        "0%": {
            opacity: 1,
            transform: "translateX(0)"
        },
    },
    eco: {

        "& img": {
            width: '100%'
        }
    }
}))


export function Realtime({
    data,
    data1,
    squarecarddata,
    carouselIndicatorSM,
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
            // dots: true,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 960,
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
                        {
                            filters ? <Box className={classes.filters}>
                                <h6>All</h6>
                                <h6>NEWS & EVENTS</h6>
                                <h6>CSR</h6>
                                <h6>BLOGS</h6>
                                <h6>CASE STUDIES</h6>
                            </Box> : ''
                        }

                        <Box className={clsx(classes.sliderSec, "sliderBox")}>

                            {
                                carouselIndicatorSM ?
                                    <Box className={clsx(classes.box3)} style={style} >
                                        <Box><Fade left><KeyboardArrowLeft className={classes.btn} onClick={previous} /></Fade></Box>
                                        <Box><Fade right><KeyboardArrowRight className={classes.btn} onClick={next} /></Fade></Box>
                                    </Box>
                                    :
                                    <Box className={clsx(classes.box)} style={style} >
                                        <Box><Fade left><KeyboardArrowLeft className={classes.btn} onClick={previous} /></Fade></Box>
                                        <Box><Fade right><KeyboardArrowRight className={classes.btn} onClick={next} /></Fade></Box>
                                    </Box>
                            }

                            {/* for Solar templtes Blade 4 */}

                            {
                                data1 ?
                                    <Box className={classes.sliderSec}>
                                        {
                                            data1.map((item, index) => {
                                                return (
                                                    <Box>
                                                        <Box className={classes.card} >
                                                            <Fade bottom>
                                                                <Box className={classes.cardImage}>
                                                                    <img className={classes.images} src={item.images} alt="carousel Image" />
                                                                </Box>
                                                            </Fade>
                                                            <Box className={classes.cardTxt}>
                                                                <Fade bottom>
                                                                    {
                                                                        cases ? <Button className={classes.smallBtn} >{item.case}</Button> : ''
                                                                    }
                                                                    <h4 className={classes.cardHead}>{item.head}</h4>
                                                                    <h6 className={classes.cardSubHead}>{item.para}</h6>
                                                                    <h4 className={classes.readMore}>
                                                                        <a href="/" >{item.read}</a>
                                                                    </h4>
                                                                    {
                                                                        download ? <Button className={classes.smallBtn} > Download </Button> : ''
                                                                    }
                                                                </Fade>
                                                            </Box>
                                                        </Box>
                                                    </Box>

                                                )
                                            })
                                        }
                                    </Box>
                                    : ''
                            }

                            <Slider ref={sliderRef} {...settings} className={classes.slider}>

                                {/* CARDS */}
                                {
                                    data ? data.map((item, index) => {
                                        return (
                                            <Box>
                                                <Box className={classes.card} >
                                                    <Fade bottom>
                                                        {
                                                            item.images ?
                                                                <Box className={classes.cardImage}>
                                                                    <img className={classes.images} src={item.images} alt="carousel Image" />
                                                                </Box>
                                                                :
                                                                <Box className={classes.cardImage1}>
                                                                    <img className={classes.images1} src={item.logo} alt="carousel Image" />
                                                                </Box>
                                                        }
                                                    </Fade>
                                                    <Box className={classes.cardTxt}>
                                                        <Fade bottom>
                                                            {
                                                                item.case ? <Button className={classes.smallBtn} >{item.case}</Button> : ''
                                                            }
                                                            <h4 className={classes.cardHead}>{item.head}</h4>
                                                            <h6 className={classes.cardSubHead}>{item.para}</h6>
                                                            <p className={classes.readMore}>
                                                                <a href={`${item.read}`} target="_blank">DOWNLOAD</a>
                                                            </p>
                                                            {
                                                                download ?
                                                                    <Button
                                                                        className={classes.smallBtn}
                                                                        href={item.href}
                                                                        onclick={() => window.open(`${item.href}`, '_blank')}
                                                                        target="_blank"
                                                                    >
                                                                        {download}
                                                                    </Button> : ''
                                                            }
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
                                            < >
                                                {
                                                    item.link ?
                                                        <Box>
                                                            <a href={item.link} style={{ textDecoration: 'none' }} target="_blank">
                                                                <Box className={classes.boxes}>
                                                                    <Box className={classes.imgBox}>
                                                                        <img className={classes.image} src={item.images} alt="Mission Icon" />
                                                                    </Box>
                                                                    <h4>{item.subtitle} </h4>
                                                                </Box>
                                                            </a>
                                                        </Box>
                                                        :

                                                        <Box className={classes.boxes}>
                                                            <Box className={classes.imgBox}>
                                                                <img className={classes.image} src={item.images} alt="Mission Icon" />
                                                            </Box>
                                                            <h4>{item.subtitle} </h4>
                                                        </Box>
                                                }
                                            </>
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
