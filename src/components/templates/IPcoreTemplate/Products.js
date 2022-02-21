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
        height: '35vw',
        position:'relative',
        marginTop: '2%',
        marginRight: '3%',
        padding: '2%',
        transition: 'all 300ms ease-in-out',
        transform: 'width .6s ease-in-out',  //for red line
        [theme.breakpoints.down('sm')]: {
            width: '45%',
            height: '25rem',
            marginTop: '10%',
            padding: '5%',

        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: 'fit-content',
            marginTop: '10%',
            padding: '10%',

        },
        "&::before": {
            content: "''",
            height: '5px',
            width: '0',
            background: '#DE141A',
            position: 'absolute',
            bottom: '3%',
            left: '5%',
            transition: 'all 800ms ease-in-out',
            [theme.breakpoints.down('sm')]: {
                height: '5px',
            }
        },
        "&:hover": {
            color: '#182AC3',
            cursor:'pointer',
            boxShadow: '0px 0px 10px #00000033',
            border: '1px solid white',
            "& $imgBox": {
                transform: 'scale(1.1)'
            },
            "&::before": {
                height: '5px',
                width: '90%',
                opacity: '1',
                [theme.breakpoints.down('sm')]: {
                    height: '4px'
                }
            },
            "&::after": {
                height: '0%',
            },

        },


    },
    iconBox: {
        width: '8vw',
        height: '8vw',
        margin: '8% auto',
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
        lineHeight:'1.2',
        marginTop: '2%',
        marginLeft: '8%',
        "& h6": {
            color: 'black',
            display: 'inline'
        }
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
                                        <Box className={classes.borderBox} key={index}>
                                            <Box className={classes.iconBox} >
                                                <Fade bottom><img src={item.images} /></Fade>
                                            </Box>

                                            {
                                                item.uli ?
                                                    <h4>
                                                        <ul className={classes.uls}><h4 className={classes.uls}>{item.uli}</h4>
                                                            {
                                                                item.firstli ? <li className={classes.lis}><h6>{item.firstli}</h6></li> : ''
                                                            }
                                                            {
                                                                item.secli ? <li className={classes.lis}> <h6> {item.secli} </h6> </li> : ''
                                                            }
                                                            {
                                                                item.thirdli ? <li className={classes.lis}> <h6> {item.thirdli} </h6> </li> : ''
                                                            }
                                                            {
                                                                item.fourthli ? <li className={classes.lis}> <h6> {item.fourthli} </h6> </li> : ''
                                                            }
                                                            {
                                                                item.fifthli ? <li className={classes.lis}> <h6> {item.fifthli} </h6> </li> : ''
                                                            }
                                                            {
                                                                item.sixthli ? <li className={classes.lis}> <h6> {item.sixthli} </h6> </li> : ''
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
