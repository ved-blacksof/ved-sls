import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'

export function IPcoreTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/nasa-Q1p7bh3SHj8-unsplash-1.png"
                maintext="IP CORE/FPGA/SoC Design Services"
                subtext="World Leaders in FPGA SoC Design Services"
            />
            <Navbar />

            <Overview
                path="Services / ASIC/FPGA/SoC Design Services"
                sub1="SLS has been long-devoted in bringing in new innovations in the smart street lighting sphere.
                 We offer a new-edge comprehensive platform that provides single-point monitoring and control of 
                 retrofit and new street lighting infrastructure. We aim to bring this entire infrastructure under one 
                 common roof for definite control, optimized energy-saving, and data-driven decisions."
            />

            <Quality
                mainheading="Offerings"
                heading="IP Core Development and Customization"
                imageBG="./images/media_player_top.png"
            />

            <QualityReverse
                heading="FPGA Turnkey Solutions"
                imageBG="./images/media_player_top.png"
            />

            <Quality
                heading="ASIC-to-FPGA Solutions"
                imageBG="./images/media_player_top.png"
            />

            <QualityReverse
                heading="Product Customization"
                imageBG="./images/Screenshot_2021-07-27-16-13-33-85_336c4b52c4fcdf7ef73c0cc47f672d0f.png"
            />

            <Quality
                heading="Driver Development"
                imageBG="./images/media_player_top.png"
            />

            <Visit
                goto="Know more about our solution for Railways."
                title="Visit the web"
            />


            <Footer />
        </div>
    )
}
