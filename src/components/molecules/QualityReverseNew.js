import React from 'react'
import { makeStyles, Container, Box, Grid } from '@material-ui/core'
import { PositionImage, PositionImageReverse, Paragraphs, MainContainer, AnalyserCarousel } from "../atoms"
import Bounce from 'react-reveal/Bounce';
import { data } from 'jquery';


const useStyles = makeStyles((theme) => ({
    qualityContainer: {
        height: 'fit-content',
        margin: '5% auto',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '15%',
        },
    },
    bigHead: {
        color: 'black',
        textAlign: 'center',
        fontSize: '3rem',
        marginTop: '2%'
    },
    bigHead1: {
        color: 'black',
        marginTop: '2%'
    },
    BoxLeft: {
        width: '50%',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    BoxRight: {
        width: '50%',
        alignSelf: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    gridContainer: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            marginTop: '20%',
        }
    },
    text: {
        color: 'black',
    }
}))

export function QualityReverseNew({
    mainheading,
    mainheading1,
    imageBG,
    removeBGicons,
    heading,
    subhead, subhead1, subhead2, subhead3, subhead4,
    subtitle, subtitle1, subtitle2, subtitle3, subtitle4,
    redline,
    uli,
    download,
    download1,
    href,
    firstli,
    secli,
    thirdli,
    fourthli,
    style,
    carousel,
    carouselfor2,
    images1,
    images2,
    images3,
    images4,
    list,
}) {
    const classes = useStyles()
    return (
        <>
            <MainContainer>
                <Container fixed className={classes.qualityContainer}>
                    <h2 className={classes.bigHead}>{mainheading}</h2>
                    {
                        mainheading1 ?
                            <>
                                <h3 className={classes.bigHead1}>{mainheading1}</h3>
                                <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                            </> : ''

                    }

                    <Box container className={classes.gridContainer}
                        style={style} >

                        <Box className={classes.BoxLeft}>
                            <Bounce left>
                                <Paragraphs
                                    title={heading}
                                    subhead={subhead}
                                    subhead1={subhead1}
                                    subhead2={subhead2}
                                    subhead3={subhead3}
                                    subhead4={subhead4}
                                    subtitle={subtitle}
                                    subtitle1={subtitle1}
                                    subtitle2={subtitle2}
                                    subtitle3={subtitle3}
                                    subtitle4={subtitle4}
                                    uli={uli}
                                    list={list}
                                    firstli={firstli}
                                    secli={secli}
                                    thirdli={thirdli}
                                    fourthli={fourthli}
                                    download={download}
                                    download1={download1}
                                    href={href}
                                />

                            </Bounce>
                        </Box>
                        {
                            imageBG ?
                                <Box className={classes.BoxRight}>
                                    <Bounce right>
                                        <PositionImage imageBG={imageBG}
                                            removeBGicons={removeBGicons}

                                        /></Bounce>
                                </Box>
                                :
                                ''

                        }

                        {/* {
                            data ?
                                <Box className={classes.BoxRight}>
                                    <Bounce right>
                                        <AnalyserCarousel data={data} />
                                    </Bounce>
                                </Box> : ''
                        } */}
                    </Box>
                </Container>
            </MainContainer>
        </>
    )
}
