import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

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
            width: '70%'
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
    redline,
    subtitle1,
    style,
    br = `${<br />}`
}) {
    const classes = useStyles()

    return (
        <Box className={classes.paraBox} style={style}>
            <Fade bottom>
                <h3 className={classes.head}>{title}</h3>
            </Fade>
            {
                redline ?
                    <Roll bottom>
                        <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                    </Roll> : ''
            }
            <Fade top>
                <h4 className={classes.portSubHead}>{subtitle}</h4>
                <h6 style={{ color: 'black', margin: '4% 0%' }}>{subtitle1}</h6>
            </Fade>
        </Box>

    )
}
