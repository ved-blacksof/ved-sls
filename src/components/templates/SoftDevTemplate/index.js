import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Cards, Visit } from '../../molecules'
import { Services } from './Services'
import { Technologystack } from './Technologystack'

import { solar } from '../../molecules/PortfolioData'

export function SoftDevTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/nasa-Q1p7bh3SHj8-unsplash-1.png"
                maintext="software development"
                subtext="Churning business ideas into reality"
            />

            <Navbar />

            <Overview
                path="Services / Software Development"
                sub1="SLS is a market leader in providing turnkey software solutions to its global clientele. With chief focus on concepts, creative ideas, and turning businesses’ visions into reality, we boost business equity with market and customer focussed solutions. With expertise in Embedded, Android/iOS, Web Applications, and windows based software development, we offer multi-platform solutions and software migration from various software and hardware platforms."
            />

            <Services />

            <Technologystack />

            <Visit
                goto="Explore all about our products and services!"
                title="Visit the website"
            />

            <Footer />
        </div>
    )
}
