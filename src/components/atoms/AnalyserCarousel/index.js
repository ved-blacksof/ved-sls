import React from 'react'
import { makeStyles, Button, Box } from '@material-ui/core'
import { ArrowForward, ArrowForwardIos, ArrowForwardIosOutlined, ArrowForwardSharp } from '@material-ui/icons'
import Fade from 'react-reveal'

const useStyles = makeStyles((theme) => ({

    btn: {
        height: '100%',
        width: '100%',
        background: '#182AC3',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        textTransform: 'none',
        '&:hover': {
            background: '#1E00F9',
            color: '#182AC3',
        },
        [theme.breakpoints.down('sm')]: {
            // fontSize: '10px',
            // padding: '.2rem .5rem',
        }
    },
    arrow: {
        width: '1.2rem',
        marginLeft: '4%',
        marginTop: '1px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {

        },
        "& img": {
            maxWidth: '100%',
            height: '100%',
            alignSelf: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            width: '1rem'
        }
    },
    arrow1: {
        marginLeft: '5px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '5px',
            fontSize: '1.2rem'
        }
    }
}))

export function AnalyserCarousel({
    title,
    href,
    style,
    className,
    arrowIcon,
    data
}) {
    const classes = useStyles()
    return (
        <Box className={className}>
            {/* material ui Button */}
            <Fade bottom>

            </Fade>
        </Box>
    )
}
