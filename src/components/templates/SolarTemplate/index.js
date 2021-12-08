import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Cards, Visit, Realtime } from '../../molecules'

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
                    sub1="Contributing to its mission of making this world greener, SLS has developed a range of BIS-approved end-to-end 
                    smart solar and wind energy solutions. With the aspiration of always delivering more than expected, 
                    we have capacitated these solutions with intelligent features that increase usability and make the switch to renewable energy easier."
                    icons="icons"
                    data={solar}
                    style={{ height: 'fit-content', paddingBottom: '10%' }}
                />
            </GridBlue>
            <Realtime
                    maintitle="Hardware Offerings"
                    data={solarhardware}
                    style={{opacity:'0'}}
                
            />
            <Realtime
                    maintitle="Software Offerings"
                    data1={solarsoftware}
                    style={{opacity:'0'}}
                
            />

            {/* <Cards
                maintitle="Software Offerings"
                data={solarsoftware}

            /> */}

            <Visit
                goto1="A DIVISION OF SYSTEM LEVEL SOLUTIONS; SUNSIGHTS"
                title="Visit the website"
                href={"https://www.getsunsights.com/"}
                style={{fontFamily:'BebasNeue',fontWeight:'normal'}}
            />

            <Footer />
        </div>
    )
}
