import Flicking from '@egjs/flicking';
import { AutoPlay, Pagination } from '@egjs/flicking-plugins';
import { ViewportSlot } from '@egjs/react-flicking';
import { Container, makeStyles, Box } from '@material-ui/core'
import clsx from 'clsx';
import React from 'react'

import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";


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
        }
    },
    productImageBox: {
        height: '100%',
        width: '100%',
        borderRadius: '1rem',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    newbg: {
        position: 'absolute',
        top: '-8%',
        left: '-7%',
        zIndex: '-1',
        width: '110%',
        height: '116%',
        "& img": {
            width: '100%',
            maxHeight: '100%'
        }

    },
    image: {
        width: '100%',
        maxHeight: '100%',
        // objectFit:'cover',

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

}))

export function PositionImage({
    imageBG,
    data
}) {

    const classes = useStyles();

    const paginationsPlugins = new Pagination({ type: 'bullet' })

    const Auto = new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })

    const plugins = [Auto, paginationsPlugins];

    return (
        <Box className={classes.mainBox}>
            <div className={classes.imageBox}
            // style={{ backgroundImage: `url(${imageBG})`, }}
            >
                {
                    imageBG ?
                        <Box className={classes.productImageBox}>
                            <img className={classes.image} src={imageBG} alt="image" />
                        </Box> : ''
                }

                {
                    data ?
                        <Box className={classes.productImageBox}>
                            {/* <Flicking
                                selector="center"
                                plugins={plugins}
                                defaultIndex='1'
                                circular={true}
                            >
                                {
                                    data.map((item, index) => {
                                        return (
                                            <>
                                                <Box className={classes.productImageBox} style={style}>
                                                    <img className={classes.image} src={item.images} alt="Carousel Images" />
                                                </Box>
                                            </>
                                        )
                                    })
                                }

                                <ViewportSlot>
                                    <span className={clsx("flicking-pagination")} ></span>
                                </ViewportSlot>

                            </Flicking> */}
                        </Box> : ''
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
