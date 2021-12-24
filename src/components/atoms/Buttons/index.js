import React from 'react'
import { makeStyles, Button, Box } from '@material-ui/core'
import { ArrowForward, ArrowForwardIos, ArrowForwardIosOutlined, ArrowForwardSharp } from '@material-ui/icons'
import Fade from 'react-reveal'

const useStyles = makeStyles((theme) => ({

    btn: {
        height: '100%',
        width: '70%',
        margin:'0% auto',
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
            width: '100%',

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

export function Buttons({
    title,
    href,
    style,
    className,
    arrowIcon,
}) {
    const classes = useStyles()
    return (
        <Box className={className}>
            {/* material ui Button */}
            <Fade bottom>
                <Button
                    className={classes.btn}
                    style={style}
                    href={href}
                    onclick={() => window.open(`${href}`, '_blank', '')}
                    target="_blank"
                >
                    <h6 style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', verticalAlign: 'middle' }}>
                        {title}
                        <ArrowForwardSharp className={classes.arrow1} />
                    </h6>
                    {/* <Box className={classes.arrow}>
                    <img src={arrowIcon} alt="arrow" />
                </Box> */}

                </Button>
            </Fade>
        </Box>
    )
}
