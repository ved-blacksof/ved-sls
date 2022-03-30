import React from 'react'
import { makeStyles, Button, Box } from '@material-ui/core'
import { ArrowForward, ArrowForwardIos, ArrowForwardIosOutlined, ArrowForwardSharp } from '@material-ui/icons'
import Fade from 'react-reveal'

const useStyles = makeStyles((theme) => ({

    btn: {
        height: '100%',
        width: '70%',
        background: '#182AC3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'none',
        zIndex:'9',
        transition: 'all .3s ease-in-out',
        transition: 'background .5s ease-in-out',
        borderRadius:'4px',
        overflow:'hidden',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        "&::before": {
            content: "''",
            position: 'absolute',
            borderRadius:'4px',
            right: '0%',
            top: '0%',
            width: '0',
            height: '2px',
            transition: 'all .5s ease-in-out',
            background: '#182AC3',
            zIndex: '-999'
        },
        "&::after": {
            content: "''",
            position: 'absolute',
            borderRadius:'4px',
            right: '0%',
            top: '0%',
            width: '2px',
            height: '0%',
            transition: 'all .5s ease-in-out',
            background: '#182AC3',
            zIndex: '-999'
        },
        '&:hover': {
            background: '#fff',
            "& $btnTitle":{
                color:'#182AC3',
            },
            "&::before": {
                width: '100%',
            },
            "&::after": {
                height: '100%',
            },
            "& $mySpan":{
                "&::before": {
                    width: '100%',
                },
                "&::after": {
                    height: '100%',
                },
            },
        },
    },
    btnTitle:{
        color: '#fff',                
        fontFamily:'Access',
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        verticalAlign: 'middle',
        transition: 'transform .5s ease-in-out',
    },
    arrow: {
        width: '1.2rem',
        marginLeft: '4%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    mySpan:{
        "&::before": {
            content: "''",
            position: 'absolute',
            borderRadius:'4px',
            left: '0%',
            bottom: '0%',
            width: '0',
            height: '2px',
            transition: 'all .5s ease-in-out',
            background: '#182AC3',
            zIndex: '-999'
        },
        "&::after": {
            content: "''",
            position: 'absolute',
            borderRadius:'4px',
            left: '0%',
            bottom: '0%',
            width: '2px',
            height: '0%',
            transition: 'all .5s ease-in-out',
            background: '#182AC3',
            zIndex: '-999'
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
        <Fade bottom>
            <Box className={className}>
                {/* material ui Button */}
                <Button
                    className={classes.btn}
                    style={style}
                    href={href}
                    onClick={() => window.open(`${href}`, '_blank', '')}
                    target="_blank"
                >
                   <span className={classes.mySpan}>
                   <h6 className={classes.btnTitle}>
                        {title}
                        <ArrowForwardSharp className={classes.arrow1} />
                    </h6>
                   </span>
                </Button>
            </Box>
        </Fade>
    )
}
