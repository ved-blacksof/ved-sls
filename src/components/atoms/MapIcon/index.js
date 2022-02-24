import { Box, Container, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import { ArrowForward, ArrowForwardIos, NextWeekOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    gridMainBox: {
        height: 'fit-content',
        marginTop: '3%',
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
        }
    },
    gridBox: {
        height: '100%',
        marginBottom: '10%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '0'
        }
    },
    LinkMainBox: {
        width: '80%',
        "&:hover": {
            "& $knowMoreBox": {
                opacity: '1',
            },
            "& $iconsBox": {
                transform: 'scale(1.2)'
            },
            "& $knowMore": {
            },
            "& $arrows": {
                animation: `$arrowAnimation 650ms ease-in-out`,
                animationIterationCount: 'Infinity',
                // animationDuration: '500ms',
            }
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    iconsBox: {
        height: '6rem',
        width: '50%',
        cursor: 'pointer',
        transition: 'all .3s ease-in-out',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0',
            height: '4rem',
        },


    },
    icons: {
        maxWidth: '100%',
        height: '100%',
    },
    subText: {
        color: 'black',
        textDecoration: 'none',
        cursor: 'pointer',
        marginTop: '8%',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            marginTop: '5%',
            width: '100%',

        }
    },
    knowMoreBox: {
        display: 'flex',
        alignItems: 'center',
        opacity: '0',
        transition: 'opacity .5s ease-in-out'
    },
    knowMore: {
        color: '#182AC3',
        cursor: 'pointer',
        marginTop: '2%',
        fontSize: '1.2rem',
        fontFamily: 'Access',
        [theme.breakpoints.down('sm')]: {
            marginTop: '5%',
            width: '100%',

        }
    },
    arrows: {
        fontSize: '1.2rem',
        color: '#182AC3',
        verticalAlign: 'middle',
        marginLeft: '15%',
        transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)'
    },

    "@keyframes arrowAnimation": {
        "0%": {
            opacity: 0,
            transform: "translateX(-100px)"
        },
        "100%": {
            opacity: 1,
            transform: "translateX(0)"
        },
    },
}))

export function MapIcon({
    data,
    color,
    know_More
}) {
    const classes = useStyles()
    const history = useHistory()
    return (
        <>
            <Grid container spacing={6} className={classes.gridMainBox}>
                {
                    data.map((item, index) => {
                        return (
                            <Grid item xs={6} spacing={6} sm={3} md={3} key={index}>
                                <Box className={classes.gridBox} >
                                    {
                                        !item.link ?
                                            <>
                                                <Box className={classes.iconsBox}>
                                                    <Fade bottom>
                                                        <img className={classes.icons} src={item.images} alt='Icons' />
                                                    </Fade>
                                                </Box>

                                                <Fade bottom>
                                                    <h4 className={classes.subText}
                                                        style={{ color: `${color}` }}>{item.text}</h4>
                                                </Fade>
                                            </> : ''
                                    }


                                    {/* below, it will show when we provide link from data */}

                                    {
                                        item.link ?
                                            <>
                                                <a target="_blank" href={item.link}
                                                    style={{ color: `${color}`, textDecoration: 'none' }}>
                                                    <Box className={classes.LinkMainBox}>
                                                        <Box className={classes.iconsBox}>
                                                            <Fade bottom>
                                                                <img className={classes.icons} src={item.images} alt='Icons' />
                                                            </Fade>
                                                        </Box>
                                                        <Fade bottom>
                                                            <h4 className={classes.subText}
                                                                style={{ color: `${color}` }}
                                                            // onClick={() => history.push(`/${item.link}`)}
                                                            >{item.text}</h4>

                                                            {
                                                                know_More ?
                                                                    <Box className={classes.knowMoreBox}>
                                                                        <h6 className={classes.knowMore} >Know More</h6>
                                                                        <h6><ArrowForwardIos className={classes.arrows} /></h6>
                                                                    </Box>
                                                                    : ''
                                                            }
                                                        </Fade>
                                                    </Box>
                                                </a>
                                            </> : ''
                                    }

                                </Box>
                            </Grid>

                        )
                    })
                }


            </Grid>
        </>
    )
}
