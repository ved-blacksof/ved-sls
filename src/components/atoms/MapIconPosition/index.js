import { Box, Container, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    pos: {
        position: 'relative',
        marginTop: '5%',
        [theme.breakpoints.down('sm')]: {
            padding: '0%',
        }
    },
    mainBox: {
        height: 'fit-content',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        zIndex: 1,
        position: 'absolute',
        top: '0%',
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
            width: '100%',
            position: 'static',
            flexWrap: 'wrap',
            justifyContent: 'space-around'

        }
    },
    boxes: {
        overflow: "hidden",
        height: '14vw',
        width: '22%',
        borderRadius: '.8rem',
        marginRight: '3%',
        marginBottom: '3%',
        boxShadow: '0px 0px 20px #00000029',
        padding: '2% .5%',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            padding: '1% .5%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '20vw',
            height: '20vw',
            padding: '3% 2%',
            borderRadius: '.5rem',
            margin: '5% 2%',
            justifyContent: 'center'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '70vw',
            padding: '3% 2%',
            borderRadius: '.5rem',
            margin: '5% 2%',
        },

    },
    iconsBox: {
        marginTop: "6%",
        width: '45%',
        textAlign: 'center',
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            marginTop: '0%'
        },
        [theme.breakpoints.down('sm')]: {
            height: '4rem'
        },
        [theme.breakpoints.down('xs')]: {
            width: '45%',
            height: 'fit-content'
        },

    },
    icons: {
        width: '100%',
        maxHeight: '100%',
    },
    subText: {
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer',
        marginTop: '4%',
        lineHeight: '1.2',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '5%',
            width: '100%',

        }
    },
}))

export function MapIconPosition({
    data,
    color,
    paddings
}) {
    const classes = useStyles()
    const history = useHistory()
    return (
        <>
            <Box className={classes.pos} style={{ padding: `${paddings}` }}>
                <Box container className={classes.mainBox} >
                    {
                        data.map((item, index) => {
                            return (
                                <>
                                    {
                                        !item.link ?
                                            <>
                                                <Box className={classes.boxes} key={index}>

                                                    <Box className={classes.iconsBox}>
                                                        <Fade bottom>
                                                            <img className={classes.icons} src={item.images} alt='Icons' />
                                                        </Fade>
                                                    </Box>

                                                    <Fade bottom>
                                                        <h4 className={classes.subText}
                                                            style={{ color: `${color}` }}>{item.text}</h4>
                                                    </Fade>
                                                </Box>
                                            </> : ''
                                    }


                                    {/* below, it will show when we provide link from data */}

                                    {
                                        item.link ?
                                            <>
                                                <Box className={classes.boxes} key={index}>

                                                    <a target="_blank" href={item.link}
                                                        style={{ color: `${color}`, textDecoration: 'none' }}>
                                                        <Box className={classes.iconsBox}>
                                                            <Fade bottom>
                                                                <img className={classes.icons} src={item.images} alt='Icons' />
                                                            </Fade>
                                                        </Box>

                                                        <Fade bottom>
                                                            <h4 className={classes.subText}
                                                                style={{ color: `${color}` }}>{item.text}</h4>
                                                        </Fade>
                                                    </a>
                                                </Box>
                                            </> : ''
                                    }

                                </>


                            )
                        })
                    }


                </Box>
            </Box>
        </>
    )
}
