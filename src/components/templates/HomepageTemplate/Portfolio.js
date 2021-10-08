import React from 'react'
import port from './PortfolioData.js'
import {
    Box,
    Container,
    Grid,
    makeStyles,
} from '@material-ui/core';
import { Button } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    portContainer: {
        marginTop: '10%',
    },
    portHead: {
        color: 'black',
    },
    redLine: {
        margin: '1% 0%'
    },
    portSubHead: {
        color: 'black',
    },
    gridMainBox: {
        height: 'fit-content',
        marginTop: '3%',
        [theme.breakpoints.down('xs')]: {
            height: 'fit-content'
        }
    },
    gridBox: {
        height: '100%'
    },
    iconsBox: {
        height: '8rem',
        width: '100%',
    },
    icons: {
        width: '50%',
        height: '100%',
    },
    subText: {
        color: 'black',
        marginTop: '8%',
    },
    knowMore:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'10% 0%',
        [theme.breakpoints.down('sm')]: {
            
        }
    },
    centerBtn:{
        background:'#003189',
        border:'none',
        borderRadius:'3px',
        color:'white',
        padding:'.5rem 2rem',
        font:" normal normal normal 1.3rem Access",
    }
}))

export function Portfolio() {
    const classes = useStyles();
    return (
        <Container fixed className={classes.portContainer}>
            <h3 className={classes.portHead}>OUR RICH PORTFOLIO <br /> COVERS MULTIPLE SEGMENTS</h3>
            <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
            <h4 className={classes.portSubHead}>Catering to multiple industrial use cases, System Level <br /> Solutions provides a wide array
                of products and services.
            </h4>
            <Grid container spacing={4} className={classes.gridMainBox}>
                {
                    port.map((item, index) => {
                        return (
                            <Grid item xs={6} sm={3} md={3} key={index}>
                                <Box className={classes.gridBox} >
                                    <Box className={classes.iconsBox}>
                                        <img className={classes.icons} src={item.images} alt='Portfolio Icons' />
                                    </Box>

                                    <h4 className={classes.subText}>{item.text}</h4>
                                </Box>
                            </Grid>

                        )
                    })
                }


            </Grid>

            <Box className={classes.knowMore}>
                <button className={classes.centerBtn} title='Know More' > Know More <img src={'./images/Icon feather-arrow-right.svg'}/> </button>
            </Box>

        </Container>
    )
}
