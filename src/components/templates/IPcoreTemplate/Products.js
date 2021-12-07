import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { industries, ipcoreproducts } from '../../molecules/PortfolioData'
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    borderBox: {
        border: '1px solid #DCDCDC',
        background: 'white',
        width: '30%',
        height: '32vw',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: '2%',
        marginRight: '3%',
        padding: '2%',
        [theme.breakpoints.down('sm')]: {
            width: '45%',
            height: '20rem',
            marginTop: '10%',
            padding: '5%',

        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: 'fit-content',
            marginTop: '10%',
            padding: '10%',

        },

    },
    iconBox: {
        width: '8vw',
        height: '8vw',
        margin:'8% auto',
        padding: '.5rem',
        "& img": {
            maxWidth: '100%',
            maxHeight: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '5rem',
            height: '5rem',
        },
    },
    textBox: {
        padding: '1%',
        "& h4": {
            color: 'black'
        }
    },
    uls: {
        color: '#182AC3',
        fontWeight: 'bold'
    },
    lis: {
        color: 'black',
        listStyle: 'inside',
        // textIndent: '-25px',
        // marginLeft: '30px',
        marginTop: '5%',
        [theme.breakpoints.down('sm')]: {
            textIndent: '-15px',
            marginLeft: '20px',
        },
        [theme.breakpoints.down('xs')]: {
            textIndent: '-15px',
            marginLeft: '15px',
        },
    }

}))



export function Products({
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
                        <h2 style={{ color: 'black', textAlign: 'center' }}> Products </h2>
                        <br />
                        <br />
                        <br />
                    </Box>
                    <Container fixed className={classes.mainContainer}>
                        {
                            ipcoreproducts.map((item, index) => {
                                return (
                                    <>
                                        <Box className={classes.borderBox}>
                                            <Box className={classes.iconBox} >
                                                <Fade bottom><img src={item.images} /></Fade>
                                            </Box>

                                            {
                                                item.uli ?
                                                    <h4>
                                                        <ul className={classes.uls}>{item.uli}
                                                            {
                                                                item.firstli ? <li className={classes.lis}>{item.firstli}</li> : ''
                                                            }
                                                            {
                                                                item.secli ? <li className={classes.lis}>{item.secli}</li> : ''
                                                            }
                                                            {
                                                                item.thirdli ? <li className={classes.lis}>{item.thirdli}</li> : ''
                                                            }
                                                            {
                                                                item.fourthli ? <li className={classes.lis}>{item.fourthli}</li> : ''
                                                            }
                                                            {
                                                                item.fifthli ? <li className={classes.lis}>{item.fifthli}</li> : ''
                                                            }
                                                            {
                                                                item.sixthli ? <li className={classes.lis}>{item.sixthli}</li> : ''
                                                            }
                                                        </ul>
                                                    </h4> : ''
                                            }

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
