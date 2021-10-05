import React from 'react'
import { makeStyles, Box, Container,IconButton,Toolbar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    mainBox: {
        background: 'blue',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '3%'
    },
    navbar: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    navUL: {
        width: '40%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyle: 'none'
    },
    navLinks: {
        textDecoration: 'none',
        font: 'normal normal normal 1rem Access',
        color: 'white'
    }
}))

export function Navbar() {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.mainBox}>
                <Toolbar className={classes.navbar}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <img src={'/images/Layer_x0020_1.svg'} />
                        {/* <img src={'./images/Group 6068.svg'} className={classes.logo} alt="logo" onClick={() => { history.push('/') }} /> */}
                    </IconButton>

                    <ul className={classes.navUL}>
                        <li className={classes.navLinks} >Home</li>
                        <li className={classes.navLinks} >About Us</li>
                        <li className={classes.navLinks} >Industries</li>
                        <li className={classes.navLinks} >Services</li>
                        <li className={classes.navLinks} >Contact Us</li>
                    </ul>
                </Toolbar>
            </Box>
        </>
    )
}
