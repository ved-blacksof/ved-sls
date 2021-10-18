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
    reaserchMain: {
        marginTop: "10%",
        position: 'relative'
    },
    flicks: {
        width: '80%',
        marginTop:'3%'
    },
    BoxWidth: {
        height: '50vh',
        width: '100%',
        margin: "0rem 5rem",

        [theme.breakpoints.down('sm')]: {
            height: '40vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '30vh',
        }
    },
    BoxImages: {
        height: '100%',
        width: '100%',
        borderRadius: '1%'
    },
    
    redLine:{
        margin:'1% 0%'
    },
    subHead: {
        width: '60%',
        [theme.breakpoints.down('xs')]:{
            width:'80%'
        }
    },
    txtReserch: {
        zIndex:'1',
        [theme.breakpoints.down('xs')]: {
            fontSize:'5rem'
        }
    }

}))

export function Research({
    head1,
    head2,
    subhead1,
    subhead2,
    
}) {

    const classes = useStyles()

    const Paginations = [new Pagination({ type: 'bullet' })]

    return (

        <Container fixed className={classes.reaserchMain}>
            <h3 className={classes.head}>INTEGRATION SPECIALIST ACROSS <br/> VARIOUS VERTICALS</h3>
            <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />

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
            <h1 className={classes.txtReserch}>Research</h1>
        </Container>
    )
}
