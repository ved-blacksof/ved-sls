import React from 'react'
import { makeStyles, Container, Box, Grid } from '@material-ui/core'

import { ParagraphsBlue } from '../../atoms'


const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: '100vh',
        background: '#003189',
        margin: '20% 0%',
        borderRadius: '0rem 5rem 0rem 5rem',
        display: 'flex',
        border: '2px solid red',

        [theme.breakpoints.down('sm')]: {
            height: 'fit-content'
        }
    },
    container: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        border: '2px solid white',
        position: 'relative',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column'
        }
    },
    leftBox: {
        width: '50%',
        [theme.breakpoints.down('sm')]:{
            width: '100%',
        }
    },
    rightBox: {
        position: 'absolute',
        border: '2px solid green',
        width: '70%',
        right:'-20%',
        top:'20%',
        overflowY:'visible',
        [theme.breakpoints.down('sm')]: {
            position: 'static',
            width: '80%',
            margin: '5% auto'
        }
    },
    lap: {
        width: '100%',
        maxHeight: '100%',
        // position:'absolute',
        // right: '-40%',
        // top: '20%',
    }

}))

export function ChargingMangement() {
    const classes = useStyles()
    return (
        <Box className={classes.mainBox}>
            <Container fixed className={classes.container}>

                    <Box className={classes.leftBox} >
                        <ParagraphsBlue
                            maintitle="Software OFFERING"
                            title="Charging Management Software"
                            subtitle="We offer OCPP Compliant Charging Management Software which is built using new-edge technology for easy management of your EV Charging Infra. The CMS is built to support all major brands of chargers available globally."
                            firstli="Real-time monitoring, maintenance, and troubleshooting of chargers"
                            secli="Dynamic load management capabilities"
                            thirdli="ROI Analytics"
                            fourthli="Partner/Fleet management"
                        />
                    </Box>

                    <Box className={classes.rightBox}>
                        <img className={classes.lap} src={'./images/Image 2.png'} />
                    </Box>

            </Container>
        </Box>
    )
}
