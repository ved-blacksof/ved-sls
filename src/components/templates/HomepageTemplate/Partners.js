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
import { Infinite } from '../../molecules';

const useStyles = makeStyles((theme) => ({
    partner: {
        margin: '5% auto',
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

    partnersIcons: {
        width: '100%',
        margin: '0% auto',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },

    },
    iconsBox: {
        width: '150px',
        height: '100px',
        marginLeft: '2%',
        // borderRadius: '4px',
        // background: 'white',
        // boxShadow: '0px 0px 4px #d3d3d3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            width: '100%',
            maxHeight: '100%',
        }
    },

}))

const PartnersIcons = [
    {
        images: "./images/homepage-icons/partners/Asset 8@300x-8.png"
    },
    {
        images: "./images/homepage-icons/partners/Asset 10@300x-8.png"
    },
    {
        images: "./images/homepage-icons/partners/Asset 11@300x-8.png"
    },
    {
        images: "./images/homepage-icons/partners/Asset 2@300x-8.png"
    },
    {
        images: "./images/homepage-icons/partners/Asset 3@300x-8.png"
    },
    {
        images: "./images/homepage-icons/partners/Asset 7@300x-8.png"
    },
    {
        images: "./images/homepage-icons/partners/Asset 4@300x-8.png"
    },
    {
        images: "./images/homepage-icons/partners/Asset 6@300x-8.png"
    },
    {
        images: "./images/homepage-icons/partners/Asset 5@300x-8.png"
    },
]

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
                </Container>
            </MainContainer>

            {/* <Infinite squarecarddata={PartnersIcons} /> */}


        </>
    )
}
