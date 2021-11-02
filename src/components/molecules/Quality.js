import React from 'react'
import { makeStyles, Container, Box, Grid } from '@material-ui/core'
import { PositionImage, Paragraphs } from "../atoms"


const useStyles = makeStyles((theme) => ({
    qualityContainer: {
        height: 'fit-content',
        margin: '15% auto',
        // display: 'flex',
        // alignItems: 'center',
        // flexDirection: 'column'
    },
    bigHead: {
        width: '50%',
        color: 'black',
        textAlign: 'center',
        fontSize: '3rem',
        marginBottom: '10%',
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        }
    },
    bigSubHead: {
        color: 'black',
        textAlign: 'center',
    },
    gridContainer: {
        display: 'flex',
        justifyContent: 'center',
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
    mainheading,
    mainsubheading,
    imageBG,
    heading,
    subtitle,
    redline,
    list,
    uli,
    firstli,
    secli,
    thirdli,
    fourthli,
    style,
}) {
    const classes = useStyles()
    return (
        <>
            <Container fixed className={classes.qualityContainer}>
                {
                    mainheading ?
                        <Box style={{ display: 'flex', justifyContent: 'center', }}>
                            <h2 className={classes.bigHead}>{mainheading}
                            <h6 className={classes.bigSubHead}> {mainsubheading}</h6>
                            </h2>
                        </Box> : ''
                }

                <Box className={classes.gridContainer}
                    style={style}>
                    <Grid item xs={12} md={6} className={classes.gridLeft}>
                        <PositionImage imageBG={imageBG} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paragraphs
                            title={heading}
                            subtitle={subtitle}
                            redline={redline}
                            list={list}
                            uli={uli}
                            firstli={firstli}
                            secli={secli}
                            thirdli={thirdli}
                            fourthli={fourthli}
                        />
                    </Grid>

                </Box>
            </Container>
        </>
    )
}
