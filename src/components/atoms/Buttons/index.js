import React from 'react'
import { makeStyles, Button, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

    btn: {
        height: '100%',
        width: '100%',
        background: '#182AC3',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // font: 'normal normal normal 16px Access',
        border: 'none',
        // padding: '.5rem .5rem',
        textTransform: 'none',
        borderRadius: '4px',
        '&:hover': {
            background: '#1E00F9',
            color: '#182AC3',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '10px',
            padding: '.2rem .5rem',
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
            <Button
                className={classes.btn}
                style={style}
                href={href}
                onclick={()=> window.open(`${href}`, '_blank', '')}
                target="_blank"
            >
                <h4>{title}</h4>
                <Box className={classes.arrow}>
                    <img src={arrowIcon} alt="arrow" />
                </Box>
            </Button>
        </Box>
    )
}
