import React from 'react'
import { makeStyles, Container, Button, Box, Grid } from '@material-ui/core'

import { GeneralHeading,MapIcon1 } from '../../atoms'
import { loc } from '../../molecules/PortfolioData'
import { Visit } from '../../molecules'

const useStyles = makeStyles((theme) => ({
    locContainer: {
        margin: '15% auto'
    },
    rightBox: {
        border: '2px solid red',
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
            <Container fixed style={{ border: '2px solid red' }} className={classes.locContainer}>
                <Grid container >
                    <Grid xs={12} sm={6} className={classes.leftBox}>
                        <GeneralHeading
                            title="LOCCARTO"
                            subtitle="Keep a close tab on what matters to you with GPS-free Geolocation Tracking"
                            subtitle1="Loccarto is an RF Independent Geolocation Tracking solution that offers GPS-free
                             tracking capabilities across IoT and a wide spectrum of applications. Reinvent asset tracking,
                            smart industry application, and much more with this business-first cloud offering."
                        />
                        <MapIcon1 data={loc}/>
                    </Grid>
                    <Grid xs={12} sm={6} className={classes.rightBox}>
                        <img src={'./images/Mask Group 2.png'} />
                    </Grid>
                </Grid>
                <Visit 
                    goto="Want to know more about Loccarto?"
                    title="Visit the Web"/>

            </Container>
        </>
    )
}
