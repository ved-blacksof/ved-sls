import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'
import { smartstreet } from '../../molecules/PortfolioData'


export function SmartmeteringTemplate() {
    return (
        <>
            <Ubanner
                Background="./images/nasa-Q1p7bh3SHj8-unsplash-1.png"
                maintext="smart metering"
                subtext="Bringing New Perspectives to Lights"
            />

            <Navbar />

            <Overview
                path="Industries / Smart Metering"
                sub1="SLS has been a pioneer in developing world-class and technology-first smart metering infrastructure across the globe. With a versatile product and technology portfolio, we have successfully completed a quantum of projects for national and international entities, setting an unprecedented benchmark in the smart metering landscape."

            />

             {/* 
            
            ################  SMAERT METERING PANEL VIA TABs ##############
             */}

            <Quality
                mainheading="smart metering"
                mainsubheading="SLS has continually been engaged in developing breakthrough products in the Smart Metering Landscape. We offer a wide range of solutions built using a culmination of new-edge technologies over the functional blocks of HES, WAN cluster for smart devices and, DCU and HAN application for residential metering applications."
                imageBG="./images/media_player_top.png"
                heading="RF Canopy"
                subtitle="Our Smart Metering Infrastructure is powered through RF Technology and Network Interface Card that offers robust network capacity to all the connected devices. Our products use lower bandwidth radio frequencies that are less congested and offer reliable connectivity across the Smart Metering Infrastructure.  "
                list="list"
                firstli="Wi-Sun Protocol"
                secli="LoRaWAN Network"
            />

            <QualityReverse
                imageBG="./images/Screenshot_2021-07-27-16-13-33-85_336c4b52c4fcdf7ef73c0cc47f672d0f.png"
                heading="Data Concentration Unit (DCU)"
                subtitle="The Data Concentration Unit is the secured hub in our smart metering infrastructure that facilitates the exchange of all data between the smart meters/IHD and HES."
            />

            <Quality
                imageBG="./images/media_player_top.png"
                heading="Head End System (HES)"
                subtitle="The HES is our scalable head-end data acquisition solution for the AMI. The HES is an IoT-powered solution that monitors and controls all Smart Meters and operates as a communication driver between MDM Systems and measurement devices."
            />

            <Visit
                title="Know More"
            />



            {/* 
            
            ################  UK METERING PANEL VIA TABs ##############
             */}


            <Quality
                mainheading="uk smart metering"
                mainsubheading="SLS has joined hands with the UK Government in its mission to connect over 99% of premises in the southern and central regions of Great Britain with Smart Metering Infrastructure and Network. Leading the DCC Program, we aim at providing Britain with Smart Metering RF technology, equipment, and devices for a quick overhaul of the existing metering landscape."
                imageBG="./images/media_player_top.png"
                heading="HCALS"
                subtitle="The HAN Connected Auxiliary Load Control Switch is a flexible direct load control solution made for effectively managing peak demand. The product helps control the residential and commercial load from HVAC Applications."

            />

            <QualityReverse
                imageBG="./images/Screenshot_2021-07-27-16-13-33-85_336c4b52c4fcdf7ef73c0cc47f672d0f.png"
                heading="HAN Assist Tool"
                subtitle="HAT is a robust industry-grade tool that helps in easy decision-making in the installation and deployment of any 2.4 GHz & Sub GHz smart meters. The tool helps reduce time load and supports the easy implementation of the smart metering infrastructure effectively."
            />

            <Quality
                imageBG="./images/media_player_top.png"
                heading="Emulator"
                subtitle="Our range of emulators supports both GHz and Sub GHz RF bands. In the Smart Metering Infrastructure, they help emulate various devices such as Gas Smart Meter Equipment (GSME), Electricity Smart Meter Equipment (ESME), Prepayment Meter Interface Device (PPMID), In-Home Display (IHD), and Auxiliary Load Control Switch (ALCS)."

            />

            <Visit 
                goto="Switch to a smarter way of Metering."
                title="Visit the website"
            />

            <Footer />
        </>
    )
}
