import React from 'react'
import { makeStyles, Container, Box, Grid } from '@material-ui/core'
import { PositionImageReverse, Paragraphs, MainContainer } from "../atoms"
import Bounce from 'react-reveal/Bounce';


const useStyles = makeStyles((theme) => ({
    qualityContainer: {
        height: 'fit-content',
        margin: '15% auto',
        width: '100%'
    },
    bigHead: {
        color: 'black',
        textAlign: 'center',
        fontSize: '3rem',
        marginTop: '2%'
    },
    BoxLeft: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    BoxRight: {
        alignSelf: 'center',
        width: '50%',
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

export function QualityReverse({
    mainheading,
    imageBG,
    heading,
    subtitle,
    redline,
    uli,
    firstli,
    secli,
    thirdli,
    fourthli,
    style,
    list,
}) {
    const classes = useStyles()
    return (
        <>
            <MainContainer>
                <Container fixed className={classes.qualityContainer}>
                    <h2 className={classes.bigHead}>{mainheading}</h2>

                    <Box container className={classes.gridContainer}
                        style={style} >

                        <Box className={classes.BoxLeft}>
                            <Bounce left> <Paragraphs
                                title={heading}
                                subtitle={subtitle}
                                list={list}
                                redline={redline}
                                firstli={firstli}
                                secli={secli}
                                thirdli={thirdli}
                                fourthli={fourthli}
                            /></Bounce>
                        </Box>

                        <Box className={classes.BoxRight}>
                            <Bounce right> <PositionImageReverse imageBG={imageBG} /></Bounce>
                        </Box>
                    </Box>
                </Container>
            </MainContainer>
        </>
    )
}
