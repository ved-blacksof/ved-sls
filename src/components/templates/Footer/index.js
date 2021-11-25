import React, { useState } from 'react'
import { makeStyles, Box, Container, IconButton, Toolbar, AppBar } from '@material-ui/core'
import { useHistory, NavLink } from 'react-router-dom';
import RubberBand from 'react-reveal/RubberBand';
import Jello from 'react-reveal/Jello';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    mainPadding: {
        background: 'white', paddingTop: '4%'

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
        flexDirection: 'column'
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
            font: 'normal normal normal .8rem Access',
            margin: '2% 0%',
            textDecoration: 'none',
            color: 'black'
        },
        '& i': {
            padding: '0rem .5rem'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',

        }
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

    return (
        <Box className={classes.mainPadding} style={{}}>
            <Box className={classes.footerMain}>
                <Box className={classes.headBox}>
                    <RubberBand>
                        <img className=" col-md-2" src={'/images/Layer_x0020_1-1.svg'} alt="SLS Icon" />
                    </RubberBand>
                    <Jello>
                        <h6 className={classes.head}>Over the years, we have added numerous products to our portfolio
                            and have served as important technology partners for various verticals.
                        </h6>
                    </Jello>
                </Box>

                <Fade bottom>
                    <Box className={classes.linkList}>


                        <ul className={classes.linkUL}>
                            <li>ABOUT SLS</li>
                            <li> <a className={classes.links} href="/"> IN A SNAPSHOT </a> </li>
                            <li> <a className={classes.links} href="/"> CSR INITIATIVES </a> </li>
                            <li> <a className={classes.links} href="/"> CERTIFICATIONS AND TIE-UPS </a> </li>
                            {/* 
                    <li> <a className={classes.links} href="/"> ASIC/FPGA.SOC DESIGN SERVICES </a> </li>
                    <li> <a className={classes.links} href="/"> CAREERS </a> </li> 
                    */}
                        </ul>



                        <ul className={classes.linkUL}>
                            <li>INDUSTRIES</li>
                            <li> <a className={classes.links} href="/iot"> IoT PLATFORM </a> </li>
                            <li> <a className={classes.links} href="/cloud"> CLOUD SOLUTIONS </a> </li>
                            {/* <li> <a className={classes.links} href="/"> E-MOBILITY </a> </li> */}
                            {show1 ?
                                <>
                                    {/* <li className={classes.liShow} onClick={() => { history.push('/watchproduct1') }}>Smartwatch</li> */}

                                    <li> <a className={classes.links} href="/solar"> SOLAR & WIND </a> </li>
                                    <li> <a className={classes.links} href="/smartmeter"> SMART METERING </a> </li>
                                    {/* <li> <a className={classes.links} href="/"> SMART GRID </a> </li> */}
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
                            <li> <a className={classes.links} href="/ipcore"> ASIC/FPGA/SOC DESIGN SERVICES </a> </li>
                            <li> <a className={classes.links} href="/highspeed"> HIGH SPEED PCB DESIGN SERVICES </a> </li>
                            <li> <a className={classes.links} href="/softdev"> SOFTWARE DEVELOPMENT  </a> </li>
                            {
                                show ?
                                    <>
                                        {/* <li className={classes.liShow} onClick={() => { history.push('/watchproduct1') }}>Smartwatch</li> */}

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
                            {/* <li> <a className={classes.links} href="/careers"> CAREERS </a> </li> */}
                        </ul>




                    </Box>
                </Fade>

                <hr className='hr' />
                <Fade top>
                    <div className={classes.copyBox}>
                        <a> System Level Solutions Inc. Copyright &copy; 2021 </a>
                        <div className="links">
                            <a target="_blank" href="https://www.facebook.com/system.level.solutions.corp" >Facebook</a><i>|</i>
                            <a target="_blank" href="https://www.instagram.com/system_level_solutions/" >Instagram</a><i>|</i>
                            <a target="_blank" href="https://twitter.com/S_L_S" >Twitter</a><i>|</i>
                            <a target="_blank" href="https://www.linkedin.com/company/system-level-solutions-india-pvt.-ltd/" >LinkedIn</a>
                        </div>
                    </div>
                </Fade>

            </Box>
        </Box>
    )
}


