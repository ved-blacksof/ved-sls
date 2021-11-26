import React from 'react'

import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import { GeneralHeading, MainContainer } from '../atoms'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    container1: {
        margin: '10% auto',
    },
    mainTitle: {
        color: 'black',
        textAlign: 'center',
    },
    mainBox: {
        width: '100%',
        // marginTop: '8%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
        },
    },
    imgBox: {
        width: '50%'
    },
    boxes: {
        width: '20vw',
        height: '20vw',
        border: '1px solid #0000000F',
        background: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        padding: "1rem",
        margin: '1.5rem 1rem',
        [theme.breakpoints.down('sm')]: {
            width: '35vw',
            height: '35vw',
            margin: '5% 0%',
            padding: "1%",
        },
        '& img': {
            width: '100%',
            maxHeight: '100%',
        },
        '&:hover': {
            boxShadow: '0px 0px 20px #0000000F',
            border: 'none'
        }
    },
    subTitle: {
        color: '#182AC3',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.8rem'
        },
    },
    reddiv: {
        width: '100%',
        height: '5px',
        background: '#D9393E',
        [theme.breakpoints.down('sm')]: {
            height: '2px',
        },
    }

}))

export function Squareboxes1({
    maintitle,
    title,
    subtitle,
    redline,
    data
}) {

    const classes = useStyles()
    return (
        <MainContainer>
            <Container fixed className={classes.container1}>
                <h2 className={classes.mainTitle}> {maintitle} </h2>
                <br />
                <br />
                <br />
                <Box className={classes.mainBox}>

                    {
                        data.map((item, index) => {
                            return (
                                <Box className={classes.boxes}>
                                    <Box className={classes.imgBox}>
                                        <Bounce bottom> <img src={item.images} alt="Mission Icon" /> </Bounce>
                                    </Box>
                                    <Fade bottom> <h4 className={classes.subTitle}>{item.subtitle} </h4></Fade>
                                    <Box className={classes.reddiv}></Box>
                                </Box>
                            )
                        })
                    }

                </Box>
            </Container>
        </MainContainer>
    )
}
