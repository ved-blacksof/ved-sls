import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview } from '../../molecules'
import { Yalgaar } from './Yalgaar'
import { yalgar, loc } from '../../molecules/PortfolioData'
import { LOC } from './LOC'


export  function CloudsolutionTemplate() {
    return (
        <>
            <Ubanner
                Background="/images/luo-lei-Xa4pTwafe5U-unsplash.png"
                maintext="Cloud Solutions"
                subtext="Accelerate your Business Growth with our Saas-based Cloud Solutions"
            />

            <Navbar/>

            <Overview
                title="OVERVIEW"
                path="Industries / Cloud Solutions"
                sub1="Spearheading innovation in the cloud ecosystem, SLS provides a range of business-agnostic 
                cloud-based products and services for agile and smart businesses of tomorrow. 
                Reinvent how you expand your business reach with our electrifying cloud products and services."
            />

            
            <Yalgaar data={yalgar}/>  

            <LOC data={loc}/>

            <Footer/>
        </>
    )
}
