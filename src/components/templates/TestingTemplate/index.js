import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Quality, QualityReverse, Visit, Visit1 } from '../../molecules'
import { smartstreet, testingAnalysers } from '../../molecules/PortfolioData'
import { QualityReverseNew } from '../../molecules/QualityReverseNew'

export function TestingTemplate() {
    return (
        <>
            <Ubanner
                Background="./images/testing/testing-banner.png"
                maintext="testing and calibration"
                // subtext="Helping companies test their product."
                subtext="Helping build next-gen products through world-class testing and calibration infrastructure"
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
                imageBG="./images/testing/LISN-EMI.jpg"
                heading="EMI Testing: Conducted Emission EMI Receiver and LISN"
                redline="redline"
                subhead=""
                subtitle="SLS provides testing facilities for EMI (Electromagnetic Interference) and EMC (Electromagnetic Compatibility). With AC and powerline device testing, the EMI and EMC testing provides EM noise detection and electrostatic discharge values."
                subhead1=""
                subtitle1=""
            />


            <QualityReverse
                carousel="carousel"
                images1="./images/Environmental Test Chamber.png"
                images2="./images/testing/products/Thermal Shock Machine.jpg"
                images3="./images/testing/products/Dust Resistance Tester.jpg"

                heading="Environmental test chambers"
                redline="redline"
                subhead="Temperature and Humidity Chambers"
                subhead1="Thermal Shock Testing"
                subhead2="Dust Resistance Chambers"

            />
            <QualityReverseNew
                mainheading1="RF Test Tools"
                subhead1="MegiQ RMS-0740"
                subtitle1="The SLS's MegiQ RMS-0740 is a RF Testing tool that helps with measuring the Total Radiated Power (TRP), 3D radiation pattern, and gain measurement of Antennas."
                imageBG="./images/testing/MagiQ.png"
                removeBGicons="removeBGicons"
            // subhead="Logic analyser"
            // subtitle="The Logic Analyzer is a PCB-based full-featured tool with 36 channels & 100 MHz sampling frequency used for troubleshooting & performance verification of digital circuits."

            // subhead="Pattern generator"
            // subtitle="The Pattern Generators is a PCB-based tool which tests, debugs, and characterizes any digital hardware with the use of a variety of digital signals."

            // subhead2="Vector Analyzer"
            // subtitle2="The offers two types of Vector Analyzers. The first, N9918A is a PCB-based full-featured RF Testing tool with a frequency range of 100 KHz to 26.5 GHz. The tool helps with measuring TDR cables and 2-port S parameter characterization. The second, VNA-0440-VSB MegiQ offers a frequency range of 400 MHz to 4 GHz with -30 to +5dBm and Full 2-Port S parameter Measurement."

            // subhead3="Spectrum Analyzer"
            // subtitle3="SLS offer 2 types of spectrum analyzers. The first, R&S FSP7 offers a 9KHz to 7 GHz frequency range, 1 Hz to 10 MHz resolution bandwidth and displays an average noise level of -155 dBm (1 Hz). The other, USB-SA44B offers 1 Hz to 4.4 GHz frequency range, 0.1 Hz to 250 KHz and 5 MHz resolution bandwidth with a wide dynamic range of -151 dBm to +10 dBm."

            // subhead4="In-house anechoic chamber"
            // subtitle4="SLS has an in-house Anechoic Chamber that is equipped with a gamut of RF capabilities offering a range of RF and pre-compliance testing. We help businesses ready their products for market deployments with strict standard and quality checks."
            // data={testingAnalysers}

            // carousel='carousel'

            // images1="./images/hardwaretesttools.png"
            // images3="./images/testing/m2.jpg"
            // images2="./images/testing/SpectrumAnalysers.jpg"
            // images4="./images/processed_2.png"


            />
            <QualityReverseNew
                subhead2="Vector Analyzer"
                subtitle2="The offers two types of Vector Analyzers. The first, N9918A is a PCB-based full-featured RF Testing tool with a frequency range of 100 KHz to 26.5 GHz. The tool helps with measuring TDR cables and 2-port S parameter characterization. The second, VNA-0440-VSB MegiQ offers a frequency range of 400 MHz to 4 GHz with -30 to +5dBm and Full 2-Port S parameter Measurement."
                imageBG="./images/testing/m2.jpg"
                style={{ margin: '5% auto' }}
                removeBGicons="removeBGicons"

            />
            <QualityReverseNew
                subhead3="Spectrum Analyzer"
                subtitle3="SLS offer 2 types of spectrum analyzers. The first, R&S FSP7 offers a 9KHz to 7 GHz frequency range, 1 Hz to 10 MHz resolution bandwidth and displays an average noise level of -155 dBm (1 Hz). The other, USB-SA44B offers 1 Hz to 4.4 GHz frequency range, 0.1 Hz to 250 KHz and 5 MHz resolution bandwidth with a wide dynamic range of -151 dBm to +10 dBm."
                imageBG="./images/testing/SpectrumAnalysers.jpg"
                removeBGicons="removeBGicons"

            />
            <QualityReverseNew
                subhead4="In-house anechoic chamber"
                subtitle4="SLS has an in-house Anechoic Chamber that is equipped with a gamut of RF capabilities offering a range of RF and pre-compliance testing. We help businesses ready their products for market deployments with strict standard and quality checks."
                imageBG="./images/processed_2.png"
                removeBGicons="removeBGicons"

            />

            <Visit1
                goto="Click here to know more about our testing and calibration services!"
                title="Contact us"
                href={"/contact"}
            />

            <Footer />
        </>
    )
}
