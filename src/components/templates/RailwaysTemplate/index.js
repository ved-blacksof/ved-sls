import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'
// import { smartstreet } from '../../molecules/PortfolioData'

export function RailwaysTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/nasa-Q1p7bh3SHj8-unsplash-1.png"
                maintext="Railways"
                subtext="Bringing New Perspectives to Lights"
            />
            <Navbar />

            <Overview
                title="Railways"
                path="Industries / Railways"
                sub1="SLS has been long-devoted in bringing in new innovations in the smart street lighting sphere.
                 We offer a new-edge comprehensive platform that provides single-point monitoring and control of 
                 retrofit and new street lighting infrastructure. We aim to bring this entire infrastructure under one 
                 common roof for definite control, optimized energy-saving, and data-driven decisions."
            />

            <Quality
                mainheading="Offerings"
                heading="Remote monitoring system"
                imageBG="./images/media_player_top.png"
                subtitle=" The RMS is our GSM and GPS-powered intelligent system which connects on-field rolling stocks to a centralized train network and management system."
                firstli="Live Tracking"
                secli="Fuel Status"
                thirdli="Real-time engine fault monitoring"
                fourthli="Live operational and historical data"
            />

            <QualityReverse
                heading="TCN Gateway"
                imageBG="./images/Screenshot_2021-07-27-16-13-33-85_336c4b52c4fcdf7ef73c0cc47f672d0f.png"
                subtitle="The TCN gateway is like WTB-MVB, WTB-CAN, WTB-ETH, connecting various field signals & 
                sensor inputs to the train communication network & vice-versa. It comes with an in-built WTB-MVB controller,
                 realized on FPGA with in-house developed IP. It is IEC 61375 and UIC Leaflet 556 compliant."
            />

            <Visit
                goto="Know more about our solution for Railways."
            />


            <Footer />
        </div>
    )
}
