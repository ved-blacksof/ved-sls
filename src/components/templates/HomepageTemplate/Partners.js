import React from 'react'
// import "./molecule.css";
import {
    Box,
    Container,
    Tabs,
    Tab,
    Typography,
    makeStyles,
} from '@material-ui/core';
import Fade from 'react-reveal/Fade';


import { GeneralHeading, MainContainer } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    partner: {
        margin: '12% auto'
    },
    head: {
        color: 'black'
    },
    portSubHead: {
        color: 'black',
        width: '40%',
        [theme.breakpoints.down('xs')]: {
            width: '70%',
        },
    },
    redLine: {
        margin: '1% 0%'
    },
    iconsBox: {
        width: '20%'
    },
    partnersIcons: {
        width: '70%',
        display: 'flex',
        justifyContent: 'space-around',
        margin: '5% 5%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        '& img': {
            width: '100%',
            maxHeight: '100%',
        }
    },

}))

export function Partners() {
    const classes = useStyles()
    return (
        <>
            <MainContainer>
                <Container fixed className={classes.partner}>
                    <GeneralHeading
                        title="PARTNERSHIP & ASSOCIATIONS COVERS MULTIPLE SEGMENTS"
                        subtitle="Serving over 20+ years in the technology industry, we have forged numerous partnerships and associated ourselves with a number of disparate Indian and global entities."
                        redline="redline"
                    />
                    <Box className={classes.partnersIcons}>
                        <Fade bottom>
                            <div className={classes.iconsBox}>
                                <img src={'./images/homepage-icons/partners/Asset 2@300x-8.png'} alt="Partners Icons" />
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className={classes.iconsBox}>
                                <img src={'./images/homepage-icons/partners/Asset 3@300x-8.png'} alt="Partners Icons" />
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className={classes.iconsBox}>
                                <img src={'./images/homepage-icons/partners/Asset 4@300x-8.png'} alt="Partners Icons" />
                            </div>
                        </Fade>
                    </Box>
                    <Box className={classes.partnersIcons}>
                        <Fade bottom>
                            <div className={classes.iconsBox}>
                                <img src={'./images/homepage-icons/partners/Asset 5@300x-8.png'} alt="Partners Icons" />
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className={classes.iconsBox}>
                                <img src={'./images/homepage-icons/partners/Asset 6@300x-8.png'} alt="Partners Icons" />
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className={classes.iconsBox}>
                                <img src={'./images/homepage-icons/partners/Asset 7@300x-8.png'} alt="Partners Icons" />
                            </div>
                        </Fade>
                    </Box>
                    <Box className={classes.partnersIcons}>
                        <Fade bottom>
                            <div className={classes.iconsBox}>
                                <img src={'./images/homepage-icons/partners/Asset 8@300x-8.png'} alt="Partners Icons" />
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className={classes.iconsBox}>
                                <img src={'./images/homepage-icons/partners/Asset 10@300x-8.png'} alt="Partners Icons" />
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className={classes.iconsBox}>
                                <img src={'./images/homepage-icons/partners/Asset 11@300x-8.png'} alt="Partners Icons" />
                            </div>
                        </Fade>
                    </Box>
                </Container>
            </MainContainer>
        </>
    )
}
