import React, { useState } from 'react'
import { makeStyles, IconButton, Toolbar, AppBar, Box, Button, Menu, MenuItem, ListItemText } from '@material-ui/core'
import { useHistory, NavLink, Link } from 'react-router-dom';
import { MenuOpen } from '@material-ui/icons'
import clsx from 'clsx'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        // background: '#182AC3',
        // opacity:'0.75',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '3%',
        boxShadow: 'none',
        // boxShadow:'2px 2px 2px black'
    },
    navRelative: {
        position: 'relative',
        boxShadow: 'none',
    },
    navFixed: {
        position: 'fixed',
        top: '0%',
        boxShadow: '2px 2px 5px grey',
        background: 'white',
        padding: '.8rem 0rem',
        transition: 'all ease-in-out .3s',
        "& ": {
            color: 'black'
        }
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
    logofixed: {
        display: 'block'
    },
    logoFixedNone: {
        display: 'none',
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
        color: 'white',
        margin: ' 0px 10px',
        background: 'transparent',
        boxShadow: 'none',
        cursor: 'pointer',
        textTranform: 'none',
    },
    navLink: {
        color: 'black',
    },
    megaMenu: {
        width: '50vw',
        display: 'flex',
        borderRadius: '0px'
    },
    uls: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '2% 2%',
        "& h6": {
            padding: '1rem',
        }
    },
    lios: {
        textDecoration: 'none',
        color: '#182AC3',
        pointer: 'cursor',
    },
    activeLios: {
        color: '#'
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

export function Navbar1() {
    const classes = useStyles()

    const history = useHistory();

    const [navPos, setNavPos] = React.useState('navRelative')

    const [navLink, setNavLink] = React.useState('navLI')

    // materail ui navbar drops
    const [mobilemenu, setMobilemenu] = useState(null)
    const [services, setServices] = useState(null)

    const isMobileMenuOpen = Boolean(mobilemenu);
    const isServicesOpen = Boolean(services);

    const openMobileMenu = (event) => {
        setMobilemenu(event.currentTarget);
    };

    const closeMobileMenu = () => {
        setMobilemenu(null);
    };

    const openServices = (event) => {
        setServices(event.currentTarget);
    };

    const closeServices = () => {
        setServices(null);
    };

    const mobileMenu = (
        <Menu
            style={{
                marginTop: '6%',
                borderRadius: '0px'
            }}
            anchorEl={mobilemenu}
            id="Industries"
            anchorOrigin={{ vertical: "bottom", horizontal: "bottom" }}
            transformOrigin={{ vertical: "bottom", horizontal: "bottom" }}
            keepMounted
            open={isMobileMenuOpen}
            onClose={closeMobileMenu}
        >
            <Box className={classes.megaMenu}>
                <Box className={classes.uls}>
                    <h6><NavLink to="/iot" className={classes.lios} activeClassName={classes.activeLios} onClick={closeMobileMenu} >IoT Platform</NavLink ></h6>
                    <h6><NavLink to="/cloud" className={classes.lios} activeClassName={classes.activeLios} onClick={closeMobileMenu} >Cloud Solutions</NavLink ></h6>
                    <h6><NavLink to="/evcharger" className={classes.lios} activeClassName={classes.activeLios} onClick={closeMobileMenu} >Ev Charging Solutions</NavLink ></h6>
                </Box>
                <hr />
                <Box className={classes.uls}>
                    <h6><NavLink to="/solar" className={classes.lios} activeClassName={classes.activeLios} onClick={closeMobileMenu} >Solar & Wind</NavLink ></h6>
                    <h6><NavLink to="/smartmeter" className={classes.lios} activeClassName={classes.activeLios} onClick={closeMobileMenu} >Smart Metering</NavLink ></h6>
                    <h6><NavLink to="/homeauto" className={classes.lios} activeClassName={classes.activeLios} onClick={closeMobileMenu} >Home Automation</NavLink ></h6>
                </Box>
                <hr />
                <Box className={classes.uls}>
                    <h6><NavLink to="/smartstreet" className={classes.lios} activeClassName={classes.activeLios} onClick={closeMobileMenu} >Smart Street Lights</NavLink ></h6>
                    <h6><NavLink to="/railways" className={classes.lios} activeClassName={classes.activeLios} onClick={closeMobileMenu} >Railways</NavLink ></h6>
                    <h6><NavLink to="/gaming" className={classes.lios} activeClassName={classes.activeLios} onClick={closeMobileMenu} >Gaming</NavLink ></h6>
                </Box>
                <hr />
                <Box className={classes.uls}>
                    <h6><NavLink to="/smarttraffic" className={classes.lios} activeClassName={classes.activeLios} onClick={closeMobileMenu} >Traffic Solutions</NavLink ></h6>
                </Box>


            </Box>
        </Menu>
    )

    const Services = (
        <Menu
            style={{
                marginTop: '6%',
                borderRadius: '0px'
            }}
            anchorEl={services}
            id="services"
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "bottom", horizontal: "bottom" }}
            keepMounted
            open={isServicesOpen}
            onClose={closeServices}
        >
            <Box className={classes.megaMenu}>
                <Box className={classes.uls}>
                    <h6><NavLink to="/ipcore" className={classes.lios} activeClassName={classes.activeLios} onClick={closeServices} >IP CORE/FPGA/SOC DESIGN SERVICES</NavLink ></h6>
                    <h6><NavLink to="/highspeed" className={classes.lios} activeClassName={classes.activeLios} onClick={closeServices} > HIGH SPEED PCB DESIGN SERVICES</NavLink ></h6>
                    <h6><NavLink to="/softdev" className={classes.lios} activeClassName={classes.activeLios} onClick={closeServices} >SOFTWARE DEVELOPMENT</NavLink ></h6>
                </Box>
                <Box className={classes.uls}>
                    <h6><NavLink to="/electronics" className={classes.lios} activeClassName={classes.activeLios} onClick={closeServices} >ELECTRONICS MANUFACTURING</NavLink ></h6>
                    <h6><NavLink to="/testing" className={classes.lios} activeClassName={classes.activeLios} onClick={closeServices} >TESTING AND CALIBRATION</NavLink ></h6>
                    <h6><NavLink to="/ml" className={classes.lios} activeClassName={classes.activeLios} onClick={closeServices} >ML & AI</NavLink ></h6>
                </Box>
            </Box>
        </Menu>
    )

    const navref = React.useRef()

    navref.current = navPos

    const showMenu = () => {
        <div>
            sdfhfjh
        </div>
    }

    React.useEffect(() => {

        const handleScroll = () => {
            const show = window.scrollY >= 1000

            if (show) {
                setNavPos('navFixed')
            } else {
                setNavPos('navRelative')
            }
        }
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>
            <AppBar
                position='static'
                color='transparent'
                className={clsx(classes.mainBox,
                    // classes[navref.current]
                )}
            // className={classes[navref.current]}
            //   className={classes.mainBox}
            >
                <Toolbar className={classes.navbar}>
                    <Box className={classes.logoBox} disableRipple disableFocusRipple disableTouchRipple edge="start" color="inherit" aria-label="menu">

                        {
                            navPos ?
                                <Fade bottom>
                                    <img disableRipple
                                        className={classes.logo}
                                        src={'/images/Layer_x0020_1.svg'}
                                        onClick={() => { history.push('/') }} />
                                </Fade>
                                :
                                <Fade bottom>
                                    <img
                                        disableRipple
                                        className={classes.logo}
                                        src={'/images/Layer_x0020_1-1.svg'}
                                        onClick={() => { history.push('/') }} />
                                </Fade>
                        }



                    </Box>

                    <MenuOpen className={classes.menuIcon} onClick={showMenu} />

                    {showMenu}

                    <Fade bottom>
                        <ul className={classes.navUL}>
                            <li className={classes.navLI} >
                                <h4>
                                    <a className={classes.navLI}
                                        // to="/" 
                                        href="/"
                                        activeClassName={classes.navLinks}>Home</a>
                                </h4>
                            </li>
                            <li className={classes.navLI} >
                                <h4>
                                    <a className={classes.navLI}
                                        // to="/about" 
                                        href="/about"
                                        activeClassName={classes.navLinks}>About Us</a>
                                </h4>
                            </li>
                            <li className={classes.navLI} >
                                <Button
                                    className={classes.navLI}
                                    style={{ textTransform: 'none' }}
                                    // activeClassName={classes.navLinks}
                                    onMouseOver={openMobileMenu}>
                                    <h4 style={{ cursor: 'pointer' }}>Industries</h4>
                                </Button>

                                {mobileMenu}
                            </li>
                            <li className={classes.navLI} >
                                <Button
                                    className={classes.navLI}
                                    style={{ textTransform: 'none' }}
                                    onMouseOver={openServices}>
                                    <h4 style={{ cursor: 'pointer' }}>Services</h4>
                                </Button>
                                {Services}
                            </li>
                            <li className={classes.navLI} >
                                <h4>
                                    <a className={classes.navLI}
                                        // to="/contact" 
                                        href="/contact"
                                        activeClassName={classes.navLinks}>Contact Us</a>
                                </h4>
                            </li>
                        </ul>
                    </Fade>
                </Toolbar>
            </AppBar>
        </>
    )
}
