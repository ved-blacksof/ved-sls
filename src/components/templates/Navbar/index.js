import React from 'react'
import { makeStyles, IconButton, Toolbar, AppBar, Box } from '@material-ui/core'
import { useHistory, NavLink } from 'react-router-dom';
import { Menu } from '@material-ui/icons'
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';


const useStyles = makeStyles((theme) => ({
    mainBox: {
        // background: '#182AC3',
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
    logoBox: {
        width: '8rem',
        "& img": {
            width: '100%',
            maxHeight: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '6rem'
        }
    },
    logo: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    navUL: {
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    navLI: {
        textDecoration: 'none',
        // font: 'normal normal normal 1rem Access',
        color: 'white',
        margin: ' 0px 10px'
    },
    act: {
        margin: '2px',
        padding: '5px 1px',
        borderBottom: '1px solid white'
    },
    menuIcon: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            fontSize: '2.2rem',
            color: 'white'
        }
    }
}))

export function Navbar() {
    const classes = useStyles()

    const history = useHistory();

    // const [menu, ]

    const showMenu = () => {
        <div>
            sdfhfjh
        </div>
    }
    return (
        <>
            <AppBar position='relative' color='transparent' className={classes.mainBox}>
                <Toolbar className={classes.navbar}>
                    <Box className={classes.logoBox} disableRipple disableFocusRipple disableTouchRipple edge="start" color="inherit" aria-label="menu">
                        <Flip left>
                            <img disableRipple className={classes.logo} src={'/images/Layer_x0020_1.svg'} onClick={() => { history.push('/') }} />
                        </Flip>
                    </Box>

                    <Menu className={classes.menuIcon} onClick={showMenu} />

                    {showMenu}
                    <Zoom right>
                        <ul className={classes.navUL}>
                            <li className={classes.navLI} >
                                <h4>
                                    <NavLink className={classes.navLI} to="/" activeClassName={classes.navLinks}>Home</NavLink>
                                </h4>
                            </li>
                            <li className={classes.navLI} >
                                <h4>
                                    <NavLink className={classes.navLI} to="/about" activeClassName={classes.navLinks}>About Us</NavLink>
                                </h4>
                            </li>
                            <li className={classes.navLI} >
                                <h4>
                                    <NavLink className={classes.navLI} to="/evcharger" activeClassName={classes.navLinks}>Industries</NavLink>
                                </h4>
                            </li>
                            <li className={classes.navLI} >
                                <h4>
                                    <NavLink className={classes.navLI} to="/cloud" activeClassName={classes.navLinks}>Services</NavLink>
                                </h4>
                            </li>
                            <li className={classes.navLI} >
                                <h4>
                                    <NavLink className={classes.navLI} to="/contact" activeClassName={classes.navLinks}>Contact Us</NavLink>
                                </h4>
                            </li>
                        </ul>
                    </Zoom>
                </Toolbar>
            </AppBar>
        </>
    )
}
