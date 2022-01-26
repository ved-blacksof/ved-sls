import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { MainContainer, Paragraphs } from '../../atoms'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: "10% auto",
        marginTop: "25%",

        display: 'flex',
        background: '#F3F3F3',
        borderRadius: '1rem',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            height: 'fit-content',
            marginTop: "25%",
            marginBottom:'5%',
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            height: 'fit-content',
            marginTop: "35%",
            width: '100%',
        },
    },
    leftBox: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding:'30% 0%',
        }
    },
    mobileBox: {
        width: '65%',
        maxHeight: '100%',
        position: 'absolute',
        top: '-10%',
        [theme.breakpoints.down('sm')]: {
            top: '-30%',
            width: '50%',
        }
    },
    mobileImages: {
        width: '100%',
        maxHeight: '100%',
    },
    rgtBox: {
        padding: '8% 0%',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '0% 0%',
        }
    },

}))

export function MobileApplication() {
    const classes = useStyles()
    return (
        <MainContainer>
            <Container fixed className={classes.mainContainer}>
                <Box className={classes.leftBox}>
                    <Box className={classes.mobileBox}>
                        <Fade bottom><img className={classes.mobileImages} src={'./images/Group 82858.png'} /></Fade>
                    </Box>
                </Box>
                <Box className={classes.rgtBox}>
                    <Fade bottom>
                        <Paragraphs
                            title="MOBILE APPLICATION"
                            subtitle="We offer a white-label end-user mobile application that lets your customer 
                                    utilize your EV Charging services worldwide."
                            list="list"
                            firstli="Android and iOS Support"
                            secli="Shows Real-time Charge Status"
                            thirdli="UPI, Credit, and Online Payment Options"
                            fourthli="Slot Reservation"
                            fifthli="Option for an Offline Wallet"
                            redline="redline"
                        />
                    </Fade>
                </Box>
            </Container>
        </MainContainer>
    )
}
