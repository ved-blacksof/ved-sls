import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { expertiseblue } from '../../molecules/PortfolioData'
import { GridBlue, MainContainer, MapIcon, MapIcon1 } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    margins: {
        margin: '10% 0%',
        [theme.breakpoints.down('sm')]: {
            margin: '20% 0%',
        }
    },
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

export function OurexpertiseBlue({
    icon,
    h4,
    h6,
}) {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.margins}>
                <GridBlue>
                    <MainContainer>
                        <Box style={{ padding: '10% 0%' }}>
                            <h2 style={{ textAlign: 'center' }}>Our expertise</h2>
                            <Container fixed className={classes.mainContainer}>
                                <MapIcon
                                    data={expertiseblue}
                                    color="white" />
                            </Container>
                        </Box>
                    </MainContainer>
                </GridBlue>
            </Box>
        </>
    )
}
