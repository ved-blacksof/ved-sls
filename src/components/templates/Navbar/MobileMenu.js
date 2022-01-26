import React, { useRef, useState } from 'react'
import { makeStyles, IconButton, Toolbar, AppBar, Box, Button, Menu, MenuItem, ListItemText, Popper, Grow, Paper, ClickAwayListener, MenuList } from '@material-ui/core'
import { useHistory, NavLink, Link } from 'react-router-dom';
import { ArrowDownward, ArrowDropDown, KeyboardArrowDown, MenuOpen } from '@material-ui/icons'
import clsx from 'clsx'
import Fade from 'react-reveal/Fade';

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
        minHeight: '100px',

    },
    navFixed: {
        position: 'fixed',
        minHeight: '100px',
        top: '0px',
        boxShadow: '0px 0px 5px #777',
        background: 'transparent',
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
        cursor: 'pointer',
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
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        }
    },
    navLI: {
        position: 'relative',
        minHeight: '40px',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        transition: 'all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1)',
        boxShadow: 'none',
        color: 'white',

    },


    clsbeforePos: {
        textDecoration: 'none',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {

        },
    },
    clsAfterPos: {
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        padding: '0 1rem',
        boxShadow: '0px 1px 1px #777',
        zIndex: '1'
    },
    menuItem: {
        padding: '5px',
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
        transform: 'width .4s ease-in-out',
        paddingLeft: '5px',
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
    '@keyframes menuani': {
        '0%': {
            transform: 'translateY(50%)'
        },
        '100%': {
            transform: 'translateY(0%)'
        },
    }
}))

