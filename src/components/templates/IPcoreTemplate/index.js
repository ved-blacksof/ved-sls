import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'
import { Ourexpertise } from '../MachineLearningTemplate/Ourexpertise'
import { Industries } from './Industries'
import { Offerings } from './Offerings'
import { OurexpertiseBlue } from './OurexpertiseBlue'
import { Products } from './Products'

export function IPcoreTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-ipcore.png"
                maintext="IP CORE/FPGA/SoC Design Services"
                subtext="World leaders in FPGA SoC design services"
            />
            <GridBlue>
                <Navbar />

                <Overview
                    path="Services / IP CORE/FPGA/SoC Design Services"
                    sub1="SLS has been spearheading the design and delivery of world-class FPGA and IP Core services for more than two decades. We hold an extensive portfolio of IP Cores with exceptional time-to-market and ever-growing functionalities, serving 150+ clients globally. Our ready-to-deploy FPGA solutions are designed to meet the dynamic needs of the market and match pace with the changing technology status quo, always aiming to deliver excellence."
                />
            </GridBlue>

            
            <Offerings />
        

                {/* <Quality
                    mainheading="Offerings"
                    heading="IP Core Development and Customization"
                    imageBG="./images/FPGA_Website_Image (5).png"
                />

                <QualityReverse
                    heading="FPGA Turnkey Solutions"
                    imageBG="./images/FPGA_Website_Image (1).png"
                />

                <Quality
                    heading="IP CORE-to-FPGA Solutions"
                    imageBG="./images/FPGA_Website_Image (4).png"
                />

                <QualityReverse
                    heading="Product Customization"
                    imageBG="./images/FPGA_Website_Image (3).png"
                />

                <Quality
                    heading="Driver Development"
                    imageBG="./images/FPGA_Website_Image (2).png"
                /> */}

            <Products />

            <OurexpertiseBlue />

            <Industries />

            <Visit
                goto="Explore more about our FPGA Products and Services"
                title="Visit website"
                href={"https://www.slscorp.com/services/fpgasoc-design-services.html"}
            />
            
            <Footer />
        </div>
    )
}
