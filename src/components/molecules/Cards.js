import React from 'react'

import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import { MainContainer } from '../atoms';

const useStyles = makeStyles((theme) => ({
    container1: {
        margin: '10% auto',
        // height:'40vh',
        // width:'70%',
        // [theme.breakpoints.down('xs')]: {
        //     width: '90%'
        // },
    },
    mainBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        margin: '0% 5%',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            margin: '0% 0%'
        }

    },
    boxes: {
        background: 'white',
        width: '25%',
        height: 'fit-content',
        boxShadow: '0px 0px 1.8rem grey',
        borderBottom: '4px solid #182AC3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        margin: '5% 2.5%',
        [theme.breakpoints.down('sm')]: {
            width: '70%'
        },
        '& h4': {
            color: 'black'
        },
        '& img': {
            maxWidth: '100%',
            height: '100%',
        },
    },
    imgBox: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        // height:'12rem',
        background: 'white',
        "& img": {
            maxWidth: '100%',
            height: '100%'
        }
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
    textBox: {
        padding: '1rem',
        [theme.breakpoints.down('sm')]: {
            padding: '1rem'
        }
    },
    productName: {
        font: 'normal normal bold 1rem Access',
        color: 'black',
        textAlign: 'left',

    },
    productDetail: {
        color: 'black',
        marginTop: '.5rem',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    readMore: {
        marginTop: '2rem',
        textAlign: 'left',
        marginTop: '10px',
        "& a": {
            font: 'normal normal normal 1.4rem BebasNeue',
            color: '#182AC3',
        }
    }
}))

export function Cards({
    maintitle,
    title,
    subtitle,
    redline,
    data,
    read
}) {

    const classes = useStyles()

    return (

        <MainContainer>
            <Container fixed className={classes.container1}>
                <Box className={classes.paraBox}>
                    <h2 style={{ color: 'black' }}>{maintitle}</h2>
                    <h3 className={classes.head}>{title}</h3>
                    {
                        redline ? <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} /> : ''
                    }
                    <h4 className={classes.portSubHead}>{subtitle}</h4>
                </Box>


                <Box className={classes.mainBox}>

                    {
                        data.map((item, index) => {
                            return (
                                <Box className={classes.boxes}>
                                    <Box className={classes.imgBox}>
                                        <img src={item.images} alt="Product images" />
                                    </Box>

                                    <Box className={classes.textBox}>
                                        <h4 className={classes.productName} >{item.productname}</h4>
                                        <h6 className={classes.productDetail} style={{ color: 'black', textAlign: 'left', }}>{item.para}</h6>
                                        {
                                            item.read ? <p className={classes.readMore}><a href="/" >READ MORE</a></p> : ''
                                        }
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
