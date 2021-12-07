import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Realtime, Squareboxes, Visit, Visit1 } from '../../molecules'
import { ChargingMangement } from './ChargingMangement'
import { MobileApplication } from './MobileApplication'

import { evchargers, evchargercontrollers } from '../../molecules/PortfolioData'
import { GridBlue, MainContainer } from '../../atoms'
import { Container } from '@material-ui/core'



export function EvchargingTemplate() {
    return (
        <>
            <Ubanner
                Background="/images/luo-lei-Xa4pTwafe5U-unsplash.png"
                maintext="EV Charging Solutions"
                subtext="Helping in making the world EV-First!"
            />


            <GridBlue>
                <Navbar />

                <Overview
                    title="OVERVIEW"
                    path="Industries / EV Charging Infrastructure"
                    sub1="Paving a way for an EV-First universe, SLS has been an enabler in setting the 
                    critical EV Charging Infrastructure in India and across the world. We offer indigenously 
                    manufactured OCPP-Compliant EV Chargers with state-of-the-art hardware and software powered with IoT. 
                    Our chargers range from Type 2 AC 3.3kW-22kW to Bharat AC 001 from 3.3kw- 7.4kW."
                />
            </GridBlue>


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

            <ChargingMangement />

            <MobileApplication />

            <MainContainer>
                    <Visit1
                        goto="A DIVISION OF SYSTEM LEVEL SOLUTIONS; VERDEMOBILITY"
                        title="Visit the website"
                        href="https://www.verdemobility.com/Home/Index"
                    /> 
            </MainContainer>

            <Footer />
        </>
    )
}