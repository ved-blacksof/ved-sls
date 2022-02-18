import React from 'react'
import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#182AC3',
        margin: '0px',
        padding: '0px',
        boxSizing: 'border-box',
        backgroundImage: `url("./images/Repeat Grid 11.png")`,
        backgroundPosition: 'fixed',
    },
    twocurves: {
        borderRadius: '0rem 5rem 0rem 5rem',
        backgroundColor: '#182AC3',
        margin: '0px',
        padding: '0px',
        boxSizing: 'border-box',
        backgroundImage: `url("./images/Repeat Grid 11.png")`,
        backgroundPosition: 'fixed',
    }


}))

export function GridBlue(props) {

    const classes = useStyles()

    return (
        <Box className={clsx(props.twocurve ? (classes.twocurves) : (classes.root))} >
            {props.children}
        </Box>
    )
}
