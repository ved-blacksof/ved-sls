import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'
import { smartstreet } from '../../molecules/PortfolioData'


export function SmartstreetTemplate() {
    return (
        <>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-smartstreet.png"
                maintext="Smart Street Lighting"
                subtext="Bringing New Perspectives to Lights"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    title="Smart Street Light"
                    path="Industries / IoT Platform"
                    sub1="SLS has been long-devoted in bringing in new innovations in the smart street lighting sphere.
                        We offer a new-edge comprehensive platform that provides single-point monitoring and control of 
                        retrofit and new street lighting infrastructure. We aim to bring this entire infrastructure under one 
                        common roof for definite control, optimized energy-saving, and data-driven decisions."
                    icons="icons"
                    data={smartstreet}
                />
            </GridBlue>

            <Quality
                mainheading="Hardware Offering"
                imageBG="./images/retrofit.png"
                heading="Individual Street Light Controller"
                subtitle="Our Individual Street Light Controller helps transform regular street lights
                 into smart lamps and offers real-time monitoring and control of individual 
                street lights in your area.The offering is available in both Retrofit and NEMA standard."
                redline="redline"
            />

            <QualityReverse
                imageBG="./images/ccms-3-phase.png"
                heading="Centralised Control and Monitoring System (CCMS)"
                subtitle="CCMS offers real-time control and monitoring of a group of street lights easing 
                how you manage every aspect of your smart street lights."
                redline="redline"

            />

            <Quality
                mainheading="Software Offering"
                imageBG="./images/DigitalSyne_lms.png"
                heading="Lighting Management Software (LMS)"
                subtitle="LMS is our cloud-based dashboard that offers total control over your lighting infrastructure.
                 It provides remote access to the real-time status of lamps, generates energy consumption reports, 
                binds devices with sensors, and helps with Astro-clock and mixed-mode scheduling."
                redline="redline"

            />

            <Visit
                goto="Reinvent how your brand advertises and connects."
                title="Visit the Website"
            />

            <Footer />
        </>
    )
}
