import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Realtime } from '../../molecules'
import { Dnumbers } from './Dnumbers'
import { CSRcarousel } from './CSRcarousel'
import { Quality } from './Quality'
import { SLSTimeline } from './SLSTimeline'
import { certification } from '../../molecules/PortfolioData'

export function AboutusTemplate() {
    return (
        <div>
            <Ubanner
                maintext="About us"
                subtext="sddfsdf"
            />

            <Navbar />

            <Overview
                title='About sls'
                sub1='System Level Solutions is a turnkey product and service provider to the leading private and government
                enterprises across America, Europe, and Asia. With a chief focus on business-boosting and technology-driven innovative solutions,
                we act as technology partners in growth, providing bespoke solutions across a wide array of industries.'
                sub2='We have the in-house capability to rapidly develop, prototype, provide proof of concept and mass production
                services across hardware, software, firmware, and wireless technologies. Our motive is to work hand-in-hand with your business goals to
                deliver market-ready products boasting class-apart design, innovative functionalities, excellent quality.'
            />

            {/* <SLSTimeline  /> */}

            <Dnumbers />

            <CSRcarousel />

            <Quality />


            <Realtime 
            data={certification}
            head1="Certifications and Policies" />


            <Footer />

        </div>
    )
}
