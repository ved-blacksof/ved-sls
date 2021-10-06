import React from 'react'
import { makeStyles, Box, Container, IconButton, Toolbar, AppBar } from '@material-ui/core'
import { useHistory, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    footerMain:{
        
    }
}))

export function Footer() {
    const classes = useStyles()

    const history = useHistory();
    return (
        <footer className={classes.footerMain}>
            
        </footer>
    )
}
