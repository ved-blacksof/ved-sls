import React from 'react'
import { makeStyles, Container, Box, Button } from '@material-ui/core'
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, AutoPlay, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "@egjs/flicking-plugins/dist/pagination.css";
import { GeneralHeading, MainContainer } from '../../atoms'
import Fade from 'react-reveal/Fade';


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
        width: '100%',
        marginTop: '3%',
        // [theme.breakpoints.down('sm')]: {
        //     height: '40vh',
        //     width: '100%'
        // },
        // [theme.breakpoints.down('xs')]: {
        //     height: '30vh',
        // },
        "& .flicking-pagination": {
            display: 'flex',
            flexDirection: 'column',
            bottom: '8%',
            left: '11%',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'row',
                position: 'static',
                justifyContent: 'center',
            },
        },
        "& .flicking-pagination-bullet": {
            height: '1.5rem !important',
            width: '.32rem !important',
            margin: '.2rem !important',
            borderRadius: '10px !important',
            backgroundColor: 'blue !important',
            [theme.breakpoints.down('sm')]: {
                height: '.2rem !important',
                width: '.8rem !important',
                borderRadius: '10px !important',
                margin: '.5rem .2rem !important',

            },
        },
        "& .flicking-pagination-bullet-active": {
            backgroundColor: '#ff0000 !important',
            borderRadius: '10px !important',

        }

    },
    BoxWidth: {
        width: '100%',
        padding: '22% 0%',
        margin: "0% 2%",
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            padding: '0%',
        },
    },


    blueBox: {
        position: 'absolute',
        width: '23vw',
        height: '20vw',
        background: '#182AC3',
        padding: '4%',
        top: '30%',
        left: '14%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '8rem',
            position: 'static',
            padding: '0%',
        },
        [theme.breakpoints.down('xs')]: {
            height: '10rem',
        },
    },
    posRelative: {

        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            padding: '10px 0%'
        },
    },
    iconBox: {
        width: '8vw',
        height: '7vw',
        background: '#DE141A',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '-20%',
        left: '-25%',
        zIndex: '1',
        [theme.breakpoints.down('sm')]: {
            width: '3rem',
            height: '3rem',
            left: '5%',
            top: '-100%',
        }
    },
    icon: {
        width: '55%'
    },
    blueBoxPara: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.8rem',
            overflow: 'hidden',
            padding: '1rem'
        },
    },
    btn: {
        color: 'white',
        border: '1px solid white',
        fontSize: '.8rem',
        marginTop: '3%'
    },
    imageBox: {
        width: '60%',
        height: '100%',
        position: 'absolute',
        top: '5%',
        left: '40%',
        zIndex: '-1',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '60vw',
            position: 'static',
            textAlign: 'center'
        },
        '& img': {
            maxWidth: '100%',
            height: '100%',
        }
    },


}))

export function CSRcarousel({
    data
}) {

    const classes = useStyles()

    const autoPlugins = new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true });

    const Paginations = new Pagination({ type: 'bullet' })

    const plugins = [autoPlugins, Paginations]

    return (
        <>
            <MainContainer>
                <Container fixed className={classes.mainContainer}>

                    <GeneralHeading
                        title="CSR"
                        subtitle="Helping the world be a better place"
                        redline="redline"
                    />

                    <Box className={classes.flicks}>
                        <Fade bottom>
                            <Flicking
                                duration='2000'
                                selector="center"
                                // plugins={Fades}
                                plugins={plugins}
                                // align="center"
                                defaultIndex='1'
                                circular={true}

                            >

                                {
                                    data.map((item, index) => {
                                        return (

                                            <Box className={classes.BoxWidth} data-aos="fade-up">
                                                <Box className={classes.imageBox}>
                                                    <img className={classes.image}
                                                        src={item.images}
                                                        alt="Carousel Images" />
                                                </Box>


                                                <Box className={classes.blueBox}>
                                                    <Box className={classes.posRelative}>
                                                        <Box className={classes.iconBox}>
                                                            <img className={classes.icon} src={'./images/Layer 2.svg'} />
                                                        </Box>
                                                        {/* <Button variant='outlined' className={classes.btn}>Read More</Button> */}
                                                    </Box>
                                                    <h6 className={classes.blueBoxPara}>{item.para}</h6>
                                                </Box>

                                            </Box>
                                        )
                                    })
                                }
                                <ViewportSlot >
                                    <span className="flicking-pagination "></span>
                                </ViewportSlot>
                            </Flicking>
                        </Fade>
                    </Box>

                </Container>
            </MainContainer>
        </>
    )
}
