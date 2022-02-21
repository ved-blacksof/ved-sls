import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Realtime, Squareboxes, Visit, Visit1, SoftOfferingsBlue } from '../../molecules'
import { ChargingMangement } from './ChargingMangement'
import { MobileApplication } from './MobileApplication'

import { evchargers, evchargercontrollers } from '../../molecules/PortfolioData'
import { GridBlue, MainContainer } from '../../atoms'
import { Box, Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    realText1: {
        margin: '0% auto',
        marginTop:'8%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    eco:{
        marginTop:'2%',
        "& img":{
            width:'100%',

        }
    }
}))


export function EvchargingTemplate() {
    const classes = useStyles()

    return (
        <>
            <Ubanner
                Background="/images/evcharger/ev-banner.png"
                maintext="EV Charging Solutions"
                subtext="Helping in making the world EV-first"
            />


            <GridBlue>
                <Navbar />

                <Overview
                    title="OVERVIEW"
                    path="Industries / EV Charging Solutions"
                    sub1="Paving a way for an EV-First universe, SLS has been an enabler in setting the 
                    critical EV Charging Infrastructure in India and across the world. We offer indigenously 
                    manufactured OCPP-Compliant EV Chargers with state-of-the-art hardware and software powered with IoT."
                />
            </GridBlue>


            <MainContainer>
                <Container fixed className={classes.realText1}>
                    <h2 style={{color:'black'}}> VerdeMobility EV Charging Ecosystem </h2>
                    <Box className={classes.eco}>
                        <img src="./images/evcharger/Eco-System-final.png" />
                    </Box>
                </Container>
            </MainContainer>



            <Realtime
                maintitle="HARDWARE OFFERINGS"
                squarecarddata={evchargers}
                title="ev chargers"
                subtitle="We offer a complete range of AC Chargers purpose-built for a wide range of applications."
                redline="redline"
            />
            <Realtime
                squarecarddata={evchargercontrollers}
                title="EV Charge Controllers"
                subtitle="We offer a range of Charge Controllers integrated with energy management, remote access, and OCPP connectivity."
                redline="redline"
            />

            {/* <Squareboxes
                data={evchargercontrollers}
                 title="EV Charge Controllers"
                subtitle="We offer a range of Charge Controllers integrated with energy management, remote access, and OCPP connectivity."
                redline="redline"
            /> */}

            {/* <ChargingMangement /> */}

            <SoftOfferingsBlue
                maintitle="Software OFFERING"
                title="Charging Management Software"
                subtitle="We offer OCPP-Compliant Charging Management Software which is built using new-edge technology for easy management of your EV Charging Infra. The CMS is built to support all major brands of chargers available globally."
                list
                firstli="Real-time monitoring, maintenance, and troubleshooting of chargers"
                secli="Dynamic load management capabilities"
                thirdli="ROI analytics"
                fourthli="Partner/fleet management"
                images='./images/dashboards/verde-DB.png'
            />

            <MobileApplication />

            <MainContainer>
                <Visit1
                    goto="A DIVISION OF SYSTEM LEVEL SOLUTIONS"
                    title="Visit Website"
                    href="https://www.verdemobility.com/"
                    rightlogo="./images/evcharger/1.png"
                />
            </MainContainer>

            <Footer />
        </>
    )
}