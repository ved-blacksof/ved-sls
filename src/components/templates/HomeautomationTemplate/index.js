import React from 'react'
import { makeStyles } from '@material-ui/core'

import { Navbar, Footer } from '..'
import { Ubanner, Overview, Squareboxes1, Visit } from '../../molecules'
import { homeproducts } from '../../molecules/PortfolioData'

import { Homeapplication } from './Homeapplication'
import { GridBlue } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    list: {
        background: '#003189',
        height: '50vh',
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
            paddingBottom: '5%',
        },
    },
    box1: {
        width: '100%',
        paddingTop: '2%',
        border: 'none',
    },
    UL: {
        font: 'normal normal normal 1rem Access',
        color: 'white',
        listStyle: 'inside',
    },
    LI: {
        margin: '1% '
    },
}))

export function HomeautomationTemplate({

}) {
    const classes = useStyles()
    return (
        <div>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash@2xx.png"
                maintext="Home Automation"
                subtext="Giving Life to Smart and Interative Spaces"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    path="Industries / Home Automation"
                    sub1="SLS has always been at the forefront in leveraging new technologies to design innovative products. Utilizing AI and IoT in Space Automation is 
                    our new focus area. We offer a range of smart, interactive, and easy-to-use space automation products that are redefining how users interect with their surroundings."
                />
            </GridBlue>


            <Squareboxes1
                maintitle="Products"
                data={homeproducts}
            />

            <Homeapplication

            />

            <Visit
                goto="Get to know us better."
                title="Visit the web"
            />



            <Footer />
        </div>
    )
}
