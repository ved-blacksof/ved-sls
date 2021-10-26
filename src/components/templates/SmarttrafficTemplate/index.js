import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'
import { smarttraffic } from '../../molecules/PortfolioData'

export function SmarttrafficTemplate() {
    return (
        <>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-smarttraffic08.png"
                maintext="Smart traffic solutions"
                subtext="Transforming how Traffic Systems Interact with the world"
            />

            <Navbar />

            <Overview
                path="Industries / Smart Traffic Solutions"
                sub1="Continuing with its mission to create technological solutions that positively impact the world, SLS has developed the Smart Traffic Management Solution. 
                The interoperable cloud solution is powered with IoT to set a connected and intelligent traffic ecosystem that is safe, interactive, and highly efficient."
                icons="icons"
                data={smarttraffic}
            />

            <Quality
                mainheading="Offerings"
                imageBG="./images/media_player_top.png"
                heading="Controller"
                subtitle="Our smart traffic management controller retrofits with the existing traffic infrastructure and transforms it into a smarter, more interactive traffic solution."
            />

            <QualityReverse
                imageBG="./images/Screenshot_2021-07-27-16-13-33-85_336c4b52c4fcdf7ef73c0cc47f672d0f.png"
                heading="Traffic Management Dashboard"
                subtitle="Our Traffic Management Dashboard is a cloud-based intuitive dashboard that allows you to remotely control and monitor your intelligent traffic infrastructure."
            />

            <Visit
                goto="Switch to Smart Traffic Management now!"
                title="Visit the web"
            />

            <Footer />
        </>
    )
}
