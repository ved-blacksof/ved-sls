import React from 'react'

import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container1: {
        margin: '10% auto',

    },
    mainBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap:'wrap'
    },
    boxes: {
        width: '15rem',
        height: '15rem',
        boxShadow: '0px 0px 1.8rem grey',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: "2rem",
        marginTop:'5%',
        '& h4': {
            color: 'black'
        },
        '& img': {
            width: '100%',
            maxHeight: '100%',
        },
    },
    imgBox: {
        
    }

}))


export function Threeboxes({
    image1,
    image2,
    image3,
    subtitle1,
    subtitle2,
    subtitle3
}) {

    const classes = useStyles()
    return (
        <Container fixed className={classes.container1}>
            <Box className={classes.mainBox}>
                <Box className={classes.boxes}>
                    <Box className={classes.imgBox}>
                        <img src={image1} alt="Mission Icon" />
                    </Box>
                    <h4>{subtitle1} </h4>
                </Box>
                <Box className={classes.boxes}>
                    <Box className={classes.imgBox}>
                        <img src={image2} alt="Help Icon" />
                    </Box>
                    <h4>{subtitle2} </h4>
                </Box>
                <Box className={classes.boxes}>
                    <Box className={classes.imgBox}>
                        <img src={image3} alt="Help Icon" />
                    </Box>
                    <h4>{subtitle3} </h4>
                </Box>

            </Box>
        </Container>
    )
}
