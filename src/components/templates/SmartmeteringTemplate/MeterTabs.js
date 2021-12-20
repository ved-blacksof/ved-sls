import { Container, makeStyles, Box, Typography, Tabs, Tab } from '@material-ui/core'
import { PropTypes } from 'prop-types'
import React from 'react'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'
import { MainContainer } from '../../atoms';
import { smartstreet } from '../../molecules/PortfolioData'
import clsx from 'clsx';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    mainContainer: {

    },
    tabsBox: {
        width: '100%',
        padding: '0% 7%',
        position:'sticky',
        top:'80px',
        zIndex:'2',
        background:'white',
        transition:'all 0.5s ease-in-out',
    },
    tabs: {
        paddingTop:'10px',
        "& > span": {
            maxWidth: 40,
            width: "100%",
            backgroundColor: "white"
        }
    },
    tab: {
        textTransform: 'none',
        // padding:'5rem',
        font: 'normal normal 800 1.2rem Access',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        }
    },
    smartBox: {

    },
    uksmartBox: {

    }
}))


export function MeterTabs() {
    const classes = useStyles()

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>

            <Box className={classes.mainContainer}>
                <br/>
                <Box className={classes.tabsBox}>
                    <Tabs value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        className={classes.tabs}
                        TabIndicatorProps={{
                            style: {
                                background: 'black',
                            },
                            children: <span />
                        }}
                    >
                        <Tab disableRipple className={classes.tab} label="Smart Metering" {...a11yProps(0)} />
                        <Tab disableRipple className={classes.tab} label="UK Smart Metering" {...a11yProps(1)} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>

                    {/* ################  SMAERT METERING PANEL VIA TABs ############## */}

                    <Box className={classes.smartBox}>
                        <Quality
                            mainheading="smart metering"
                            mainsubheading="SLS has continually been engaged in developing breakthrough products in the Smart Metering Landscape. We offer a wide range of solutions built using a culmination of new-edge technologies over the functional blocks of HES, WAN cluster for smart devices and, DCU and HAN application for residential metering applications."
                            imageBG="./images/Smart_Metering_Profile.png"
                            heading="RF Canopy"
                            subtitle="Our Smart Metering Infrastructure is powered through RF Technology and Network Interface Card that offers robust network capacity to all the connected devices. Our products use lower bandwidth radio frequencies that are less congested and offer reliable connectivity across the Smart Metering Infrastructure.  "
                            list="list"
                            firstli="Wi-Sun Protocol"
                            secli="LoRaWAN Network"
                            redline
                        />

                        <QualityReverse
                            imageBG="./images/DCU.png"
                            heading="Data Concentration Unit (DCU)"
                            subtitle="The Data Concentration Unit is the secured hub in our smart metering infrastructure that facilitates the exchange of all data between the smart meters/IHD and HES."
                            redline
                        />

                        <Quality
                            imageBG="./images/Asset 2.png"
                            heading="Head End System (HES)"
                            subtitle="The HES is our scalable head-end data acquisition solution for the AMI. The HES is an IoT-powered solution that monitors and controls all Smart Meters and operates as a communication driver between MDM Systems and measurement devices."
                            redline
                        />

                        {/* <Visit
                            title="Know More"
                            href={"http://www.smets2design.com/"}
                        /> */}
                    </Box>

                </TabPanel>



                <TabPanel value={value} index={1}>
                    {/* ################  UK METERING PANEL VIA TABs ############## */}


                    <Box className={classes.uksmartBox}>
                        <Quality
                            mainheading="uk smart metering"
                            mainsubheading="SLS has joined hands with the UK Government in its mission to connect over 99% of premises in the southern and central regions of Great Britain with Smart Metering Infrastructure and Network. Leading the DCC Program, we aim at providing Britain with Smart Metering RF technology, equipment, and devices for a quick overhaul of the existing metering landscape."
                            imageBG="./images/hcalcs_2001_v11.38.png"
                            heading="HCALS"
                            subtitle="The HAN Connected Auxiliary Load Control Switch is a flexible direct load control solution made for effectively managing peak demand. The product helps control the residential and commercial load from HVAC Applications."
                            redline


                        />

                        <QualityReverse
                            imageBG="./images//HAN.png"
                            heading="HAN Assist Tool"
                            subtitle="HAT is a robust industry-grade tool that helps in easy decision-making in the installation and deployment of any 2.4 GHz & Sub GHz smart meters. The tool helps reduce time load and supports the easy implementation of the smart metering infrastructure effectively."
                            redline
                        />

                        <Quality
                            imageBG="./images/esme.png"
                            heading="Emulator"
                            subtitle="Our range of emulators supports both GHz and Sub GHz RF bands. In the Smart Metering Infrastructure, they help emulate various devices such as Gas Smart Meter Equipment (GSME), Electricity Smart Meter Equipment (ESME), Prepayment Meter Interface Device (PPMID), In-Home Display (IHD), and Auxiliary Load Control Switch (ALCS)."
                            redline

                        />

                        <Visit
                            goto="Switch to a smarter way of Metering."
                            title="Visit the website"
                            href={"http://www.smets2design.com/"}
                        />
                    </Box>
                </TabPanel>
            </Box>








        </>
    )
}
