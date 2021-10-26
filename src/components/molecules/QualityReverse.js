import React from 'react'
import { makeStyles, Container, Box, Grid } from '@material-ui/core'
import { PositionImageReverse , Paragraphs } from "../atoms"


const useStyles = makeStyles((theme) => ({
    qualityContainer: {
        height: 'fit-content',
        margin:'10% auto' ,
    },
    bigHead: {
        color: 'black',
        textAlign: 'center',
        fontSize: '3rem',
        marginTop: '2%'
    },
    gridContainer: {
        display:'flex',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column-reverse',
            marginTop:'20%',
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

export function QualityReverse({
    mainheading,
    imageBG,
    heading,
    subtitle,
    redline,
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
            <Container fixed className={classes.qualityContainer}>
                <h2 className={classes.bigHead}>{mainheading}</h2>

                <Box container spacing={4} className={classes.gridContainer}
                    style={style} >

                    <Grid item xs={12} md={6}>
                        <Paragraphs
                            title={heading}
                            subtitle={subtitle}
                            list={list}
                            redline={redline}
                            firstli={firstli}
                            secli={secli}
                            thirdli={thirdli}
                            fourthli={fourthli}

                        />
                    </Grid>

                    <Grid item xs={12} md={6} className={classes.gridLeft}>
                        <PositionImageReverse imageBG={imageBG} />
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
