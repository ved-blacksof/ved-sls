import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Quality, QualityReverse, Visit, Visit1 } from '../../molecules'

export function ElectronicTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-elctronics.png"
                maintext="Electronics Manufacturing Services [EMS]"
                subtext="Providing world-class electronics manufacturing services"
            />
            <GridBlue>
                <Navbar />

                <Overview
                    path="Services / Electronics Manufacturing Services"
                    sub1="SLS is a turnkey Electronics Manufacturing Service provider helping businesses with PCB assembly, 
                     prototyping, and small and medium volume production. We are equipped with semi-automated and fully-automated SMT lines,
                     services for automated QC, and turnkey project handling. Our wide umbrella of products, services, and fabrication 
                     facilities allow us to outsourcing our manufacturing services and expertise to second parties."
                />
            </GridBlue>

            <Quality
                mainheading="Offerings"
                heading="SMT Assembly"
                redline="redline"
                imageBG="./images/201811151625475623700-electronics.png"
                subtitle="We cater both semi-automated and fully-automated assembly of surface mount components on bare circuit boards. 
                To uplift customer experience, we support both framed and frameless stencil options for the application of solder 
                paste on PCB boards."
            />

            <QualityReverse
                heading="Automated QC"
                redline="redline"
                imageBG="./images/Automated QC.png"
                subtitle="To provide world-class electronics manufacturing services, we have developed a state-of-the-art 
                Test Automation product enabling Board Function Tests (BFTs) on assembled PCB's and Quality Check (QC) on 
                final products. This enables us in helping our clients with quality tested, standard products and help them 
                create a niche for their products in the market."
            />

            <Quality
                heading="Turnkey Project Handling"
                imageBG="./images/technician-technology-electronics.png"
                subtitle="We offer a one-stop PCB manufacturing solution to our clients. Our facilities are equipped to cater services right 
                from PCB fabrication, prototyping, to assembly of PCB's all at one junction. This state-of-the-art facility allows us 
                to provide seamless execution of large-scale projects and faster time-to-market of quality checked products."
            />

            <Visit1
                goto="Know more about our Electronics Manufacturing Capabilities!"
                title="Contact Us"
                href={"/contact"}
            />

            <Footer />
        </div>
    )
}
