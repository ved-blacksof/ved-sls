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
        width: '90%',
        marginTop:'3%'
    },
    BoxWidth: {
        padding:'0% 3% 8% 6%',
        position: 'relative',
        width: '100%',
    },
    BoxImages: {
        height: '100%',
        width: '100%',
    },

    redLine: {
        margin: '1% 0%'
    },
    subHead: {
        width: '60%',
        [theme.breakpoints.down('xs')]: {
            width: '80%'
        }
    },
    txtReserch: {
        position: 'absolute',
        bottom: '-15%',
        left:'-6%',
        fontSize: '8rem',
        [theme.breakpoints.down('sm')]: {
            // fontSize: '4rem'
            display:'none'
        },
    }
}))

export function Research({
    generalheadingblue,
    title,
    subtitle,
    data,

}) {

    const classes = useStyles()

    const Paginations = [new Pagination({ type: 'bullet' })]

    return (

        <Container fixed className={classes.reaserchMain} >
            {
                generalheadingblue ?
                    <>
                        <h3 className={classes.head}>{title}</h3>
                        <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                        <h4 className={classes.subHead}>{subtitle}</h4>
                    </> : ''
            }

            <Box className={classes.flicks}>
                <Flicking
                    selector="center"
                    // plugins={Fades}
                    plugins={Paginations}
                    // align="center"
                    defaultIndex='1'
                    circular={true}

                >

                    {
                        data.map((item, index) => {
                            return (
                                <Box className={classes.BoxWidth}>
                                    <Box style={{ position: 'relative'}}>
                                        <Box >
                                            <img className={classes.BoxImages} src={item.images} alt="Carousel Images" data-aos="fade-up" />
                                        </Box>
                                        <h1 className={classes.txtReserch}>{item.text}</h1>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                    <ViewportSlot >
                        <span className="flicking-pagination "></span>
                    </ViewportSlot>
                </Flicking>
            </Box>
        </Container>
    )
}
