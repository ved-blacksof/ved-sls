import { Box, Container, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    pos: {
        position: 'relative',
        padding: '4% 0%',
    },
    mainBox: {
        height: 'fit-content',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        zIndex: 1,
        position: 'absolute',
        top: '100%',
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
            width: '100%',
            position: 'static',
            flexWrap: 'wrap',
            justifyContent: 'space-between'

        }
    },
    boxes: {
        height: '15vw',
        width: '15vw',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '.8rem',
        marginRight: '3%',
        boxShadow: '0px 0px 20px #00000029',
        padding: '3% 1%',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            width: '20vw',
            height: '20vw',
            padding: '3% 2%',

            borderRadius: '.5rem',
            margin: '5% 2%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '35vw',
            height: '35vw',
            padding: '3% 2%',

            borderRadius: '.5rem',
            margin: '5% 2%',
        },

    },
    iconsBox: {
        height: '5.5rem',
        marginTop: '5%',
        textAlign: 'center',
        border: '1px solid red',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0',
            height: '4rem'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '0',
            height: '3rem'
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
        marginTop: '8%',
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
    color
}) {
    const classes = useStyles()
    const history = useHistory()
    return (
        <>
            <Box className={classes.pos} >
                <Box container className={classes.mainBox}>
                    {
                        data.map((item, index) => {
                            return (
                                <>
                                    {
                                        !item.link ?
                                            <>
                                                <Box className={classes.boxes} >

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
                                                <Box className={classes.boxes} >

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
