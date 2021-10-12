import React from 'react'
import { makeStyles, Container, Box } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    overBox: {
        background: '#003189',
        height: '90vh',
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
            paddingBottom:'5%'
        },
    },
    overInBox: {
        paddingTop: '5%'
    },
    paths: {
        marginBottom: '5%',
    },
    redLine: {
        margin: '1% 0%'
    },
    portSubHead: {
        width: '70%',
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    }

}))

export function Overview({
    title,
    sub1,
    sub2,
    path,
    style,
    uls,
    li1,
    li2,
    li3
}) {

    const classes = useStyles()

    return (
        <Box className={classes.overBox} style={style}>
            <Container fixed className={classes.overInBox}>
                <h6 className={classes.paths}> {path} </h6>

                <h3 className={classes.head}>{title}</h3>

                <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />

                <h4 className={classes.portSubHead}>{sub1}</h4>

                <h4 className={classes.portSubHead}>{sub2}</h4>

            </Container>
        </Box>
    )
}
