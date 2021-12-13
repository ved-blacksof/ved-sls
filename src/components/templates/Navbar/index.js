import React, { useRef, useState } from 'react'
import { makeStyles, IconButton, Toolbar, AppBar, Box, Button, Menu, MenuItem, ListItemText, Popper, Grow, Paper, ClickAwayListener, MenuList } from '@material-ui/core'
import { useHistory, NavLink, Link } from 'react-router-dom';
import { ArrowDownward, ArrowDropDown, MenuOpen, MenuOutlined } from '@material-ui/icons'
import clsx from 'clsx'
import { MobileMenu } from './MobileMenu';
import Fade from 'react-reveal/Fade';
import './styles.css'

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
        top: '0px',
        boxShadow: '0px 0px 5px #777',
        background: 'white',
        zIndex: '4',
        scrollBehaviour:'smooth',
        transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
        animation: `$translates 800ms linear`,
        animationIterationCount: 1,
        animationDuration: '800ms',
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
        height: '5rem',
        display: 'flex',
        alignItems: 'center',
        margin: '0px 15px',
        background: 'transparent',
        transition: 'all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1)',

        boxShadow: 'none',
        textTranform: 'none',
        "&:hover": {
            color: 'white',
            "& $slider": {
                width: '100%',

            }
        },
    },

    slider: {
        margin: '0 auto',
        height: '5px',
        background: '#000',
        width: '10%',
        transition: 'width 1s ease',
    },
    clsbeforePos: {
        textDecoration: 'none',
        color: 'white',
        opacity: '0.8',
        cursor: 'pointer',
        "&:hover": {
            color: '#d1d1d1'
        }
    },
    clsAfterPos: {
        textDecoration: 'none',
        color: 'black',
        opacity: '0.8',
        cursor: 'pointer',
        "&:hover": {
            color: '#d1d1d1'
        }
    },
    linkActive: {
        fontWeight: 'bold',
        opacity: '1'
    },
    linkActiveAfterPos: {
        color: '#182AC3',
        fontWeight: 'bold',
    },
    megaMenu: {
        height: 'fit-content',
        display: 'flex',
        borderRadius: '0px',
        background: 'white',
        zIndex: '100',
    },
    uls: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'flex-start',
        // margin: '2% 2%',
        "& h6": {
            padding: '1rem',
        }
    },
    menuItem: {
        padding: '15px 30px',
        boxSizing: 'border-box',
        mozBoxSizing: 'border-box',
        webkitBoxSizing: 'border-box',

        transition: 'all .3s ease-in-out',
        "&:hover": {
            background: 'transparent',
            "& $lios": {
                boxShadow: '-6px 0px 0px 0px #182AC3   ',
                color: '#182AC3'
            }
        }
    },
    lios: {
        textDecoration: 'none',
        color: '#000',
        pointer: 'cursor',
        paddingLeft: '8px',
        transition: 'all .3s ease-in-out',
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
    },
    menuBorder: {
        // border: '2px solid red'
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


    const mobileMenuClose = (e) => {
        history.push(e)
        setMobileMenu(false)
    }

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
        <Box style={{ marginTop: '2%' }}>
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


                    <Fade bottom>
                        <ul className={classes.navUL}>
                            <li className={classes.navLI} >
                                <h4 className="fromCenter">
                                    <NavLink
                                        className={clsx(classes[navlinkref.current])}
                                        activeClassName={clsx(classes[linkactiveref.current])}
                                        to="/home" >Home</NavLink>
                                </h4>
                            </li>
                            <li className={classes.navLI} >
                                <h4>
                                    <NavLink
                                        className={clsx(classes[navlinkref.current])}
                                        activeClassName={clsx(classes[linkactiveref.current])}
                                        to="/about" >About Us</NavLink>
                                </h4>
                            </li>

                            <li className={classes.navLI}
                                onMouseEnter={handleToggle}
                                onClick={handleToggle}
                            >
                                <NavLink
                                    to="#"
                                    className={clsx(classes[navlinkref.current])}
                                    activeClassName={clsx(classes[linkactiveref.current])}
                                    disableRipple disableFocusRipple disableTouchRipple
                                    ref={anchorRef}
                                    id="composition-button"
                                    aria-controls={open ? 'composition-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                >
                                    <h4
                                        className={clsx(classes[navlinkref.current])}>
                                        Industries
                                        {/* <ArrowDropDown style={{ fontSize: '2rem', }} size={40} /> */}
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
                                                    bottom: '100px'
                                                }}
                                                sx={classes.menuBorder}
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
                                                            <MenuItem className={classes.menuItem} onClick={() => history.push('/iot')} onClick={() => history.push('/iot')}>
                                                                <h6><NavLink to="/iot" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >IoT Platform</NavLink ></h6>
                                                            </MenuItem>
                                                            <MenuItem className={classes.menuItem} onClick={() => history.push('/cloud')} >
                                                                <h6><NavLink to="/cloud" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Cloud Solutions</NavLink ></h6>
                                                            </MenuItem>
                                                            <MenuItem className={classes.menuItem} onClick={() => history.push('/evcharger')} >
                                                                <h6><NavLink to="/evcharger" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >EV Charging Solutions</NavLink ></h6>
                                                            </MenuItem>
                                                            <MenuItem className={classes.menuItem} onClick={() => history.push('/solar')}>
                                                                <h6><NavLink to="/solar" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Solar & Wind</NavLink ></h6>
                                                            </MenuItem>
                                                        </MenuList>
                                                        {/* <hr className={classes.hrs} /> */}
                                                        <MenuList>
                                                            <MenuItem className={classes.menuItem} onClick={() => history.push('/smartmeter')}>
                                                                <h6><NavLink to="/smartmeter" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Metering</NavLink ></h6>
                                                            </MenuItem>
                                                            <MenuItem className={classes.menuItem} onClick={() => history.push('/homeauto')}>
                                                                <h6><NavLink to="/homeauto" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Home Automation</NavLink ></h6>
                                                            </MenuItem>
                                                            <MenuItem className={classes.menuItem} onClick={() => history.push('/smartstreet')}>
                                                                <h6><NavLink to="/smartstreet" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Street Lights</NavLink ></h6>
                                                            </MenuItem>
                                                            <MenuItem className={classes.menuItem} onClick={() => history.push('/railways')}>
                                                                <h6><NavLink to="/railways" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Railways</NavLink ></h6>
                                                            </MenuItem>
                                                        </MenuList>
                                                        {/* <hr className={classes.hrs} /> */}
                                                        <MenuList>
                                                            <MenuItem className={classes.menuItem} onClick={() => history.push('/gaming')}>
                                                                <h6><NavLink to="/gaming" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Gaming</NavLink ></h6>
                                                            </MenuItem>
                                                            <MenuItem className={classes.menuItem} onClick={() => history.push('/smarttraffic')}>
                                                                <h6><NavLink to="/smarttraffic" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Traffic Solutions</NavLink ></h6>
                                                            </MenuItem>
                                                            <MenuItem className={classes.menuItem} onClick={() => history.push('/digital')}>
                                                                <h6><NavLink to="/digital" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Digital Signage</NavLink ></h6>
                                                            </MenuItem>
                                                            <MenuItem className={classes.menuItem} onClick={() => history.push('/transformers')}>
                                                                <h6><NavLink to="/transformers" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Intelligent Transformer Monitoring</NavLink ></h6>
                                                            </MenuItem>
                                                        </MenuList>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Grow>
                                        )}
                                    </Popper>
                                </NavLink>


                            </li>


                            {/* ############# Services ############  */}


                            <li
                                className={classes.navLI}
                                onMouseEnter={handleToggle1}
                            // onMouseOut={handleClose1}
                            >
                                <NavLink
                                    to="#"
                                    className={clsx(classes[navlinkref.current])}
                                    activeClassName={clsx(classes[linkactiveref.current])}


                                    disableRipple disableFocusRipple disableTouchRipple
                                    ref={anchorRef}
                                    id="services-button"
                                    aria-controls={open1 ? 'services-menu' : undefined}
                                    aria-expanded={open1 ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle1}
                                    style={{ textTransform: 'none' }}>

                                    <h4 className={clsx(classes[navlinkref.current])}>
                                        Services
                                        {/* <ArrowDropDown style={{ fontSize: '2rem', }} size={40} /> */}
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
                                                                <h6><NavLink to="/ipcore" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >IP CORE/FPGA/SOC Design Services</NavLink ></h6>
                                                            </MenuItem>
                                                            <MenuItem className={classes.menuItem} >
                                                                <h6><NavLink to="/highspeed" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} > High Speed PCB Design Services</NavLink ></h6>
                                                            </MenuItem>
                                                            <MenuItem className={classes.menuItem} >
                                                                <h6><NavLink to="/softdev" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >Software Development</NavLink ></h6>
                                                            </MenuItem>
                                                        </MenuList>
                                                        {/* <hr className={classes.hrs} /> */}
                                                        <MenuList>
                                                            <MenuItem className={classes.menuItem}>
                                                                <h6><NavLink to="/electronics" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >Electronics Manufacturing Solutions</NavLink ></h6>
                                                            </MenuItem>
                                                            <MenuItem className={classes.menuItem}>
                                                                <h6><NavLink to="/testing" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >Testing & Calibration</NavLink ></h6>
                                                            </MenuItem>
                                                            <MenuItem className={classes.menuItem}>
                                                                <h6><NavLink to="/ml" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >ML & AI</NavLink ></h6>
                                                            </MenuItem>
                                                        </MenuList>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Grow>
                                        )}
                                    </Popper>
                                </NavLink>
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
                    </Fade>
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
