import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { MainContainer, Paragraphs } from '../../atoms'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: "10% auto" ,
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    leftBox: {
        width: '45%',
        paddingBottom: '10%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    rightBox: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    mobileBox: {
        width: '20vw',
        height: '20vw',
        borderRadius: '4rem 0rem 4rem 4rem',
        position: 'relative',
        background: '#182AC3',
        [theme.breakpoints.down('sm')]: {
            width: '60vw',
            height: '60vw',
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
        <MainContainer>
            <Container className={classes.mainContainer}>
                <Box className={classes.leftBox}>
                    <Fade bottom>
                        <Paragraphs
                            title="MOBILE APPLICATION"
                            subtitle="We offer a white-label end-user mobile application that lets your customer 
                                    utilize your EV Charging services worldwide."
                            list="list"
                            firstli="Android and iOS Support"
                            secli="Shows Real-time Charge seats"
                            thirdli="UPI, Credit, and Online Payment Options"
                            fourthli="Slot Reservation"
                            fifthli="Option for an Offline Wallet"
                            redline="redline"
                        />
                    </Fade>
                </Box>
                <Box className={classes.rightBox}>
                    <Fade left>
                        <Box className={classes.mobileBox}>
                            <Fade right><img className={classes.mobileImages} src={'./images/Group 82858.png'} /></Fade>
                        </Box>
                    </Fade>
                </Box>
            </Container>
        </MainContainer>
    )
}
