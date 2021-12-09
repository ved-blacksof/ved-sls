import React from 'react'
import { Box, Container } from '@material-ui/core'
import { Sbanner, Research, Realtime, Offerings, Democarousel, Visit } from '../../molecules'

import { TechCarousel } from './TechCarousel'
import { Navbar, Footer, Navbar1 } from '..'
import { Reshape } from './Reshape'
import { Portfolio } from './Portfolio'
import { Expanding } from './Expanding'
import { Partners } from './Partners'
import { port, realtime, research } from '../../molecules/PortfolioData'
import { GridBlue } from '../../atoms'

export function HomepageTemplate() {
    return (
        <Box>
            <Sbanner Background={'./images/homepage-icons/Homepage.png'} mouse={'./images/scroll.svg'} />

            <GridBlue>
                <Navbar />
                {/* <Navbar1/> */}

                <TechCarousel />

                <Research
                    title="INTEGRATION SPECIALIST"
                    title1="ACROSS VARIOUS VERTICALS"
                    subtitle="Assisting companies to avoid pitfalls in the product design & development phase, our experienced team at System Level Solutions provides innovative solutions across stages to better materialize the creative perspective of a client."
                    generalheadingblue="generalheadingblue"
                    data={research}
                />
            </GridBlue>

            <Reshape />

            <Portfolio data={port} />

            <Expanding />

            <Realtime
                data={realtime}
                title="GET ACQUAINTED WITH"
                title1="INDUSTRY TRENDS IN REAL-TIME"
                filters="filters"
                subtitle="Our newsroom is designed to keep you updated about every major or minor breakthrough in the related industries."
                cases="cases"
                redline="redline"
                br="br"
            />

            <Partners />

            <Visit
                title="Contact Us"
                
            />

            <Footer />
        </Box>
    )
}
