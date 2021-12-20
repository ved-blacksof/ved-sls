import React, { useRef, useState } from 'react'
import { makeStyles, IconButton, Toolbar, AppBar, Box, Button, Menu, MenuItem, ListItemText, Popper, Grow, Paper, ClickAwayListener, MenuList } from '@material-ui/core'
import { useHistory, NavLink, Link } from 'react-router-dom';
import { ArrowDownward, ArrowDropDown, KeyboardArrowDown, KeyboardArrowLeft, MenuOpen, MenuOutlined } from '@material-ui/icons'
import clsx from 'clsx'
import { MobileMenu } from './MobileMenu';
import Fade from 'react-reveal/Fade';
import './styles.css'
import { keyframes } from 'styled-components';
import { animation } from 'react-reveal/globals';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none',

    },
    navRelative: {
        position: 'relative',
        boxShadow: 'none',
    },
    navFixed: {
        position: 'fixed',
        minHeight: '100px',
        top: '0px',
        boxShadow: '0px 0px 5px #777',
        background: 'white',
        zIndex: '4',
        scrollBehaviour: 'smooth',
        transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
        animation: `$translates 800ms linear`,
        animationIterationCount: 1,
        animationDuration: '800ms',
        "&:hover": {
            color: '#DE141A'
        }
    },
    "@keyframes translates": {
        "0%": {
            transform: "translateY(-50px)"
        },
        "100%": {
            transform: "translateY(0px)"
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
        listStyle: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    navLI: {
        position: 'relative',
        minHeight: '90px',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '25px',
        background: 'transparent',
        transition: 'all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1)',
        boxShadow: 'none',
        color: 'white',
        "&::before": {
            content: "''",
            height: '3px',
            width: '0',
            background: '#DE141A',
            position: 'absolute',
            bottom: '-5px',
            left: '0%',
            transition: 'all 500ms ease-in-out',
            [theme.breakpoints.down('sm')]: {
                height: '5px'
            }
        },
        "&:hover": {
            "&::before": {
                height: '3px',
                width: '100%',
                opacity: '1',
                [theme.breakpoints.down('sm')]: {
                    height: '5px'
                }
            },
            "&::after": {
                height: '0%',
            },

        },
    },


    clsbeforePos: {
        textDecoration: 'none',
        color: 'white',
        cursor: 'pointer',
        "&:hover": {
            // color: '#d1d1d1'
        }
    },
    clsAfterPos: {
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer',
        "&:hover": {
            // color: '#182AC3'
        },
        "& $arrow": {
            color: 'black',
        }
    },
    linkActive: {
        fontWeight: 'bold',
        opacity: '1',
    },
    linkActiveAfterPos: {
        color: '#182AC3',
        fontWeight: 'bold',
        "&:hover": {
            "& h4": {
                // color: '#182AC3',
            },
        }
    },
    arrow: {
        color: 'white',
        fontSize: '1.8rem'
    },
    // mega menu

    megaMenu: {
        height: 'fit-content',
        display: 'flex',
        borderRadius: '0px',
        background: 'white',
        zIndex: '100',
        padding: '1rem 3rem',
        boxShadow: '0px 1px 1px #777',
    },
    uls: {
        display: 'flex',
        flexDirection: 'column',
        "& h6": {
            padding: '1rem',
        }
    },
    menuItem: {
        padding: '20px 40px',
        boxSizing: 'border-box',
        mozBoxSizing: 'border-box',
        webkitBoxSizing: 'border-box',
        background: 'transparent',
        position: 'relative',
        "&:hover": {
            background: 'transparent !important',

        }
    },
    lios: {
        width: '100%',
        textDecoration: 'none',
        color: '#000',
        pointer: 'cursor',
        transform: 'width .5s ease-in-out',
        // transition: 'all .2s ease-in-out',
        paddingLeft: '8px',
        "&::before": {
            content: "''",
            height: '0%',
            width: '0',
            background: '#182AC3',
            borderRadius: '2rem',
            position: 'absolute',
            left: '5%',
            transition: 'all .5s ease-in-out',
        },
        "&:hover": {
            color: '#182AC3',
            "&::before": {
                height: '30%',
                width: '5px',
                opacity: '1',
            },
            "&::after": {
                height: '0%',
            },

        },
        "&::after": {
            content: "''",
            height: '30%',
            background: '#182AC3',
            borderRadius: '2rem',
            position: 'absolute',
            left: '5%',
            transition: 'all .5s ease-in-out',
        },
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
    },
    menuIconPos: {
        display: 'block',
        fontSize: '2.2rem',
        color: 'black'
    },
    menu: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            paddingBottom: '1%',
            borderBottom: '1px solid grey',
            transition: 'all 4s ease-in-out',
            transform: 'translate 100%'
        }
    },

    hrs: {
        borderRadius: '3px',
        opacity: '.2'
    },
    popper: {
        zIndex: '10',
        marginTop: '35px',
        // animation: 'menuani 2s ease-in',    
    },
    '@keyframes menuani': {
        '0%': {
            transform: 'translateY(50%)'
        },
        '100%': {
            transform: 'translateY(0%)'
        },
    }
}))

