import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Offerings, Threeboxes,Realtime, Squareboxes } from '../../molecules'
import { ChargingMangement } from './ChargingMangement'
import { MobileApplication } from './MobileApplication'

import { evchargers,evcharger3 } from '../../molecules/PortfolioData'



export function EvchargingTemplate() {
    return (
        <>
            <Ubanner
                Background="/images/luo-lei-Xa4pTwafe5U-unsplash.png"
                maintext="EV Charging Solutions"
                subtext="Helping in making the world EV-First!"
            />


            <Navbar />

            <Overview
                title="OVERVIEW"
                path="Industries / EV Charging Infrastructure"
                sub1="Paving a way for an EV-First universe, SLS has been an enabler in setting the 
                ucritical EV Charging Infrastructure in India and across the world. We offer indigenously 
                manufactured OCPP-Compliant EV Chargers with state-of-the-art hardware and software powered with IoT. 
                Our chargers range from Type 2 AC 3.3kW-22kW to Bharat AC 001 from 3.3kw- 7.4kW."
            />

            {/* <Offerings
                data={evchargers}
                title="ev chargers"
                // subtitle="EV Chargers"
                subtitle="We offer a complete range of AC Chargers purpose-built for a wide range of applications."
            /> */}

             <Realtime
                data={evchargers}
                title="ev chargers"
                subtitle="We offer a complete range of AC Chargers purpose-built for a wide range of applications."
            />

            <Squareboxes
                data={evcharger3}
                title="EV CHARGERS Controllers"
                subtitle="We offer a range od EV AC charging controllers integrated with energy mangement, remote access, and OCPP connectivity."
                redline="redline"
            />


            <ChargingMangement />

            <MobileApplication />


            <Footer />
        </>
    )
}