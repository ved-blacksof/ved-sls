import React from 'react'
import { Box, Container } from '@material-ui/core'
import { Sbanner, Research, Realtime, Offerings, Democarousel } from '../../molecules'

import { TechCarousel } from './TechCarousel'
import { Navbar, Footer } from '..'
import { Reshape } from './Reshape'
import { Portfolio } from './Portfolio'
import { Expanding } from './Expanding'
import { Partners } from './Partners'
import { port, realtime, research } from '../../molecules/PortfolioData'

export function HomepageTemplate() {
    return (
        <Box>
            <Sbanner Background={'/images/sls-office3.1e9e26cb.png'} mouse={'./images/scroll.svg'} />

            <Box style={{ background: '#354B9C',paddingBottom:'10%' }}>
                <Navbar />

                <TechCarousel />

                <Research 
                    title="INTEGRATION SPECIALIST ACROSS VARIOUS VERTICALS"    
                    subtitle="Assisting companies to avoid pitfalls in the product design and development phase, our experienced team at System Level Solutions uses provides innovative solutions across levels to materialize the creative perspective of a client."
                    generalheadingblue="generalheadingblue"
                    data={research}
                    />
            </Box>

            <Reshape />

            <Portfolio data={port} />

            <Expanding />

            <Realtime
                data={realtime}
                title="GET ACQUAINTED WITH INDUSTRY TRENDS IN REAL-TIME"
                subtitle="Our newsroom is designed to keep you updated about every major or minor breakthrough in the related industries."
                cases="cases"
            />

            <Partners />

            <Footer />
        </Box>
    )
}
