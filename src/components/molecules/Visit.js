import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import { Buttons, MainContainer } from '../atoms'
import Fade from 'react-reveal'

const useStyles = makeStyles((theme) => ({
    visitBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: "5% auto"
    },
    btmText: {
        color: '#182AC3',
        textAlign: 'center',
        fontWeight: 'bold',
        width: '80%'
    },
    btmText1: {
        width: '100%',
        textAlign: 'center',
        // color: '#182AC3',
        fontWeight: 'bold',
    },
    btns: {
        width: '35%',
        margin: '3% auto',
        [theme.breakpoints.down('sm')]: {
            width: '40%',
            margin: '2% auto',
        },
        [theme.breakpoints.down('xs')]: {
            width: '70%'
        },
    },
}))

export function Visit({
    goto,
    goto1,
    title,
    style,
    href
}) {

    const classes = useStyles()
    return (
        <MainContainer>
            <Box className={classes.visitBox}>
                <Fade bottom>
                    <h4 className={classes.btmText} style={style}> {goto}</h4>
                    <h3 className={classes.btmText} style={style}> {goto1}</h3>

                </Fade>
                <Buttons
                    className={classes.btns}
                    title={title}
                    href={href}
                    arrowIcon="./images/Icon feather-arrow-right.svg"
                />

            </Box>
        </MainContainer>
    )
}
