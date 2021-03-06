import React from 'react'
import { makeStyles, Container, Box } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    container: {
        width:'100%',
        marginTop: '10%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexWrap: 'wrap'
        },

    },
    headBox: {
        width: '15%',
        height:'10rem',
        padding: '3% 0%',
        lineHeight: '1',
        [theme.breakpoints.down('sm')]: {
            width: '30%',
            height:'6rem',
        },
    },
    head: {
        color: '#D9393E',
        fontSize: '4rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.5rem'
        }
    },
    subHead: {
        color: 'black',
        lineHeight: '1'
    },
    container1: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexWrap: 'wrap',
            alignItems: 'center',
            flexDirection: 'column',
        }
    },
    boxes: {
        height: '18rem',
        width: '18rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#354B9C',
        '& img': {
            width: '30%',
            height: '30%',
        },
        '& h4': {
            paddingTop: '4%',
            textAlign: 'center'
        },
        [theme.breakpoints.down('sm')]: {
            height: '15rem',
            width: '15rem',
            margin: '1%'
        },

    }
}))

export function Dnumbers() {
    const classes = useStyles()
    return (
        <Container fixed>
            <Box  className={classes.container}>
                <Box className={classes.headBox}>
                    <h2 className={classes.head}>100+</h2>
                    <h6 className={classes.subHead}>active projects across the globe</h6>
                </Box>
                <Box className={classes.headBox}>
                    <h2 className={classes.head}>300+</h2>
                    <h6 className={classes.subHead}>In-house Engineers</h6>
                </Box>
                <Box className={classes.headBox}>
                    <h2 className={classes.head}>20+</h2>
                    <h6 className={classes.subHead}>years and counting</h6>
                </Box>
                <Box className={classes.headBox}>
                    <h2 className={classes.head}>6+</h2>
                    <h6 className={classes.subHead}>Business Verticals</h6>
                </Box>
                <Box className={classes.headBox}>
                    <h2 className={classes.head}>1</h2>
                    <h6 className={classes.subHead}>Manufacturing Plant</h6>
                </Box>
            </Box>

            <Box className={classes.container1}>
                <Box className={classes.boxes}>
                    <img src={'./images/mission.svg'} alt="Mission Icon" />
                    <h4>Operating Base <br /> India, UK, USA</h4>
                </Box>
                <Box className={classes.boxes} style={{ background: '#D9393E' }}>
                    <img src={'./images/Layer 2.svg'} alt="Help Icon" />
                    <h4>In-house Design & <br /> Manufacturing <br /> Capability</h4>
                </Box>
                <Box className={classes.boxes}>
                    <img src={'./images/Path 1.svg'} alt="Help Icon" />
                    <h4>In-house Design & <br /> Manufacturing <br /> Capability</h4>
                </Box>

            </Box>
        </Container>
    )
}   
