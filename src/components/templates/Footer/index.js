import React from 'react'
import { makeStyles, Box, Container, IconButton, Toolbar, AppBar } from '@material-ui/core'
import { useHistory, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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
            width: '70%'
        }
    },
    linkList: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        marginTop: '5%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    linkUL: {
        listStyle: 'none',
        '& li': {
            paddingTop: '1.5rem'
        },
        '& li:first-child': {
            font: 'normal normal bold 1rem Access',
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.5rem'
            }
        }
    },
    links: {
        font: 'normal normal normal .8rem Access',
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
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
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',

        }
    }

}))

export function Footer() {
    const classes = useStyles()

    const [show, setShow] = React.useState(false)
    const [show1, setShow1] = React.useState(false)

    const history = useHistory();
    return (
        <Box style={{ background: 'white', paddingTop: '5%' }}>
            <Box className={classes.footerMain}>
                <Box className={classes.headBox}>
                    <img className=" col-md-2" src={'/images/Layer_x0020_1-1.svg'} alt="SLS Icon" />
                    <h6 className={classes.head}>Over the years, we have added numerous products to our portfolio
                        and have served as important technology partners for various verticals.
                    </h6>
                </Box>

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
                        <li> <a className={classes.links} href="/"> E-MOBILITY </a> </li>
                        <li> <a className={classes.links}
                            onClick={() => show1 === false ? setShow1(true) : setShow1(false)}
                            style={{ color: '#182AC3' }}> + VIEW MORE  </a> </li>


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
                    </ul>



                    <ul className={classes.linkUL}>
                        <li>  SERVICES </li>
                        <li> <a className={classes.links} href="/ipcore"> ASIC/FPGA/SOC DESIGN SERVICES </a> </li>
                        <li> <a className={classes.links} href="/highspeed"> HIGH SPEED PCB DESIGN SERVICES </a> </li>
                        <li> <a className={classes.links} href="/softdev"> SOFTWARE DEVELOPMENT  </a> </li>
                        <li> <a className={classes.links}
                            onClick={() => { show === false ? setShow(true) : setShow(false) }}
                            style={{ color: '#182AC3' }}> + VIEW MORE  </a> </li>
                        {show ?
                            <>
                                {/* <li className={classes.liShow} onClick={() => { history.push('/watchproduct1') }}>Smartwatch</li> */}

                                <li> <a className={classes.links} href="/electronics"> ELECTRONICS MANUFACTURING </a> </li>
                                <li> <a className={classes.links} href="/testing">TESTING AND CALIBRATION </a> </li>
                                <li> <a className={classes.links} href="/ml"> ML & AI </a> </li>
                            </>
                            : null
                        }
                    </ul>



                    <ul className={classes.linkUL}>
                        <li><a className={classes.links} href="/contact"> CONTACT US </a> </li>
                        {/* <li> <a className={classes.links} href="/careers"> CAREERS </a> </li> */}
                    </ul>




                </Box>

                <br />
                <br />
                <br />

                <hr />

                <div className={classes.copyBox}>
                    <a> System Level Solutions Inc. Copyright &copy; 2021 </a>
                    <div className="links">
                        <a target="_blank" href="https://www.facebook.com/system.level.solutions.corp" >Facebook</a><i>|</i>
                        <a target="_blank" href="https://www.instagram.com/system_level_solutions/" >Instagram</a><i>|</i>
                        <a target="_blank" href="https://twitter.com/S_L_S" >Twitter</a><i>|</i>
                        <a target="_blank" href="https://www.linkedin.com/company/system-level-solutions-india-pvt.-ltd/" >LinkedIn</a>
                    </div>
                </div>


            </Box>
        </Box>
    )
}


