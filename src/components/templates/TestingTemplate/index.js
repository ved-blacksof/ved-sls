import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'
import { smartstreet,testingAnalysers } from '../../molecules/PortfolioData'

export function TestingTemplate() {
    return (
        <>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-testing.png"
                maintext="testing and calibration"
                // subtext="Helping companies test their product."
                subtext="Helping build next-gen products through world-class Testing and Calibration infrastructure"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    path="Services / Testing and Calibration"
                    sub1="SLS not only provides turnkey products and services but also helps companies launch their in-house products into the market. With a wide range of testing and calibration tools,
                        we help companies build and deploy quality-tested products, easing quality checks, compliances, and certifications."

                />
            </GridBlue>

            <Quality
                mainheading="Offerings"
                imageBG="./images/Group82860.png"
                heading="In protocol Validation"
                redline="redline"
                subhead="Zigbee Test Manager"
                subtitle="ZTM is a bespoke Zigbee certification toolkit that expedites the development and testing of Zigbee products 
                            by verifying the conformity of nodes as per the Zigbee Alliance Standards."
                subhead1="GBCS Test Tool"
                subtitle1="GBCS Test Tool helps to test GBCS implementation in a wide variety and combination of Smart Metering devices. 
                            It helps to build, execute, & reuse real-life business scenarios using GUI-based GBCS commands."
            />

            <QualityReverse
                heading="RF Test Tools"
                redline="redline"
                subhead="Logic analyser"
                subtitle="The Logic Analyzer is a PCB-based full-featured tool with 36 channels & 100 MHz sampling frequency used for troubleshooting & performance verification of digital circuits."
                subhead1="Pattern generator"
                subtitle1="The Pattern Generators is a PCB-based tool which tests, debugs, and characterizes any digital hardware with the use of a variety of digital signals."
                subhead2="In-house anechoic chamber"
                subtitle2="SLS has an in-house Anechoic Chamber that is equipped with a gamut of RF capabilities offering a range of RF and pre-compliance testing. We help businesses ready their products for market deployments with strict standard and quality checks."
                data={testingAnalysers}
            />


            <Quality
                imageBG="./images/"
                heading="EMI Testing: Conducted Emission EMI Receiver and LISN"
                redline="redline"
                subhead=""
                subtitle="SLS provides testing facilities for EMI (Electromagnetic Interference) and EMC (Electromagnetic Compatibility). With AC and powerline device testing, the EMI and EMC testing provides EM noise detection and electrostatic discharge values."
                subhead1=""
                subtitle1=""

            />


            <QualityReverse
                imageBG="./images/Environmental Test Chamber.png"
                heading="Environmental test chambers"
                redline="redline"
                subhead="Temperature and Humidity Chambers"
                subhead1="Thermal Shock Testing"
                subhead2="Dust Resistance Chambers"

            />

            <Visit
                goto="Click here to know more about our testing and calibration services!"
                title="Know More"
                href={"/contact"}
            />

            <Footer />
        </>
    )
}
