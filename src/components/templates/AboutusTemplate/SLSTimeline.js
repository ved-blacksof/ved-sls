import React from 'react'
import { makeStyles, Container, Box } from '@material-ui/core'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


const useStyles = makeStyles((theme) => ({
    mainBox: {

    },
    timelineBox: {
        height: '50vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            width: '100%',
            height: '100%'
        },
        '& div': {
            position: 'absolute',
        }
    },
    img:{
        width:'100%'
    },
    imageBox1: {
        bottom: '46%',
        left: '0%'
    },
    imageBox2: {
        top: '48%',
        left: '20%'
    },
    imageBox3: {
        bottom: '46%',
        left: '40%'
    },
    imageBox4: {
        top: '48%',
        left: '60%'
    },
    imageBox5: {
        bottom: '46%',
        left: '80%'
    },
}))

export function SLSTimeline() {

    const classes = useStyles()

    return (
        <Box className={classes.mainBox}>
                <Box className={classes.timelineBox}>
                    

                    <Box className={classes.imageBox}>
                        <img src={'./images/Repeat Grid 10.svg'} />
                    </Box>
                    <div className={classes.imageBox1}>
                        <img src={'./images/Group 82852.png'} />
                    </div>
                    <div className={classes.imageBox2}>
                        <img src={'./images/Group 82853.png'} />
                    </div>
                    <div className={classes.imageBox3}>
                        <img src={'./images/Group 82854.png'} />
                    </div>
                    <div className={classes.imageBox4}>
                        <img src={'./images/Group 82855.png'} />
                    </div>
                    <div className={classes.imageBox5}>
                        <img src={'./images/Group 82856.png'} />
                    </div>
                    {/* <img src={'./images/Group 82853.png'} />
                    <img src={'./images/Group 82854.png'} />
                    <img src={'./images/Group 82855.png'} />
                    <img src={'./images/Group 82856.png'} /> */}



                </Box>
        </Box>
    )
}
