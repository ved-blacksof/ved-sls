import React from 'react'
// import "./molecule.css";
import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';
import { VerticalTab } from '../../molecules'
import { MainContainer } from '../../atoms';



const useStyles = makeStyles((theme) => ({
    whiteBox: {
        marginTop: '20%',
        paddingBottom: '8%',
    },
    expand: {
        color: 'black'
    },
    blueBox: {
        background: '#182AC3',
    },
    blueBoxContainer: {

    }
}))

export function Expanding() {
    const classes = useStyles();



    return (
        <>
            <MainContainer>
                <Container className={classes.whiteBox}>
                    <h3 className={classes.expand}>EXPANDING THE CORE  <br /> OF OUR PRIMARY OFFERINGS</h3>
                </Container>
            </MainContainer>
            <Box className={classes.blueBox}>

                <MainContainer>
                    <Container fixed className={classes.blueBoxContainer} style={{ padding: '5% 0%' }}>
                        <VerticalTab />
                    </Container>
                </MainContainer>

            </Box>
        </>
    )
}
