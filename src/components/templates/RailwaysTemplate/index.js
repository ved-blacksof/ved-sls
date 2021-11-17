import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'
// import { smartstreet } from '../../molecules/PortfolioData'

export function RailwaysTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-railways.png"
                maintext="Railways"
                subtext="Firing the Rolling Stock of India"
            />
            <GridBlue>
                <Navbar />

                <Overview
                    title="Railways"
                    path="Industries / Railways"
                    sub1="SLS has been long-devoted in bringing in new innovations in the smart street lighting sphere.
                    We offer a new-edge comprehensive platform that provides single-point monitoring and control of 
                    retrofit and new street lighting infrastructure. We aim to bring this entire infrastructure under one 
                    common roof for definite control, optimized energy-saving, and data-driven decisions."
                />
            </GridBlue>

            <Quality
                mainheading="Offerings"
                redline
                heading="Remote monitoring system"
                imageBG="./images/remote-monitoring-system.png"
                subtitle=" The RMS is our GSM and GPS-powered intelligent system which connects on-field rolling stocks to a centralized train network and management system."
                firstli="Live Tracking"
                secli="Fuel Status"
                thirdli="Real-time engine fault monitoring"
                fourthli="Live operational and historical data"
            />

            <QualityReverse
                heading="TCN Gateway"
                redline
                imageBG="./images/aaa082d2257ab65aecf61c2340e9c5b9_2_XL.png"
                subtitle="The TCN gateway is like WTB-MVB, WTB-CAN, WTB-ETH, connecting various field signals & 
                sensor inputs to the train communication network & vice-versa. It comes with an in-built WTB-MVB controller,
                 realized on FPGA with in-house developed IP. It is IEC 61375 and UIC Leaflet 556 compliant."
            />

            <Visit
                goto="Know more about our solution for Railways."
                title="Contact Us"
            />


            <Footer />
        </div>
    )
}
