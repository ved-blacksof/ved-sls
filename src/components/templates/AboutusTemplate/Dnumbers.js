import React from 'react'
import { makeStyles, Container, Box } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    mainContainer:{
        marginTop:'10%',
        border:'2px solid red',

        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        [theme.breakpoints.down('sm')]:{
            width:'80%',
            flexWrap:'wrap'
        },
        [theme.breakpoints.down('xs')]:{

        }

    },
    headBox:{
        width:'15%',
        border:'2px solid red',
        [theme.breakpoints.down('sm')]:{
            width:'30%',
        },
        [theme.breakpoints.down('xs')]:{
            width:'50%',
        }
    },
    head: {
        color: '#CA0017',
        [theme.breakpoints.down('sm')]:{
            fontSize:'3rem'
        },
        [theme.breakpoints.down('xs')]:{
            fontSize:'2.5rem'
        }

    },
    subHead: {
        color: 'black'
    }
}))

export function Dnumbers() {
    const classes = useStyles()
    return (
        <Container className={classes.mainContainer}>
            <Box className={classes.headBox}>
                <h2 className={classes.head}>100+</h2>
                <h6 className={classes.subHead}>active projects across the globe</h6>
            </Box>
            <Box className={classes.headBox}>
                <h2 className={classes.head}>100+</h2>
                <h6 className={classes.subHead}>active projects across the globe</h6>
            </Box>
            <Box className={classes.headBox}>
                <h2 className={classes.head}>100+</h2>
                <h6 className={classes.subHead}>active projects across the globe</h6>
            </Box>
            <Box className={classes.headBox}>
                <h2 className={classes.head}>100+</h2>
                <h6 className={classes.subHead}>active projects across the globe</h6>
            </Box>
            <Box className={classes.headBox}>
                <h2 className={classes.head}>100+</h2>
                <h6 className={classes.subHead}>active projects across the globe</h6>
            </Box>
        </Container>
    )
}
