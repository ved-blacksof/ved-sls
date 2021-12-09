import React, { useState } from 'react'
import { makeStyles, IconButton, Toolbar, AppBar, Box, Button, Menu, MenuItem, ListItemText, Popper, Grow, Paper, ClickAwayListener, MenuList } from '@material-ui/core'
import { useHistory, NavLink, Link } from 'react-router-dom';
import { ArrowDownward, ArrowDropDown, MenuOpen, MenuOutlined } from '@material-ui/icons'
import clsx from 'clsx'
import { MobileMenu } from './MobileMenu';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        // background: '#182AC3',
        // opacity:'0.75',
        display: 'flex',
        justifyContent: 'center',
        paddingtop: '2%',
        alignItems: 'center',
        boxShadow: 'none',
    },
    navRelative: {
        position: 'relative',
        boxShadow: 'none',
        height: '8rem',
    },
    navFixed: {
        position: 'fixed',
        height: '5.8rem',
        top: '0px',
        boxShadow: '2px 2px 5px grey',
        background: 'white',
        // padding: '.8rem 0rem',
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
        verticalAlign: 'middle',
        margin: ' 0px 10px',
        background: 'transparent',
        boxShadow: 'none',
        padding: '0px',
        textTranform: 'none',
        "& button:hover": {
            background: 'transparent',
            color: '#d1d1d1',
            "& h4:hover": {
                color: '#d1d1d1'
            }
        },
        "&:hover": {
            color: '#d1d1d1'
        },
    },
    clsbeforePos: {
        textDecoration: 'none',
        color: 'white',
        cursor: 'pointer',
        "&:hover": {
            color: '#d1d1d1'
        }
    },
    linkActive: {
        color: 'grey',
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
    menuItem:{
          padding:'20px 30px'
    },
    lios: {
        textDecoration: 'none',
        color: '#182AC3',
        pointer: 'cursor',
    },
    activeLios: {

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
        // marginTop:'10%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            paddingBottom: '1%',
            borderBottom: '1px solid grey',
            transition: 'all 4s ease-in-out',
            transform: 'translate 100%'
        }
    },
    
    hrs: {
        border: '1px solid #182AC3',
        borderRadius: '3px',
        opacity:'.2'
    },
    clsAfterPos: {
        color: '#182AC3'
    },
    popper: {
        zIndex: '3',
        marginTop: '1%'
    },
    menuBorder:{
        border:'2px solid red'
    }
}))

