import React from 'react'
import { makeStyles, IconButton, Toolbar, AppBar, Box, Button, Menu, MenuItem, ListItemText, Popper, Grow, Paper, ClickAwayListener, MenuList } from '@material-ui/core'
import { useHistory, NavLink, Link } from 'react-router-dom';
import { ArrowDownward, ArrowDropDown, MenuOpen } from '@material-ui/icons'
import clsx from 'clsx'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '3%',
        boxShadow: 'none',
        border: '2px solid red',
        display:'none',
        [theme.breakpoints.down('sm')]: {
            display:'block',
        }
    },
    navRelative: {
        position: 'relative',
        boxShadow: 'none',
        color: 'black'
    },
    navFixed: {
        position: 'fixed',
        top: '0px',
        boxShadow: '2px 2px 5px grey',
        background: 'white',
        padding: '.8rem 0rem',
        transition: 'all ease-in-out .3s',
        "& $navbarlink": {
            color: 'black'
        }
    },
    navbar: {
        width: '100%',
        // display: 'flex',
        // justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    navUL: {
        display: 'none',
        textDecoration: 'none',
        listStyle: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    navLI: {
        verticalAlign: 'middle',
        margin: '8px 0px',
        background: 'transparent',
        boxShadow: 'none',
        padding: '0px',
        textTranform: 'none',
        "& button": {
            padding: '0px',
            margin: '0px'
        },
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
    navbarLink: {
        width: '100%',
        textDecoration: 'none',
        color: 'white',
        cursor: 'pointer',
        "&:hover": {
            color: '#d1d1d1'
        }
    },
    linkActive: {
        color: 'blue',
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
    lios: {
        textDecoration: 'none',
        color: '#182AC3',
        pointer: 'cursor',
        padding: '10px',
    },
    act: {
        margin: '2px',
        padding: '5px 1px',
    },
    menuIcon: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            fontSize: '2.2rem',
            color: 'white'
        }
    },
    clsbeforePos: {
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer',
        "&:hover": {
            color: '#d1d1d1'
        }
    },
    clsAfterPos: {
        color: '#182AC3'
    },
}))

export function MobileMenu() {

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
            const show = window.scrollY >= 1000

            if (show) {
                setNavPos('navFixed')
                setnavAfterPos('clsAfterPos')

            } else {
                setNavPos('navRelative')
                setnavAfterPos('navbarLink')

            }
        }
        document.addEventListener('click', handleScroll)

        return () => {
            document.removeEventListener('click', handleScroll)
        }
    }, [])
    return (
        <Fade>
            <div className={classes.mainBox} data-aos="fade-down">
                <ul className={classes.navUL}>
                    <li className={classes.navLI} >
                        <h4>
                            <NavLink className={clsx(classes.navbarLink, classes[navlinkref.current])} to="/home"
                                activeClassName={classes.linkActive}>Home</NavLink>
                        </h4>
                    </li>
                    <li className={classes.navLI} >
                        <h4>
                            <NavLink className={clsx(classes.navbarLink, classes[navlinkref.current])} to="/about"
                                activeClassName={classes.linkActive}>About Us</NavLink>
                        </h4>
                    </li>
                    <li className={classes.navLI} >
                        <Button
                            className={clsx(classes.navbarLink, classes[navlinkref.current])}
                            disableRipple disableFocusRipple disableTouchRipple
                            ref={anchorRef}
                            id="composition-button"
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            onMouseOver={handleToggle}
                            style={{ textTransform: 'none' }}>
                            <h4 className={clsx(classes.navbarLink, classes[navlinkref.current])}>Industries </h4><ArrowDropDown style={{ fontSize: '1rem', }} size={40} />
                        </Button>

                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            // disablePortal
                            style={{ zIndex: '1' }}
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                                    }}
                                >
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={open}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                            className={classes.megaMenu}
                                        >
                                            {/* <MenuItem className={classes.megaMenu}> */}
                                            <MenuList>
                                                <MenuItem>
                                                    <h6><NavLink to="/iot" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >IoT Platform</NavLink ></h6>
                                                </MenuItem>
                                                <MenuItem >
                                                    <h6><NavLink to="/cloud" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Cloud Solutions</NavLink ></h6>
                                                </MenuItem>
                                                <MenuItem >
                                                    <h6><NavLink to="/evcharger" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Ev Charging Solutions</NavLink ></h6>
                                                </MenuItem>
                                                <MenuItem>
                                                    <h6><NavLink to="/solar" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Solar & Wind</NavLink ></h6>
                                                </MenuItem>
                                                <MenuItem>
                                                    <h6><NavLink to="/smartmeter" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Metering</NavLink ></h6>
                                                </MenuItem>
                                                <MenuItem>
                                                    <h6><NavLink to="/homeauto" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Home Automation</NavLink ></h6>
                                                </MenuItem>
                                            </MenuList>
                                            <hr />
                                            <MenuList>
                                                <MenuItem>
                                                    <h6><NavLink to="/smartstreet" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Street Lights</NavLink ></h6>
                                                </MenuItem>
                                                <MenuItem>
                                                    <h6><NavLink to="/railways" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Railways</NavLink ></h6>
                                                </MenuItem>
                                                <MenuItem>
                                                    <h6><NavLink to="/gaming" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Gaming</NavLink ></h6>
                                                </MenuItem>
                                                <MenuItem>
                                                    <h6><NavLink to="/smarttraffic" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Traffic Solutions</NavLink ></h6>
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
                            className={clsx(classes.navbarLink, classes[navlinkref.current])}
                            disableRipple disableFocusRipple disableTouchRipple
                            ref={anchorRef}
                            id="services-button"
                            aria-controls={open1 ? 'services-menu' : undefined}
                            aria-expanded={open1 ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle1}
                            onMouseOver={handleToggle1}
                            style={{ textTransform: 'none' }}>
                            <h4 className={clsx(classes.navbarLink, classes[navlinkref.current])}>Services</h4><ArrowDropDown style={{ fontSize: '1rem', }} size={40} />
                        </Button>

                        <Popper
                            open={open1}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            // disablePortal
                            style={{ zIndex: '1' }}
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
                                            {/* <MenuItem className={classes.megaMenu}> */}
                                            <MenuList>
                                                <MenuItem>
                                                    <h6><NavLink to="/ipcore" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >IP CORE/FPGA/SOC DESIGN SERVICES</NavLink ></h6>
                                                </MenuItem>
                                                <MenuItem >
                                                    <h6><NavLink to="/highspeed" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} > HIGH SPEED PCB DESIGN SERVICES</NavLink ></h6>
                                                </MenuItem>
                                                <MenuItem >
                                                    <h6><NavLink to="/softdev" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >SOFTWARE DEVELOPMENT</NavLink ></h6>
                                                </MenuItem>
                                                <MenuItem>
                                                    <h6><NavLink to="/electronics" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >ELECTRONICS MANUFACTURING</NavLink ></h6>
                                                </MenuItem>
                                                <MenuItem>
                                                    <h6><NavLink to="/testing" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >TESTING AND CALIBRATION</NavLink ></h6>
                                                </MenuItem>
                                                <MenuItem>
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
                            <NavLink className={clsx(classes.navbarLink, classes[navlinkref.current])}
                                to="/contact"
                                activeClassName={classes.linkActive}>Contact Us</NavLink>
                        </h4>
                    </li>
                </ul>

            </div>
        </Fade>
    )
}
