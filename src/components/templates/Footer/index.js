import React, { useEffect, useState } from 'react'
import { makeStyles, Box, Container, IconButton, Toolbar, AppBar } from '@material-ui/core'
import { useHistory, NavLink } from 'react-router-dom';
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    mainPadding: {
        background: 'white', 
        paddingTop: '4%'
    },
    footerMain: {
        background: 'white',
        margin: '0% 1%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '10%',
            width: '85%',
            margin: '0% auto'
        }
    },
    headBox: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    },
    imageBox: {
        width: '10rem',
        "& img": {
            width: '100%',
            maxHeight: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '10rem',
        }
    },
    head: {
        color: 'black',
        width: '40%',
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        }
    },
    linkList: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        marginTop: '5%',
        [theme.breakpoints.down('sm')]: {
            // flexDirection: 'column'
            flexWrap: 'wrap                                                                                                                                      '
        }
    },
    linkUL: {
        width: '',
        listStyle: 'none',
        [theme.breakpoints.down('sm')]: {
            width: '45%'
        },
        '& li': {
            paddingTop: '1.5rem'
        },
        '& li:first-child': {
            font: 'normal normal bold 1rem Access',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1rem'
            }
        }
    },
    links: {
        font: 'normal normal normal .8rem Access',
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.8rem'
        }
    },
    copyBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            verticalAlign:'middle',
            color: 'black',
            [theme.breakpoints.down('sm')]: {
                fontSize: '.7rem',
            }
        },
        '& i': {
            padding: '0rem .5rem'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse'
        }
    },
    socialBox: {
        verticalAlign: 'middle',
        margin: '1% 0%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    socialIcons: {
        verticalAlign: 'middle',
        paddingRight: '3px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
        }
    },
    socialText: {
        color:'black',
        display:'inline',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    anchor:{
        display:'flex',
        alignItems:'center',
    },  
    hrs: {
        // margin: '1% 0%'
    }

}))


