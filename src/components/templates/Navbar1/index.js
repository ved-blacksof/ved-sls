import React, { useRef, useState } from 'react'
import { makeStyles, IconButton, Toolbar, AppBar, Box, Button, Menu, MenuItem, ListItemText, Popper, Grow, Paper, ClickAwayListener, MenuList } from '@material-ui/core'
import { useHistory, NavLink, Link } from 'react-router-dom';
import { ArrowDownward, ArrowDropDown, KeyboardArrowDown, KeyboardArrowLeft, MenuOpen, MenuOutlined } from '@material-ui/icons'
import clsx from 'clsx'
// import { MobileMenu } from './MobileMenu';
import Fade from 'react-reveal/Fade';
import { keyframes } from 'styled-components';
import { animation } from 'react-reveal/globals';
import { useStyles } from './Styles'
import { MobileMenu } from './MobileMenu';
import { MobileMenuWorking } from './MobileMenuWorking';
import $ from 'jquery'


export function Navbar1({
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

    const showMobileMenu = () => {
        var x = document.getElementById("menuBox");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
        // $('.navUL').on('click',function() {
        //     $(".navULHeight").toggleClass(`.navULHeightZero`);
        //   });
    }
    const showMegamenu = (index) => {
        var x = document.getElementById(`${'menu'+index}`);
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
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
        // setMobileMenu(false)

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
        <Box style={{ paddingTop: '2%' }}>
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
                            // onClick={() => mobileMenu === false ? setMobileMenu(true) : setMobileMenu(false)} 
                            onClick={() => showMobileMenu()}
                        />
                    </Fade>

                    {/* <Fade bottom> */}
                    <ul className={classes.navUL} id="menuBox">
                        <li className={classes.navLI} onClick={() => history.push("/home")}>
                            <h4 >
                                <NavLink
                                    className={clsx(classes[navlinkref.current])}
                                    activeClassName={clsx(classes[linkactiveref.current])}
                                    to="/home" >Home</NavLink>
                            </h4>
                        </li>


                        <li className={classes.navLI} onClick={() => history.push("/about")}>
                            <h4 >
                                <NavLink
                                    className={clsx(classes[navlinkref.current])}
                                    activeClassName={clsx(classes[linkactiveref.current])}
                                    to="/about" >About Us</NavLink>
                            </h4>
                        </li>


                        {/* class onhover Mega menu */}
                        <li className={clsx(classes[navlinkref.current], classes.navLI)}
                            onClick={()=> showMegamenu(1)}
                        
                        >
                            <h4 className={clsx(classes[navlinkref.current])}
                                activeClassName={clsx(classes[linkactiveref.current])}
                                style={{ padding: '0px' }}
                                >
                                Industries
                                <KeyboardArrowDown className={classes.arrow} />
                            </h4>

                            <div className={classes.indMenu}
                                id="menu1"
                            >
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
                                    </MenuList>
                                    {/* <hr className={classes.hrs} /> */}
                                    <MenuList>
                                        <MenuItem className={classes.menuItem} >
                                            <h6 className={classes.lios} onClick={() => history.push('/smartmeter')}>Smart Metering</h6>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} >
                                            <h6 className={classes.lios} onClick={() => history.push('/homeauto')}>Home Automation</h6>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} >
                                            <h6 className={classes.lios} onClick={() => history.push('/smartstreet')}>Smart Street Lighting</h6>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} >
                                            <h6 className={classes.lios} onClick={() => history.push('/railways')}>Railways</h6>
                                        </MenuItem>
                                    </MenuList>
                                    {/* <hr className={classes.hrs} /> */}
                                    <MenuList>
                                        <MenuItem className={classes.menuItem} >
                                            <h6 className={classes.lios} onClick={() => history.push('/gaming')}>Smart Gaming</h6>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} >
                                            <h6 className={classes.lios} onClick={() => history.push('/smarttraffic')}>Smart Traffic Solutions</h6>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} >
                                            <h6 className={classes.lios} onClick={() => history.push('/digital')}>Digital Signage</h6>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} >
                                            <h6 className={classes.lios} onClick={() => history.push('/transformers')}>Intelligent Transformer Monitoring</h6>
                                        </MenuItem>
                                    </MenuList>
                                </MenuList>

                            </div>


                        </li>


                        {/* ############# Services ############  */}


                        <li
                            className={clsx(classes[navlinkref.current], classes.navLI)}
                            activeClassName={clsx(classes[linkactiveref.current])}
                            onClick={()=> showMegamenu(2)}

                        >

                            <h4 className={clsx(classes[navlinkref.current])}>
                                Services
                                <KeyboardArrowDown className={classes.arrow} />
                            </h4>

                            <div className={classes.indMenu}
                                id="menu2"

                            >

                                <MenuList
                                    className={classes.megaMenu}
                                >
                                    {/* <MenuItem className={classes.menuItem} className={classes.megaMenu}> */}
                                    <MenuList>
                                        <MenuItem className={classes.menuItem}>
                                            <h6 className={classes.lios} onClick={() => history.push("/ipcore")} >IP CORE/FPGA/SOC Design Services</h6>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} >
                                            <h6 className={classes.lios} onClick={() => history.push("/highspeed")} > High Speed PCB Design Services</h6>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} >
                                            <h6 className={classes.lios} onClick={() => history.push("/softdev")} >Software Development</h6>
                                        </MenuItem>
                                    </MenuList>
                                    {/* <hr className={classes.hrs} /> */}
                                    <MenuList>
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
                            className={clsx(classes[navlinkref.current], classes.navLI)}
                            onClick={()=> showMegamenu(3)}

                        >
                            <NavLink
                                to="#"
                                activeClassName={clsx(classes[linkactiveref.current])}
                                className={clsx(classes[navlinkref.current])}
                            >
                                <h4 className={clsx(classes[navlinkref.current])}
                                >
                                    Let's Connect
                                    <KeyboardArrowDown className={classes.arrow} />
                                </h4>
                            </NavLink>


                            <div className={classes.indMenu} 
                                id="menu3"

                            >
                                <MenuList className={classes.megaMenu}>
                                    <MenuList>
                                        <MenuItem className={classes.menuItem}>
                                            <h6 className={classes.lios} onClick={() => history.push("/contact")}>Contact Us</h6>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem}>
                                            <h6 className={classes.lios}>
                                                <Button href="https://www.slscorp.com/about-slscorp/careers.html" style={{ textTransform: 'none', background: 'transparent', padding: '0px' }}  >
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
                    {/* </Fade> */}
                </Toolbar >
                <div data-aos="slide-down">
                    {/* {
                        mobileMenu ?
                            <Box className={classes.menu} >
                                <MobileMenu />
                                <MobileMenuWorking />
                            </Box>
                            : ''
                    } */}
                </div>
            </AppBar >
        </Box >
    )
}
