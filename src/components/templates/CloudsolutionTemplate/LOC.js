import React from 'react'
import { makeStyles, Container, Button, Box, Grid } from '@material-ui/core'

import { GeneralHeading, MainContainer, MapIcon1 } from '../../atoms'
import { loc } from '../../molecules/PortfolioData'
import { Visit } from '../../molecules'
import LightSpeed from 'react-reveal/LightSpeed';



const useStyles = makeStyles((theme) => ({
    locContainer: {
        margin: '15% auto',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
    },
    leftBox: {
        width: '50%',
        paddingRight: '5%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '5%',
            width: '100%',

        },
    },
    rightBox: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '5%',
            width: '100%',
            display: 'none'

        },
        "& img": {
            width: '100%'
        }
    },


}))

export function LOC({
    data,
}) {
    const classes = useStyles()
    return (
        <>
            <MainContainer>
                <Container fixed className={classes.locContainer}>
                    <Box className={classes.leftBox}>

                        <GeneralHeading
                            icons={"./images/Layer_x0020_1 (1).svg"}
                            subtitle="Keep a close tab on what matters to you with GPS-free Geolocation Tracking"
                            subtitle1="Loccarto is an RF Independent Geolocation Tracking solution that offers GPS-free
                                tracking capabilities across IoT and a wide spectrum of applications. Reinvent asset tracking,
                                smart industry application, and much more with this business-first cloud offering."
                            redline='redline'
                        />

                        <MapIcon1 data={loc} />

                    </Box>

                    <Box className={classes.rightBox}>

                        <LightSpeed right> <img src={'./images/Mask Group 2.png'} /></LightSpeed>

                    </Box>
                </Container>
                <Visit
                    goto="Want to know more about Loccarto?"
                    title="Visit the Website" />
            </MainContainer>
        </>
    )
}
