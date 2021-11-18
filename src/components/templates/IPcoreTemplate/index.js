import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'

export function IPcoreTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-ipcore.png"
                maintext="IP CORE/FPGA/SoC Design Services"
                subtext="World Leaders in FPGA SoC Design Services"
            />
            <GridBlue>
                <Navbar />

                <Overview
                    path="Services / ASIC/FPGA/SoC Design Services"
                    sub1="SLS has been long-devoted in bringing in new innovations in the smart street lighting sphere.
                 We offer a new-edge comprehensive platform that provides single-point monitoring and control of 
                 retrofit and new street lighting infrastructure. We aim to bring this entire infrastructure under one 
                 common roof for definite control, optimized energy-saving, and data-driven decisions."
                />
            </GridBlue>

            <Quality
                mainheading="Offerings"
                heading="IP Core Development and Customization"
                imageBG="./images/FPGA_Website_Image (5).png"
            />

            <QualityReverse
                heading="FPGA Turnkey Solutions"
                imageBG="./images/FPGA_Website_Image (1).png"
            />

            <Quality
                heading="ASIC-to-FPGA Solutions"
                imageBG="./images/FPGA_Website_Image (4).png"
            />

            <QualityReverse
                heading="Product Customization"
                imageBG="./images/FPGA_Website_Image (3).png"
            />

            <Quality
                heading="Driver Development"
                imageBG="./images/FPGA_Website_Image (2).png"
            />

            <Visit
                goto="Know more about our solution for Railways."
                title="Visit the Website"
            />


            <Footer />
        </div>
    )
}
