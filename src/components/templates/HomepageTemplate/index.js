import React from 'react'
import { Box, Container } from '@material-ui/core'
import { Sbanner, Research } from '../../molecules'
import { TechCarousel } from './TechCarousel'
import { Navbar, Footer } from '..'
import { Reshape } from './Reshape'
import { Portfolio } from './Portfolio'
import { Expanding } from './Expanding'
import { Partners } from './Partners'
import { Realtime} from './Realtime'

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

                <Portfolio/>

                <Expanding/>

                {/* <Realtime/> */}

                <Partners/>

                <Footer />
        </Box>
    )
}
