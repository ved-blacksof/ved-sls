import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Overview, Ubanner, Quality, QualityReverse, Visit } from '../../molecules'
import { digital } from '../../molecules/PortfolioData'

export function DigitalTemplate() {
    return (
        <>
            <Ubanner
                Background="/images/digital-signage/Digital-signage.png"
                maintext="Digital signage"
                subtext="Connecting the world  through Smart Screens"
            />

            <GridBlue>
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
            </GridBlue>

            <Quality
                mainheading="Our Offerings"
                imageBG="./images/media_player_top.png"
                heading="DigitalSyne Media Player"
                subtitle="We cater both Semi-Automated and Fully-Automated assembly of surface mount
                 components on bare circuit boards. To uplift customer experience, we support both framed 
                 frameless stencil options for the application of solder paste on PCB boards."
                redline="redline"
            />

            <QualityReverse
                imageBG="./images/denny-muller-HfWA-Axq6Ek-unsplash.png"
                heading="DigitalSyne Android Player"
                subtitle="Ace your advertisement game by converting your Android Screens
                 into intelligent displays and stream data like never before."
                redline="redline"

            />

            <Quality
                // imageBG="./images/Group 82859.jpg"
                imageBG="./images/CMD.png"
                heading="Content Management Director (CMD)"
                subtitle="Manage all your digital ad displays through this multi-featured and easy-to-use CMD. 
                The CMD helps you script, monitor, diagnose, and control each andevery intricacy of all your displays."
                redline="redline"

            />

            <Visit
                goto="Reinvent how your brand advertises and connects."
                title="Visit the website"
                href={"/contact"}
            />

            <Footer />

        </>
    )
}
