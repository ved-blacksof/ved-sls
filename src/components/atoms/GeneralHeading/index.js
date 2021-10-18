import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    paraBox: {
        [theme.breakpoints.down('xs')]:{
            width:'80%'
        }
    },
    head: {
        color: 'black',
        width:'50%',
        [theme.breakpoints.down('sm')]:{
            width:'70%'
        }
    },
    portSubHead: {
        color: 'black',
        width: '60%',
        [theme.breakpoints.down('xs')]: {
            width: '70%',
        },
    },
    redLine: {
        margin: '1% 0%'
    },
}))

export function GeneralHeading({
    title,
    subtitle,
    image,
    subtitle1,
    style,
    br=`${ <br/> }`
}) {
    const classes = useStyles()

    return (
        <Box  className={classes.paraBox} style={style}>
            <h3 className={classes.head}>{title}</h3>
            <img className={classes.redLine} src={image} />
            <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
            <h4 className={classes.portSubHead}>{subtitle}</h4>
            <h6 style={{ color:'black',margin:'4% 0%' }}>{subtitle1}</h6>
        </Box>

    )
}
