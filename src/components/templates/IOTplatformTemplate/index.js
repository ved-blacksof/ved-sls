import React from 'react'
import { Box, Container, makeStyles } from '@material-ui/core'

import { Navbar, Footer } from '..'
import { Ubanner, Overview, Squareboxes, Realtime, Visit, Visit1 } from '../../molecules'
import { middleware, iotnebulink, iotOverview } from '../../molecules/PortfolioData'
import { GridBlue } from '../../atoms'

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
                Background="./images/iot/iot-banner.png"
                maintext="IOT Platform"
                subtext="Redefining interperability with our end-to-end IoT deployment platform"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    title="OVERVIEW"
                    path="Industries / IoT Platform"
                    sub1="SLS offers a heterogeneous and end-to-end IoT platform that integrates all IoT verticals under a common shed. 
                            We offer building blocks for IoT solutions and help businesses build world-class products and services in the automation
                            industry. We also provide multiprotocol support for services including G3PLC, WiFi, BLE, Sigfox, LoRa, GSM, etc.,
                            which makes our solution the preferred choice for industry leaders."

                    li1="Ready to use device SDKs for faster time-to-market"
                    li2="Secured cloud platforms for Data Analytics and real-time Monitoring"
                    li3="Scalability purpose-built for smart and widespread business applications"

                    mapIconPosition="mapIconPosition"
                    data={iotOverview}
                    style={{ height: 'fit-content', marginBottom: '20%' }}

                />
            </GridBlue>


            {/* <Squareboxes
                title="HARDWARE OFFERINGs"
                data={iotnebulink}
            /> */}
            <Realtime
                title="HARDWARE OFFERINGs"
                squarecarddata={iotnebulink}
                carouselIndicatorSM="carouselIndicatorSM"
            />

            <Realtime
                title="Software Offerings"
                squarecarddata={middleware}
            />

            <Visit1
                goto="A DIVISION OF SYSTEM LEVEL SOLUTIONS"
                title="Visit Website"
                href="https://www.nebulae.io/"
                rightlogo="./images/iot/Nebulae.png"
            />



            <Footer />
        </div>
    )
}
