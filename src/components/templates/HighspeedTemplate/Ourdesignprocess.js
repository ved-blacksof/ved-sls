import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { highspeed } from '../../molecules/PortfolioData'
import { Paragraphs } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    mainContain: {
        margin: '15% auto',
        padding: '0px',
        width: '65%',
        [theme.breakpoints.down('sm')]: {
            width: '85%',
        },
        "& .vertical-timeline::before": {
            background: '#182AC3',
        },
        "& .vertical-timeline--two-columns": {

        },
        "& .vertical-timeline-element-content": {

        },
        "& .vertical-timeline": {
            padding: '0px',
        },
        // [theme.breakpoints.down('sm')]: {
        //     margin: '10% auto',
        // },

    },
    icon: {
        font: 'normal normal normal 2rem Access',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        },
    },
    verticalTimeline: {

        [theme.breakpoints.down('sm')]: {
            marginTop: '15%'
        },
        "& .vertical-timeline-element-icon": {
            webkitBoxShadow: ' none !important'
        },
        "& .vertical-timeline-element-content": {

        },
    }
}))

export function Ourdesignprocess({
    uli,
    firstli,

}) {
    const classes = useStyles()
    return (
        <Container className={classes.mainContain}>
            <h2 style={{ color: 'black', textAlign: 'center', margin: '5% 0%' }}>Our Design Process</h2>


            <VerticalTimeline
                className={classes.verticalTimeline}
            >
                {
                    highspeed.map((item, index) => {
                        return (
                            <VerticalTimelineElement
                                key={index}

                                contentStyle={{
                                    background: 'white',
                                    color: 'black',                                                                             
                                    boxShadow: '0px 5px 25px #00000012',
                                    border:'2px solid #0000ff82',
                                    position: 'inherit',
                                    zIndex: '-1',
                                    minWidth: '50%',
                                    paddingLeft: '7%',
                                    // top: '-20px',


                                }}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={{
                                    background: '#182AC3',
                                    border: '2px solid #182AC3',
                                    color: 'white',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    boxShadow: 'none',
                                    webkitBoxShadow: 'none !important',
                                    // top: '1.2rem'
                                    // webkit-box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%);
                                }}
                                icon={<span className={classes.icon}>{item.count}</span>}
                            // className={classes.verticalTimeline}
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
