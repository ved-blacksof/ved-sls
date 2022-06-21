import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const useStyles = makeStyles((theme) => ({
    paraBox: {
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    mainHead: {
        color: 'black',
        margin: '8% 0%',
        // fontSize: '4rem',
        [theme.breakpoints.down('sm')]: {
            // fontSize: '2rem',
        }
    },
    head: {
        color: 'black',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    portSubHead: {
        color: 'black',
        width: '60%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    redLine: {
        margin: '1.5% 0%'
    },
    icon: {
        width: '10rem',
        "& img": {
            width: '100%',
            maxHeight: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '40%',
        },
    }
}))

export function GeneralHeading({
    icons,
    maintitle,
    title,
    title1,
    redline,
    subtitle,
    subtitle_1,
    subtitle1,
    style,
    br,
    br1
}) {
    const classes = useStyles()

    return (
        <Box className={classes.paraBox} style={style}>
            {
                maintitle ? <h2 className={classes.mainHead} >{maintitle}</h2> : ''
            }
            {
                icons ? <Box className={classes.icon}><Fade bottom> <img src={icons} /></Fade> </Box> : ''
            }
            <Fade bottom> <h3 className={classes.head}>{title}  {br ? <br /> : ''} {title1}</h3> </Fade>
            {
                redline ? <Flip left><img className={classes.redLine} src={'/images/Component 4 – 1.svg'} /></Flip> : ''
            }
            <Fade bottom><h4 className={classes.portSubHead}>{subtitle}  {br1 ? <br /> : ''}  {subtitle_1} </h4>
                <h6 style={{ color: 'black', margin: '4% 0%' }}>{subtitle1}</h6>  </Fade>
        </Box>

    )
}
