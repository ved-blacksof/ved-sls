import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Realtime } from '../../molecules'
import { Dnumbers } from './Dnumbers'
import { CSRcarousel } from './CSRcarousel'
import { Quality, QualityReverse, Offerings } from '../../molecules'
import { SLSTimeline } from './SLSTimeline'
import { certification, csrcarousel } from '../../molecules/PortfolioData'
import { GridBlue } from '../../atoms'
import quality from '../../assets/policies/Quality_Policy.pdf'
import ems from '../../assets/policies/EMS_Policy.pdf'


export function AboutusTemplate() {
    return (
        <div>
            <Ubanner
                Background={"./images/about/About-us.png"}
                maintext="About us"
                subtext="Technology Partner in your Business Growth Journey"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    title='About sls'
                    sub1='System Level Solutions is a turnkey product and service provider to the leading private and government
                        enterprises across America, Europe, and Asia. With a chief focus on business-boosting and technology-driven innovative solutions,
                        we act as technology partners in growth, providing bespoke solutions across a wide array of industries.'
                    sub2='We have the in-house capability to rapidly develop, prototype, provide proof of concept and mass production
                        services across hardware, software, firmware, and wireless technologies. Our motive is to work hand-in-hand with your business goals to
                        deliver market-ready products boasting class-apart design, innovative functionalities, excellent quality.'
                />
            </GridBlue>

            {/* <SLSTimeline  /> */}

            <Dnumbers />

            <CSRcarousel data={csrcarousel} />

            <Quality
                mainheading="quality & reliabilty"
                heading="Quality Policy"
                imageBG="./images/about/Quality-policy.png"
                subtitle="We are committed to consistently meet our customers requirement as well as applicable 
                            statutory and regulatory requirement for the quality of products and services and performance
                            at optimum cost through our competent human resource and continual improvement of quality 
                            management system."
                list="list"
                uli="To achieve our aim, we will"
                firstli="Effectively manage projects and ensure they are done in a timely manner."
                secli="Efficiently manage resources for efficient cost of products and services."
                thirdli="Ensure enhanced customer satisfaction through our products and services."
                fourthli="Ensure proper fulfillment of needs and expectations of relevant interested parties."
                redline="redline"
                download="download policy"
                href={quality}
            />

            <QualityReverse
                heading="Environmental Policy"
                imageBG="./images/annie-spratt-hCb3lIB8L8E-unsplash.jpg"
                subtitle="We are committed to meet all statutory and legal compliance in our business activities under the environmental affairs."
                list="list"
                uli="To achieve our aim, we will"
                firstli="Become an environmentally responsible neighbour providing pollution free operations in the communities where we operate."
                secli="Conserve natural resources namely water, electricity and fuel as low as possible without any intentional waste."
                thirdli="Ensure our production and service activities do not have any adverse effect on the environment."
                fourthli="Strive to continually improve EMS by enhancing environmental performance."
                redline="redline"
                download="download policy"
                href={ems}
            />

            <Realtime
                data={certification}
                title="Certifications and Policies"
                download="download"
            // grpicons={"./images/Screen Shot 2021-05-29 at 2.50.04 AM.jpg"}
            // subtitle="Our newsroom is designed to keep you updated about every major or minor breakthrough in the related industries."
            // cases="cases"
            />

            <Footer />

        </div>
    )
}
