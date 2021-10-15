import { Box, Button, Container, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    btnBox: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid red',
        justifyContent: 'left',
        textAlign: 'left !important'
    },
    btnImage:{
    }
}))


export function CustomButtonGroupAsArrows() {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.btnBox}>
                    <img className={classes.btnImage} src={'./images/Group 82851.svg'} />
                    <img className={classes.btnImage} src={'./images/Group 82850.svg'} />
            </Box>
        </>
    )
}
