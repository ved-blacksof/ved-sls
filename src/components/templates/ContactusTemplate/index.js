import React from 'react'
import { Navbar, Footer } from '..'
import { Overview, Ubanner, Quality, QualityReverse,Visit } from '../../molecules'
import { digital } from '../../molecules/PortfolioData'
import {Letstalk} from './Letstalk'

export function ContactusTemplate() {
    return (
        <>
            <Ubanner
                Background="/images/luo-lei-Xa4pTwafe5U-unsplash-digital.png"
                maintext="Contact us"
                subtext="Ww would love to connect  with you to disscuss your ideas! Ping us anytime"
            />

            <Navbar />


            <Letstalk />


            <Footer />

        </>
    )
}
