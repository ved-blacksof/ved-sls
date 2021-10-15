import React from 'react'
import { makeStyles, Button, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

    btn: {
        height: '100%',
        width: '100%',
        background: '#003189',
        color: 'white',
        display:'flex', 
        font: 'normal normal normal 1rem Access',
        border: 'none',
        padding: '.5rem 1rem',
        textTransform:'none',
        borderRadius: '4px',
        '&:hover': {
            background: 'white',
            color: '#003189'
        },
    },
    arrow: {
        fontSize:'1.5rem',
        marginLeft: '3px',
        '&:hover': {
            color: '#003189'
        },
    }
}))

export function Buttons({
    title,
    style,
    className,
    arrowIcon,
}) {
    const classes = useStyles()
    return (
        <Box className={className}>
            <Button 
                className={classes.btn}
                style={style}
                >
                    {title}
                <img className={classes.arrow} src={arrowIcon} />
            </Button>
        </Box>
    )
}
