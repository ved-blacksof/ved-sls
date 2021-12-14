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
    imgBox: {
        width: '50%',
        transition: 'all 800ms ease-in-out',
    },
    boxes: {
        width: '20vw',
        height: '20vw',
        border: '1px solid #DCDCDC',
        boxShadow: '0px 3px 10px #00000017',
        background: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        padding: "1rem",
        margin: '1.5rem 1rem',
        cursor: 'pointer',
        transition: 'all 300ms ease-in-out',


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
        // '&:hover': {
        //     border: '1px solid white',
        //     "& $imgBox": {
        //         transform: 'scale(1.2)',
        //     },
        //     "& $red": {
        //         background: '#DE141A',
        //         animation: `$redbar 800ms linear`,
        //         // animationIterationCount: 1,
        //         animationDuration: '800ms',
        //     },
        // },

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
        height: '8px',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            height: '2px',
            background: 'red'
        },
    },
    red: {
        height: '100%',
        // animation: `$redbargo 800ms linear`,
        // // animationIterationCount: 1,
        // animationDuration: '800ms',
    },
    "@keyframes redbar": {
        "0%": {
            // opacity: 0,
            transform: "translateX(-200%)"
        },
        "100%": {
            // opacity: 1,
            transform: "translateX(0)"
        },
    },
    "@keyframes redbargo": {
        "0%": {
            // opacity: 1,
            transform: "translateX(0)"
        },
        "100%": {
            // opacity: 0,
            transform: "translateX(-200%)"
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
                                <Box
                                    className={clsx(classes.boxes,'redbarBox' )}
                                >
                                    <Box className={classes.imgBox}>
                                        <Bounce bottom>
                                            <img src={item.images} alt="Mission Icon" />
                                        </Bounce>
                                    </Box>
                                    <Fade bottom> <h4 className={classes.subTitle}>{item.subtitle} </h4></Fade>
                                    <Box className={clsx(classes.reddiv)}>
                                        <Box className={clsx(classes.red, "redbar")}>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })
                    }



                </Box>
            </Container>
        </MainContainer>
    )
}
