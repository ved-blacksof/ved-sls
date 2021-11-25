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
import Bounce from 'react-reveal/Bounce';

import { GeneralHeading } from '../../atoms'

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
        margin: '10% 5%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        '& img': {
            width: '100%',
            height: '100%',
        }
    },

}))

export function Partners() {
    const classes = useStyles()
    return (
        <>
            <Container fixed className={classes.partner}>
                <GeneralHeading
                    title="PARTNERSHIP & ASSOCIATIONS COVERS MULTIPLE SEGMENTS"
                    subtitle="Using our robust in-house expertise to develop pioneering solutions catering to various business domains."
                />

                <Box className={classes.partnersIcons}>
                    <Bounce left>
                        <div className={classes.iconsBox}>
                            <img src={'./images/download (1).png'} alt="Partners Icons" />
                        </div>
                    </Bounce>

                    <Bounce bottom>
                        <div className={classes.iconsBox}>
                            <img src={'./images/NoPath.c6058ac7.png'} alt="Partners Icons" />
                        </div>
                    </Bounce>

                    <Bounce right>
                        <div className={classes.iconsBox}>
                            <img src={'./images/download (2).png'} alt="Partners Icons" />
                        </div>
                    </Bounce>
                </Box>

            </Container>
        </>
    )
}
