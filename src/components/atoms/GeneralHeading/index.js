import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    paraBox: {
        [theme.breakpoints.down('xs')]: {
            width: '80%'
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
            width: '70%',
        },
    },
    redLine: {
        margin: '1% 0%'
    },
    icon:{
        width:'10rem',
        // height:'10',
        "& img":{
            width:'100%',
            maxHeight:'100%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '40%',
        },
    }
}))

export function GeneralHeading({
    icons,
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
                icons ? <Box className={classes.icon}> <img src={icons} /> </Box> : ''
            }
            <h3 className={classes.head}>{title}  { br ? <br /> : '' } {title1}</h3>
            {
                redline ? <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} /> : ''
            }
            <h4 className={classes.portSubHead}>{subtitle}  { br1 ? <br /> : '' }  {subtitle_1} </h4>
            <h6 style={{ color: 'black', margin: '4% 0%' }}>{subtitle1}</h6>
        </Box>

    )
}
