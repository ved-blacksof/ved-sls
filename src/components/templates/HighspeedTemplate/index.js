import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Quality, QualityReverse, Visit, Visit1 } from '../../molecules'

import { Ourdesignprocess } from './Ourdesignprocess'

export function HighspeedTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-highspeed.png"
                maintext="High speed pcb design services"
                subtext="End-to-end PCB design solutions"
            />
            <GridBlue>
                <Navbar />

                <Overview
                    path="Services / High-Speed PCB Design Services"
                    sub1="SLS is a turnkey provider of a range of innovative PCB Designs starting right from High-Speed Board Designs, to Multi-Layered and Multi-CPU Board Design, and High-Performance Board Designs. Be it board design or system design, we ensure to provide the best-fit business-specific solutions along with reducing the time of deployment, canceling out the two major challenges that most of our clients face."
                />
            </GridBlue>

            <Quality
                mainheading="Offerings"
                // heading="<span style='font-family: 'Access !important'; color:'red'>e</span> USB 3.1 FMC"
                
                e="e"
                heading="USB 3.1 FMC"
                subtitle="eUSB 3.1 Gen 2 is designed using the Intel FPGA built-in 10 Gbps transceiver. It is a one-stop solution for all USB requirements ranging from USB 3.1 to USB 2.0"
                imageBG="./images/fmceusb316.png"
                redline
            />

            <QualityReverse
                heading="RF Microwave PCB Design"
                subtitle="2.4GHz, Sub-GHz Antenna-Radio Chipset Board/Module Design"
                // imageBG="./images/RF Microwave PCB Design.png"
                imageBG="./images/highspeed/PCB-Final-Final.png"
                redline
            />

            <Quality
                heading="Add/Snap-On Boards"
                subtitle="Santa Cruz Add/Snap-On Boards (based on Intel FPGA Motherboards) like USB2.0 ULPI Add on, Stackable Stepper Motor Drive Board"
                imageBG="./images/usb_2_ang.png"
                redline
            />

            <QualityReverse
                heading="Customized Boards"
                // subtitle="We offer a range of customized solutions to our clients to meet their ever-changing innovation needs. Our team of experts understand your product requirement and vision to cater custom solutions that meet functionality goals and project cost."
                subtitle="Linux Yocto OSGi-based Industrial IoT board with built-in web interface and edge computing capability having a multi-network connection - Dual ethernet/Wi-Fi/GSM, Rs. 485 (Modbus) AIO & DIO features."
                imageBG="./images/highspeed/Customized Boards-01.png"
                redline
            />

            <Quality
                heading="Development Boards"
                subtitle="We provide a range of hardware platforms for designing and developing simple and low-end systems based on Altera MAX II/MAX IIZ Devices."
                imageBG="./images/MAX_II_MAX_IIZ_4de6263416021.png"
                redline
            />

            <QualityReverse
                heading="HSMC Boards"
                subtitle="High-Speed Mezzanine Cards up USB3.2 Gen2 10Gbps Communication Channel as well as 400MSPS ADC-DAC boards"
                imageBG="./images/eUSB_3.0_HSMC_52ea36a619a99.png"
                redline

            />

            <Ourdesignprocess />


            <Visit1
                goto="Explore all about our products and services!"
                title="Visit website"
                href={"https://www.slscorp.com/services/high-speed-pcb-design-services.html"}

            />


            <Footer />
        </div>
    )
}
