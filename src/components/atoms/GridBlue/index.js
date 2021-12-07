import React from 'react'
import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#182AC3',
        margin: '0px',
        padding: '0px',
        boxSizing: 'border-box',
        backgroundImage: `url("./images/Repeat Grid 11.png")`,
        backgroundPosition: 'fixed',
        overflow: 'hidden',
        // backgroundImage: 'radial-gradient(#FFFFFF 0px, transparent 20%)',
        // backgroundPosition: '0 0, 50px 50px',
        // backgroundSize: '30px 30px',
        [theme.breakpoints.down('sm')]: {

        }
    }


}))

export function GridBlue(props) {

    const classes = useStyles()

    return (
        <Box className={classes.root} >
            {props.children}
        </Box>
    )
}
