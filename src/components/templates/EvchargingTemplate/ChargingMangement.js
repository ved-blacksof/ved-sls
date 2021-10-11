import React from 'react'
import { makeStyles, Container, Box, Grid } from '@material-ui/core'

import { ParagraphsBlue } from '../../atoms'


const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: '100vh',
        background: '#003189',
        margin:'20% 0%',
        borderRadius: '0rem 5rem 0rem 5rem',
        display: 'flex',
        [theme.breakpoints.down('sm')]:{
            height:'fit-content'
        }

    },
    mainContainer: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
    },
    gridContainer:{
        position:'relative',
    },
    lapBox:{
        position:'absolute',
        width:'70%',
        right:'-20%',
        top:'20%',
        overflow:'hidden',
        [theme.breakpoints.down('sm')]:{
            position:'static',
            width:'80%',
            margin:'5% auto'
        }
    },
    lap: {
        width: '100%',
        height: '100%'
    }

}))

export function ChargingMangement() {
    const classes = useStyles()
    return (
        <Box className={classes.mainBox}>
            <Container fixed className={classes.mainContainer}>

                <Grid container spacing={2} className={classes.gridContainer}>

                    <Grid item xs={12} md={6} >
                        <ParagraphsBlue
                            maintitle="Software OFFERING"
                            title="Charging Management Software"
                            subtitle="We offer OCPP Compliant Charging Management Software which is built using new-edge 
                                technology for easy management of your EV Charging Infra.
                                The CMS is built to support all major brands of chargers available globally."
                            firstli="Real-time monitoring, maintenance, and troubleshooting of chargers"
                            secli="Dynamic load management capabilities"
                            thirdli="ROI Analytics"
                            fourthli="Partner/Fleet management"
                        />
                    </Grid>

                    <Box item xs={12} md={6} className={classes.lapBox}>
                        <img className={classes.lap} src={'./images/Image 2.png'} />
                    </Box>

                </Grid>
            </Container>
        </Box>
    )
}
