import React from 'react'
import { makeStyles, Container, Box, Grid } from '@material-ui/core'

import { MainContainer, ParagraphsBlue } from '../../atoms'


const useStyles = makeStyles((theme) => ({
    mainBox: {
        position: 'relative',
        padding: '10% 0%',
        background: '#354B9C',
        margin: '10% 0%',
        borderRadius: '0rem 5rem 0rem 5rem',
        [theme.breakpoints.down('sm')]: {
            paddingBottom:'60%',
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
            // position: 'static',
            width: '80%',
            margin: '5% auto'
        }
    },
    lap: {
        maxWidth: '100%',
        height: '100%',
    }

}))

export function ChargingMangement() {
    const classes = useStyles()
    return (
        <Box style={{ height: 'fit-content', paddingBottom: '1%', overflow: 'hidden' }}>
            <Box className={classes.mainBox}>
                <MainContainer>
                    <Container fixed className={classes.container}>

                        <Box className={classes.leftBox} >
                            <ParagraphsBlue
                                maintitle="Software OFFERING"
                                title="Charging Management Software"
                                subtitle="We offer OCPP Compliant Charging Management Software which is built using new-edge technology for easy management of your EV Charging Infra. The CMS is built to support all major brands of chargers available globally."
                                list="list"
                                firstli="Real-time monitoring, maintenance, and troubleshooting of chargers"
                                secli="Dynamic load management capabilities"
                                thirdli="ROI Analytics"
                                fourthli="Partner/Fleet management"
                            />
                        </Box>


                    </Container>
                </MainContainer>
                <Box className={classes.rightBox}>
                    <img className={classes.lap} src={'./images/Image 2.png'} />
                </Box>
            </Box>
        </Box>
    )
}
