import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Paragraphs } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        margin: "10% auto",
        display:'flex',
        height:'50vh'
    },
    leftBox:{
        width:'50%'
    },
    rightBox: {
        width:'50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // [theme.breakpoints.down('xs')]: {
        //     height: '40vh',
        // }
    },
    mobileBox: {
        width: '18rem',
        height: '18rem',
        borderRadius: '4rem 0rem 4rem 4rem',
        position: 'relative',
        background: '#354B9C',
        [theme.breakpoints.down('sm')]: {
            width: '15rem',
            height: '15rem',
        }
    },
    mobileImages: {
        width: '100%',
        padding: '0rem 15%',
        position: 'absolute',
        bottom: '10%',
        margin: '0 auto',

    }

}))

export function MobileApplication() {
    const classes = useStyles()
    return (
        <Container className={classes.mainContainer}>
                <Box className={classes.leftBox}>
                    <Paragraphs
                        title="MOBILE APPLICATION"
                        subtitle="We offer a white-label end-user mobile application that lets your customer 
                                    utilize your EV Charging services worldwide."
                        list="list"
                        firstli="Android and iOS Support"
                        secli="Shows Real-time Charge seats"
                        thirdli="UPI, Credit, and Online Payment Options"
                        fourthli="Slot Reservation"
                        redline="redline"

                    />
                </Box>
                <Box className={classes.rightBox}>
                    <Box className={classes.mobileBox}>
                        <img className={classes.mobileImages} src={'./images/Group 82858.png'} />
                    </Box>
                </Box>
        </Container>
    )
}
