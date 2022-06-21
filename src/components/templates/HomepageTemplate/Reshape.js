import React from 'react'
// import "./molecule.css";
import {
    Box,
    makeStyles,
} from '@material-ui/core';

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, AutoPlay, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

import "@egjs/flicking-plugins/dist/pagination.css";

import Fade from 'react-reveal/Fade';
import clsx from 'clsx';
import { reshape } from '../../molecules';

const useStyles = makeStyles((theme) => ({
    reaserchMain: {
        position: 'relative',
    },
    flicks: {
        width: '100%',
        "& .flicking-pagination": {
            cursor: 'pointer',
            bottom: '4%',
        },
        "& .flicking-pagination-bullet": {
            width: '2.5rem !important',
            height: '.30rem !important',
            margin: '0 .2rem !important',
            borderRadius: '1rem !important',
            backgroundColor: 'rgb(255, 255, 255) !important',
            [theme.breakpoints.down('sm')]: {
                width: '1.5rem !important'
            }
        },
        "& .flicking-pagination-bullet-active": {
            backgroundColor: '#ff0000 !important'
        }
    },
    BoxWidth: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft:'5px',

    },
    BoxImages: {
        width: '100%',
        position: 'relative',
        padding: '18% 0%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '30% 0%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '45% 0%',
        },
    },
    fronText: {
        padding: '0% 1%',
        position: 'absolute',
        bottom: '8%',
        [theme.breakpoints.down('sm')]: {
            bottom: '8%',
        }
    },
    txt: {
        textAlign: 'center',
        marginTop: '5px',
    },
    txt2: {
        width: '60%',
        textAlign: 'center',
        margin: '1% auto',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            display: 'none'

        },
    },
    hr: {
        margin: '1% auto',
        height: '2px',
        backgroundColor: 'white',
        width: '25%',
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            width: '60%',
            margin: '2% auto',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '3% auto',
        },
    }

}))

export function Reshape() {

    const classes = useStyles()

    const paginationsPlugins = new Pagination({ type: 'bullet' })

    const autoPlugins = new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true });

    const plugins = [ paginationsPlugins,autoPlugins];


    return (
        <Fade bottom>
            <Box className={classes.reaserchMain}>
                <Box className={classes.flicks}>
                    <Flicking
                        selector="center"
                        plugins={plugins}
                        defaultIndex='0'
                        circular={true}
                        duration="1200"

                    >
                        {
                            reshape.map((item, index) => {
                                return (
                                    <Box className={classes.BoxWidth} key={index}>

                                        <Box className={classes.BoxImages}
                                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${item.images})`, }}
                                        >
                                            <Box className={classes.fronText}>
                                                <h3 className={classes.txt}>{item.text1}</h3>
                                                <div className={classes.hr}></div>
                                                <h6 className={classes.txt2}>{item.text2}</h6>
                                                <h4 className={classes.txt}>{item.text3}</h4>
                                            </Box>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                        <ViewportSlot >
                            {/* <span className="flicking-pagination"></span> */}
                            <span className={'flicking-pagination'}></span>
                        </ViewportSlot>


                    </Flicking>
                </Box>

            </Box>
        </Fade>
    )
}
