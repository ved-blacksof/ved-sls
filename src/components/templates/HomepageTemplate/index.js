import React from 'react'
import { Box, Container } from '@material-ui/core'
import { Sbanner, Research, Realtime, Offerings, Democarousel, Visit, Visit1 } from '../../molecules'

import { TechCarousel } from './TechCarousel'
import { Navbar, Footer, Navbar1 } from '..'
import { Reshape } from './Reshape'
import { Portfolio } from './Portfolio'
import { Expanding } from './Expanding'
import { Partners } from './Partners'
import { port, realtime, research } from '../../molecules/PortfolioData'
import { GridBlue } from '../../atoms'
import Homepage from '../../assets/Homepage.png'
import Homepage1 from '../../assets/Homepage1.png'
import Homepage2 from '../../assets/Homepage2.png'
import Homepage3 from '../../assets/Homepage03.jpg'
import { Blogs } from './Blogs'

export function HomepageTemplate() {
    return (
        <Box>
            <Sbanner
                Background={Homepage}
                Background1={Homepage1}
                Background2={Homepage2}
                Background3={Homepage3}
                mouse={'./images/scroll.svg'} />

            <GridBlue>
                <Navbar />
                {/* <Navbar1/> */}

                <TechCarousel />
            </GridBlue>

            <Research
                title="INTEGRATION SPECIALIST"
                br="br"
                title1="ACROSS VARIOUS VERTICALS"
                subtitle="Assisting companies to avoid pitfalls in the product design & development phase, 
                our experienced team at System Level Solutions provides innovative solutions across stages to 
                better materialize the creative perspective of a client."
                // generalheadingblue="generalheadingblue"
                data={research}
            // bggrey
            />

            <Reshape />

            <Portfolio data={port} />

            <Expanding />

            {/* <Realtime
                data={realtime}
                title="GET ACQUAINTED WITH"
                title1="INDUSTRY TRENDS IN REAL-TIME"
                filters="filters"
                subtitle="Our newsroom is designed to keep you updated about every major or minor breakthrough in the related industries."
                cases="cases"
                redline="redline"
                br="br"
            /> */}
            <Blogs
                title="GET ACQUAINTED WITH"
                title1="INDUSTRY TRENDS IN REAL-TIME"
                filters="filters"
                subtitle="Our newsroom is designed to keep you updated about every major or minor breakthrough in the related industries."
                cases="cases"
                redline="redline"
                br="br"
            />




            <Partners />

            <Visit1
                title="Contact Us"
                href="/contact"
            />

            <Footer />
        </Box>
    )
}
