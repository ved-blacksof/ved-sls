import React, { useState } from 'react'
import { useHistory } from 'react-router'

import {
    Box,
    Container,
    Grid,
    makeStyles,
} from '@material-ui/core';
import { GeneralHeading, MainContainer } from '../atoms'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container1: {
        margin: '10% auto',
    },
    mainTitle: {
        color: 'black',
        textAlign: 'center',
        width: '100%',
    },
    mainBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            margin: '5% auto',
        },
    },
    boxWrap: {
        marginBottom: '5%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '8%',
        },
    },
    boxes: {
        width: '19vw',
        height: '18vw',
        marginBottom: '5%',
        border: '1px solid #DCDCDC',
        boxShadow: '0px 0px 10px #00000017',
        background: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 300ms ease-in-out',
        transform: 'width .6s ease-in-out',  //for red line
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            width: '28vw',
            height: '28vw',
            marginBottom: '8%',

        },
        [theme.breakpoints.down('xs')]: {
            width: '80vw',
            height:'80vw'
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
                height: '3px'
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
                    height: '3px'
                }
            },
        },
    },
    linked: {
        textDecoration: 'none'
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

    const history = useHistory()

    return (
        <MainContainer>
            <Container fixed className={classes.container1}>
                <h2 className={classes.mainTitle}> {maintitle} </h2>

                <br />
                <br />

                <Box container item className={classes.mainBox}>

                    {
                        data.map((item, index) => {
                            return (
                                <>
                                    {
                                        item.link ?
                                            <Box className={clsx(classes.boxWrap)} key={index}>
                                                <a href={item.link}
                                                    className={classes.linked}
                                                    target="_blank"
                                                >
                                                    <Box className={clsx(classes.boxes)} >
                                                        <Box className={classes.imgBox}>
                                                            <Bounce bottom>
                                                                <img className={classes.image} src={item.images} alt="Mission Icon" />
                                                            </Bounce>
                                                        </Box>
                                                        <Fade bottom> <h4 className={classes.subTitle}>{item.subtitle} </h4></Fade>
                                                    </Box>
                                                </a>
                                            </Box>
                                            :
                                            <Box className={clsx(classes.boxes)} key={index}>
                                                <Box className={classes.imgBox}>
                                                    <Bounce bottom>
                                                        <img className={classes.image} src={item.images} alt="Mission Icon" />
                                                    </Bounce>
                                                </Box>
                                                <Fade bottom> <h4 className={classes.subTitle}>{item.subtitle} </h4></Fade>
                                            </Box>
                                    }
                                </>
                            )
                        })
                    }

                </Box>
            </Container>
        </MainContainer>
    )
}
