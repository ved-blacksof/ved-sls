import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'
import { transformer } from '../../molecules/PortfolioData'
import { Application } from './Application'

export function TransformersTemplate() {
    return (
        <>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash11.png"
                maintext="Intelligent transformers monitoring"
                subtext="Helping Discoms smartly monitor and manage their transformers"
            />

            <Navbar />

            <Overview
                path="Industries / Intelligent Transformer Monitoring"
                sub1="SLS’s Intelligent Transformer Monitoring System is an end-to-end solution that helps companies remotely control and monitor individual transformers. We provide the necessary hardware infrastructure to monitor power transformers at power plants and distribution transformers for local power distribution. The monitoring software optimizes loading and maximizes asset life through features like data logging, event recording, and dynamic loading analysis, etc."
                data={transformer}
                icons="icons"
                style={{ height: 'fit-content', paddingBottom: '10%' }}
            />

            <Application
            
            />



            <Visit
                goto="Want to know more about this offering?"
                title="Visit the website"
            />

            <Footer />
        </>
    )
}
