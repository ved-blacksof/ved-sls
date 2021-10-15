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
        height: '8rem',
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

export function MapIcon({
    data,
    fill,
    color,
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
                                        <img className={classes.icons} style={{fill:`${fill}`}} src={item.images} alt='Portfolio Icons' />
                                    </Box>

                                    <h6 className={classes.subText} style={{ color:`${color}` }}>{item.text}</h6>
                                </Box>
                            </Grid>

                        )
                    })
                }


            </Grid>
        </>
    )
}
