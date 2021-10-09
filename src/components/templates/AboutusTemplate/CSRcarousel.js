import React from 'react'
import { makeStyles, Container, Box } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    mainContainer:{
        marginTop:'10%',
    },
    head: {
        color: 'black'
    },
    portSubHead: {
        color: 'black',
        width: '40%',
        [theme.breakpoints.down('xs')]:{
            width: '70%',
        },
    },
    redLine: {
        margin: '1% 0%'
    },

}))

export function CSRcarousel() {

    const classes = useStyles()

    return (
        <>
            <Container fixed className={classes.mainContainer}>
                <h3 className={classes.head}>CSR</h3>
                <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                <h4 className={classes.portSubHead}>How we are helping the world be a better place</h4>
            
                <Box>
                    <h1>CArOUSEL</h1>
                </Box>

            </Container>
        </>
    )
}
