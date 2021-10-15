import React from 'react'
import { Navbar, Footer } from '..'
<<<<<<< HEAD
import { Ubanner, Overview, Cards , Visit } from '../../molecules'

import { solar, solarhardware, solarsoftware } from '../../molecules/PortfolioData'
=======
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'

import {solar} from '../../molecules/PortfolioData'
>>>>>>> 6abe93bbf00ebb16cffc66800f79eed3709c4a31

export function SolarTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/nasa-Q1p7bh3SHj8-unsplash-1.png"
                maintext="Solar and wind"
                subtext="Paving the way for a sustainable Future with Solar and Wind Energy"
            />

<<<<<<< HEAD
            <Navbar />
=======
            <Navbar/>
>>>>>>> 6abe93bbf00ebb16cffc66800f79eed3709c4a31

            <Overview
                title="Industries / Smart Street Light"
                path="Industries / Solar and Wind"
                sub1="SLS has been long-devoted in bringing in new innovations in the smart street lighting sphere.
                 We offer a new-edge comprehensive platform that provides single-point monitoring and control of 
                 retrofit and new street lighting infrastructure. We aim to bring this entire infrastructure under one 
                 common roof for definite control, optimized energy-saving, and data-driven decisions."
                icons="icons"
                data={solar}
<<<<<<< HEAD
                style={{ height: 'fit-content', paddingBottom: '10%' }}
            />

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
                
            />

            <Footer />
=======
                style={{height:'fit-content', paddingBottom:'10%'}}
            />

            

            <Footer/>
>>>>>>> 6abe93bbf00ebb16cffc66800f79eed3709c4a31
        </div>
    )
}
