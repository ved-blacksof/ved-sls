import React from 'react'
import { makeStyles } from '@material-ui/core'

import { Navbar, Footer } from '..'
import { Ubanner, Overview, Squareboxes1, Visit, Visit1, Realtime } from '../../molecules'
import { homeproducts, homeAutoOverview } from '../../molecules/PortfolioData'
import { MainContainer } from '../../atoms'




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
                subtext="Giving life to smart and interactive spaces"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    path="Industries / Home Automation"
                    sub1="SLS has always been at the forefront in leveraging new technologies to design innovative products. Utilizing AI and IoT in Space Automation is 
                    our new focus area. We offer a range of smart, interactive, and easy-to-use space automation products that are redefining how users interact with their surroundings."

                    mapIconPosition="mapIconPosition"
                    data={homeAutoOverview}
                    style={{ height: 'fit-content', marginBottom: '20%' }}
                />
            </GridBlue>


            {/* <Squareboxes1
                maintitle="Products"
                data={homeproducts}
            /> */}

            <Realtime
                maintitle="Products"
                squarecarddata={homeproducts}
            />
            {/* <Squareboxes1
                maintitle="Products"
                data={homeproducts}
            /> */}

            {/* <Homeapplication /> */}

            {/* <br />
            <br />
            <br /> */}

            <MainContainer>
                <Visit1
                    goto="A DIVISION OF SYSTEM LEVEL SOLUTIONS"
                    title="Visit Website"
                    href="https://www.konnsys.com/"
                    rightlogo="./images/homeautomation/Konnsys.png"
                />
            </MainContainer>



            <Footer />
        </div>
    )
}
