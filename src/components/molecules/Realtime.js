import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styled.css'
import { makeStyles, Container, Box, Button } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    realText: {
        marginTop: '10%',
        [theme.breakpoints.down('xs')]:{
            margin:"20% 0%"
        }
    },
    mainHead:{
        color:'black',

    },
    head: {
        color: 'black'
    },
    redLine: {
        margin: '1% 0%'
    },
    subHead: {
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
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '3%'
    },
    slider: {
        width: '100%',
        justifyContent:'space-between'

    },
    card: {
        boxShadow: '0px 0px 2px black',
        margin:"0% 2rem",
        border:'2px solid red',
    },
    cardImage: {
        width: '100%',
        height: '100%',

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
        font: 'normal normal normal 1.5rem Access',
        color: 'black',

    },
    cardSubHead: {
        color: 'black'
    },
    readMore: {
        font: 'normal normal normal 1.4rem BebasNeue',
        color: '#003189'
    }
}))

export function Realtime({
    head1, head2, subhead, read, data, mainhead
}) {

    const classes = useStyles()
    {
        var settings = {
            dots: true,
            arrows: true,
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
                    <h2 className={classes.mainHead}> {mainhead}</h2>
                    <h3 className={classes.head}>{head1} <br /> {head2}</h3>
                    <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                    <h4 className={classes.subHead}>{subhead}</h4>
                </Container>

                {/* only slider */}

                <Container fixed className={classes.sliderSec}>
                    <Box className={classes.arrows} >
                        <img src={'./images/Group 82851.svg'} />
                        <img src={'./images/Group 82850.svg'} />
                    </Box>
                    <Slider {...settings} className={classes.slider}>

                        {/* CARDS */}

                        {
                            data.map((item, index) => {
                                return (
                                    <Box className={classes.card} >
                                        <img className={classes.cardImage} src={item.images} alt="Robot Hand" />

                                        <Box className={classes.cardTxt}>
                                            <Button className={classes.smallBtn} >{item.case}</Button>
                                            <h4 className={classes.cardHead}>{item.head}</h4>
                                            <h6 className={classes.cardSubHead}>{item.para}</h6>
                                            <a href="/#" className={classes.readMore}>{item.read}</a>
                                        </Box>
                                    </Box>

                                )
                            })
                        }



                    </Slider>
                </Container>
            </>
        )
    }
}
