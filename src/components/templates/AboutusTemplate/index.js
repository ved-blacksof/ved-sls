import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Realtime } from '../../molecules'
import { Dnumbers } from './Dnumbers'
import { CSRcarousel } from './CSRcarousel'
import { Quality, QualityReverse, Offerings } from '../../molecules'
import { SLSTimeline } from './SLSTimeline'
import { certification, csrcarousel } from '../../molecules/PortfolioData'
import { GridBlue } from '../../atoms'
import quality from '../../assets/policies/Quality_Policy.pdf'
import ems from '../../assets/policies/EMS_Policy.pdf'


export function AboutusTemplate() {
    return (
        <div>
            <Ubanner
                Background={"./images/about/About-us.png"}
                maintext="About us"
                subtext="Technology partner in your business growth journey"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    title='About sls'
                    sub1='System Level Solutions is a turnkey product and service provider to the leading private and government
                        enterprises across America, Europe, and Asia. With a chief focus on business-boosting and technology-driven innovative solutions,
                        we act as technology partners in growth, providing bespoke solutions across a wide array of industries.'
                    sub2='We have the in-house capability to rapidly develop, prototype, provide proof of concept and mass production
                        services across hardware, software, firmware, and wireless technologies. Our motive is to work hand-in-hand with your business goals to
                        deliver market-ready products boasting class-apart design, innovative functionalities, excellent quality.'
                // style={{ height: 'fit-content' }}
                />

                {/* <SLSTimeline /> */}
            </GridBlue>

            <Dnumbers />

            <CSRcarousel data={csrcarousel} />

            <Quality
                mainheading="quality & reliabilty"
                heading="Quality Policy"
                imageBG="./images/about/Quality-policy.png"
                subtitle="To maintain the quality of our products and services, we have set in place a Quality Policy that helps our teams 
                ensure top-notch quality and service delivery to our clients."

                redline="redline"
                download="download policy"
                href={quality}
            />

            <QualityReverse
                heading="Environmental Policy"
                imageBG="./images/annie-spratt-hCb3lIB8L8E-unsplash.jpg"
                subtitle="We ensure our commitment towards the environment and mother earth through our Environment Policy. 
                The policy lays down certain protocols which are stringently followed to maintain environment-friendly operations."
               
                redline="redline"
                download="download policy"
                href={ems}
            />

            <Realtime
                data={certification}
                title="Certifications and Policies"
                // download="download"
                // grpicons={"./images/Screen Shot 2021-05-29 at 2.50.04 AM.jpg"}
                // subtitle="Our newsroom is designed to keep you updated about every major or minor breakthrough in the related industries."
                // cases="cases"
            />

            <Footer />

        </div>
    )
}
