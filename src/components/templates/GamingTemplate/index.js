import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Cards, Visit } from '../../molecules'

import { solar, gaminghardware, gamingsoftware, gamingapplications } from '../../molecules/PortfolioData'

export function GamingTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/luo-lei-Xa4pTwafe5U-unsplash-gaming.png"
                maintext="Smart Gaming"
                subtext="Reinventing the Art of Learning with Wireless Smart Targeting System"
            />

            <GridBlue>
                <Navbar />

                <Overview
                    path="Industries / Smart Gaming"
                    sub1="Leveraging its targeting technology and training systems, SLS has developed a state-of-the-art Wireless Smart Targeting System. The application allows simulation-based gaming to create a premise for experiential skill development. Users can now connect with wireless targets for military training or advancement in chosen sports."
                    list="list"
                    li1="Android and iOS App control"
                    li2="Wi-Fi Connectivity"
                    li3="Cloud for online and offline mode operations"
                />
            </GridBlue>


            <Cards
                maintitle="Hardware Offerings"
                data={gaminghardware}
            />
            <Cards
                maintitle="Software Offerings"
                data={gamingsoftware}
            />
            <Cards
                maintitle="Applications"
                data={gamingapplications}
            />

            <Visit
                goto="Want to ace your game?"
                title="Visit the website"
            />

            <Footer />
        </div>
    )
}
