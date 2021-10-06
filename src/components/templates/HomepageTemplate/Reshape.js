import React from 'react'
// import "./molecule.css";
import {
    Box,
    Container,
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
        background:'#003189',
        border:'none'
    },
    BoxWidth: {
        height: '40vh',
        width: '100%',
        margin: "0rem 5rem",
        [theme.breakpoints.down('xs')]: {
            height: '20vh',
            width: '80%',
        }
    },
    flicks: {
        width: '100%',
        height:'80vh'
    },
    BoxImages: {
        height: '100%',
        maxWidth: '100%',
        borderRadius: '1%'
    },
    subHead: {
        width: '60%',
        marginTop: '2%'
    },
    txt: {
        zIndex:'1',
    },
    bg:{
        height:'100vh',
        background: `url('/images/man-worker-firld-by-solar-panels.png'), linear-gradient(rgba(0, 0, 0, 0.59),rgba(0, 0, 0, 0.59)) ` ,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',

    }

}))

export function Reshape() {

    const classes = useStyles()

    const Paginations = [new Pagination({ type: 'bullet' })]

    return (

        <Box className={classes.reaserchMain}>
            <Box className={classes.flicks}>
                <Flicking
                    selector="center"
                    // plugins={Fades}
                    plugins={Paginations}
                    // align="center"
                    defaultIndex='1'
                    circular={true}
                    
                >
                    <Box className={classes.BoxWidth}>
                        <div className={classes.bg} ></div>
                    </Box>

                    <Box className={classes.BoxWidth}>
                        <div className={classes.bg}></div>
                    </Box>

                    <Box className={classes.BoxWidth}>
                        <div className={classes.bg}></div>
                    </Box>

                    <Box className={classes.BoxWidth}>
                        {/* <img className={classes.BoxImages} src={'/images/side-view-of-data-analyst-pointing-with-finger-at--4DGBGUW.png'} alt="Carousel Images" data-aos="fade-up" /> */}
                        <div className={classes.bg}></div>
                    </Box>


                    <ViewportSlot >
                        <span className="flicking-pagination "></span>
                    </ViewportSlot>
                </Flicking>
            </Box>
            {/* <h2 className={classes.txt}>Research</h2> */}
        </Box>
    )
}
