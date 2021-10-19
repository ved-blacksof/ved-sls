import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    appBox:{
        margin:'10% auto',
        width:'100%'
    },
    head:{
        margin:'5% auto'
    },
    imageBox:{
        width:'80%',
        position:'relative'
    },
    appImage:{
        width:'100%',
        height:'100%'
    },
    blueBox:{
        width:'25%',
        padding:'.8rem 1.5rem',
        position:'absolute',
        lineHeight:'1',
        bottom:'-12%',
        left:'20%',
        zIndex:'1',
        background:'#354B9C'
    }
}))

export function Application() {
    const classes = useStyles()
    return (
        <Box className={classes.appBox}>
            <Box className={classes.head}>
                <h2 style={{ color: 'black', textAlign: 'center' }}>Services</h2>
            </Box>

            <Box className={classes.imageBox}>
                <img className={classes.appImage} src={"./images/AdobeStock_254644877_Preview.png"}/>
                <Box className={classes.blueBox}>
                    <h2>Power Transformer</h2>
                </Box>
            </Box>
        </Box>
    )
}
