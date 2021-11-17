import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'
import { smartstreet } from '../../molecules/PortfolioData'

export function TestingTemplate() {
    return (
        <>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-testing.png"
                maintext="testing and calibration"
                subtext="Helping companies to give life to their products"
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
                imageBG="./images/Group 82860.png"
                heading="In protocol Validation"
                redline="redline"
                subtitle="Our smart traffic management controller retrofits with the existing traffic infrastructure and transforms it into a smarter, more interactive traffic solution."
            />

            <QualityReverse
                imageBG="./images/hardware test tools.png"
                heading="Hardware test tools"
                redline="redline"
                subtitle="Our Traffic Management Dashboard is a cloud-based intuitive dashboard that allows you to remotely control and monitor your intelligent traffic infrastructure."
            />

            <Quality
                imageBG="./images/processed_2.png"
                heading="In-house anechoic chamber"
                redline="redline"
                subtitle="Our smart traffic management controller retrofits with the existing traffic infrastructure and transforms it into a smarter, more interactive traffic solution."
            />

            <QualityReverse
                imageBG="./images/Environmental Test Chamber.png"
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
