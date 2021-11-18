import { Box, Container, makeStyles, Grid } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({

    gridBox: {
        height: '100%',
        marginTop:'5%'
    },
    iconsBox: {
        width: '80%',
        padding:'2% 0%'
    },
    icons: {
        width: '50%',
        height: '100%',
    },
    subText: {
        color: 'black',
        paddingTop: '5%',
        width:'80%',
        fontSize:'1.2rem',
        fontWeight:'bold'
    },
}))


export function MapIcon1({
    data
}) {
    const classes = useStyles()
    return (
        <>
            <Grid container spacing={4} className={classes.gridMainBox}>
                {
                    data.map((item, index) => {
                        return (
                            <Grid item xs={6} sm={6} key={index}>
                                <Box className={classes.gridBox} >
                                    <Box className={classes.iconsBox}>
                                        <img className={classes.icons} src={item.images} alt='Portfolio Icons' />
                                    </Box>

                                    <h4 className={classes.subText}>{item.text}</h4>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}
