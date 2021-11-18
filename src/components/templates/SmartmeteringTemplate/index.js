import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Overview, Ubanner } from '../../molecules'

import {MeterTabs} from './MeterTabs'


export function SmartmeteringTemplate() {
    return (
        <>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-smartmeter.png"
                maintext="smart metering"
                subtext="Bringing New Perspectives to Lights"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    path="Industries / Smart Metering"
                    sub1="SLS has been a pioneer in developing world-class and technology-first smart metering infrastructure across the globe. With a versatile product and technology portfolio, we have successfully completed a quantum of projects for national and international entities, setting an unprecedented benchmark in the smart metering landscape."

                />
            </GridBlue>

           <MeterTabs/>

            <Footer />
        </>
    )
}
