import React from 'react'
import { makeStyles, Container, Box, Grid } from '@material-ui/core'
import { PositionImage, Paragraphs, MainContainer, MapIcon1 } from "../atoms"
import Bounce from 'react-reveal/Bounce';
import { yalgar } from '.';


const useStyles = makeStyles((theme) => ({
    mainHeads: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            lineHeight: '1.2',
        },
    },
    qualityContainer: {
        height: 'fit-content',
        margin: '10% auto',
        width: '100%'
    },
    BoxLeft: {
        width: '50%',
        alignSelf: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    BoxRight: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    bigHead: {
        color: 'black',
        textAlign: 'center',
        marginBottom: '10%',
        [theme.breakpoints.down('sm')]: {

        }
    },
    bigSubHead: {
        width: '60%',
        color: 'black',
        textAlign: 'center',
        margin: '0% auto',
        [theme.breakpoints.down('sm')]: {
            width: '90%',

        }
    },
    gridContainer: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: '10% 0%'
        }
    },
    gridLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        color: 'black',
    }
}))

export function Quality({
    data1,
    mainheading,
    mainsubheading,
    imageBG,
    e,
    heading,
    subhead,
    subtitle,
    subhead1,
    subtitle1,
    redline,
    download,
    download1,
    href,
    list,
    uli,
    firstli,
    secli,
    thirdli,
    fourthli,
    tab_title,
    style,
    style1,
}) {
    const classes = useStyles()
    return (
        <>
            <MainContainer>
                <Container fixed className={classes.qualityContainer}>
                    {
                        mainheading ?
                            <Box className={classes.mainHeads}>
                                <Bounce bottom>
                                    <h2 className={classes.bigHead}>{mainheading}
                                        <h6 className={classes.bigSubHead}> {mainsubheading}</h6>
                                    </h2>
                                </Bounce>
                            </Box> : ''
                    }

                    <Box className={classes.gridContainer}
                        style={style}
                    >

                        <Box className={classes.BoxLeft}>
                            <Bounce left> <PositionImage imageBG={imageBG} /></Bounce>
                        </Box>

                        <Box className={classes.BoxRight} style1={style1}>
                            <Bounce right>
                                <Paragraphs
                                    e={e}
                                    title={heading}
                                    subhead={subhead}
                                    subhead1={subhead1}
                                    subtitle={subtitle}
                                    subtitle1={subtitle1}
                                    redline={redline}
                                    list={list}
                                    uli={uli}
                                    firstli={firstli}
                                    secli={secli}
                                    thirdli={thirdli}
                                    fourthli={fourthli}
                                    download={download}
                                    download1={download1}
                                    tab_title={tab_title}
                                    href={href}

                                />

                                {
                                    data1 ?
                                        <MapIcon1
                                            data={data1}
                                        />
                                        : ''
                                }

                            </Bounce>
                        </Box>



                    </Box>
                </Container>
            </MainContainer>
        </>
    )
}
