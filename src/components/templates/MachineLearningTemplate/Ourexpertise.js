import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { expertise } from '../../molecules/PortfolioData'
import { Visit } from '../../molecules'
import { MainContainer } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop:'10%'
    },
    simpleCard: {
        margin: '3% auto',
        width: '50%',
        lineHeight: '2',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    iconBox: {
        width: '20%',
        '& img': {
            width: '100%',
            height: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '30%'
        }
    },
    textBox:{
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
                <h2 style={{ color: 'black', textAlign:'center' }}>Our expertise</h2>
                <Container fixed className={classes.mainContainer}>
                    {
                        expertise.map((item, index) => {
                            return (
                                <Box className={classes.simpleCard}>
                                    <Box className={classes.iconBox}>
                                        <img className={classes.icons} src={item.icon} />
                                    </Box>

                                    <Box className={classes.textBox} style={{  }}>
                                        <h4 style={{ color: 'black', fontWeight: "bold", margin: '3% 0%' }}>{item.h4}</h4>

                                        <h6 style={{ color: 'black', }}>{item.h6}</h6>
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
