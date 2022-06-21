import React from 'react'
import { Navbar, Footer } from '..'
import { GridBlue } from '../../atoms'
import { Ubanner, Overview, Quality, QualityReverse, Visit, Visit1 } from '../../molecules'
import { Ourexpertise } from './Ourexpertise'

export function MachineLearningTemplate() {
    return (
        <div>
            <Ubanner
                Background="./images/ml/ML-and-AI.png"
                maintext="Machine learning and artificial intelligence"
                subtext="Leveraging novel technologies for the betterment of the mankind"
            />
            <GridBlue>
                <Navbar />

                <Overview
                    path="Services / Machine Learning and Artificial Intelligence"
                    sub1="SLS has always been indulged in leveraging new technologies to develop innovative products and services for its global clientele. Our team of experts understand business objectives and product needs to deliver custom solutions built-up using AI and ML."
                    sub2="We are also actively indulged in leveraging these technologies to offer innovative solutions for the healthcare sector to ease diagnosis and help save lives with intelligence."
                />
            </GridBlue>

            <Quality
                mainheading="Offerings"
                heading="Breast and Lung Cancer Detection Software Tools"
                subtitle="SLS has developed a lung and breast abnormality detection system that assists Radiologists across the world perform quicker and 
                timely diagnosis of lung and breast abnormalities. The solution aims at providing intelligent real-time insights to medical professionals 
                for crucial decision-making and treatment."
                imageBG="./images/AI_ML_Deck-26.png"
                redline
            />

            <QualityReverse
                heading="AI and ML based product development"
                subtitle="Our team of AI and ML experts also help businesses develop robust and scalable AI and ML based products and services and help them bring innovative products to the market. Our teams are equipped with state-of-the-art infrastructure to help develop and launch a wide array of end-to-end solutions with faster time-to-market and post deployment support."
                imageBG="./images/ml/products/AI-and-ML-based-product.png"
                redline
            />


            <Ourexpertise />

            <Visit1
                goto="Find out how we can help your business with AI and ML solutions!"
                title="Contact Us"
                href={"/contact"}

            />


            <Footer />
        </div>
    )
}
