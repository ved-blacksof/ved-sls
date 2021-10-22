import React from 'react'
import { Box, Container, makeStyles } from '@material-ui/core'

import { Navbar, Footer } from '..'
import { Ubanner, Overview, Squareboxes, Realtime, Visit } from '../../molecules'
import { middleware ,evcharger3} from '../../molecules/PortfolioData'

const useStyles = makeStyles((theme) => ({
    list: {
        background: '#003189',
        height: '50vh',
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
            paddingBottom: '5%',
        },
    },
    box1: {
        width: '100%',
        paddingTop: '2%',
        border: 'none',
    },
    UL: {
        font: 'normal normal normal 1rem Access',
        color: 'white',
        listStyle: 'inside',
    },
    LI: {
        margin: '1% '
    },
}))

export function IOTplatformTemplate({

}) {
    const classes = useStyles()
    return (
        <div>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-IOT.png"
                maintext="IOT Platform"
                subtext="Redefining Interperability With our end-to-end IoT Development Platform"
            />

            <Navbar />

            <Overview
                title="OVERVIEW"
                path="Industries / IoT Platform"
                sub1="SLS offers a heterogeneous and end-to-end IoT platform that integrates all IoT verticals under a common shed. 
                We offer building blocks for IoT solutions and help businesses build world-class products and services in the automation
                 industry. We also provide multiprotocol support for services including G3PLC, WiFi, BLE, Sigfox, LoRa, GSM, etc.,
                 which makes our solution the preferred choice for industry leaders."
                list="list"
                li1="Ready to use device SDKs for faster time-to-market"
                li2="Secured cloud platforms for Data Analytics and real-time Monitoring"
                li3="Scalability purpose-built for smart and widespread business applications"
                
            />


            <Squareboxes
                title="HARDWARE OFFERINGs"
                data={evcharger3}   
            />

            <Realtime
                data={middleware}
                title="Software Offerings"
                // subtitle="EV Chargers"
                // subtitle1="We offer a complete range of AC Chargers purpose-built for a wide range of applications."
            />

            <Visit 
                goto="Get to know us better."
                title="Visit the web"
            />



            <Footer />
        </div>
    )
}
