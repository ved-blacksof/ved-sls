import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import { Buttons } from '../atoms'

const useStyles = makeStyles((theme) => ({
    visitBox:{
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column', 
        alignItems: 'center', 
        margin: "2% auto"
    },
    btmText: {
        color: '#354B9C',
        textAlign: 'center',
        marginTop: '5%',
        fontWeight:'bold',
    },
    btns: {
        width: '20%',
        marginTop:'2%',
        [theme.breakpoints.down('md')]: {
            width: '40%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '60%'
        },
    }
}))

export function Visit({
    goto
}) {

    const classes = useStyles()
    return (
        <Box className={classes.visitBox} style={{  }}>
            <h4 className={classes.btmText}> {goto}</h4>

            <Buttons
                className={classes.btns}
                title="Visit the website"
                arrowIcon="./images/Icon feather-arrow-right.svg"
            />
        </Box>
    )
}
