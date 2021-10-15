import React from 'react'
import { makeStyles, Container, Box, Grid } from '@material-ui/core'
import { PositionImage, Paragraphs } from "../atoms"


const useStyles = makeStyles((theme) => ({
    qualityContainer: {
        height: 'fit-content',
        marginTop:'10%',
        
    },
    bigHead: {
        color: 'black',
        textAlign: 'center',
        fontSize: '3rem',
    },
    gridContainer: {
        marginTop: '10%',
        display:'flex',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column'
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
    imageBG,
    heading,
    subtitle,
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
                <h2 className={classes.bigHead}>{mainheading}</h2>

                <Box className={classes.gridContainer}
                    style={style}
                    order={{ xs: 3, sm: 1 }}>
                    <Grid item xs={12} md={6}
                        className={classes.gridLeft}
                    >
                        <PositionImage imageBG={imageBG} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paragraphs
                            title={heading}
                            subtitle={subtitle}
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