export function Footer() {
    const classes = useStyles()

    const [show1, setShow1] = React.useState(false)
    const [show, setShow] = React.useState(false)

    const [viewmore1, setViewmore1] = useState("+ VIEW MORE")
    const [viewmore, setViewmore] = useState("+ VIEW MORE")

    const view1 = () => {
        show1 === false ? setViewmore1("- VIEW LESS") || setShow1(true) : setViewmore1("- VIEW MORE") || setShow1(false)
    }
    const view = () => {
        show === false ? setViewmore("- VIEW LESS") || setShow(true) : setViewmore("- VIEW MORE") || setShow(false)
    }

    const history = useHistory();

    // useEffect(() => {
    //     AOS.init({
    //         offset: 200,
    //         duration: 500,
    //         easing: 'ease-in-sine',
    //         delay: 100,
    //     });
    // }, [])

    return (
        <Box className={classes.mainPadding} style={{}}>
            <Box className={classes.footerMain}>
                <Box className={classes.headBox}>
                    <Fade bottom>
                        <Box className={classes.imageBox}>
                            <img src={'/images/Layer_x0020_1-1.svg'} alt="SLS Icon" />
                        </Box>
                    </Fade>
                    <Fade bottom>
                        <h6 className={classes.head}>Over the years, we have added numerous products to our portfolio
                            and have served as important technology partners for various verticals.
                        </h6>
                    </Fade>
                </Box>

                {/* <Fade bottom>
                    <Box className={classes.linkList}>
                        <ul className={classes.linkUL}>
                            <li>ABOUT SLS</li>
                            <li> <a className={classes.links} href="/"> IN A SNAPSHOT </a> </li>
                            <li> <a className={classes.links} href="/"> CSR INITIATIVES </a> </li>
                            <li> <a className={classes.links} href="/"> CERTIFICATIONS AND TIE-UPS </a> </li>
                        </ul>



                        <ul className={classes.linkUL}>
                            <li>INDUSTRIES</li>
                            <li> <a className={classes.links} href="/iot"> IoT PLATFORM </a> </li>
                            <li> <a className={classes.links} href="/cloud"> CLOUD SOLUTIONS </a> </li>
                            <li> <a className={classes.links} href="/evcharger"> EV CHARGING SOLUTIONS </a> </li>
                            {show1 ?
                                <>

                                    <li> <a className={classes.links} href="/solar"> SOLAR & WIND </a> </li>
                                    <li> <a className={classes.links} href="/smartmeter"> SMART METERING </a> </li>
                                    <li> <a className={classes.links} href="/homeauto"> HOME AUTOMATION </a> </li>
                                    <li> <a className={classes.links} href="/smartstreet"> SMART STREET LIGHTS </a> </li>
                                    <li> <a className={classes.links} href="/railways"> RAILWAYS </a> </li>
                                    <li> <a className={classes.links} href="/gaming"> GAMING </a> </li>
                                    <li> <a className={classes.links} href="/smarttraffic"> TRAFFIC SOLUTIONS </a> </li>
                                </>
                                : null
                            }
                            <li>
                                <a
                                    className={classes.links}
                                    onClick={view1}
                                    style={{ color: '#182AC3' }}> {viewmore1}
                                </a>
                            </li>

                        </ul>



                        <ul className={classes.linkUL}>
                            <li>  SERVICES </li>
                            <li> <a className={classes.links} href="/ipcore"> IP CORE/FPGA/SOC DESIGN SERVICES </a> </li>
                            <li> <a className={classes.links} href="/highspeed"> HIGH SPEED PCB DESIGN SERVICES </a> </li>
                            <li> <a className={classes.links} href="/softdev"> SOFTWARE DEVELOPMENT  </a> </li>
                            {
                                show ?
                                    <>

                                        <li> <a className={classes.links} href="/electronics"> ELECTRONICS MANUFACTURING </a> </li>
                                        <li> <a className={classes.links} href="/testing">TESTING AND CALIBRATION </a> </li>
                                        <li> <a className={classes.links} href="/ml"> ML & AI </a> </li>
                                    </>
                                    : null
                            }
                            <li>
                                <a className={classes.links}
                                    onClick={view}
                                    style={{ color: '#182AC3' }}> {viewmore}
                                </a>
                            </li>
                        </ul>



                        <ul className={classes.linkUL}>
                            <li>  CONTACT US </li>

                            <li><a className={classes.links} href="/contact"> CAREERS </a> </li>
                        </ul>




                    </Box>
                </Fade>  */}
                <br />
                <br />
                <br />


                <hr className={classes.hrs} />
                <Fade top>
                    <div className={classes.copyBox}>
                        <h6 className={classes.socialText}>System Level Solutions Inc. Copyright &copy; 2021</h6>
                        <div className={classes.socialBox}>
                            <a target="_blank" href="https://www.facebook.com/system.level.solutions.corp" className={classes.anchor}><Facebook className={classes.socialIcons} />
                                {/* <h6 className={classes.socialText}>Facebook</h6> */}
                            </a><i>|</i>
                            <a target="_blank" href="https://www.instagram.com/system_level_solutions/" className={classes.anchor}><Instagram className={classes.socialIcons} />
                                {/* <h6 className={classes.socialText}>Instagram</h6> */}
                            </a><i>|</i>
                            <a target="_blank" href="https://twitter.com/S_L_S" className={classes.anchor}><Twitter className={classes.socialIcons} />
                                {/* <h6 className={classes.socialText}>Twitter</h6> */}
                            </a><i>|</i>
                            <a target="_blank" href="https://www.linkedin.com/company/system-level-solutions-india-pvt.-ltd/" className={classes.anchor}> <LinkedIn className={classes.socialIcons} />
                                {/* <h6 className={classes.socialText}>LinkedIn</h6> */}
                            </a>
                        </div>
                    </div>
                </Fade>

            </Box>
        </Box>
    )
}


