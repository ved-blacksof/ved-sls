import React from 'react'
import { Navbar, Footer } from '..'
import { Overview, Ubanner, Quality, QualityReverse,Visit } from '../../molecules'
import { digital } from '../../molecules/PortfolioData'

export function DigitalTemplate() {
    return (
        <>
            <Ubanner
                Background="/images/luo-lei-Xa4pTwafe5U-unsplash-digital.png"
                maintext="Digital signage"
                subtext="Connecting the world  through Smart Screens"
            />

            <Navbar />

            <Overview
                title="OVERVIEW"
                sub1="DigitalSyne is SLS’s end-to-end cloud-based solution for Digital Signages. 
                The solution has revolutionized how our clients stream content on various advertisement screens and broadcast 
                emergency messages on public announcement
                 boards, etc. with remote intelligence, customizations, and grasping control."
                path="Industries / Digital Signage"
                data={digital}
                icons="icons"

            />

            <Quality
                mainheading="Our Offerings"
                imageBG="./images/media_player_top.png"
                heading="DigitalSyne Media Player"
                subtitle="We cater both Semi-Automated and Fully-Automated assembly of surface mount
                 components on bare circuit boards. To uplift customer experience, we support both framed 
                 frameless stencil options for the application of solder paste on PCB boards."
            />

            <QualityReverse
                imageBG="./images/Screenshot_2021-07-27-16-13-33-85_336c4b52c4fcdf7ef73c0cc47f672d0f.png"
                heading="DigitalSyne Android Player"
                subtitle="Ace your advertisement game by converting your Android Screens
                 into intelligent displays and stream data like never before."
            />

            <Quality
                imageBG="./images/Screenshot_2021-07-27-16-13-33-85_336c4b52c4fcdf7ef73c0cc47f672d0f.png"
                heading="DigitalSyne Media Player"
                subtitle="We cater both Semi-Automated and Fully-Automated assembly of surface mount
                 components on bare circuit boards. To uplift customer experience, we support both framed 
                 frameless stencil options for the application of solder paste on PCB boards."
            />

            <Visit 
                goto="Reinvent how your brand advertises and connects."
            />
        
            <Footer />

        </>
    )
}
