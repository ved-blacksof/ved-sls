import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue, MainContainer } from '../../atoms'
import { Ubanner, Overview, Quality, QualityReverse, Visit, Visit1, SoftOfferingsBlue } from '../../molecules'
import { smartstreet } from '../../molecules/PortfolioData'


export function SmartstreetTemplate() {
    return (
        <>
            <Ubanner
                Background="./images/smartstreet/StreetLight.png"
                maintext="Smart Street Lighting"
                subtext="Bringing new perspectives to lights"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    title="Smart Street Light"
                    path="Industries / Smart Street Lighting"
                    sub1="SLS has been long-devoted in bringing in new innovations in the smart street lighting sphere.
                        We offer a new-edge comprehensive platform that provides single-point monitoring and control of 
                        retrofit and new street lighting infrastructure. We aim to bring this entire infrastructure under one 
                        common roof for definite control, optimized energy-saving, and data-driven decisions."
                    // icons="icons"
                    mapIconPosition="mapIconPosition"
                    data={smartstreet}
                    style={{ height: 'fit-content', marginBottom: '20%' }}
                />
            </GridBlue>

            <Quality
                mainheading="Hardware Offering"
                imageBG="./images/smartstreet/Individual-street-light-controller.png"
                heading="NEMA-mounted Individual Street Light Controller"
                subtitle="Our Individual Street Light Controller helps transform regular street lights into smart lamps and offers real-time monitoring and control of individual street lights in your area."
                redline="redline"
            />

            <QualityReverse
                imageBG="./images/smartstreet/retrofit.png"
                heading="Individual Street Light Controller - Retrofit Version"
                subtitle="Promising long range & deep coverage, our retrofit version of Individual Street Light Controller ensures prompt monitoring & control of lamps through different modes based on events, schedule, and time."
                redline="redline"
            />

            <Quality
                imageBG="./images/ccms-3-phase.png"
                heading="Centralised Control and Monitoring System (CCMS)"
                subtitle="CCMS offers real-time control and monitoring of a group of street lights easing 
                        how you manage every aspect of your smart street lights."
                redline="redline"
            />

            {/* <Quality
                mainheading="Software Offering"
                imageBG="./images/DigitalSyne_lms.png"
                heading="Lighting Management Software (LMS)"
                subtitle="LMS is our cloud-based dashboard that offers total control over your lighting infrastructure.
                 It provides remote access to the real-time status of lamps, generates energy consumption reports, 
                binds devices with sensors, and helps with Astro-clock and mixed-mode scheduling."
                redline="redline"

            /> */}
            <SoftOfferingsBlue
                maintitle="Software Offering"
                title="Lighting Management Software (LMS)"
                subtitle="LMS is our cloud-based dashboard that offers total control over your lighting infrastructure. It provides remote access to the real-time status of lamps, generates energy consumption reports, binds devices with sensors, and helps with Astro-clock and mixed-mode scheduling."
                images='./images/dashboards/Via-lights.png'
            />

            <MainContainer>
                <Visit1
                    goto="A DIVISION OF SYSTEM LEVEL SOLUTIONS"
                    title="Visit website"
                    href="https://www.vialights.com/"
                    rightlogo="./images/smartstreet/logo.png"
                />
            </MainContainer>

            <Footer />
        </>
    )
}