export function Navbar() {
    const classes = useStyles()

    const history = useHistory();

    const [navPos, setNavPos] = React.useState('navRelative')

    const [navAfterPos, setnavAfterPos] = React.useState('clsAfterPos')

    // materail ui navbar drops
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [mobileMenu, setMobileMenu] = React.useState(false);

    const anchorRef = React.useRef(null);

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

    navref.current = navPos
    navlinkref.current = navAfterPos


    const mobileMenuClose = (e) => {
        history.push(e)
        setMobileMenu(false)
    }

    React.useEffect(() => {

        const handleScroll = () => {
            const pageHeight = window.innerHeight
            const show = window.scrollY >= pageHeight

            if (show) {
                setNavPos('navFixed')
                setnavAfterPos('clsAfterPos')

            } else {
                setNavPos('navRelative')
                setnavAfterPos('clsbeforePos')
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
                className={clsx(classes.mainBox, classes[navref.current])}
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
                                <h4>
                                    <NavLink
                                        className={clsx(classes.clsbeforePos, classes[navlinkref.current])}
                                        to="/home"
                                        activeClassName={classes.linkActive} style={{ marginRight: '10px' }}>Home</NavLink>
                                </h4>
                            </li>
                            <li className={classes.navLI} >
                                <h4>
                                    <NavLink
                                        className={clsx(classes.clsbeforePos, classes[navlinkref.current])}
                                        to="/about"
                                        activeClassName={classes.linkActive} style={{ marginRight: '10px' }}>About Us</NavLink>
                                </h4>
                            </li>
                            <li className={classes.navLI} >
                                <Button
                                    className={clsx(classes.clsbeforePos, classes[navlinkref.current])}
                                    activeClassName={classes.linkActive}
                                    disableRipple disableFocusRipple disableTouchRipple
                                    ref={anchorRef}
                                    id="composition-button"
                                    aria-controls={open ? 'composition-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle}
                                    style={{ textTransform: 'none' }}>
                                    <h4
                                        onMouseEnter={handleToggle}
                                        // onMouseOut={handleClose}
                                        className={clsx(classes.clsbeforePos, classes[navlinkref.current])}>
                                        Industries
                                    </h4>
                                    <ArrowDropDown style={{ fontSize: '2rem', }} size={40} />
                                </Button>

                                <Popper
                                    open={open}
                                    anchorEl={anchorRef.current}
                                    role={undefined}
                                    placement="bottom-start"
                                    transition
                                    className={classes.popper}
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            // {...TransitionProps}
                                            style={{
                                                marginTop: '10%',
                                                transformOrigin:
                                                    placement === 'bottom' ? 'left top' : 'left bottom',
                                            }}
                                            sx={classes.menuBorder}
                                        >
                                            <ClickAwayListener onClickAway={handleClose}>
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
                                                    </MenuList>
                                                    <hr className={classes.hrs} />
                                                    <MenuList>
                                                        <MenuItem className={classes.menuItem} onClick={() => history.push('/solar')}>
                                                            <h6><NavLink to="/solar" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Solar & Wind</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} onClick={() => history.push('/smartmeter')}>
                                                            <h6><NavLink to="/smartmeter" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Metering</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} onClick={() => history.push('/homeauto')}>
                                                            <h6><NavLink to="/homeauto" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Home Automation</NavLink ></h6>
                                                        </MenuItem>
                                                    </MenuList>
                                                    <hr className={classes.hrs} />
                                                    <MenuList>
                                                        <MenuItem className={classes.menuItem} onClick={() => history.push('/smartstreet')}>
                                                            <h6><NavLink to="/smartstreet" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Street Lights</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} onClick={() => history.push('/railways')}>
                                                            <h6><NavLink to="/railways" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Railways</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} onClick={() => history.push('/gaming')}>
                                                            <h6><NavLink to="/gaming" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Gaming</NavLink ></h6>
                                                        </MenuItem>
                                                    </MenuList>
                                                    <hr className={classes.hrs} />
                                                    <MenuList>
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
                            </li>


                            {/* ############# Services ############  */}


                            <li className={classes.navLI} >
                                <Button
                                    className={clsx(classes.clsbeforePos, classes[navlinkref.current])}
                                    disableRipple disableFocusRipple disableTouchRipple
                                    ref={anchorRef}
                                    id="services-button"
                                    aria-controls={open1 ? 'services-menu' : undefined}
                                    aria-expanded={open1 ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle1}
                                    style={{ textTransform: 'none' }}>
                                    <h4
                                        onMouseEnter={handleToggle1}
                                        onMouseOut={handleClose1}
                                        className={clsx(classes.clsbeforePos, classes[navlinkref.current])}>
                                        Services
                                    </h4><ArrowDropDown style={{ fontSize: '2rem', }} size={40} />
                                </Button>

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
                                                marginTop: '20%',
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
                                                        <MenuItem className={classes.menuItem} onClick={() => history.push('/ipcore')}>
                                                            <h6><NavLink to="/ipcore" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >IP CORE/FPGA/SOC Design Services</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} onClick={() => history.push('/highspeed')} >
                                                            <h6><NavLink to="/highspeed" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} > High Speed PCB Design Services</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} onClick={() => history.push('/softdev')} >
                                                            <h6><NavLink to="/softdev" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >Software Development</NavLink ></h6>
                                                        </MenuItem>
                                                    </MenuList>
                                                    <hr className={classes.hrs} />
                                                    <MenuList>
                                                        <MenuItem className={classes.menuItem} onClick={() => history.push('/electronics')}>
                                                            <h6><NavLink to="/electronics" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >Electronics Manufacturing Solutions</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} onClick={() => history.push('/testing')}>
                                                            <h6><NavLink to="/testing" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >Testing & Calibration</NavLink ></h6>
                                                        </MenuItem>
                                                        <MenuItem className={classes.menuItem} onClick={() => history.push('/ml')}>
                                                            <h6><NavLink to="/ml" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >ML & AI</NavLink ></h6>
                                                        </MenuItem>
                                                    </MenuList>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Grow>
                                    )}
                                </Popper>
                            </li>



                            <li className={classes.navLI} >
                                <h4>
                                    <NavLink
                                        className={clsx(classes.clsbeforePos, classes[navlinkref.current])}
                                        to="/contact"
                                        activeClassName={classes.linkActive}>Contact Us</NavLink>
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
        </>
    )
}
