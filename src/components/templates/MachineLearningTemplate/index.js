import React from 'react'
import { Navbar, Footer } from '..'
import { Ubanner, Overview, Quality, QualityReverse, Visit } from '../../molecules'
import { Ourexpertise } from './Ourexpertise'

export function MachineLearningTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/nasa-Q1p7bh3SHj8-unsplash-1.png"
                maintext="Machine learninf and artificial intelligence"
                subtext="leveraging Novel Tchnologies for the betterment of the Mankind"
            />
            <Navbar />

            <Overview
                path="Services / ML and AI"
                sub1="SLS has been continuously engaged in developing solutions that aid mankind. We are actively indulged in leveraging technologies like AI and ML to offer innovative solutions for the healthcare sector to ease diagnosis and help save lives with intelligence."
                sub2="Our team of Industry 4.0 experts also help transform cutting-edge product and solution ideas into reality. With experience in a vast domain of sectors and applications, this team helps lay the growth ladder for business success and scalability."
            />

            <Quality
                mainheading="Offerings"
                heading="Breast and Lung Cancer Detection Software Tools"
                subtitle="SLS has developed a lung and breast abnormality detection system that assists Radiologists across the world perform quicker and timely diagnosis of lung and breast abnormalities. The solution aims at providing intelligent real-time insights to medical professionals for crucial decision-making and treatment."
                imageBG="./images/media_player_top.png"
            />

            <QualityReverse
                heading="AI and ML based product development"
                subtitle="Our team of AI and ML experts also help businesses develop robust and scalable AI and ML based products and services and help them bring innovative products to the market. Our teams are equipped with state-of-the-art infrastructure to help develop and launch a wide array of end-to-end solutions with faster time-to-market and post deployment support."
                imageBG="./images/media_player_top.png"
            />


            <Ourexpertise />

            <Visit
                goto="Find out how we can help your business with AI and ML solutions"
                title="Click Here"
            />


            <Footer />
        </div>
    )
}
