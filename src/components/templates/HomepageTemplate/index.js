import React from 'react'
import { Box, Container } from '@material-ui/core'
import { Sbanner, Research, Realtime } from '../../molecules'
import { TechCarousel } from './TechCarousel'
import { Navbar, Footer } from '..'
import { Reshape } from './Reshape'
import { Portfolio } from './Portfolio'
import { Expanding } from './Expanding'
import { Partners } from './Partners'
import { port,realtime} from '../../molecules/PortfolioData'

export function HomepageTemplate() {
    return (
        <Box>
            <Sbanner Background={'/images/sls-office3.1e9e26cb.png'} mouse={'./images/scroll.svg'} />
            <Box style={{ background: '#003189' }}>

                <Navbar />

                <TechCarousel />

                <Research />
            </Box>

            <Reshape />

            <Portfolio data={port} />

            <Expanding />

            <Realtime
                data={realtime}
                head1="GET ACQUAINTED WITH INDUSTRY "
                head2="TRENDS IN REAL-TIME"
                subhead="Our newsroom is designed to keep you updated about every major or minor breakthrough in the related industries."
            />

            <Partners />

            <Footer />
        </Box>
    )
}
