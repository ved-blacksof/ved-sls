import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import { Buttons } from '../atoms'

const useStyles = makeStyles((theme) => ({
    visitBox:{
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column', 
        alignItems: 'center', 
        margin: "5% auto"
    },
    btmText: {
        color: '#182AC3',   
        textAlign: 'center',
        fontWeight:'bold',
    },
    btns: {
        width: '25%',
        marginTop:'2%',
        [theme.breakpoints.down('xs')]: {
            width: '60%'
        },
    }
}))

export function Visit({
    goto,
    title   
}) {

    const classes = useStyles()
    return (
        <Box className={classes.visitBox}>
            <h4 className={classes.btmText}> {goto}</h4>

            <Buttons
                className={classes.btns}
                title={title}
                arrowIcon="./images/Icon feather-arrow-right.svg"
            />
        </Box>
    )
}
