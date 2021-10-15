import React from 'react'

import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import { evcharger3 } from './PortfolioData'

const useStyles = makeStyles((theme) => ({
    container1: {
        margin: '10% auto',
    },
    mainBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    boxes: {
        width: '15rem',
        height: '15rem',
        boxShadow: '0px 0px 1.8rem grey',
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

export function Threeboxes({
    title,
    subtitle,
    redline
}) {

    const classes = useStyles()
    return (
        <Container fixed className={classes.container1}>
            <Box className={classes.paraBox}>
                <h3 className={classes.head}>{title}</h3>
                {
                    redline ? <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} /> : ''
                }
                <h4 className={classes.portSubHead}>{subtitle}</h4>
            </Box>

            <Box className={classes.mainBox}>

                {
                    evcharger3.map((item, index) => {
                        return (
                            <Box className={classes.boxes}>
                                <Box className={classes.imgBox}>
                                    <img src={item.images} alt="Mission Icon" />
                                </Box>
                                <h4>{item.subtitle} </h4>
                            </Box>
                        )
                    })
                }

            </Box>
        </Container>
    )
}
