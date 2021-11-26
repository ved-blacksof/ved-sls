import React from 'react'

import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import { MainContainer } from '../atoms';
import Fade from 'react-reveal/Fade';



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
        boxShadow: '0px 30px 50px #00000029',
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
        height: '12vw',
        background: 'white',
        "& img": {
            width: '100%',
            maxHeight: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
        },
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
        // font: 'normal normal bold 1rem Access',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',

    },
    productDetail: {
        height: '10rem',
        overflow: 'hidden',
        color: 'black',
        marginTop: '.5rem',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            height: '4.8rem',
        },
    },
    readMore: {
        marginTop: '10%',
        textAlign: 'left',
        "& a": {
            fontFamily: 'BebasNeue',
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
                                        <Fade bottom> <img src={item.images} alt="Product images" />  </Fade>
                                    </Box>

                                    <Box className={classes.textBox}>
                                        <Fade bottom>  <h4 className={classes.productName} >{item.productname}</h4>  </Fade>
                                        {
                                            item.para ? <Fade bottom><h6 className={classes.productDetail} style={{ color: 'black', textAlign: 'left', }}>{item.para}</h6> </Fade> : ''
                                        }
                                        {
                                            item.read ? <Fade bottom><h4 className={classes.readMore}><a href="/" >READ MORE</a></h4> </Fade> : ''
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
