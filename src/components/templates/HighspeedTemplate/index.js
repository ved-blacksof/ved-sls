import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'

import {Ourdesignprocess} from './Ourdesignprocess'

export function HighspeedTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/nasa-Q1p7bh3SHj8-unsplash-1.png"
                maintext="High speed pcb design services"
                subtext="End-to-end PCB Design Solutions"
            />
            <Navbar />

            <Overview
                path="Services / High-Speed PCB Design Services"
                sub1="SLS is a turnkey provider of a range of innovative PCB Designs starting right from High-Speed Board Designs, to Multi-Layered and Multi-CPU Board Design, and High-Performance Board Designs. Be it board design or system design, we ensure to provide the best-fit business-specific solutions along with reducing the time of deployment, canceling out the two major challenges that most of our clients face."
            />

            <Quality
                mainheading="Offerings"
                heading="eUSB 3.1 FMC"
                subtitle="eUSB 3.1 FMC board is one-stop solution for all USB requirements ranging from USB 3.1 to USB 2.0"
                imageBG="./images/media_player_top.png"
            />

            <QualityReverse
                heading="RF Microwave PCB Design"
                subtitle="2.4GHz, Sub-GHz Antenna-Radio Chipset Board/Module Design"
                imageBG="./images/media_player_top.png"
            />

            <Quality
                heading="Add/Snap-On Boards"
                subtitle="Santa Cruz Add/Snap-On Boards (based on Intel FPGA Motherboards) like USB2.0 ULPI Add on, Stackable Stepper Motor Drive Board"
                imageBG="./images/media_player_top.png"
            />

            <QualityReverse
                heading="Customized Boards"
                subtitle="Linux Yocto OSGi-based Industrial IoT board with built-in web interface and edge computing capability having a multi-network connection - Dual ethernet/Wi-Fi/GSM, Rs. 485 (Modbus) AIO & DIO features"
                imageBG="./images/media_player_top.png"
            />

            <Quality
                heading="Development Boards"
                subtitle="We provide a range of hardware platforms for designing and developing simple and low-end systems based on Altera MAX II/MAX IIZ Devices."
                imageBG="./images/media_player_top.png"
            />

            <QualityReverse
                heading="HSMC Boards"
                subtitle="High-Speed Mezzanine Cards up to USB 3.1 Gen1 (5Gbps) Communication Channel"
                imageBG="./images/media_player_top.png"
            />

            <Ourdesignprocess />

            <Visit
                goto="Explore all about our products and services!"
                title="Visit the website"
            />


            <Footer />
        </div>
    )
}
