import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Quality, QualityReverse, Visit, Visit1 } from '../../molecules'
import { railwayOverview } from '../../molecules/PortfolioData'

export function RailwaysTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/railways/Railway.png"
                maintext="Railways"
                subtext="Firing the rolling stock of India"
            />
            <GridBlue>
                <Navbar />

                <Overview
                    title="Railways"
                    path="Industries / Railways"
                    sub1="SLS has been instrumental in upgrading and uplifting the existing rolling stock or the railway network in India. 
                            Acting as their integration specialist, we provide innovative onboard electronic solutions
                            especially in remote monitoring and train backbone communications ensuring the rolling stocks never stop rolling."

                    mapIconPosition="mapIconPosition"
                    data={railwayOverview}
                    style={{ height: 'fit-content', marginBottom: '20%' }}
                />
            </GridBlue>

            <Quality
                mainheading="Offerings"
                redline
                heading="Remote monitoring system"
                imageBG="./images/railways/remote-monitoring-system.png"
                subtitle="The RMS is our GSM and GPS-powered intelligent system which connects on-field rolling stocks to a centralized train network and management system."
                // list
                firstli="Live Tracking"
                secli="Fuel Status"
                thirdli="Real-time engine fault monitoring"
                fourthli="Live operational and historical data"
            />

            <QualityReverse
                heading="TCN Gateway"
                redline
                // imageBG="./images/aaa082d2257ab65aecf61c2340e9c5b9_2_XL.png"
                imageBG="./images/railways/product.png"
                subtitle="The TCN gateway is like WTB-MVB, WTB-CAN, WTB-ETH, connecting various field signals & 
                    sensor inputs to the train communication network & vice-versa. It comes with an in-built WTB-MVB controller,
                    realized on FPGA with in-house developed IP. It is IEC 61375 and UIC Leaflet 556 compliant."
            />

            <Visit1
                goto="Know more about our solutions for Railways."
                title="Contact Us"
                href="/contact"
            />


            <Footer />
        </div>
    )
}
