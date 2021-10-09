import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    paraBox:{
        width:'80%',
        [theme.breakpoints.down('sm')]:{
            margin:'10%'
        }
    },
    head: {
        color: 'black'
    },
    portSubHead: {
        color: 'black',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '70%',
        },
    },
    redLine: {
        margin: '1% 0%'
    },
    uls: {
        listStyle: 'inside',
        color: 'black',
        font:'normal normal normal 1.1rem Access',
        margin:'3% 0%'
    },
    lis: {
        color: 'black',
        margin:'2% '
    }


}))

export function Paragraphs({
    title,
    subtitle,
    firstli,
    secli,
    thirdli,
    fourthli,
}) {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.paraBox}>
                <h3 className={classes.head}>{title}</h3>
                <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                <h4 className={classes.portSubHead}>{subtitle}</h4>

                <ul className={classes.uls}>To achieve our aim, we will
                    <li className={classes.lis}>{firstli}</li>
                    <li className={classes.lis}>{secli}</li>
                    <li className={classes.lis}>{thirdli}</li>
                    <li className={classes.lis}>{fourthli}</li>
                </ul>
            </Box>
        </>
    )
}
