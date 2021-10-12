import React from 'react'
import { makeStyles, Box, Container, IconButton, Toolbar, AppBar } from '@material-ui/core'
import { useHistory, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    footerMain: {
        marginTop: '10%'
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
        [theme.breakpoints.down('xs')]: {
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
        font: 'normal normal normal 1rem Access',
        textDecoration: 'none',
        color: 'black',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem'
        }
    },
    copyBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& span': {
            font: 'normal normal normal .8rem Access',
            margin: '2% 0%',
            fontSize: '1rem'
        },
        '& i': {
            padding: '0rem .5rem'
        },
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column-reverse',
            
        }
    }

}))

export function Footer() {
    const classes = useStyles()

    const history = useHistory();
    return (
        <Container fixed className={classes.footerMain}>
            <Box className={classes.headBox}>
                <img className=" col-md-2" src={'/images/Layer_x0020_1-1.svg'} alt="SLS Icon" />
                <h6 className={classes.head}>Over the years, we have added numerous products to our portfolio
                    and have served as important technology partners for various verticals.
                </h6>
            </Box>

            <Box className={classes.linkList}>
                <ul className={classes.linkUL}>
                    <li>ABOUT SLS</li>
                    <li> <a className={classes.links} href="/#"> IN A SNAPSHOT </a> </li>
                    <li> <a className={classes.links} href="/#"> CSR INITIATIVES </a> </li>
                    <li> <a className={classes.links} href="/#"> CERTIFICATIONS AND TIE-UPS </a> </li>
                    <li> <a className={classes.links} href="/#"> ASIC/FPGA.SOC DESIGN SERVICES </a> </li>
                    <li> <a className={classes.links} href="/#"> CAREERS </a> </li>
                </ul>
                <ul className={classes.linkUL}>
                    <li>INDUSTRIES</li>
                    <li> <a className={classes.links} href="/#"> IoT PLATFORM </a> </li>
                    <li> <a className={classes.links} href="/#"> CLOUD SOLUTIONS </a> </li>
                    <li> <a className={classes.links} href="/#"> E-MOBILITY </a> </li>
                    <li> <a className={classes.links} href="/#"> SOLAR & WIND </a> </li>
                    <li> <a className={classes.links} href="/#"> SMART METERING </a> </li>
                    <li> <a className={classes.links} href="/#"> SMART GRID </a> </li>
                    <li> <a className={classes.links} href="/#"> HOME AUTOMATION </a> </li>
                    <li> <a className={classes.links} href="/#"> SMART STREET LIGHTS </a> </li>
                    <li> <a className={classes.links} href="/#"> RAILWAYS </a> </li>
                    <li> <a className={classes.links} href="/#"> GAMING </a> </li>
                    <li> <a className={classes.links} href="/#"> TRAFFIC SOLUTIONS </a> </li>
                </ul>
                <ul className={classes.linkUL}>
                    <li>  SERVICES </li>
                    <li> <a className={classes.links} href="/#"> ASIC/FPGA/SOC DESIGN SERVICES </a> </li>
                    <li> <a className={classes.links} href="/#"> HIGH SPEED PCB DESIGN SERVICES </a> </li>
                    <li> <a className={classes.links} href="/#"> SOFTWARE DEVELOPMENT  </a> </li>
                    <li> <a className={classes.links} href="/#"> ELECTRONICS MANUFACTURING </a> </li>
                    <li> <a className={classes.links} href="/#">TESTING AND CALIBRATION </a> </li>
                    <li> <a className={classes.links} href="/#"> ML & AI </a> </li>


                </ul>
                <ul className={classes.linkUL}>
                    <li>CONTACT US</li>
                    <li> <a className={classes.links} href="/#"> CAREERS </a> </li>

                </ul>


            </Box>
            
            <br />
            <br />
            <br />

            <hr />

            <div className={classes.copyBox}>
                <span> System Level Solutions Inc. Copyright &copy; 2021 </span>
                <div className="links">
                    <span>Facebook</span><i>|</i>
                    <span>Instagram</span><i>|</i>
                    <span>Twitter</span><i>|</i>
                    <span>LinkedIn</span>
                </div>
            </div>


        </Container>
    )
}


