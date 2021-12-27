import React, { useState } from 'react'

import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import { GeneralHeading, MainContainer } from '../atoms'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import clsx from 'clsx';

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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
        },
    },

    boxes: {
        width: '20vw',
        height: '20vw',
        border: '1px solid #DCDCDC',
        boxShadow: '0px 0px 10px #00000017',
        background: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: "1rem",
        margin: '1.5rem 1%',
        cursor: 'pointer',
        transition: 'all 300ms ease-in-out',
        transform: 'width .6s ease-in-out',  //for red line
        position:'relative',
        [theme.breakpoints.down('sm')]: {
            width: '35vw',
            height: '35vw',
            margin: '5% 0%',
            padding: "1%",
        },
        "&::before": {
            content: "''",
            height: '5px',
            width: '0',
            background: '#DE141A',
            position: 'absolute',
            bottom: '5%',
            left: '5%',
            transition: 'all 800ms ease-in-out',
            [theme.breakpoints.down('sm')]: {
                height: '5px'
            }
        },
        "&:hover": {
            color: '#182AC3',
            boxShadow: '0px 0px 10px #00000017',
            border: '1px solid white',
            "& $imgBox": {
                transform: 'scale(1.1)'
            },
            "&::before": {
                height: '5px',
                width: '90%',
                opacity: '1',
                [theme.breakpoints.down('sm')]: {
                    height: '5px'
                }
            },
        },
    },
    imgBox: {
        width: '50%',
        transition: 'all 600ms ease-in-out',
    },
    image: {
        width: '100%',
        maxHeight: '100%'
    },
    subTitle: {
        color: '#182AC3',
        fontWeight: 'bold',
        marginTop: '5%',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.8rem'
        },
    },


}))

export function Squareboxes1({
    maintitle,
    title,
    subtitle,
    redline,
    data
}) {

    const classes = useStyles()

    const [exit, setExit] = useState(false)


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
                                <Box className={clsx(classes.boxes)} >
                                    <Box className={classes.imgBox}>
                                        <Bounce bottom>
                                            <img className={classes.image} src={item.images} alt="Mission Icon" />
                                        </Bounce>
                                    </Box>
                                    <Fade bottom> <h4 className={classes.subTitle}>{item.subtitle} </h4></Fade>
                                </Box>
                            )
                        })
                    }

                </Box>
            </Container>
        </MainContainer>
    )
}
