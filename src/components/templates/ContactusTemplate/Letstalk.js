import Grid from '@egjs/grid'
import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    mainBox:{
        background:'blue'
    }
}))

export function Letstalk() {
    const classes = useStyles()
    return (
        <>
            <Box style={{background:'blue', height:'100vh'}}>
                <Container >
                    <Grid container sm={12}>
                            <Grid sm={6} >
                                
                            </Grid>
                            <Grid sm={6}>

                            </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
