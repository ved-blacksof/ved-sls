import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Overview, Ubanner, Quality, QualityReverse, Visit } from '../../molecules'
import { digital } from '../../molecules/PortfolioData'
import { JoinUs } from './JoinUs'
import { Letstalk } from './Letstalk'

export function ContactusTemplate() {
    return (
        <>
            <Ubanner
                Background="/images/luo-lei-Xa4pTwafe5U-unsplash-contactus.png"
                maintext="Contact us"
                subtext="We would love to connect  with you to disscuss your ideas! Ping us anytime"
            />

            <GridBlue>
                <Navbar />

                <Letstalk />
            </GridBlue>

            <JoinUs/>


            <Footer />

        </>
    )
}
