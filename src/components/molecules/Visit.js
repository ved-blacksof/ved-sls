import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import { Buttons } from '../atoms'

const useStyles = makeStyles((theme) => ({
<<<<<<< HEAD
    visitBox:{
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column', 
        alignItems: 'center', 
        margin: "2% auto"
    },
=======
>>>>>>> 6abe93bbf00ebb16cffc66800f79eed3709c4a31
    btmText: {
        color: '#354B9C',
        textAlign: 'center',
        marginTop: '5%',
        fontWeight:'bold',
    },
    btns: {
        width: '20%',
<<<<<<< HEAD
        marginTop:'2%',
=======
        marginTop:'3%',
>>>>>>> 6abe93bbf00ebb16cffc66800f79eed3709c4a31
        [theme.breakpoints.down('md')]: {
            width: '40%'
        },
        [theme.breakpoints.down('xs')]: {
<<<<<<< HEAD
            width: '60%'
=======
            width: '100%'
>>>>>>> 6abe93bbf00ebb16cffc66800f79eed3709c4a31
        },
    }
}))

export function Visit({
    goto
}) {

    const classes = useStyles()
    return (
<<<<<<< HEAD
        <Box className={classes.visitBox} style={{  }}>
=======
        <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: "5%" }}>
>>>>>>> 6abe93bbf00ebb16cffc66800f79eed3709c4a31
            <h4 className={classes.btmText}> {goto}</h4>

            <Buttons
                className={classes.btns}
                title="Visit the website"
                arrowIcon="./images/Icon feather-arrow-right.svg"
            />
        </Box>
    )
}
