import React, { useState } from 'react'

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

const useStyles = makeStyles((theme) => ({
    container1: {
        margin: '10% auto',
    },
    mainTitle: {
        color: 'black',
        textAlign: 'center',
        width:'100%',
        border:'1px solid red'
    },
    mainBox: {
        width: '100%',
        display:'flex',
        justifyContent:'center',
        flexWrap:'wrap',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            // alignItems: 'center',
            margin: '0% auto',
        },
    },
    boxWrap:{
        // width:'33%',
        // padding:'2rem',
        padding:'0rem 3rem 3rem 0rem',
        // paddingRight:'2rem',
        display:'flex',
        justifyContent:'center',
        [theme.breakpoints.down('sm')]: {
            width:'50%'
        },
    },
    boxes: {
        // width: '19vw',
        // height: '18vw',
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
        "@media (min-width: 1440px)": {
            width: '22rem',
            height: '22rem',
            border: '1px solid red',
            // marginTop: '7%',
            // marginRight: '7%'
        },
        "@media (min-width: 1300px)": {
            width: '120rem',
            height: '120rem',
        },
        "@media (min-width: 960px)": {
            width: '16rem',
            height: '15rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '16rem',
            height: '15rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '35vw',
            height: '35vw',
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

                <Box container item className={classes.mainBox}>

                    {
                        data.map((item, index) => {
                            return (
                                <Box className={classes.boxWrap}>
                                    <Box className={clsx(classes.boxes)}>
                                        <Box className={classes.imgBox}>
                                            <Bounce bottom>
                                                <img className={classes.image} src={item.images} alt="Mission Icon" />
                                            </Bounce>
                                        </Box>
                                        <Fade bottom> <h4 className={classes.subTitle}>{item.subtitle} </h4></Fade>
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
