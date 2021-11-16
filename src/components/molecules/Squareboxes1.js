import React from 'react'

import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import { GeneralHeading, MainContainer } from '../atoms'

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
        [theme.breakpoints.down('sm')]:{
            border:'2px solid red',
            alignItems: 'center',
        },
    },
    imgBox: {
        width: '50%'
    },
    boxes: {
        width: '18vw',
        height: '18vw',
        border: '1px solid #0000000F',
        background: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        padding: "1rem",
        margin: '1.5rem',
        [theme.breakpoints.down('sm')]:{
            width: '35vw',
            height: '35vw',
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
        color: '#354B9C',
        font: 'normal normal bold 1.2rem Access'
    },
    reddiv: {
        width: '100%',
        height: '5px',
        background: '#D9393E',
        [theme.breakpoints.down('sm')]:{
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

                <Box className={classes.mainBox}>

                    {
                        data.map((item, index) => {
                            return (
                                <Box className={classes.boxes}>
                                    <Box className={classes.imgBox}>
                                        <img src={item.images} alt="Mission Icon" />
                                    </Box>
                                    <h4 className={classes.subTitle}>{item.subtitle} </h4>
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
