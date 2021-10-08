import React from 'react'
// import "./molecule.css";
import {
    Box,
    makeStyles,
} from '@material-ui/core';

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

import "@egjs/flicking-plugins/dist/pagination.css";

const useStyles = makeStyles((theme) => ({
    reaserchMain: {
        position: 'relative',
    },
    flicks: {
        width: '100%',
        height: '80vh',
        [theme.breakpoints.down('xs')]: {
            height: '30vh',
        }
    },
    BoxWidth:{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    BoxImages: {
        height: '80vh',
        width: '100%',
        background: `url('/images/man-worker-firld-by-solar-panels.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        paddingBottom: '3%',
        [theme.breakpoints.down('xs')]: {
            height: '30vh',
            backgroundPosition: 'top',
        }
    },
    subHead: {
        width: '100%',
        marginTop: '2%'
    },
    txt: {
        width: '40%',
        zIndex: '1',
        font: 'normal normal normal 3rem BebasNeue',
        [theme.breakpoints.down('sm')]: {
            width: '70%'
        }
    },
    subTxt: {
        width: '40%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '70%'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    // bg: {
    //     width: '100%',
    //     height: '100%',
    //     background: 'linear-gradient(rgba(0, 0, 0, 0.59),rgba(0, 0, 0, 0.59))',
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     // zIndex: '0'
    // }

}))

export function Reshape() {

    const classes = useStyles()

    const Paginations = [new Pagination({ type: 'bullet' })]

    return (

        <Box className={classes.reaserchMain}>
            <Box className={classes.flicks}>
                <Flicking
                    selector="center"
                    plugins={Paginations}
                    defaultIndex='0'
                    circular={true}

                >

                    <Box className={classes.BoxWidth}>
                        <Box className={classes.BoxImages} >
                            <h3 className={classes.txt}>RESHAPING THE FUTURE OF THE WORLD</h3>
                            <hr />
                            <h6 className={classes.subTxt}>We aim to leverage technology as a tool to build solutions that have the potential of bringing a transformational shift across sectors.</h6>
                            <br />
                            <h4 className={classes.subTxt}>MARKET LEADERS IN MULTIPLE PRODUCT DOMAINS</h4>
                        </Box>
                    </Box>
                    <Box className={classes.BoxWidth}>
                        <Box className={classes.BoxImages} >
                            <h3 className={classes.txt}>RESHAPING THE FUTURE OF THE WORLD</h3>
                            <hr />
                            <h6 className={classes.subTxt}>We aim to leverage technology as a tool to build solutions that have the potential of bringing a transformational shift across sectors.</h6>
                            <br />
                            <h4 className={classes.subTxt}>MARKET LEADERS IN MULTIPLE PRODUCT DOMAINS</h4>
                        </Box>
                    </Box>
                    <Box className={classes.BoxWidth}>
                        <Box className={classes.BoxImages} >
                            <h3 className={classes.txt}>RESHAPING THE FUTURE OF THE WORLD</h3>
                            <hr />
                            <h6 className={classes.subTxt}>We aim to leverage technology as a tool to build solutions that have the potential of bringing a transformational shift across sectors.</h6>
                            <br />
                            <h4 className={classes.subTxt}>MARKET LEADERS IN MULTIPLE PRODUCT DOMAINS</h4>
                        </Box>
                    </Box>


                    <ViewportSlot >
                        <span className="flicking-pagination "></span>
                    </ViewportSlot>
                </Flicking>
            </Box>

        </Box>
    )
}
