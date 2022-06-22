import React, { useRef, useState } from 'react'
import { Toolbar, AppBar, Box, Button, MenuItem, MenuList } from '@material-ui/core'
import { useHistory, NavLink } from 'react-router-dom';
import { KeyboardArrowDown, MenuOutlined } from '@material-ui/icons'
import clsx from 'clsx'
import Fade from 'react-reveal/Fade';
import { useStyles } from './Styles'
import { MobileMenuWorking } from './MobileMenuWorking';
import gsap from 'gsap/all';



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
    const [open2, setOpen2] = useState(false);

    const [mobileMenu, setMobileMenu] = useState(false);

    const anchorRef = useRef(null);

    //CLOSE MENU

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

    let mobileMenuRef = useRef()

    const handleMobileMenu = () => {
        if (!mobileMenu) {
            gsap.to(mobileMenuRef, { height: 'fit-content', display: 'block', duration: .2 })
            setMobileMenu(true)
        } else {
            gsap.to(mobileMenuRef, { height: '0px', display: 'none', duration: .2 })
            setMobileMenu(false)
        }
    }


    React.useEffect(() => {
        handleScroll();
        document.addEventListener('scroll', handleScroll)
        return () => { document.removeEventListener('scroll', handleScroll) }
    }, [])
    return (
        <Box style={{ paddingTop: '2%' }}>
            <AppBar
                position='static'
                color='transparent'
                className={clsx(classes.mainBox, classes[navref.current])}
                style={style}
            >
                <Toolbar className={classes.navbar} disableRipple disableFocusRipple disableTouchRipple>
                    <Box className={classes.logoBox} edge="start" color="inherit" aria-label="menu">

                        <Fade bottom>
                            <img
                                className={classes.logo}
                                src={navPos === "navRelative" ? '/images/Layer_x0020_1.svg' : "/images/Layer_x0020_1-1.svg"}
                                onClick={() => { history.push('/') }} />
                        </Fade>

                    </Box>

                    <Fade>
                        <MenuOutlined
                            className={clsx(classes.menuIcon, classes[navlinkref.current])}
                            onClick={handleMobileMenu} />
                    </Fade>

                    {/* <Fade bottom> */}
                    <ul className={classes.navUL}>
                        <li className={classes.navLI} onClick={() => history.push("/home")}>
                            <h4 >
                                <NavLink
                                    className={clsx(classes[navlinkref.current])}
                                    activeClassName={classes[linkactiveref.current]}
                                    to="/home" >Home</NavLink>
                            </h4>
                        </li>

                        <li className={classes.navLI} onClick={() => history.push("/about")}>
                            <h4 >
                                <NavLink
                                    className={clsx(classes[navlinkref.current])}
                                    activeClassName={classes[linkactiveref.current]}
                                    to="/about" >About Us</NavLink>
                            </h4>
                        </li>


                        {/* class onhover Mega menu */}
                        <li className={clsx(classes[navlinkref.current], classes.navLI)}>
                            <h4 className={clsx(classes[navlinkref.current])}
                                activeClassName={clsx(classes[linkactiveref.current])}
                                style={{ padding: '0px' }}>
                                Industries
                                <KeyboardArrowDown className={classes.arrow} />
                            </h4>

                            <div className={classes.indMenu} >
                                <MenuList
                                    onKeyDown={handleListKeyDown}
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
                                        {/* <MenuItem className={classes.menuItem} >
                                            <h6 className={classes.lios} onClick={() => history.push('/railways')}>Railways</h6>
                                        </MenuItem> */}
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
                                        {/* <MenuItem className={classes.menuItem} >
                                            <h6 className={classes.lios} onClick={() => history.push('/transformers')}>Intelligent Transformer Monitoring</h6>
                                        </MenuItem> */}
                                    </MenuList>
                                </MenuList>

                            </div>


                        </li>


                        {/* ############# Services ############  */}


                        <li
                            className={clsx(classes[navlinkref.current], classes.navLI)}
                            activeClassName={clsx(classes[linkactiveref.current])}
                        >

                            <h4 className={clsx(classes[navlinkref.current])}>
                                Services
                                <KeyboardArrowDown className={classes.arrow} />
                            </h4>

                            <div className={classes.indMenu}>

                                <MenuList
                                    className={classes.megaMenu}
                                >
                                    {/* <MenuItem className={classes.menuItem} className={classes.megaMenu}> */}
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
                        >
                            <NavLink
                                to="#"
                                // activeClassName={clsx(classes[linkactiveref.current])}
                                className={clsx(classes[navlinkref.current])}
                            >
                                <h4 className={clsx(classes[navlinkref.current])}
                                >
                                    Let's Connect
                                    <KeyboardArrowDown className={classes.arrow} />
                                </h4>
                            </NavLink>


                            <div className={classes.indMenu}>
                                <MenuList className={classes.megaMenu}>
                                    <MenuList>
                                        <MenuItem className={classes.menuItem}>
                                            <h6 className={classes.lios} onClick={() => history.push("/contact")}>Contact Us</h6>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem}>
                                            <h6 className={classes.lios}>
                                                <Button href="https://www.slscorp.com/about-slscorp/careers.html"
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
                    {/* </Fade> */}
                </Toolbar >
                <div data-aos="slide-down">
                    <Box className={classes.menu} ref={(e) => mobileMenuRef = e}>
                        {/* <MobileMenu /> */}
                        <MobileMenuWorking />
                    </Box>
                </div>
            </AppBar >
        </Box >
    )
}
