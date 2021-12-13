import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { expertise } from '../../molecules/PortfolioData'
import { Visit } from '../../molecules'
import { MainContainer } from '../../atoms'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginTop: '10%'
    },
    simpleCard: {
        margin: '2% 0%',
        width: '50%',
        lineHeight: '2',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: '2%'
        }
    },
    iconBox: {
        width: '6rem',
        '& img': {
            width: '100%',
            height: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '5rem',
            marginTop: '2rem'
        }
    },
    textBox: {
        width: '65%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    }

}))

export function Ourexpertise({
    icon,
    h4,
    h6,
}) {
    const classes = useStyles()
    return (
        <>
            <MainContainer>
                <h2 style={{ color: 'black', textAlign: 'center' }}>Our expertise</h2>
                <Container fixed className={classes.mainContainer}>
                    {
                        expertise.map((item, index) => {
                            return (
                                <Box className={classes.simpleCard}>
                                    <Box className={classes.iconBox}>
                                        <Fade bottom><img className={classes.icons} src={item.icon} /></Fade>
                                    </Box>

                                    <Box className={classes.textBox} style={{}}>
                                        <Fade bottom><h4 style={{ color: 'black', fontWeight: "bold", margin: '3% 0%' }}>{item.h4}</h4></Fade>
                                        <Fade bottom><h6 style={{ color: 'black', }}>{item.h6}</h6></Fade>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Container>
            </MainContainer>
        </>
    )
}
