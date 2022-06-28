import React, { useRef, useState } from 'react'
import { makeStyles, IconButton, Toolbar, AppBar, Box, Button, Menu, MenuItem, ListItemText, Popper, Grow, Paper, ClickAwayListener, MenuList } from '@material-ui/core'
import { useHistory, NavLink, Link } from 'react-router-dom';
import { ArrowDownward, ArrowDropDown, KeyboardArrowDown, MenuOpen } from '@material-ui/icons'
import clsx from 'clsx'
import Fade from 'react-reveal/Fade';
import gsap from 'gsap/all';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        marginTop:'2%'
    },
    navRelative: {
        position: 'relative',
        width: '100%',
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
    clsbeforePos: {
        textDecoration: 'none',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start',
            // overflow: 'hidden'
        },
    },
    clsAfterPos: {
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer',
        display: 'flex',

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

    navUL: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            width: '100%',
        }
    },
    navLI: {
        position: 'relative',
        minHeight: '40px',
        // display: 'flex',
        // alignItems: 'center',
        background: 'transparent',
        transition: 'all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1)',
        boxShadow: 'none',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            // overflow:'hidden',
            padding: '0 10px',
            width: '100%',
            margin: '0 auto'
        },
        "&:hover": {
            "& div": {
                display: 'block',
                bottom: '0%',
                animation: `$menuAnimation 800ms ease-in-out`,
                animationIterationCount: 1,
                animationDuration: '500ms',
            },
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
    '@keyframes menuAnimation': {
        '0%': {
            transform: 'translateY(6%)',
            opacity: 0
        },
        '100%': {
            transform: 'translateY(0%)',
            opacity: 1
        },
    },

    navLiH4: {
        overflow: 'hidden',
        padding: '0 5%',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    arrow: {
        color: 'white',
        fontSize: '1.8rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        },
    },
    // mega menu
    indMenu: {
        [theme.breakpoints.down('sm')]: {
            height: '0',
            width: '100%',
            overflow: 'hidden',
            transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
            animation: `$menuAnimation 800ms ease-in-out`,
            animationIterationCount: 1,
            animationDuration: '500ms',
        },
    },
    megaMenu: {
        height: 'fit-content',
        display: 'flex',
        borderRadius: '0px',
        background: 'white',
        zIndex: '100',
        padding: '0 1rem',
        boxShadow: '0px 1px 1px #777',
        zIndex: '1',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            padding: '0% 5%',
        },
        "& .MuiMenuItem-root": {
            minHeight: '30px'
        }
    },
    menuItem: {
        padding: '2px',
        background: 'transparent',
        position: 'relative',
        "&:hover": {
            background: 'transparent !important',
        },
    },
    lios: {
        width: '100%',
        textDecoration: 'none',
        color: '#000',
        pointer: 'cursor',
        transform: 'width .4s ease-in-out',
        paddingLeft: '5px',
        "& .MuiButton-root":{
            minWidth:'0px'
        }
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

export function MobileMenuWorking() {

    const classes = useStyles()

    const history = useHistory();

    const [navPos, setNavPos] = useState('navRelative')

    const [navAfterPos, setnavAfterPos] = useState('clsAfterPos')

    const [linkActivePos, setlinkActivePos] = useState('linkActive')

    // materail ui navbar drops
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const anchorRef = useRef(null);


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

    let indMenuRef = useRef()
    let serviceRef = useRef()
    let connectRef = useRef()

    const handleMenu = (refs) => {
        console.log(refs)
        setIsOpen(false)
        if (!isOpen) {
            gsap.to(refs.current, { height: 'fit-content', duration: .2 })
            setIsOpen(true)
        } else {
            gsap.to(refs.current, { height: '0', duration: .2 })
            setIsOpen(false)
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

        <div className={classes.mainBox} data-aos="fade">
            <ul className={classes.navUL}>
                <li className={classes.navLI} onClick={() => history.push("/home")}>
                    <h4 >
                        <NavLink
                            className={clsx(classes[navlinkref.current], classes.navLiH4)}
                            activeClassName={clsx(classes[linkactiveref.current])}
                            to="/home" >Home</NavLink>
                    </h4>
                </li>


                <li className={classes.navLI} onClick={() => history.push("/about")}>
                    <h4 >
                        <NavLink
                            className={clsx(classes[navlinkref.current], classes.navLiH4)}
                            activeClassName={clsx(classes[linkactiveref.current])}
                            to="/about" >About Us</NavLink>
                    </h4>
                </li>


                {/* class onhover Mega menu */}
                <li className={classes.navLI}>
                    <h4
                        className={clsx(classes[navlinkref.current], classes.navLiH4)}
                        // activeClassName={clsx(classes[linkactiveref.current])}
                        onClick={() => handleMenu(indMenuRef)}>
                        Industries
                        <KeyboardArrowDown className={classes.arrow} />
                    </h4>



                    <div className={classes.indMenu} ref={e => indMenuRef.current = e}>
                        <MenuList
                            className={classes.megaMenu}
                        >
                            {/* <MenuItem className={classes.menuItem} className={classes.megaMenu}> */}
                            <MenuList>
                                <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push('/iot')}>IoT Platform</h6>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push('/cloud')} >Cloud Solutions</h6>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push('/evcharger')} >EV Charging Solutions</h6>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push('/solar')}>Solar & Wind</h6>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push('/smartmeter')}>Smart Metering</h6>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push('/homeauto')}>Home Automation</h6>
                                </MenuItem>
                            </MenuList>
                            <MenuList>
                                <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push('/smartstreet')}>Smart Street Lighting</h6>
                                </MenuItem>
                                {/* <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push('/railways')}>Railways</h6>
                                </MenuItem> */}

                                <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push('/gaming')}>Smart Gaming</h6>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push('/smarttraffic')}>Smart Traffic Solutions</h6>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push('/digital')}>Digital Signage</h6>
                                </MenuItem>
                                {/* <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push('/transformers')}>Transformer Monitoring</h6>
                                </MenuItem> */}
                            </MenuList>
                        </MenuList>

                    </div>
                </li>


                {/* ############# Services ############  */}


                <li className={classes.navLI}>
                    <h4 className={clsx(classes[navlinkref.current], classes.navLiH4)}
                        onClick={() => handleMenu(serviceRef)}>
                        Services
                        <KeyboardArrowDown className={classes.arrow} />
                    </h4>

                    {/* SERVICES MENU */}

                    <div className={classes.indMenu} ref={e => serviceRef.current = e}>

                        <MenuList className={classes.megaMenu}>
                            <MenuList>
                                <MenuItem className={classes.menuItem}>
                                    <h6 className={classes.lios} onClick={() => history.push("/ipcore")} >IP CORE/FPGA/SoC Design Services</h6>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push("/highspeed")} > High Speed PCB Design Services</h6>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} >
                                    <h6 className={classes.lios} onClick={() => history.push("/softdev")} >Software Development</h6>
                                </MenuItem>
                                {/* </MenuList>
                            <MenuList> */}
                                <MenuItem className={classes.menuItem}>
                                    <h6 className={classes.lios} onClick={() => history.push("/electronics")} >Electronics Manufacturing Services</h6>
                                </MenuItem>
                                <MenuItem className={classes.menuItem}>
                                    <h6 className={classes.lios} onClick={() => history.push("/testing")} >Testing & Calibration</h6>
                                </MenuItem>
                                <MenuItem className={classes.menuItem}>
                                    <h6 className={classes.lios} onClick={() => history.push("/ml")} >Machine Learning & Artificial Intelligence</h6>
                                </MenuItem>
                            </MenuList>
                        </MenuList>
                    </div>
                </li>



                <li
                    className={clsx(classes.navLI)}
                >
                    <h4 className={clsx(classes[navlinkref.current], classes.navLiH4)}
                        onClick={() => handleMenu(connectRef)}
                    >
                        Let's Connect
                        <KeyboardArrowDown className={classes.arrow} />
                    </h4>

                    <div className={classes.indMenu} ref={e => connectRef.current = e}>
                        <MenuList className={classes.megaMenu}>
                            <MenuList>
                                <MenuItem className={classes.menuItem}>
                                    <h6 className={classes.lios} onClick={() => history.push("/contact")}>Contact Us</h6>
                                </MenuItem>
                                <MenuItem className={classes.menuItem}>
                                    <h6 className={classes.lios}>
                                        <Button href="https://core.slscorp.com/about-slscorp/careers.html"
                                            target="_blank"
                                            style={{ textTransform: 'none', background: 'transparent', padding: '0px' }}  >
                                            <h6
                                                style={{
                                                    color: 'black',
                                                    "&:hover": {
                                                        color: 'blue'
                                                    }
                                                }}>Join us</h6>
                                        </Button >
                                    </h6>
                                </MenuItem>

                            </MenuList>
                        </MenuList>
                    </div>

                </li>
            </ul>

        </div>
    )
}
