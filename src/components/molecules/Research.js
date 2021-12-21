import React from 'react'
import "./molecule.css";
import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { AutoPlay, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

import "@egjs/flicking-plugins/dist/pagination.css";
import { GeneralHeading, MainContainer, Paragraphs } from '../atoms';
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
    reaserchMain: {
        margin: "0% 0% auto",
        position: 'relative',
    },
    flicks: {
        // width: '90%',
        marginTop: '3%',
        "& .flicking-pagination": {
            display: 'flex',
            flexDirection: 'column',
            bottom: '33%',
            left: '1%',
            [theme.breakpoints.down('md')]: {
                bottom: '35%',
            },
            [theme.breakpoints.down('sm')]: {
                bottom: '35%',
            },
        },
        "& .flicking-pagination-bullet": {
            height: '1.5rem !important',
            width: '.30rem !important',
            margin: '.2rem .2rem !important',
            borderRadius: '10px !important',
            backgroundColor: '#182AC3 !important',
            [theme.breakpoints.down('sm')]: {
                height: '.8rem !important',
                width: '.2rem !important',
            },
        },
        "& .flicking-pagination-bullet-active": {
            backgroundColor: '#ff0000 !important'
        }

    },
    BoxWidth: {
        padding: '0% 3% 8% 6%',
        position: 'relative',
        width: '100%',
    },
    BoxImages: {

        "& img": {
            height: '100%',
            width: '100%',
        }
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
        left: '-6%',
        lineHeight: '1',
        color: '#182AC3',
        textShadow: '2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 2px 2px #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff',
        [theme.breakpoints.down('sm')]: {

        },
    },
    bgGrey: {
        position: 'absolute',
        bottom: '0',
        background: '#c8c8c8d9',
        padding: '12% 0%',
        // opacity: '1',
        width: '100%'
    }
}))

export function Research({
    generalheadingblue,
    title,
    title1,
    subtitle,
    data,
    bggrey,
    br

}) {

    const classes = useStyles()

    const paginationsPlugins = new Pagination({ type: 'bullet' })

    const autoPlugins = new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false });

    const plugins = [paginationsPlugins, autoPlugins];

    return (

        <Box style={{ position: 'relative', padding: '10% 0%' }}>
            <MainContainer>
                <Container fixed className={classes.reaserchMain} >
                    {
                        generalheadingblue ?
                            <>
                                <Fade left> <h3 className={classes.head}>{title}</h3></Fade>
                                <Fade right> <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} /></Fade>
                                <Fade left>   <h4 className={classes.subHead}>{subtitle}</h4> </Fade>
                            </> : ''
                    }

                    {
                        title ?
                            <GeneralHeading
                                title={title}
                                title1={title1}
                                br={br}
                                subtitle={subtitle}
                                redline
                            /> : ''

                    }
                    <Box className={classes.flicks}>
                        <Flicking
                            selector="center"
                            // plugins={Fades}
                            plugins={plugins}
                            defaultIndex='1'
                            circular={true}
                            className={classes.flicker}

                        >

                            {
                                data.map((item, index) => {
                                    return (
                                        <Box className={classes.BoxWidth}>
                                            <Box style={{ position: 'relative' }}>

                                                <Box className={classes.BoxImages}>
                                                    <img src={item.images} alt="Carousel Images" data-aos="fade-up" />
                                                </Box>

                                                <Fade bottom> <h5 className={classes.txtReserch}>{item.text}</h5> </Fade>
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                            <ViewportSlot >
                                <span className={clsx(classes.pagination, 'flicking-pagination')}></span>
                            </ViewportSlot>
                        </Flicking>
                    </Box>

                </Container>
            </MainContainer>
            {
                bggrey ? <Box className={classes.bgGrey}></Box> :''
            }
        </Box>

    )
}
