import React, { useState } from 'react'

import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import { MainContainer } from '../../atoms';
import Fade from 'react-reveal/Fade';
import clsx from 'clsx';



const useStyles = makeStyles((theme) => ({
    container1: {
        margin: '10% auto',
        // height:'40vh',
        // width:'70%',
        // [theme.breakpoints.down('xs')]: {
        //     width: '90%'
        // },
    },
    mainBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        margin: '0% 2%',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            margin: '0% 0%'
        }

    },
    boxes: {
        background: 'white',
        width: '30%',
        height: 'fit-content',
        boxShadow: '0px 30px 50px #00000029',
        borderBottom: '4px solid #182AC3',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        margin: '5% 1.5%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',

        },
        '& h4': {
            color: 'black'
        },
        '& img': {
            maxWidth: '100%',
            height: '100%',
        },
    },
    imgBox: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        maxHeight: '14vw',
        background: 'white',
        overflow:'hidden',
        "& img": {
            width: '100%',
            maxHeight: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            // height: 'fit-content',
            maxHeight: '50vw',
        },
    },
    head: {
        color: 'black'

    },
    portSubHead: {
        color: 'black',
        width: '60%',
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    redLine: {
        margin: '1% 0%'
    },
    textBox: {
        height: 'fit-content',
        padding: '1rem',
        [theme.breakpoints.down('sm')]: {
            padding: '1rem',
        }
    },
    productName: {
        // font: 'normal normal bold 1rem Access',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',

    },
    productDetail: {
        // height: '9rem',
        overflow: 'hidden',
        color: 'black',
        marginTop: '.5rem',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            height: '10rem',
        },
    },
    productDetailHeight: {
        height: 'fit-content',
        display: 'inline',
        color: 'black',
        marginTop: '.5rem',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            // height: '4.8rem',
        },
    },
    readMore: {
        marginTop: '10%',
        textAlign: 'left',
        cursor: 'pointer',
        fontFamily: 'BebasNeue',
        color: '#182AC3 !important',
        "& a": {

        }
    }
}))

export function GamingSoftware({
    maintitle,
    title,
    subtitle,
    redline,
    data,
    read
}) {

    const classes = useStyles()

    const [showtext, setShowtext] = useState(false)
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)


    const [readstate, setReadstate] = useState("READ MORE")
    const [readstate1, setReadstate1] = useState("READ MORE")

    const navref = React.useRef('productDetail')

    navref.current = showtext

    const handleClick = () => {
        show === false ? setReadstate("READ LESS") || setShow(true) : setReadstate("READ MORE") || setShow(false)
    }
    const handleClick1 = () => {
        show1 === false ? setReadstate1("READ LESS") || setShow1(true) : setReadstate1("READ MORE") || setShow1(false)

    }

    return (

        <MainContainer>
            <Container fixed className={classes.container1}>
                <Box className={classes.paraBox}>
                    <h2 style={{ color: 'black' }}>SOFTWARE OFFERING</h2>
                </Box>


                <Box className={classes.mainBox}>
                    <Box className={classes.boxes}>

                        <Box className={classes.imgBox}>
                            <Fade bottom> <img src={"./images/gaming/Gaming-Iot-targeting-App.png"} alt="Product images" />  </Fade>
                        </Box>

                        <Box className={classes.textBox}>
                            <Fade bottom>  <h4 className={classes.productName} >IoT Targeting Mobile App</h4>  </Fade>


                            <Fade bottom>
                                <h6 className={clsx(classes[navref.current])} style={{ color: 'black', textAlign: 'left', }}>
                                    The IoT Targeting Mobile App is an exclusively designed Android and iOS app that takes the IoT Targeting gaming experience to the next level.
                                    {
                                        show ?
                                            <h6 style={{ color: 'black', textAlign: 'left', display: 'inline' }}>
                                                The application facilitates both, online and offline connection of wireless targets and provides a global platform for competitive and group gaming using cloud. The app also provides user-friendly features such as adjusting target settings, choosing gaming modes, and automatically deriving scores.
                                            </h6> : ''
                                    }
                                </h6>
                            </Fade>

                            <Fade bottom>
                                <h4 className={classes.readMore}>
                                    <a
                                        onClick={handleClick}
                                    >{readstate}</a>
                                </h4>
                            </Fade>
                        </Box>
                    </Box>



                    {/* <Box className={classes.boxes}>

                        <Box className={classes.imgBox}>
                            <Fade bottom> <img src={"./images/iot_bg_cloud4.png"} alt="Product images" />  </Fade>
                        </Box>

                        <Box className={classes.textBox}>
                            <Fade bottom>  <h4 className={classes.productName} >Smart Targets</h4>  </Fade>


                            <Fade bottom>
                                <h6 className={clsx(classes[navref.current])} style={{ color: 'black', textAlign: 'left', }}>
                                    Smart Targets are IoT Targeting App controlled reactive targets powered with
                                    advanced wireless technology for a real-time practice and gaming experience.
                                    {
                                        show1 ?
                                            <h6 style={{ color: 'black', textAlign: 'left', display: 'inline' }}>
                                                Smart targets are portable and connect with up to 20 targets. The system provides the platform for cloud and events for multi-sports experience.
                                                The system is designed to help enhance skills and provide a premise for advancement in chosen sports.
                                            </h6> : ''
                                    }
                                </h6>
                            </Fade>

                            <Fade bottom>
                                <a
                                    onClick={handleClick1}>
                                    <h4 className={classes.readMore}>
                                        {readstate1}
                                    </h4>
                                </a>
                            </Fade>
                        </Box>
                    </Box> */}

                </Box>
            </Container>
        </MainContainer >

    )
}
