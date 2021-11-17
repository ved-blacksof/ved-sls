import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Cards, Visit } from '../../molecules'

import { solar, solarhardware, solarsoftware } from '../../molecules/PortfolioData'

export function SolarTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-solar.png"
                maintext="Solar and wind"
                subtext="Paving the way for a sustainable Future with Solar and Wind Energy"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    path="Industries / Solar and Wind"
                    sub1="SLS has been long-devoted in bringing in new innovations in the smart street lighting sphere.
                    We offer a new-edge comprehensive platform that provides single-point monitoring and control of 
                    retrofit and new street lighting infrastructure. We aim to bring this entire infrastructure under one 
                    common roof for definite control, optimized energy-saving, and data-driven decisions."
                    icons="icons"
                    data={solar}
                    style={{ height: 'fit-content', paddingBottom: '10%' }}
                />
            </GridBlue>

            <Cards
                maintitle="Hardware Offerings"
                data={solarhardware}

            />
            <Cards
                maintitle="Software Offerings"
                data={solarsoftware}

            />

            <Visit
                goto="Explore more about our Solar and Wind Solutions."
                title="Visit the web"
            />

            <Footer />
        </div>
    )
}
