import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
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

            <GridBlue>
                <Navbar />

                <Overview
                    path="Industries / Smart Traffic Solutions"
                    sub1="Continuing with its mission to create technological solutions that positively impact the world, SLS has developed the Smart Traffic Management Solution. 
                         The interoperable cloud solution is powered with IoT to set a connected and intelligent traffic ecosystem that is safe, interactive, and highly efficient."
                    icons="icons"
                    data={smarttraffic}
                    style={{ paddingBottom: '10%' ,height:'fit-content'}}
                />
            </GridBlue>

            <Quality
                mainheading="Offerings"
                imageBG="./images/slider2-smarttraffic10.png"
                heading="Controller"
                subtitle="Our smart traffic management controller retrofits with the existing traffic infrastructure and transforms it into a smarter, more interactive traffic solution."
                redline="redline"
            />

            <QualityReverse
                imageBG="./images/about-imac-smarttraffic01.png"
                heading="Traffic Management Dashboard"
                subtitle="Our Traffic Management Dashboard is a cloud-based intuitive dashboard that allows you to remotely control and monitor your intelligent traffic infrastructure."
                redline="redline"

            />

            <Visit
                goto="Switch to Smart Traffic Management now!"
                title="Visit the Website"
            />

            <Footer />
        </>
    )
}
