import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview } from '../../molecules'
import { Yalgaar } from './Yalgaar'
import { yalgar, loc,cloudOverview } from '../../molecules/PortfolioData'
import { LOC } from './LOC'
import { GridBlue } from '../../atoms'


export function CloudsolutionTemplate() {
    return (
        <>
            <Ubanner
                Background="/images/cloud/cloud-banner.png"
                maintext="Cloud Solutions"
                subtext="Accelerate your business growth with our SaaS-based cloud solutions"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    title="OVERVIEW"
                    path="Industries / Cloud Solutions"
                    sub1="Spearheading innovation in the cloud ecosystem, SLS provides a range of business-agnostic 
                    cloud-based products and services for agile and smart businesses of tomorrow. 
                    Reinvent how you expand your business reach with our electrifying cloud products and services."

                    mapIconPosition="mapIconPosition"
                    data={cloudOverview}
                    style={{ height: 'fit-content', marginBottom:'20%' }}
                />
            </GridBlue>


            <Yalgaar data={yalgar} />

            <LOC data={loc} />

            <Footer />
        </>
    )
}
