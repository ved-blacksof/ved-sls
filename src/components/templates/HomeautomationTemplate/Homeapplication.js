import React from 'react'
// import "./molecule.css";
import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import { Research } from '../../molecules'
import { homeapp } from '../../molecules/PortfolioData'
import { MainContainer } from '../../atoms';



const useStyles = makeStyles((theme) => ({
    whiteBox: {
        marginTop: '10%',
        paddingBottom: '20%',
        [theme.breakpoints.down('sm')]: {
            // height: '20vh'
        }
    },
    blueBox: {
        position: 'relative',
        background: '#182AC3',
        padding: '15% 0%',
        [theme.breakpoints.down('sm')]: {
            padding: '20% 0%'
        },
    },
    carouselPos: {
        width: '100%',
        position: 'absolute',
        top: '-50%',
    }
}))

export function Homeapplication() {
    const classes = useStyles();

    return (
        <>
            <MainContainer>
                <Container fixed className={classes.whiteBox}>
                    <h2 style={{ color: 'black', textAlign: 'center' }}>Applications</h2>
                </Container>
            </MainContainer>
            {/* <Box className={classes.carouselPos}>
                <Research
                    data={homeapp}
                    text="HOME"

                />
            </Box> */}
            <Box className={classes.blueBox}>

                <Box className={classes.carouselPos}>
                    <Research
                        data={homeapp}
                    />
                </Box>
            </Box>
        </>
    )
}