export function Navbar({
    style
}) {
    const classes = useStyles()

    const history = useHistory();

    const [navPos, setNavPos] = useState('navRelative')

    const [navAfterPos, setnavAfterPos] = useState('clsAfterPos')

    const [linkActivePos, setlinkActivePos] = useState('linkActive')

    // materail ui navbar drops
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
        setOpen1(false)
    };
    const handleToggle1 = () => {
        setOpen(false)
        setOpen1((prevOpen) => !prevOpen);
    };

    //CLOSE MENU

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    const handleClose1 = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen1(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    const navref = React.useRef()
    const navlinkref = React.useRef()
    const linkactiveref = React.useRef()

    navref.current = navPos
    navlinkref.current = navAfterPos
    linkactiveref.current = linkActivePos



    React.useEffect(() => {

        const handleScroll = () => {
            const pageHeight = window.innerHeight + 100
            const show = window.scrollY >= pageHeight
            setOpen(false)
            setOpen1(false)

            if (show) {
                setNavPos('navFixed')
                setnavAfterPos('clsAfterPos')
                setlinkActivePos('linkActiveAfterPos')

            } else {
                setNavPos('navRelative')
                setnavAfterPos('clsbeforePos')
                setlinkActivePos('linkActive')

            }
        }
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <Box style={{ paddingTop:'2%' }}>
            <AppBar
                position='static'
                color='transparent'
                className={clsx(classes.mainBox, classes[navref.current])}
                style={style}
            >
                <Toolbar className={classes.navbar}>
                    <Box className={classes.logoBox} disableRipple disableFocusRipple disableTouchRipple edge="start" color="inherit" aria-label="menu">

                        {
                            navPos === "navRelative" ?
                                <Fade bottom>
                                    <img
                                        disableRipple
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

                    <Fade>
                        <MenuOutlined
                            className={clsx(classes.menuIcon, classes[navlinkref.current])}

                            onClick={() => mobileMenu === false ? setMobileMenu(true) : setMobileMenu(false)} />
                    </Fade>


                    {/* <Fade bottom> */}
                    <ul className={classes.navUL}>
                        <li className={classes.navLI} >
                            <h4 >
                                <NavLink
                                    className={clsx(classes[navlinkref.current])}
                                    activeClassName={clsx(classes[linkactiveref.current])}
                                    to="/home" >Home</NavLink>
                            </h4>
                        </li>
                        <li className={classes.navLI} >
                            <h4 >
                                <NavLink
                                    className={clsx(classes[navlinkref.current])}
                                    activeClassName={clsx(classes[linkactiveref.current])}
                                    to="/about" >About Us</NavLink>
                            </h4>
                        </li>


                        {/* class onhover Mega menu */}
                        <li className={clsx(classes[navlinkref.current], classes.navLI)}

                            
                            // onMouseEnter={handleToggle}
                            // onMouseLeave={handleClose}
                            onClick={handleToggle}
                        >
                            <NavLink
                                to="#"
                                className={clsx(classes[navlinkref.current])}
                                activeClassName={clsx(classes[linkactiveref.current])}
                                ref={anchorRef}
                                id="composition-button"
                                aria-controls={open ? 'composition-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                            >
                                <h4 className={clsx(classes[navlinkref.current])}>
                                    Industries
                                </h4>


                                <Popper
                                    open={open}
                                    anchorEl={anchorRef.current}
                                    role={undefined}
                                    placement="bottom"
                                    transition
                                    className={classes.popper}
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin:
                                                    placement === 'bottom' ? 'left top' : 'left bottom',
                                                // top: '10%',
                                                marginTop: '10%'
                                            }}
                                        // sx={classes.menuBorder}
                                        >
                                            <ClickAwayListener
                                                onClickAway={handleClose}
                                            >
                                                <MenuList
                                                    autoFocusItem={open}
                                                    id="composition-menu"
                                                    aria-labelledby="composition-button"
                                                    onKeyDown={handleListKeyDown}
                                                    className={classes.megaMenu}
                                                >
                                                    {/* <MenuItem className={classes.menuItem} className={classes.megaMenu}> */}
                                                    <MenuList>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} onClick={() => history.push('/iot')}><NavLink to="/iot" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >IoT Platform</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} onClick={() => history.push('/cloud')} ><NavLink to="/cloud" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Cloud Solutions</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} onClick={() => history.push('/evcharger')} ><NavLink to="/evcharger" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >EV Charging Solutions</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} onClick={() => history.push('/solar')}><NavLink to="/solar" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Solar & Wind</NavLink ></h6>
                                                        </MenuItem>
                                                    </MenuList>
                                                    {/* <hr className={classes.hrs} /> */}
                                                    <MenuList>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} onClick={() => history.push('/smartmeter')}><NavLink to="/smartmeter" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Metering</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} onClick={() => history.push('/homeauto')}><NavLink to="/homeauto" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Home Automation</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} onClick={() => history.push('/smartstreet')}><NavLink to="/smartstreet" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Street Lights</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} onClick={() => history.push('/railways')}><NavLink to="/railways" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Railways</NavLink ></h6>
                                                        </MenuItem>
                                                    </MenuList>
                                                    {/* <hr className={classes.hrs} /> */}
                                                    <MenuList>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} onClick={() => history.push('/gaming')}><NavLink to="/gaming" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Gaming</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} onClick={() => history.push('/smarttraffic')}><NavLink to="/smarttraffic" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Traffic Solutions</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} onClick={() => history.push('/digital')}><NavLink to="/digital" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Digital Signage</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} onClick={() => history.push('/transformers')}><NavLink to="/transformers" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Intelligent Transformer Monitoring</NavLink ></h6>
                                                        </MenuItem>
                                                    </MenuList>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Grow>
                                    )}
                                </Popper>
                            </NavLink>
                            <KeyboardArrowDown className={classes.arrow} />


                        </li>


                        {/* ############# Services ############  */}


                        <li
                            className={clsx(classes[navlinkref.current], classes.navLI)}
                            onClick={handleToggle1}
                            // onMouseEnter={handleToggle1}
                            // onMouseLeave={handleClose1}
                            

                        >
                            <NavLink
                                to="#"
                                className={clsx(classes[navlinkref.current])}
                                activeClassName={clsx(classes[linkactiveref.current])}
                                ref={anchorRef}
                                id="services-button"
                                aria-controls={open1 ? 'services-menu' : undefined}
                                aria-expanded={open1 ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle1}>

                                <h4 className={clsx(classes[navlinkref.current])}
                                    onClick={handleToggle1}
                                >
                                    Services
                                </h4>

                                <Popper
                                    open={open1}
                                    anchorEl={anchorRef.current}
                                    role={undefined}
                                    placement="bottom-start"
                                    transition
                                    className={classes.popper}
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin:
                                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                                            }}
                                        >
                                            <ClickAwayListener onClickAway={handleClose1}>
                                                <MenuList
                                                    autoFocusItem={open}
                                                    id="services-menu"
                                                    aria-labelledby="services-button"
                                                    onKeyDown={handleListKeyDown}
                                                    className={classes.megaMenu}
                                                >
                                                    {/* <MenuItem className={classes.menuItem} className={classes.megaMenu}> */}
                                                    <MenuList>
                                                        <MenuItem className={classes.menuItem}>
                                                            <h6 className={classes.lios} ><NavLink to="/ipcore" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >IP CORE/FPGA/SOC Design Services</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} ><NavLink to="/highspeed" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} > High Speed PCB Design Services</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} >
                                                            <h6 className={classes.lios} ><NavLink to="/softdev" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >Software Development</NavLink ></h6>
                                                        </MenuItem>
                                                    </MenuList>
                                                    {/* <hr className={classes.hrs} /> */}
                                                    <MenuList>
                                                        <MenuItem className={classes.menuItem}>
                                                            <h6 className={classes.lios} ><NavLink to="/electronics" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >Electronics Manufacturing Solutions</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem}>
                                                            <h6 className={classes.lios} ><NavLink to="/testing" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >Testing & Calibration</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem}>
                                                            <h6 className={classes.lios} ><NavLink to="/ml" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >ML & AI</NavLink ></h6>
                                                        </MenuItem>
                                                    </MenuList>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Grow>
                                    )}
                                </Popper>
                            </NavLink>
                            <KeyboardArrowDown className={classes.arrow} />

                        </li>



                        <li className={classes.navLI} >
                            <h4>
                                <NavLink
                                    className={clsx(classes[navlinkref.current])}
                                    activeClassName={clsx(classes[linkactiveref.current])}

                                    to="/contact"
                                >Contact Us</NavLink>
                            </h4>
                        </li>
                    </ul>
                    {/* </Fade> */}
                </Toolbar>
                {
                    mobileMenu ?
                        <Box className={classes.menu} data-aos="fade-down">
                            <MobileMenu />
                        </Box>
                        : ''
                }
            </AppBar>
        </Box>
    )
}
