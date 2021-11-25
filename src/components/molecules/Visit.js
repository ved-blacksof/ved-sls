import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import { Buttons } from '../atoms'
import RubberBand from 'react-reveal/RubberBand';

const useStyles = makeStyles((theme) => ({
    visitBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: "5% auto"
    },
    btmText: {
        color: '#354B9C',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    btns: {
        width: '15%',
        marginTop: '2%',
        [theme.breakpoints.down('md')]: {
            width: '40%'
        },
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
            <RubberBand>
                <h4 className={classes.btmText}> {goto}</h4>
            </RubberBand>

            <Buttons
                className={classes.btns}
                title={title}
                arrowIcon="./images/Icon feather-arrow-right.svg"
            />
        </Box>
    )
}
