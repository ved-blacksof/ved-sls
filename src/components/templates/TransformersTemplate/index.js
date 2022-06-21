import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Quality, QualityReverse, Visit, SoftOfferingsBlue, Visit1 } from '../../molecules'
import { transformer ,transSmartFirm} from '../../molecules/PortfolioData'
import { Application } from './Application'

export function TransformersTemplate() {
    return (
        <>
            <Ubanner
                Background="./images/transformers/Transformer.png"
                maintext="Intelligent Transformer Monitoring"
                subtext="Helping discoms smartly monitor and manage their transformers"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    path="Industries / Intelligent Transformer Monitoring"
                    sub1="SLS’s Intelligent Transformer Monitoring System is an end-to-end solution that helps companies remotely control and monitor individual transformers. We provide the necessary hardware infrastructure to monitor power transformers at power plants and distribution transformers for local power distribution. The monitoring software optimizes loading and maximizes asset life through features like data logging, event recording, and dynamic loading analysis, etc."

                    data={transformer}
                    mapIconPosition="mapIconPosition"
                    style={{ height: 'fit-content', marginBottom: '20%' }}
                />
            </GridBlue>

            <Quality
                imageBG="./images/transformers/Smart_Firmware.jpg"
                mainheading="Offerings"
                heading="Smart Firmware"
                redline="redline"
                subtitle="DTMS Firmware is developed for measuring energy parameters, monitoring field sensors, and sending all the measured data to the cloud at regular intervals. Data collection, validation, arranging it in a suitable format is one of the most important functions that the firmware serves."
                data1={transSmartFirm}
                // list="list" 
                // uli="Features"
                // firstli="Handles arithmetic and logical operations"
                // secli="Data collection at unit levels"
                // thirdli="Monitors communication with the cloud"
                // fourthli="Communication with DTMS mobile app"
            />



            <SoftOfferingsBlue
                maintitle="Software offering"
                title="DTMS Portal"
                subtitle="DTMS Portal represents all the monitored and historical data related to energy and other important parameters exactly in one place."
                list
                firstli="User management"
                secli="Data collection & analysis"
                thirdli="Graphical representation of real-time and historical data"
                fourthli="Alarm management"
                fifthli="Fault management"
                sixthli="Transformer management"
                images='./images/dashboards/transformer-DB.png'
            />

            <Application />

            <Visit1
                goto="Want to know more about this offering?"
                title="Contact Us"
                href={"/contact"}
            />

            <Footer />
        </>
    )
}
