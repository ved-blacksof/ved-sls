import { Box, Container, makeStyles, Grid } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    gridMainBox: {
        height: 'fit-content',
        marginTop: '3%',
        [theme.breakpoints.down('xs')]: {
            height: 'fit-content'
        }
    },
    gridBox: {
        height: '100%'
    },
    iconsBox: {
        height: '6rem',
        width: '50%',
    },
    icons: {
        width: '100%',
        height: '100%',
    },
    subText: {
        color: 'black',
        marginTop: '8%',
        width:'80%',
        fontSize:'1.2rem',
        fontWeight:'bold'
    },
}))

export function MapIcon({
    data,
    color
}) {
    const classes = useStyles()
    return (
        <>
            <Grid container spacing={4} className={classes.gridMainBox}>
                {
                    data.map((item, index) => {
                        return (
                            <Grid item xs={6} sm={3} md={3} key={index}>
                                <Box className={classes.gridBox} >
                                    <Box className={classes.iconsBox}>
                                        <img className={classes.icons} src={item.images} alt='Icons' />
                                    </Box>

                                    <h4 className={classes.subText} style={{color:`${color}`}}>{item.text}</h4>
                                </Box>
                            </Grid>

                        )
                    })
                }


            </Grid>
        </>
    )
}
