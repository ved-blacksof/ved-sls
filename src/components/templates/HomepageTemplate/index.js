import React from 'react'
import {Box} from '@material-ui/core'
import { Sbanner, Research } from '../../molecules'
import { TechCarousel } from './TechCarousel'
import { Navbar } from '../Navbar'
import {Reshape} from './Reshape'

export function HomepageTemplate() {
    return (
        <Box>
            <Sbanner Background={'/images/sls-office3.1e9e26cb.png'} mouse={'./images/scroll.svg'} />
            <Box style={{background:'#003189'}}>
                <Navbar />
                <TechCarousel />
                <Research/>
            </Box>
                <Reshape/>

        </Box>
    )
}
