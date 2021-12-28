import React from 'react'
import { makeStyles, Container, Box, Grid } from '@material-ui/core'

import { GridBlue, MainContainer, ParagraphsBlue } from '../atoms'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        position: 'relative',
        margin: '10% 0%',
        [theme.breakpoints.down('sm')]: {
            margin: '15% 0%',
        }
    },
    container: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    pad:{
        padding: '10% 0%',
        [theme.breakpoints.down('sm')]: {
            padding: '8% 0%',

        }
    },
    leftBox: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    rightBox: {
        position: 'absolute',
        width: '50%',
        maxHeight: '100%',
        right: '-5%',
        bottom: '-10%',
        [theme.breakpoints.down('sm')]: {
            position: 'static',
            width: '60%',
            margin: '0% auto',
            paddingBottom:'5%'
        }
    },
    lap: {
        maxWidth: '100%',
        height: '100%',
    }

}))

export function SoftOfferingsBlue({
    maintitle,title,subtitle,images,
    list,firstli ,secli, thirdli, fourthli, fifthli, sixthli
}) {

    const classes = useStyles()

    return (
        <Box style={{ height: 'fit-content' }}>
            <Box className={classes.mainBox}>
                <Box style={{ borderRadius: '0rem 5rem 0rem 5rem', overflow: 'hidden' }}>
                    <GridBlue >

                        <Box  className={classes.pad}>    
                            <MainContainer>
                                <Container fixed className={classes.container}>

                                    <Box className={classes.leftBox} >
                                        <Fade bottom>
                                            <ParagraphsBlue
                                                maintitle={maintitle}
                                                title={title}
                                                subtitle={subtitle}
                                                list={list}
                                                firstli={firstli}
                                                secli={secli}
                                                thirdli={thirdli}
                                                fourthli={fourthli}
                                                fifthli={fifthli}
                                                sixthli={sixthli}
                                            />
                                        </Fade>
                                    </Box>


                                </Container>
                            </MainContainer>
                        </Box>

                        <Box className={classes.rightBox}>
                            <Fade bottom><img className={classes.lap} src={images} /></Fade>
                        </Box>
                    </GridBlue>
                </Box>
            </Box>
        </Box>
    )
}
