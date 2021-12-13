import React from 'react'
import { Box, Container, makeStyles, Button } from "@material-ui/core";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomButtonGroupAsArrows } from '../atoms'

const useStyles = makeStyles((theme) => ({
    realText: {
        marginTop: '10%',
        width:'70%',
        [theme.breakpoints.down('sm')]:{
            width:'90%',
            margin: "20% 0%",
        },
        [theme.breakpoints.down('xs')]: {
        }
    },
    sliderSec: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: '3% auto'
    },
    slider: {
        width: '100%',
        justifyContent: 'space-between'

    },
    card: {
        boxShadow: '0px 0px 5px black',
        margin: "0% 2rem",
    },
    cardImage: {
        width: '100%',
        height: '100%',

    },
    cardTxt: {
        padding: '5%',
        background: 'white'
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

export function Democarousel({ data }) {
    const classes = useStyles()
    return (
        <Container fixed className={classes.realText} style={{
            position: 'relative'
        }}>
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-padding-bottom"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={true}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                customButtonGroup={<CustomButtonGroupAsArrows />}
                showDots={false}
                sliderClass=""
                slidesToSlide={3}
                swipeable>
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
            </Carousel>
        </Container>
    )
}
