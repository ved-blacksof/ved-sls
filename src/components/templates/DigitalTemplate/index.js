import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Overview, Ubanner, Quality, QualityReverse, Visit, SoftOfferingsBlue, Visit1 } from '../../molecules'
import { digital } from '../../molecules/PortfolioData'

export function DigitalTemplate() {
    return (
        <>
            <Ubanner
                Background="/images/digital-signage/Digital-signage.png"
                maintext="Digital signage"
                subtext="Connecting the world through smart screens"
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

                    mapIconPosition="mapIconPosition"
                    data={digital}
                    style={{ height: 'fit-content', marginBottom: '20%' }}

                />
            </GridBlue>

            <Quality
                mainheading="Our Offerings"
                imageBG="./images/media_player_top.png"
                heading="DigitalSyne Media Player"
                subtitle="Smartify your non-androids screens and convert them into full-featured and interactive smart advertisement displays."
                redline="redline"
            />

            <QualityReverse
                imageBG="./images/Group 82859.jpg"
                heading="DigitalSyne Android Player"
                subtitle="Ace your advertisement game by converting your Android Screens into intelligent displays and stream data like never before."
                redline="redline"

            />

            <SoftOfferingsBlue
                maintitle="Software Offering"
                title="Content Management Director (CMD)"
                subtitle="Manage all your digital ads display through this multi-featured and easy-to-use CMD. The CMD helps you script, monitor, diagnose, and control each and every intricacy of all your displays."
                images='./images/dashboards/Dynamic-Signage.png'
            />

            <Visit1
                goto="A DIVISION OF SYSTEM LEVEL SOLUTIONS"
                title="Visit Website"
                rightlogo="./images/digital-signage/digital_signage_logo.png"
                href={"http://www.digitalsyne.com/"}
            />

            <Footer />

        </>
    )
}
