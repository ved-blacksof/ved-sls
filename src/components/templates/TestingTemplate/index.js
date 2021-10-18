import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'
import { smartstreet } from '../../molecules/PortfolioData'

export function TestingTemplate() {
    return (
        <>
            <Ubanner
                Background="./images/nasa-Q1p7bh3SHj8-unsplash-1.png"
                maintext="testing and calibration"
                subtext="Helping companies to give life to their products"
            />

            <Navbar />

            <Overview
                path="Services / Testing and Calibration"
                sub1="SLS not only provides turnkey products and services but also helps companies launch their in-house products into the market. With a wide range of testing and calibration tools,
                 we help companies build and deploy quality-tested products, easing quality checks, compliances, and certifications."
               
            />

            <Quality
                mainheading="Offerings"
                imageBG="./images/media_player_top.png"
                heading="In protocol Validation"
                redline="redline"
                subtitle="Our smart traffic management controller retrofits with the existing traffic infrastructure and transforms it into a smarter, more interactive traffic solution."
            />

            <QualityReverse
                imageBG="./images/Screenshot_2021-07-27-16-13-33-85_336c4b52c4fcdf7ef73c0cc47f672d0f.png"
                heading="Hardware test tools"
                redline="redline"
                subtitle="Our Traffic Management Dashboard is a cloud-based intuitive dashboard that allows you to remotely control and monitor your intelligent traffic infrastructure."
            />  

            <Quality
                imageBG="./images/media_player_top.png"
                heading="In-house anechoic chamber"
                redline="redline"
                subtitle="Our smart traffic management controller retrofits with the existing traffic infrastructure and transforms it into a smarter, more interactive traffic solution."
            />

            <QualityReverse
                imageBG="./images/Screenshot_2021-07-27-16-13-33-85_336c4b52c4fcdf7ef73c0cc47f672d0f.png"
                heading="Environmental test chambers"
                redline="redline"
                subtitle="Our Traffic Management Dashboard is a cloud-based intuitive dashboard that allows you to remotely control and monitor your intelligent traffic infrastructure."
            />  

            <Visit
                goto="Click here to know more about our testing and calibration services!"
                title="Know More"
            />

            <Footer />
        </>
    )
}
