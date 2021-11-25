import React from 'react'
import {
    Box,
    Container,
    Grid,
    makeStyles,
} from '@material-ui/core';
import { GeneralHeading, MapIcon } from '../../atoms'
import Bounce from 'react-reveal/Bounce';


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
    knowMore: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10% 0%',
        [theme.breakpoints.down('sm')]: {

        }
    },
    centerBtn: {
        background: '#354B9C',
        border: 'none',
        borderRadius: '3px',
        color: 'white',
        padding: '.5rem 2rem',
        font: " normal normal normal 1.3rem Access",
    }
}))

export function Portfolio({
    data
}) {
    const classes = useStyles();
    return (

        <Container fixed className={classes.portContainer}>
            <Bounce top>
                <GeneralHeading
                    title="OUR RICH PORTFOLIO COVERS MULTIPLE SEGMENTS"
                    redline="redline"
                    subtitle="Catering to multiple industrial use cases, System Level Solutions provides a wide array
                of products and services."
                />
            </Bounce>


            <MapIcon data={data} />

            <Box className={classes.knowMore}>
                <button className={classes.centerBtn} title='Know More' > Know More <img src={'./images/Icon feather-arrow-right.svg'} /> </button>
            </Box>

        </Container>

    )
}
