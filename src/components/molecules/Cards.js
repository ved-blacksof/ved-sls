import React from 'react'

import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container1: {
        margin: '10% auto',
    },
    mainBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin:'0% 5%',
        [theme.breakpoints.down('xs')]:{
            justifyContent:'space-around',
            margin:'0% 0%'
        }
        
    },
    boxes: {
        background:'white',
        width: '30%',
        height: 'fit-content',
        boxShadow: '0px 0px 1.8rem grey',
        borderBottom:'4px solid #354B9C',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop: '5%',
        [theme.breakpoints.down('xs')]: {
            width: '70%'
        },
        '& h4': {
            color: 'black'
        },
        '& img': {
            width: '100%',
            maxHeight: '100%',
        },
    },
    imgBox: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        background: 'white',
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
    textBox:{
        padding:'2rem',
        [theme.breakpoints.down('sm')]:{
            padding:'1rem'
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
        font: 'normal normal normal 1.4rem BebasNeue',
        color: '#003189',
        marginTop:'1rem',
        textAlign: 'left',
    }
}))

export function Cards({
    maintitle,
    title,
    subtitle,
    redline,
    data
}) {

    const classes = useStyles()

    return (

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
                                        <a href="/" className={classes.readMore}>READ MORE</a>
                                    }
                                </Box>
                            </Box>
                        )
                    })
                }

            </Box>
        </Container>

    )
}
