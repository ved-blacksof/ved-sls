import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { industries } from '../../molecules/PortfolioData'
import { GridBlue, MainContainer, MapIcon, MapIcon1 } from '../../atoms'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    margins: {
        margin: '10% 0%',
        [theme.breakpoints.down('sm')]: {
            margin: '20% 0%',
        },
        "& h6": {
            width: '50%',
            margin: '0% auto',
            [theme.breakpoints.down('sm')]: {
                width: '80%'
            }
        }
    },
    mainContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginTop:'3%'
    },
    borderBox: {
        border: '2px solid black',
        width: '30%',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '2% 0%',

        [theme.breakpoints.down('sm')]: {
            width: '45%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },

    },
    iconBox: {
        borderRight: '2px solid black',
        width: '3.5rem',
        height: '3.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '.5rem',
        "& img": {
            maxWidth: '100%',
            maxHeight: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '3rem',
            height: '3rem',
        },
    },
    textBox: {
        alignSelf: 'center',
        padding: '1% 2%',
        "& h4": {
            color: 'black'
        },
        
    }

}))

export function Industries({
    icon,
    h4,
    h6,
}) {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.margins}>
                <MainContainer>
                    <Box >
                        <h2 style={{ color: 'black', textAlign: 'center' }}>Industries</h2>

                        <h6 style={{ color: 'black', textAlign: 'center' }}>
                            For over 20+ years, we have served clients across industries around the globe.
                            Our diverse portfolio makes us a leading solution provider and innovator in the
                            world of FPGA IP Core Services.
                        </h6>
                    </Box>
                    <Container fixed className={classes.mainContainer}>
                        {
                            industries.map((item, index) => {
                                return (
                                    <>
                                        <Box className={classes.borderBox}>
                                            <Box className={classes.iconBox} >
                                                <Fade bottom><img src={item.images} /></Fade>
                                            </Box>
                                            <Box className={classes.textBox}>
                                                <Fade top><h4>{item.text}</h4></Fade>
                                            </Box>
                                        </Box>
                                    </>
                                )
                            })
                        }
                    </Container>
                </MainContainer>
            </Box>
        </>
    )
}
