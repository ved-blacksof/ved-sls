import { Container, makeStyles, Box } from '@material-ui/core'
import React from 'react'
import { MainContainer, ServiceBox } from '../../atoms'
import clsx from 'clsx';
import { smarttraffic } from '../../molecules';

const useStyles = makeStyles((theme) => ({
    containers: {
        position:'relative',
        padding:'25% 2%',

    },
    mainBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        position:'absolute',
        top:'-15%',
        [theme.breakpoints.down('sm')]: {

        }
    },
    boxes: {
        width: '30%',
        height: '100%',
        margin:'1% 0%',

    },
    imgBox: {
        
    },
    images: {
        maxWidth: '100%',
        height: '100%',
        borderRadius:'5px',
        boxShadow: '0px 0px 10px #00000029',
        padding:'5px',
        background:'white'
    },
    txt: {
        color: 'black',
        margin:'4% auto'
        
    }

}))

export function PosBoxes() {
    const classes = useStyles()

    return (
        <MainContainer>
            <Container className={classes.containers}>
                <Box className={classes.mainBox}>

                    {
                        smarttraffic.map((item, index) => {
                            return (
                                <Box className={classes.boxes}>
                                    <Box className={classes.imgBox}>
                                        <img className={classes.images} src={item.images} />
                                    </Box>

                                    <h4 className={classes.txt}>{item.text}</h4>
                                </Box>
                            )
                        })
                    }

                </Box>
            </Container>
        </MainContainer>
    )
}
