import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import { Buttons, MainContainer } from '../atoms'

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
        width: '28%',
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            width: '40%',
        marginTop: '4%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '60%'
        },
    }
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
                <h4 className={classes.btmText} style={style}> {goto}</h4>
                <h3 className={classes.btmText} style={style}> {goto1}</h3>

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
