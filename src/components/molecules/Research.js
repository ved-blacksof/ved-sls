import React from 'react'
import "./molecule.css";
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
    flicks: {
        width: '80%',
        marginTop:'3%'
    },
   
    BoxWidth: {
        height: '40vh',
        width: '80%',
        margin: "0rem 5rem",
        [theme.breakpoints.down('xs')]: {
            height: '20vh',
            width: '80%',
        }
    },
    
    BoxImages: {
        height: '100%',
        maxWidth: '100%',
        borderRadius: '1%'
    },
    left: {
        width: '30%',
        height: '100%',
    },
    right: {
        width: '30%',
        height: '100%',
    },
    reaserchMain: {
        marginTop: "10%",
        position: 'relative'
    },
    subHead: {
        width: '60%',
        marginTop: '2%'
    },
    txt: {
        // position:'absolute',
        // bottom:'-20%',
        zIndex:'1',
    }

}))

export function Research() {

    const classes = useStyles()

    const Paginations = [new Pagination({ type: 'bullet' })]

    return (

        <Container className={classes.reaserchMain}>
            <h3 className={classes.head}>INTEGRATION SPECIALIST ACROSS <br/> VARIOUS VERTICALS</h3>

            <h4 className={classes.subHead}>Assisting companies to avoid pitfalls in the product design and development phase, our experienced team at System Level
                Solutions uses provides innovative solutions across levels to materialize the creative perspective of a client.</h4>

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
                        <img className={classes.BoxImages} src={'/images/side-view-of-data-analyst-pointing-with-finger-at--4DGBGUW.png'} alt="Carousel Images" data-aos="fade-up" />
                    </Box>

                    <Box className={classes.BoxWidth}>
                        <img className={classes.BoxImages} src={'/images/side-view-of-data-analyst-pointing-with-finger-at--4DGBGUW.png'} alt="Carousel Images" data-aos="fade-up" />
                    </Box>

                    <Box className={classes.BoxWidth}>
                        <img className={classes.BoxImages} src={'/images/side-view-of-data-analyst-pointing-with-finger-at--4DGBGUW.png'} alt="Carousel Images" data-aos="fade-up" />
                    </Box>

                    <Box className={classes.BoxWidth}>
                        <img className={classes.BoxImages} src={'/images/side-view-of-data-analyst-pointing-with-finger-at--4DGBGUW.png'} alt="Carousel Images" data-aos="fade-up" />
                    </Box>


                    <ViewportSlot >
                        <span className="flicking-pagination "></span>
                    </ViewportSlot>
                </Flicking>
            </Box>
            <h1 className={classes.txt}>Research</h1>
        </Container>
    )
}
