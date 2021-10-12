import React from 'react'
import { Box, Container } from "@material-ui/core";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, AutoPlay, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { makeStyles, Button } from '@material-ui/core'
import { GeneralHeading } from '../atoms'


const useStyles = makeStyles((theme) => ({
    realText: {
        marginTop: '10%',
        [theme.breakpoints.down('xs')]: {
            margin: "20% auto"
        }
    },
    sliderSec: {
        height:'fit-content',
        [theme.breakpoints.down('xs')]: {
            height:'60vh'
        }
    },
    card: {
        boxShadow: '0px 2px 5px black',
        width: '25%',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: "1rem",
        padding:'2%',
        [theme.breakpoints.down("xs")]: {
            width: '80%',
            margin: "3rem",
        }
    },
    cardImage: {
        width: '100%',
        maxHeight: '100%',
    },
    cardTxt: {
        textAlign: 'center'
    },
    cardHead: {
        font: 'normal normal normal 1.5rem Access',
        color: 'black',
    },
    cardSubHead: {
        color: 'black',

    },
    readMore: {
        font: 'normal normal normal 1.4rem BebasNeue',
        color: '#003189'
    }

}))

export function Offerings({
    data, head1, head2, subhead, read, mainhead,

}) {
    // const plugins = [new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: true })];

    const Paginations = [new Pagination({ type: 'bullet' })]

    const Arrows = [new Arrow({ type: 'bullet' })]

    const classes = useStyles()

    return (
        <Container className={classes.realText}>
            <GeneralHeading
                title="LOCCARTO"
                subtitle="Keep a close tab on what matters to you with GPS-free Geolocation Tracking"
                subtitle1="Loccarto is an RF Independent Geolocation Tracking solution that offers GPS-free
                             tracking capabilities across IoT and a wide spectrum of applications. Reinvent asset tracking,
                            smart industry application, and much more with this business-first cloud offering."
            />

            <Container fixed className={classes.sliderSec}>

                <Flicking
                    plugins={Paginations}
                    plugins={Arrows}
                    defaultIndex='1'
                    circular={true}>

                    {
                        data.map((item, index) => {
                            return (
                                <Box className={classes.card} >

                                    <Box style={{ width: '80%' }}>
                                        <img className={classes.cardImage} src={item.images} alt="Robot Hand" />
                                    </Box>
                                    <Box className={classes.cardTxt}>
                                        {/* <Button className={classes.smallBtn} >{item.case}</Button> */}
                                        {/* <h4 className={classes.cardHead}>{item.title}</h4> */}
                                        <h6 className={classes.cardSubHead}>{item.subtitle}</h6>
                                        {/* <a href="/#" className={classes.readMore}>{item.rea}</a> */}
                                    </Box>
                                </Box>

                            )
                        })
                    }

                    <ViewportSlot className={classes.viewBox} style={{ border: '2px solid red' }}>
                        {/* <span className="flicking-arrow-prev"></span>
                        <span className="flicking-arrow-next"></span> */}
                        <img className="flicking-arrow-next pos" src={'./images/Group 82851.svg'} />
                        <img className="flicking-arrow-prev pos" src={'./images/Group 82850.svg'} />
                    </ViewportSlot>
                </Flicking>
            </Container>
        </Container>

    )
}