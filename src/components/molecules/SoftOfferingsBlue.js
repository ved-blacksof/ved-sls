import React from 'react'
import { makeStyles, Container, Box, Grid } from '@material-ui/core'

import { GridBlue, MainContainer, ParagraphsBlue } from '../atoms'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        position: 'relative',
        margin: '10% 0%',
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
            width: '80%',
            margin: '5% auto'
        }
    },
    lap: {
        maxWidth: '100%',
        height: '100%',
    }

}))

export function SoftOfferingsBlue({
    maintitle,title,subtitle,images,
    list,firstli ,secli, thirdli, fourthli
}) {

    const classes = useStyles()

    return (
        <Box style={{ height: 'fit-content', overflow: 'hidden' }}>
            <Box className={classes.mainBox}>
                <Box style={{ borderRadius: '0rem 5rem 0rem 5rem', overflow: 'hidden' }}>
                    <GridBlue >

                        <Box style={{ padding: '10% 0%', }}>
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
