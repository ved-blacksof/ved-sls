import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'
import { smartstreet } from '../../molecules/PortfolioData'

export function SmarttrafficTemplate() {
    return (
        <>
            <Ubanner
                Background="./images/nasa-Q1p7bh3SHj8-unsplash-1.png"
                maintext="Smart traffic solutions"
                subtext="Transforming how Traffic Systems Interact with the world"
            />

            <Navbar />

            <Overview
                path="Industries / Smart Traffic Solutions"
                sub1="Continuing with its mission to create technological solutions that positively impact the world, SLS has developed the Smart Traffic Management Solution. 
                The interoperable cloud solution is powered with IoT to set a connected and intelligent traffic ecosystem that is safe, interactive, and highly efficient."
                icons="icons"
                data={smartstreet}
            />

            <Quality
                mainheading="Offerings"
                imageBG="./images/media_player_top.png"
                heading="Individual Street Light Controller"
                subtitle="Our Individual Street Light Controller helps transform regular street lights
                 into smart lamps and offers real-time monitoring and control of individual 
                street lights in your area.The offering is available in both Retrofit and NEMA standard."
            />

            <QualityReverse
                imageBG="./images/Screenshot_2021-07-27-16-13-33-85_336c4b52c4fcdf7ef73c0cc47f672d0f.png"
                heading="Centralised Control and Monitoring System (CCMS)"
                subtitle="CCMS offers real-time control and monitoring of a group of street lights easing 
                how you manage every aspect of your smart street lights."
            />

            <Quality
                mainheading="Software Offering"
                imageBG="./images/media_player_top.png"
                heading="Lighting Management Software (LMS)"
                subtitle="LMS is our cloud-based dashboard that offers total control over your lighting infrastructure.
                 It provides remote access to the real-time status of lamps, generates energy consumption reports, 
                binds devices with sensors, and helps with Astro-clock and mixed-mode scheduling."
            />

            <Visit
                goto="Reinvent how your brand advertises and connects."
            />

            <Footer />
        </>
    )
}
