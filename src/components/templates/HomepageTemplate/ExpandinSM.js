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
import { expandingData } from '../../molecules/PortfolioData'


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: '10%',
        display:'none',
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
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
        background: '#182AC3',
        padding: '4%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '8rem',
            position: 'static',
            padding: '1rem 1.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            height: '8rem',
            padding: '1rem 1.5rem',

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
    blueBoxParaHead: {
        [theme.breakpoints.down('sm')]: {
            // padding: '0rem 1rem'
        },
    },
    blueBoxPara: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            overflow: 'hidden',
            // padding: '0rem 1rem'
        },
    },
    btn: {
        color: 'white',
        border: '1px solid white',
        fontSize: '.8rem',
        marginTop: '3%'
    },
    imageBox: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            position: 'static',
            textAlign: 'center'
        },
        '& img': {
            width: '100%',
            maxHeight: '100%',
        }
    },


}))

export function ExpandinSM({
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
                                    expandingData.map((item, index) => {
                                        return (

                                            <Box className={classes.BoxWidth} key={index} data-aos="fade-up">
                                                <Box className={classes.imageBox}>
                                                    <img className={classes.image}
                                                        src={item.images}
                                                        alt="Carousel Images" />
                                                </Box>



                                                <Box className={classes.blueBox}>
                                                    <h4 className={classes.blueBoxParaHead}>{item.head}</h4>
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
