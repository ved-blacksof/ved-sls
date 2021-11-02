import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { highspeed } from '../../molecules/PortfolioData'
import { Paragraphs } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    mainContain: {
        margin: '5% auto',
        "& .vertical-timeline::before":{
            background: '#354B9C'
        },
        "& .vertical-timeline--two-columns .vertical-timeline-element-content":{
            // marginLeft:'0'
        },
        "& .vertical-timeline-element-content":{
            
        },
        
    },
    contentStyles: {

    },
    contentArrowStyles: {

    },
    iconStyles: {

    },
    icon: {
        font: 'normal normal normal 2rem Access',
        lineHeight: "1.8",
        
    },

}))

export function Ourdesignprocess({
    uli,
    firstli,

}) {
    const classes = useStyles()
    return (
        <Container className={classes.mainContain}>
            <h2 style={{ color: 'black', textAlign: 'center', margin: '5% 0%' }}>Our Design Process</h2>

            <VerticalTimeline >
                {
                    highspeed.map((item, index) => {
                        return (
                            <VerticalTimelineElement
                                key={index}
                                contentStyle={{
                                    background: 'white', color: 'black', boxShadow: '0px 0px 5px grey',
                                }}
                                iconStyle={{
                                    background: '#354B9C', border: 'none', color: 'white', textAlign: 'center',cursor:'pointer'
                                }}
                                icon={<span className={classes.icon}>{item.count}</span>}
                            // date="2011 - present"
                            // contentArrowStyle={false}
                            // style={{boxShadow:'2px 2px black'}}
                            >
                                <Paragraphs
                                    list="list"
                                    uli={item.uli}
                                    firstli={item.firstli}
                                    secli={item.secli}
                                    thirdli={item.thirdli}
                                    fourthli={item.fourthli}

                                />
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </Container>
    )
}
