import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Cards, Visit, Realtime, Visit1, SoftOfferingsBlue } from '../../molecules'

import { solar, solarhardware, solarhardware1, solarsoftware } from '../../molecules/PortfolioData'

export function SolarTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-solar.png"
                maintext="Solar and wind"
                subtext="Paving the way for a sustainable future with solar and wind energy"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    path="Industries / Solar and Wind"
                    sub1="Contributing to its mission of making this world greener, SLS has developed a range of BIS-approved end-to-end 
                    smart solar and wind energy solutions. With the aspiration of always delivering more than expected, 
                    we have capacitated these solutions with intelligent features that increase usability and make the switch to renewable energy easier."
                    mapIconPosition="mapIconPosition"
                    data={solar}
                    style={{ height: 'fit-content', marginBottom: '12%' }}
                />
            </GridBlue>

            {/* 

            <Realtime
                maintitle="Hardware Offerings"
                data={solarhardware}
                // style={{ opacity: '0' }}
            /> 

            */}


            <Realtime
                maintitle="Hardware Offerings"
                squarecarddata={solarhardware1}
            // style={{ opacity: '0' }}
            />


            {/* <Realtime
                maintitle="Software Offerings"
                data1={solarsoftware}
                style={{ opacity: '0' }}

            /> */}

            <SoftOfferingsBlue
                maintitle="Software OFFERING"
                title="SunSights Live dashboard & Mobile App"
                subtitle="SunSights Live is an IoT-powered solar infrastructure monitoring dashboard. The web application helps in monitoring the technical and financial performance of one or more SunSights products. The dashboard enables easy management of the solar infrastructure by providing features like remote fault detection, troubleshooting, asset management, and much more."
                
                //  images='./images/solar/Sunsight-Dashboard.png'
                images='./images/dashboards/Sunsights-dashboard.png'
            />

            {/* <Cards
                maintitle="Software Offerings"
                data={solarsoftware}

            /> */}

            <Visit1
                goto="A DIVISION OF SYSTEM LEVEL SOLUTIONS"
                title="Visit Website"
                rightlogo="./images/solar/SunSights.png"
                href={"https://www.getsunsights.com/"}
            />

            <Footer />
        </div>
    )
}
