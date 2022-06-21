import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Cards, Visit, Squareboxes1, Visit1 } from '../../molecules'
import { Services } from './Services'
import { Technologystack } from './Technologystack'

import { softdevservices } from '../../molecules/PortfolioData'
import { GridBlue } from '../../atoms'

export function SoftDevTemplate() {
    return (
        <div>
            <Ubanner
                // Background="./images/luo-lei-Xa4pTwafe5U-unsplash1.png"
                Background="./images/softdev/Software_Development.png"
                maintext="software development"
                subtext="Churning business ideas into reality"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    path="Services / Software Development"
                    sub1="SLS is a market leader in providing turnkey software solutions to its global clientele. With chief focus on 
                    concepts, creative ideas, and turning businesses visions into reality, we boost business equity with market and
                     customer focussed solutions. With expertise in Embedded, Android/iOS, Web Applications, and windows based software 
                     development, we offer multi-platform solutions and software migration from various software and hardware platforms."
                />
            </GridBlue>

            <Services />

            {/* <Squareboxes1 data1={softdevservices}/> */}

            <Technologystack />

            <Visit1
                goto="Explore all about our products and services!"
                title="Visit Website"
                href={"https://www.slscorp.com/services/software-development-services.html"}
            />

            <Footer />
        </div>
    )
}
