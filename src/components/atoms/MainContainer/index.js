import React from 'react'
import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        margin:'0 auto',
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        }
    }


}))

export function MainContainer(props) {

    const classes = useStyles()

    return (
        <Box className={classes.root} >
            {props.children}
        </Box>
    )
}
