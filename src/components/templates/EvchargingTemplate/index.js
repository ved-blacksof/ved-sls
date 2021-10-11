import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Offerings, Threeboxes } from '../../molecules'
import { ChargingMangement } from './ChargingMangement'

import { evchargers } from '../../molecules/PortfolioData'



export function EvchargingTemplate() {
    return (
        <>
            <Ubanner
                // Background="/images/luo-lei-Xa4pTwafe5U-unsplash.png"
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

            {/* <Realtime data={}/> */}

            <Offerings
                data={evchargers}
                mainhead="Hardware Offerings"
                head1="EV Chargers"
                subhead="We offer a complete range of AC Chargers purpose-built for a wide range of applications."
            />

            <Threeboxes
                image1="./images/lite.png"
                image2="./images/ocpp-controller_350x350.png"
                image3="./images/1.0.png"
                subtitle1="Type 2 AC Charger Controller"
                subtitle2="Bharat"
                subtitle3="OCPP Controller"
            />


            <ChargingMangement />

            


            <Footer />
        </>
    )
}