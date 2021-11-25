import React from 'react'

import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import { GeneralHeading, MainContainer } from '../atoms';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    container1: {
        margin: '10% auto',
    },
    mainTitle: {
        color: 'black',
        textAlign: 'center'
    },
    mainBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    boxes: {
        width: '17vw',
        height: '17vw',
        boxShadow: '0px 0px 40px #0000000F',
        background: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: "2rem",
        marginTop: '5%',
        '& h4': {
            color: 'black'
        },
        '& img': {
            width: '100%',
            maxHeight: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '12rem',
            height: '12rem'
        },
    },
    paraBox: {
        width: '80%',
    },
    head: {
        color: 'black'
    },
    portSubHead: {
        color: 'black',
        width: '60%',
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    redLine: {
        margin: '1% 0%'
    },

}))

export function Squareboxes({
    maintitle,
    title,
    title1,
    filters,
    image,
    subtitle,
    subtitle1,
    redline,
    data,
    br

}) {

    const classes = useStyles()
    return (
        <MainContainer>
            <Container fixed className={classes.container1}>
                <Fade bottom><h2 className={classes.mainTitle}>{maintitle} </h2> </Fade>
                <GeneralHeading
                    title={title}
                    title1={title1}
                    image={image}
                    subtitle={subtitle}
                    subtitle1={subtitle1}
                    redline={redline}
                    br={br}
                />

                <Box className={classes.mainBox}>

                    {
                        data.map((item, index) => {
                            return (
                                <Box className={classes.boxes}>
                                    <Box className={classes.imgBox}>
                                        <Fade bottom>
                                            <img src={item.images} alt="Mission Icon" />
                                        </Fade>
                                    </Box>
                                    <Fade bottom>
                                        <h4>{item.subtitle} </h4>
                                    </Fade>
                                </Box>
                            )
                        })
                    }

                </Box>
            </Container>
        </MainContainer>
    )
}
