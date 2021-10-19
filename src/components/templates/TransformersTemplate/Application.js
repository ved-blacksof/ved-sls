import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    appBox: {
        margin: '10% auto',
        width: '100%',
        height: '150vh'
    },
    imageBox1: {
        width: '80%',
        position: 'relative',
        margin: '5% 0%'
    },
    imageBox2: {
        width: '80%',
        position: 'relative',
        margin: '5% 0%'

    },
    appImage: {
        width: '100%',
        height: '100%'
    },
    blueBox1: {
        width: '25%',
        padding: '.8rem 1.5rem',
        position: 'absolute',
        lineHeight: '1',
        bottom: '-12%',
        left: '20%',
        zIndex: '1',
        background: '#354B9C',
        '&::before':{
            content:"''",
            position:'absolute',
            width:'20%',
            height:'60%',
            background:'red',
            top:'20%',
            right:'-4%',
            zIndex:'-1',
            
        }
    },
    blueBox2:{
        width: '25%',
        padding: '.8rem 1.5rem',
        position: 'absolute',
        lineHeight: '1',
        bottom: '-12%',
        right: '20%',
        zIndex: '1',
        background: '#354B9C'
    }
}))

export function Application() {
    const classes = useStyles()
    return (
        <Box className={classes.appBox}>
            <Box className={classes.head}>
                <h2 style={{ color: 'black', textAlign: 'center' }}>Services</h2>
            </Box>

            <Box className={classes.imageBox1}>
                <img className={classes.appImage} src={"./images/AdobeStock_254644877_Preview.png"} />
                <Box className={classes.blueBox1}>
                    <h2>Power Transformer</h2>
                </Box>
            </Box>
            <Box style={{width:'100%', display:'flex', justifyContent:'flex-end'}}>
                <Box className={classes.imageBox2}>
                    <img className={classes.appImage} src={"./images/He0000e5e4bbe41f9ba7324ba2780c8a1n.png"} />
                    <Box className={classes.blueBox2}>
                        <h2>Distribution transformer</h2>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