export function MobileMenu() {

    const classes = useStyles()

    const history = useHistory();

    const [navPos, setNavPos] = useState('navRelative')

    const [navAfterPos, setnavAfterPos] = useState('clsAfterPos')

    const [linkActivePos, setlinkActivePos] = useState('linkActive')

    // materail ui navbar drops
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const [mobileMenu, setMobileMenu] = useState(false);

    const anchorRef = useRef(null);

    const handleToggle = () => {
        // e.preventDefault()
        setOpen((prevOpen) => !prevOpen);
        setOpen1(false)
        setOpen2(false)
    };
    const handleToggle1 = () => {
        setOpen(false)
        setOpen1((prevOpen) => !prevOpen);
        setOpen2(false)
    };
    const handleToggle2 = () => {
        setOpen(false)
        setOpen1(false)
        setOpen2((prevOpen) => !prevOpen);
    };

    //CLOSE MENU

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false)

    };
    const handleClose1 = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen1(false)

    };

    const handleClose2 = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen2(false);
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

    const handleScroll = () => {
        const pageHeight = window.innerHeight + 100
        const show = window.scrollY >= pageHeight
        setOpen(false)
        setOpen1(false)
        setOpen2(false)

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

    React.useEffect(() => {

        handleScroll()

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
            <div className={classes.mainBox} data-aos="fade-down">
                <ul className={classes.navUL}>
                    <li
                        className={clsx(classes[navlinkref.current], classes.navLI)}                     >
                        <h4 >
                            <NavLink
                                className={clsx(classes[navlinkref.current])}
                                activeClassName={clsx(classes[linkactiveref.current])}
                                to="/home" >Home</NavLink>
                        </h4>
                    </li>


                    <li
                        className={clsx(classes[navlinkref.current], classes.navLI)}                     >
                        <h4 >
                            <NavLink
                                className={clsx(classes[navlinkref.current])}
                                activeClassName={clsx(classes[linkactiveref.current])}
                                to="/about" >About Us</NavLink>
                        </h4>
                    </li>


                    {/* class onhover Mega menu */}
                    <li className={clsx(classes[navlinkref.current], classes.navLI)}
                        onClick={handleToggle}
                    >
                        <NavLink
                            to="#"
                            className={clsx(classes[navlinkref.current])}
                            activeClassName={clsx(classes[linkactiveref.current])}
                            // ref={anchorRef}
                            id="composition-button"
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            aria-describedby="industries"
                        >
                            <h4 className={clsx(classes[navlinkref.current])}
                                style={{ padding: '0px' }}
                            >
                                Industries
                                <KeyboardArrowDown className={classes.arrow} />
                            </h4>


                            <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                transition
                                className={classes.popper}
                                id="industries"
                            >
                                {({ TransitionProps }) => (
                                    <Grow
                                        {...TransitionProps}
                                    // style={{
                                    //     transformOrigin:
                                    //         placement === 'bottom' ? 'left top' : 'left bottom',
                                    // }}
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
                                                        <h6 onClick={() => history.push('/iot')}><NavLink to="/iot" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >IoT Platform</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem} >
                                                        <h6 onClick={() => history.push('/cloud')} ><NavLink to="/cloud" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Cloud Solutions</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem} >
                                                        <h6 onClick={() => history.push('/evcharger')} ><NavLink to="/evcharger" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >EV Charging Solutions</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem} >
                                                        <h6 onClick={() => history.push('/solar')}><NavLink to="/solar" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Solar & Wind</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem} >
                                                        <h6 onClick={() => history.push('/smartmeter')}><NavLink to="/smartmeter" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Metering</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem} >
                                                        <h6 onClick={() => history.push('/homeauto')}><NavLink to="/homeauto" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Home Automation</NavLink ></h6>
                                                    </MenuItem>
                                                </MenuList>
                                                {/* <hr className={classes.hrs} /> */}
                                                <MenuList>
                                                    <MenuItem className={classes.menuItem} >
                                                        <h6 onClick={() => history.push('/smartstreet')}><NavLink to="/smartstreet" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Street Lights</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem} >
                                                        <h6 onClick={() => history.push('/railways')}><NavLink to="/railways" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Railways</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem} >
                                                        <h6 onClick={() => history.push('/gaming')}><NavLink to="/gaming" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Gaming</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem} >
                                                        <h6 onClick={() => history.push('/smarttraffic')}><NavLink to="/smarttraffic" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Smart Traffic Solutions</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem} >
                                                        <h6 onClick={() => history.push('/digital')}><NavLink to="/digital" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Digital Signage</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem} >
                                                        <h6 onClick={() => history.push('/transformers')}><NavLink to="/transformers" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose} >Intelligent Transformer Monitoring</NavLink ></h6>
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
                            onClick={handleToggle1}
                        >

                            <h4 className={clsx(classes[navlinkref.current])}
                                onClick={handleToggle1}
                            >
                                Services
                            </h4>
                            <KeyboardArrowDown className={classes.arrow} />

                            <Popper
                                open={open1}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                // placement="bottom-end"
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
                                        <ClickAwayListener
                                            onClickAway={handleClose1}>
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
                                                        <h6 ><NavLink to="/ipcore" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >IP CORE/FPGA/SOC Design Services</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem} >
                                                        <h6 ><NavLink to="/highspeed" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} > High Speed PCB Design Services</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem} >
                                                        <h6 ><NavLink to="/softdev" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >Software Development</NavLink ></h6>
                                                    </MenuItem>

                                                    <MenuItem className={classes.menuItem}>
                                                        <h6 ><NavLink to="/electronics" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >Electronics Manufacturing Solutions</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem}>
                                                        <h6 ><NavLink to="/testing" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >Testing & Calibration</NavLink ></h6>
                                                    </MenuItem>
                                                    <MenuItem className={classes.menuItem}>
                                                        <h6 ><NavLink to="/ml" className={classes.lios} activeClassName={classes.activeLios} onClick={handleClose1} >Machine Learning & Artificial Intelligence</NavLink ></h6>
                                                    </MenuItem>
                                                </MenuList>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Grow>
                                )}
                            </Popper>
                        </NavLink>

                    </li>



                    <li
                        className={clsx(classes[navlinkref.current], classes.navLI)}
                        onClick={handleToggle2}

                    >
                        <NavLink
                            to="#"
                            className={clsx(classes[navlinkref.current])}
                            activeClassName={clsx(classes[linkactiveref.current])}
                            ref={anchorRef}
                            id="contact-button"
                            aria-controls={open2 ? 'contact-menu' : undefined}
                            aria-expanded={open2 ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle2}
                        >
                            <h4 className={clsx(classes[navlinkref.current])}
                                onClick={handleToggle2}
                            >
                                Let's Connect
                            </h4>
                            <KeyboardArrowDown className={classes.arrow} />
                        </NavLink>

                        <Popper
                            open={open2}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-end"
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
                                    <ClickAwayListener onClickAway={handleClose2}>
                                        <MenuList
                                            autoFocusItem={open2}
                                            id="contact-menu"
                                            aria-labelledby="contact-button"
                                            onKeyDown={handleListKeyDown}
                                            className={classes.megaMenu}
                                        >
                                            {/* <MenuItem className={classes.menuItem} className={classes.megaMenu}> */}
                                            <MenuList>
                                                <MenuItem className={classes.menuItem}>
                                                    <h6 >
                                                        <NavLink to="/contact" className={classes.lios} onClick={handleClose2} >Contact us</NavLink >
                                                    </h6>
                                                </MenuItem>

                                                <MenuItem className={classes.menuItem}>
                                                    <h6 className={classes.lios}>
                                                        <Button href="https://www.slscorp.com/about-slscorp/careers.html" style={{ textTransform: 'none', background: 'transparent', padding: '0px' }}  >
                                                            <h6 style={{
                                                                color: 'black',
                                                                "&:hover": {
                                                                    border: '1px solid red'
                                                                }
                                                            }}>Join us</h6>
                                                        </Button >
                                                    </h6>
                                                </MenuItem>

                                            </MenuList>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Grow>
                            )}
                        </Popper>

                    </li>
                </ul>

            </div>
    )
}
