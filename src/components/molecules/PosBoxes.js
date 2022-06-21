import { Container, makeStyles, Box } from '@material-ui/core'
import React from 'react'
import { MainContainer, ServiceBox } from '../atoms'
import clsx from 'clsx';
import { smarttraffic } from '.';
import Fade from 'react-reveal'

const useStyles = makeStyles((theme) => ({
    containers: {
        position: 'relative',
        padding: '21% 0%',
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
            paddingTop: '8%',
        }
    },
    mainBox: {
        width: '100%',
        margin:'0% auto',
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        position: 'absolute',
        top: '-15%',
        [theme.breakpoints.down('sm')]: {
            position: 'static',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        }
    },
    boxes: {
        width: '28%',
        height: '100%',
        margin: '1% 2.5%',
        [theme.breakpoints.down('sm')]: {
            width: '45%',
            marginRight: '2%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginRight: '2%',
        },

    },
    imgBox: {
        // height: '230px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 'fit-content'
        }
    },
    images: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px #00000029',
        padding: '5px',
        background: 'white'
    },
    txt: {
        color: 'black',
        margin: '5% auto',

    }

}))

export function PosBoxes({
    data,
    style,
    h3
}) {
    const classes = useStyles()

    return (
        <MainContainer>
            <Container fixed className={classes.containers}>
                <Box className={classes.mainBox}>
                    {
                        data.map((item, index) => {
                            return (
                                <Box className={classes.boxes} key={index}>
                                    <Box className={classes.imgBox}>
                                        <Fade bottom><img className={classes.images} style={style} src={item.images} /></Fade>
                                    </Box>

                                    <Fade bottom>
                                        <h4 className={classes.txt}>{item.text}</h4>
                                    </Fade>
                                </Box>
                            )
                        })
                    }

                </Box>
            </Container>
        </MainContainer>
    )
}
