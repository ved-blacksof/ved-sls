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
            bottom: '4%',
        },
        "& .flicking-pagination-bullet": {
            width: '2.5rem !important',
            height: '.20rem !important',
            margin: '0 .2rem !important',
            borderRadius: '1rem !important',
            backgroundColor: 'rgb(255, 255, 255) !important',
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

    },
    BoxImages: {
        width: '100%',
        paddingTop: '25%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        paddingBottom: '3%',
        [theme.breakpoints.down('sm')]: {
            backgroundPosition: 'top',
            // paddingBottom: '3%',
            paddingTop: '20%',

        }
    },
    subHead: {
        width: '100%',
    },
    txt: {
        width: '100%',
        zIndex: '1',
        font: 'normal normal normal 3rem BebasNeue',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        },
    },
    subSMTxt: {
        width: '50%',
        height:'2.5rem',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            display: 'none'
        },
    },
    subTxt: {
        width: '80%',
        textAlign: 'center',
        textTransform:'uppercase',
        [theme.breakpoints.down('sm')]: {
            // fontSize: '.8rem'
        },

    },
    hr: {
        margin: '5px 0%',
        width: '25%',
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            width: '60%'
        },
    }

}))

export function Reshape() {

    const classes = useStyles()

    const Paginations = [new Pagination({ type: 'bullet' })]

    return (
        <Fade bottom>
            <Box className={classes.reaserchMain}>
                <Box className={classes.flicks}>
                    <Flicking
                        selector="center"
                        plugins={Paginations}
                        defaultIndex='0'
                        circular={true}

                    >
                        {
                            reshape.map((item, index) => {
                                return (
                                    <Box className={classes.BoxWidth}>
                                        
                                        <Box className={classes.BoxImages} 
                                                style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${item.images})`,}}
                                                >
                                            <h3 className={classes.txt}>{item.text1}</h3>
                                            <hr className={classes.hr} />
                                            <br />
                                            <h6 className={classes.subSMTxt}>{item.text2}</h6>
                                            {
                                                item.br ? <br/> : ''
                                            }
                                            {
                                                item.br1 ? <br/> : ''
                                            }
                                            <br />
                                            <h4 className={classes.subTxt}>{item.text3}</h4>
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

            </Box>
        </Fade>
    )
}
