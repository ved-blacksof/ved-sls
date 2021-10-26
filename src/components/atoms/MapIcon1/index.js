import { Box, Container, makeStyles, Grid } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({

    gridBox: {
        height: '100%'
    },
    iconsBox: {
        height: '6rem',
        width: '100%',
    },
    icons: {
        width: '50%',
        height: '100%',
    },
    subText: {
        color: 'black',
        marginTop: '8%',
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

                                    <h6 className={classes.subText}>{item.text}</h6>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}
