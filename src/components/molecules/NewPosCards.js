import { Box, Button, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { MainContainer, Paragraphs } from '../atoms'

const useStyles = makeStyles((theme) => ({
    mainhead: {
        color: 'black',
        marginTop: '15%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '40%',

        }
    },
    mainBox: {
        width: '100%',
        marginTop: '20%',
        marginBottom: '10%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    inBox: {
        background: 'white',
        width: '45%',
        position: 'relative',
        paddingTop: '19%',
        padding: '3%',
        boxShadow: '0px 0px 20px #00000029',
        borderRadius: '5px',
    },
    imageBox: {
        width: '86%',
        maxHeight: '100%',
        overflow: 'hidden',
        position: 'absolute',
        borderRadius: '5px',
        top: '-30%',
        left: '7%',
        [theme.breakpoints.down('sm')]: {
            top: '-10%',

        },
        "& img": {
            borderRadius: '5px',
            width: '100%',
            maxHeight: '100%'
        }
    },
    textHead: {
        color: 'black',
        fontWeight: 'bold',
    },
    text: {
        marginTop: '2%',
        color: 'black',
        lineHeight: '1.8',
        [theme.breakpoints.down('sm')]: {
            lineHeight: '1.4',
        },
    }
}))

export function NewPosCards({
    data
}) {
    const classes = useStyles()
    return (
        <>
            <MainContainer>
                <Container fixed>

                    <h2 className={classes.mainhead}>Offerings</h2>
                    <Box className={classes.mainBox}>
                        {
                            data.map((item, index) => {
                                return (
                                    <Box className={classes.inBox}>
                                        <Box className={classes.imageBox}>
                                            <img src={item.images} />
                                        </Box>
                                        <h4 className={classes.textHead}>{item.texthead}</h4>

                                        <h6 className={classes.text}>{item.text}</h6>

                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Container>
            </MainContainer>
        </>
    )
}