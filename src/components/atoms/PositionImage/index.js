
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { AutoPlay, Pagination } from "@egjs/flicking-plugins";
import { Container, makeStyles, Box } from '@material-ui/core'


import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "@egjs/flicking-plugins/dist/pagination.css";

import React from 'react'
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'flex-start',
        zIndex: '1',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            paddingRight: '0%',
        }
    },
    imageBox: {
        width: '70%',
        // padding: '25% 0%',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // height: '16vw',
        background: 'white',
        borderRadius: '1rem',
        position: 'relative',
        marginLeft: '5%',
        boxShadow: '0px 0px 5px #0000001A',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            justifyContent: 'center',
            marginLeft: '0%',
            height: '20rem',
        },
        [theme.breakpoints.down('xs')]: {
            height: '50vw'
        },
        "&:hover":{
            "& $newbg":{
                transform:'scale(.98)',
                // webkitTransform: 'scale(1.1)',
            },
            "& $image":{
                transform:'scale(1.05)',

            }
            
        }
    },
    productImageBox: {
        height: '16vw',
        cursor:'pointer',
        width: '100%',
        borderRadius: '1rem',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition:'transform .3s',
      
    },
    newbg: {
        position: 'absolute',
        top: '-8%',
        left: '-7%',
        zIndex: '-1',
        width: '110%',
        height: '115%',
        transition:'transform .3s ease-in-out',
        "& img": {
            width: '100%',
            maxHeight: '100%'
        }

    },
    image: {
        width: '100%',
        height: '100%',
        objectFit:'cover',
        transition:'transform .5s ease-in-out',

    },
    red: {
        width: '18%',
        zIndex: '-1',
        position: 'absolute',
        right: '-5%',
        top: '-10%'
    },
    white: {
        width: '30%',
        zIndex: '-1',
        position: 'absolute',
        left: '25%',
        top: '-13%'
    },
    blue: {
        width: '40%',
        zIndex: '-1',
        position: 'absolute',
        left: '-8%',
        bottom: '-15%'
    },
    // carousel
    pagination:{
        "& .flicking-pagination": {
            // bottom: '0%',
            // left: '0px',
        },
        "& .flicking-pagination-bullet": {
            width: '1.5rem !important',
            height: '.33rem !important',
            margin: '0 .2rem !important',
            borderRadius: '1rem !important',
            backgroundColor: '#182AC3!important',
        },
        "& .flicking-pagination-bullet-active": {
            backgroundColor: '#ff0000 !important'
        }
    }

}))

export function PositionImage({
    imageBG,
    carousel,
    images1,
    images2,
    images3,
    style
}) {

    const classes = useStyles();

    const paginationsPlugins = new Pagination({ type: 'bullet' })

    const Auto = new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })

    const plugins = [Auto, paginationsPlugins];

    return (
        <Box className={classes.mainBox}>
            <div className={classes.imageBox}
            >
                {
                    imageBG ?
                        <Box className={classes.productImageBox}>
                            <img className={classes.image} src={imageBG} alt="image" />
                        </Box> : ''
                }

                {
                    carousel ?
                        <>
                            <Flicking
                                duration="2000"
                                plugins={plugins}
                                align="center"
                                defaultIndex='1'
                                circular={true}

                            >
                                <Box className={classes.productImageBox}>
                                    <img className={classes.image} src={images1} alt="image" />
                                </Box>
                                <Box className={classes.productImageBox}>
                                    <img className={classes.image} src={images2} alt="image" />
                                </Box>
                                <Box className={classes.productImageBox}>
                                    <img className={classes.image} src={images3} alt="image" />
                                </Box>

                                <ViewportSlot >
                                    <span className={clsx(classes.pagination,"flicking-pagination")}></span>
                                </ViewportSlot>
                            </Flicking>
                        </>
                        : ''
                }

                {/* <img className={classes.red} src={'./images/Polygon 2.svg'} alt="image" />
                <img className={classes.white} src={'./images/Polygon 3.svg'} alt="image" />
                <img className={classes.blue} src={'./images/Polygon 1.svg'} alt="image" /> */}

                <Box className={classes.newbg}>
                    <img src={'./images/Group 82914.png'} alt="image" />
                </Box>

            </div>
        </Box >
    )
}
