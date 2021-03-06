import React from 'react'
import { makeStyles, IconButton, Toolbar, AppBar } from '@material-ui/core'
import { useHistory, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        background: '#354B9C',
        // opacity:'0.75',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '3%',
        boxShadow: 'none',
    },
    navbar: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    logo: {
        width: '100%',
        height: '100%'
    },
    navUL: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyle: 'none',
        [theme.breakpoints.down('sm')]: {
            width: '70%',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    navLI: {
        textDecoration: 'none',
        font: 'normal normal normal 1rem Access',
        color: 'white',
    },
    act: {
        margin: '2px',
        padding: '5px 1px',
        borderBottom: '1px solid white'
    }
}))

export function Navbar() {
    const classes = useStyles()

    const history = useHistory();
    return (
        <>
            <AppBar position='relative' className={classes.mainBox}>
                <Toolbar className={classes.navbar}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <img className={classes.logo} src={'/images/Layer_x0020_1.svg'} onClick={() => { history.push('/') }} />
                    </IconButton>

                    <ul className={classes.navUL}>
                        <li className={classes.navLI} >
                            <NavLink className={classes.navLI} to="/" activeClassName={classes.navLinks}>Home</NavLink>
                        </li>
                        <li className={classes.navLI} >
                            <NavLink className={classes.navLI} to="/about" activeClassName={classes.navLinks}>About Us</NavLink>
                        </li>
                        <li className={classes.navLI} >
                            <NavLink className={classes.navLI} to="/evcharger" activeClassName={classes.navLinks}>Industries</NavLink>
                        </li>
                        <li className={classes.navLI} >
                            <NavLink className={classes.navLI} to="/cloud" activeClassName={classes.navLinks}>Services</NavLink>
                        </li>
                        <li className={classes.navLI} >
                            <NavLink className={classes.navLI} to="/contact" activeClassName={classes.navLinks}>Contact Us</NavLink>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </>
    )
}
