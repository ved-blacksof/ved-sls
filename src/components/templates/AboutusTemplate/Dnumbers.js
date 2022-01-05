import React from 'react'
import { makeStyles, Container, Box } from '@material-ui/core'
import { MainContainer } from '../../atoms'
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({

    container: {
        width: '100%',
        marginTop: '10%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        },

    },
    headBox: {
        width: '15%',
        height: '10rem',
        padding: '3% 0%',
        lineHeight: '1',
        [theme.breakpoints.down('sm')]: {
            width: '50%',
            height: '6rem',
            padding: '3% 2%',

        },
    },
    head: {
        color: '#D9393E',
        fontSize: '4rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
            textAlign: 'center'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.5rem',
            textAlign: 'center'
        }
    },
    subHead: {
        color: 'black',
        lineHeight: '1',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        }
    },
    container1: {
        display: 'flex',
        marginTop: '2%',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            alignItems: 'center',
            marginTop: '0%',
            flexDirection: 'column',
        }
    },
    boxes: {
        height: '18vw',
        width: '18vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#182AC3',
        '& img': {
            width: '30%',
            height: '30%',
        },
        '& h4': {
            paddingTop: '4%',
            textAlign: 'center'
        },
        [theme.breakpoints.down('sm')]: {
            height: '50vw',
            width: '100%',
            marginTop: '4%'
        },

    }
}))

export function Dnumbers() {
    const classes = useStyles()
    return (
        <MainContainer>
            <Container fixed className={classes.mainContainer}>
                <Fade bottom>
                    <Box className={classes.container}>
                        <Box className={classes.headBox}>
                            <Fade bottom><h2 className={classes.head}>300+</h2> </Fade>
                            <Fade bottom><h6 className={classes.subHead}>In-house Engineers</h6></Fade>
                        </Box>
                        <Box className={classes.headBox}>
                            <Fade bottom><h2 className={classes.head}>100+</h2> </Fade>
                            <Fade bottom><h6 className={classes.subHead}>active projects across the globe</h6></Fade>
                        </Box>
                        <Box className={classes.headBox}>
                            <Fade bottom><h2 className={classes.head}>20+</h2> </Fade>
                            <Fade bottom><h6 className={classes.subHead}>years and counting</h6></Fade>
                        </Box>
                        <Box className={classes.headBox}>
                            <Fade bottom><h2 className={classes.head}>6+</h2></Fade>
                            <Fade bottom><h6 className={classes.subHead}>Business Verticals</h6></Fade>
                        </Box>
                        <Box className={classes.headBox}>
                            <Fade bottom><h2 className={classes.head}>1</h2></Fade>
                            <Fade bottom><h6 className={classes.subHead}>Manufacturing Plant</h6></Fade>
                        </Box>
                    </Box>
                </Fade>

                <Fade bottom>
                    <Box className={classes.container1}>
                        <Box className={classes.boxes}>
                            <Fade bottom><img src={'./images/mission.svg'} alt="Mission Icon" /></Fade>
                            <Fade bottom><h4>Operating Bases: <br /> India, UK, USA</h4></Fade>
                        </Box>
                        <Box className={classes.boxes} style={{ background: '#D9393E' }}>
                            <Fade bottom><img src={'./images/Layer 2.svg'} alt="Help Icon" /></Fade>
                            <Fade bottom><h4>In-house Design & <br /> Manufacturing <br /> Capability</h4></Fade>
                        </Box>
                        <Box className={classes.boxes}>
                            <Fade bottom><img src={'./images/Path 1.svg'} alt="Help Icon" /></Fade>
                            <Fade bottom><h4>Part of the<br />Make-in-India<br />Initiative</h4></Fade>
                        </Box>
                    </Box>
                </Fade>

            </Container>
        </MainContainer>
    )
}
