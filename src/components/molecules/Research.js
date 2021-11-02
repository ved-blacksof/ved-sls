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

const useStyles = makeStyles((theme) => ({
    reaserchMain: {
        marginTop: "10%",
        position: 'relative',
    },
    flicks: {
        width: '90%',
        marginTop: '3%',
        "& .flicking-pagination": {
            display: 'flex',
            flexDirection: 'column',
            bottom: '30%',
            left: '1%',
            [theme.breakpoints.down('sm')]: {
                bottom: '35%',
             
            },
        },
        "& .flicking-pagination-bullet": {
            height: '1.5rem !important',
            width: '.30rem !important',
            margin: '.2rem .2rem !important',
            borderRadius: '10px !important',
            backgroundColor: 'rgb(255, 255, 255) !important',
            [theme.breakpoints.down('sm')]: {
                height: '.8rem !important',
                width: '.2rem !important',
            },
        },
        "& .flicking-pagination-bullet-active": {
            backgroundColor: '#ff0000 !important'
        }

    },
    // pagination: {
    //     // transform: 'translateX(-48%) translateY(-8rem) rotate(-90deg)',
    //     width:'100%',
    //     [theme.breakpoints.down('sm')]: {
    //         // bottom: '50px',
    //     }
    // },
    BoxWidth: {
        padding: '0% 3% 8% 6%',
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
        left: '-6%',
        fontSize: '8rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.5rem',
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

    const paginationsPlugins = new Pagination({ type: 'bullet' })

    const autoPlugins = new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false });

    const plugins = [paginationsPlugins,autoPlugins];

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
                    plugins={plugins}
                    // align="center"
                    defaultIndex='1'
                    circular={true}
                    className={classes.flicker}

                >

                    {
                        data.map((item, index) => {
                            return (
                                <Box className={classes.BoxWidth}>
                                    <Box style={{ position: 'relative' }}>
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
                        {/* <span className="flicking-pagination"></span> */}
                        <span className={clsx(classes.pagination, 'flicking-pagination')}></span>
                    </ViewportSlot>
                </Flicking>
            </Box>
        </Container>
    )
}
