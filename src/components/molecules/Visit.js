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
    btns: {
        width: '28%',
        marginTop: '2%',
        // fontSize:'1rem',
        [theme.breakpoints.down('sm')]: {
            width: '60%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '70%'
        },
    }
}))

export function Visit({
    goto,
    title
}) {

    const classes = useStyles()
    return (
        <MainContainer>
            <Box className={classes.visitBox}>
                <h4 className={classes.btmText}> {goto}</h4>

                <Buttons
                    disableRipple
                    className={classes.btns}
                    title={title}
                    arrowIcon="./images/Icon feather-arrow-right.svg"

                />
            </Box>
        </MainContainer>
    )
}
