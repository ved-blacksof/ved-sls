import Grid from '@egjs/grid'
import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    mainBox:{
    }
}))

export function Letstalk() {
    const classes = useStyles()
    return (
        <>
            <Box style={{background:'#003189', height:'100vh'}}>
                <Container >
                    <h1>Contact us</h1>
                    {/* <Grid container sm={12}>
                            <Grid sm={6} >
                                
                            </Grid>
                            <Grid sm={6}>

                            </Grid>
                    </Grid> */}
                </Container>
            </Box>
        </>
    )
}
