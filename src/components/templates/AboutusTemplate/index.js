import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Realtime } from '../../molecules'
import { Dnumbers } from './Dnumbers'
import { CSRcarousel } from './CSRcarousel'
import { Quality, QualityReverse, Offerings } from '../../molecules'
import { SLSTimeline } from './SLSTimeline'
import { certification, csrcarousel } from '../../molecules/PortfolioData'

export function AboutusTemplate() {
    return (
        <div>
            <Ubanner
                Background=""
                maintext="About us"
                subtext="sddfsdf"
            />

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

            {/* <SLSTimeline  /> */}

            <Dnumbers />

            <CSRcarousel data={csrcarousel} />

            <Quality
                mainheading="quality & reliabilty"
                imageBG="./images/louis-reed-53jnUK5LqEY-unsplash.png"
                heading="Quality Policy"
                subtitle="We are committed to consistently meet our customers requirement as well as applicable 
                statutory and regulatory requirement for the quality of products and services and performance
                 at optimum cost through our competent human resource and continual improvement of quality 
                 management system."
                firstli="Effectively manage projects and ensures they are done in timely manner."
                secli="Efficiently manage resources for efficient cost of products and services."
                thirdli="Ensure enhance customer satisfaction through our products and services."
                fourthli="Ensure enhance customer satisfaction through our products and services."

            />

            <QualityReverse
                imageBG="./images/louis-reed-53jnUK5LqEY-unsplash.png"
                heading="Environmental Policy"
                subtitle="We are committed to meet all statutory and legal compliance and environmental affairs leadership in our business activities."
                firstli="Become an environmentally responsible neighbour providing pollution free operations in the communities where we operate."
                secli="Conserve natural resources namely water, electricity and fuel as low as possible without any intentional waste."
                thirdli="Ensure our production and service activities do not have any adverse effect on the environment."
                fourthli="Strive to continually improve EMS by enhancing environmental performance."
            />

            <Offerings
                data={certification}
                title="Certifications "
            />


            {/* <Realtime
                data={certification}
                head1="Certifications and Policies" /> */}


            <Footer />

        </div>
    )
}
