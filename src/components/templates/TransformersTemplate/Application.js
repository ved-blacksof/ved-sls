import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { Quality, SoftOfferingsBlue } from '../../molecules'

const useStyles = makeStyles((theme) => ({
    appBox: {
        margin: '10% auto',
        width: '100%',
    },
    imageBox1: {
        width: '80%',
        position: 'relative',
        margin: '5% 0%',
        '& div': {
            width: '35%',
            padding: '1% 2%',
            position: 'absolute',
            lineHeight: '1',
            background: '#182AC3',
            zIndex: '1',
            [theme.breakpoints.down('sm')]: {
                width: '38%'
            },
            [theme.breakpoints.down('xs')]: {
                width: '55%'
            },
            '&::before': {
                content: "''",
                height: '45%',
                width: '2%',
                background: '#D9393E',
                position: 'absolute',
                right: '-2%',
                top: '28%',
            },
        },
        '& img': {
            width: '100%',
            maxHeight: '100%',
            zIndex: '-1'
        }
    },
    blueBox1: {
        bottom: '-12%',
        left: '25%',
    },
    blueBox2: {
        bottom: '-12%',
        right: '25%',
    },
    power: {
        // fontSize: '3rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem'
        },
    }
}))

export function Application() {
    const classes = useStyles()
    return (
        <Box className={classes.appBox}>

            <Box className={classes.head}>
                <h2 style={{ color: 'black', textAlign: 'center', }}>APPLICATIONS</h2>
            </Box>


            <Box className={classes.imageBox1}>
                <img className={classes.appImage} src={"./images/transformers/power-transformer.png"} />

                <div className={classes.blueBox1}>
                    <h2 className={classes.power}>Power <br /> Transformer</h2>
                </div>
            </Box>



            <Box style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <Box className={classes.imageBox1}>
                    <img className={classes.appImage} src={"./images/transformers/Distribution-Transformer.png"} />

                    <div className={classes.blueBox2}>
                        <h2 className={classes.power}>Distribution <br /> transformer</h2>
                    </div>
                </Box>
            </Box>
        </Box>
    )
}
