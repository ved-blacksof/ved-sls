import { Box, Container, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({

    gridBox: {
        height: '100%',
        marginTop: '5%'
    },
    iconsBox: {
        width: '60%',
        padding: '2% 0%'
    },
    icons: {
        width: '50%',
        height: '100%',
    },
    subText: {
        color: 'black',
        paddingTop: '5%',
        width: '80%',
        // fontSize:'1.2rem',
        // fontWeight: 'bold'
    },
}))


export function MapIcon1({
    data
}) {
    const classes = useStyles()
    return (
        <>
            <Grid container spacing={2} className={classes.gridMainBox}>
                {
                    data.map((item, index) => {
                        return (
                            <Grid item xs={6} sm={6} key={index}>
                                <Box className={classes.gridBox} >
                                    <Box className={classes.iconsBox}>
                                        <Fade bottom><img className={classes.icons} src={item.images} alt='Portfolio Icons' /> </Fade>
                                    </Box>

                                    <Fade bottom>
                                        <h4 className={classes.subText}>{item.text}</h4>
                                    </Fade>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}
