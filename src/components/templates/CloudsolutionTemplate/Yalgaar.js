import React from 'react'
import { makeStyles, Container, Box } from '@material-ui/core'

import { GeneralHeading, MainContainer, MapIcon, MapIcon1 } from '../../atoms'
import { Visit, Visit1 } from '../../molecules'
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100%',
        margin: '10% auto',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: '20% auto',
        },
        "& h6": {
            color: 'black',
            width: '95%',
            [theme.breakpoints.down('sm')]: {
                width: '90%',
            },
        }
    },
    leftBox: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    rightBox: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '10% 0%',
            display: 'none'
        },
    },
    yImage: {
        width: '100%',
        maxHeight: '100%',
        "& img": {
            width: '100%',
            maxHeight: '100%'
        }
    },
    btmText: {
        color: '#182AC3',
        textAlign: 'center',
        marginTop: '5%',
        fontWeight: 'bold',
    },
    btns: {
        width: '30%',
        marginTop: '3%',
        [theme.breakpoints.down('md')]: {
            width: '40%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    }

}))


export function Yalgaar({
    data
}) {
    const classes = useStyles()
    return (
        <MainContainer>
            <Container fixed className={classes.mainContainer}>

                <Box className={classes.leftBox}>
                    <GeneralHeading
                        icons="./images/Layer_x0020_1_yalgaar.svg"
                        redline="redline"
                        subtitle="Ace your products with real-time pub-sub messaging infrastructure"
                        // subtitle_1=""
                        subtitle1="Yalgaar is a real-time pub/sub messaging framework that allows businesses to create a 
                                    range of scalable applications on the cloud. With ready-to-use SDKs and end-to-end
                                    support infrastructure, you can now expedite the time-to-market of your products exponentially."
                    // br1="br1"
                    />

                    <MapIcon1 data={data} />
                </Box>



                <Box className={classes.rightBox}>
                    <Box className={classes.yImage}>
                        <Fade bottom>  <img src={'./images/Group 49262.png'} /></Fade >
                    </Box>
                </Box>


                {/* <Box style={{ display:'flex', justifyContent:'center',flexDirection:'column', alignItems:'center',marginTop:"5%" }}>
                    <h4 className={classes.btmText}> Start your journey with Yalgaar now!</h4>

                    <Buttons
                        className={classes.btns}
                        title="Visit the website"
                        arrowIcon="./images/Icon feather-arrow-right.svg"
                    />
                </Box> */}

            </Container>
                <Visit1
                    href="https://www.yalgaar.io/"
                    goto="A DIVISION OF SYSTEM LEVEL SOLUTIONS; "
                    rightlogo="./images/Layer_x0020_1_yalgaar.svg"
                    title="Visit the website" />

        </MainContainer>
    )
}
