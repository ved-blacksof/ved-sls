import { Box, Container, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    gridMainBox: {
        height: 'fit-content',
        marginTop: '3%',
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
        }
    },
    gridBox: {
        height: '100%',
        marginBottom: '10%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '0'
        }
    },
    iconsBox: {
        height: '6rem',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0',
            height: '4rem',

        }
    },
    icons: {
        width: '100%',
        height: '100%',
    },
    subText: {
        color: 'black',
        marginTop: '8%',
        width: '80%',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            marginTop: '5%',
            width: '100%',

        }
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
                                        <Fade bottom> <img className={classes.icons} src={item.images} alt='Icons' />  </Fade>
                                    </Box>

                                    <Fade bottom><h4 className={classes.subText} style={{ color: `${color}` }}>{item.text}</h4></Fade>

                                </Box>
                            </Grid>

                        )
                    })
                }


            </Grid>
        </>
    )
}
