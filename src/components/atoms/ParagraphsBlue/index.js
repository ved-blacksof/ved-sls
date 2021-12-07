import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    paraBox: {
        width: '100%',
    },
    head: {
        marginTop:'10%'
    },
    portSubHead: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '70%',
        },
    },
    redLine: {
        margin: '1.2% 0%'
    },
    uls: {
        listStyle: 'inside',
        font: 'normal normal normal 1.1rem Access',
        margin: '3% 0%',
        color:'white',
        [theme.breakpoints.down('sm')]:{
            fontSize:'.8rem'
        }

    },
    lis: {
        textIndent: '-25px',
        marginLeft:'25px',
        color: 'white',
        margin:'1% 0%',
        "& h6":{
            display:'inline'
        }
    }
}))

export function ParagraphsBlue({
    maintitle,
    title,title1,
    subtitle,
    subtitle1,
    list,
    firstli,
    secli,
    thirdli,
    fourthli,
}) {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.paraBox} >
                <h2 > {maintitle} </h2>
                <br/>
                <h3 className={classes.head}>{title}</h3>
                <h3>{title1}</h3>
                <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                <h4 className={classes.portSubHead}>{subtitle}</h4>
               {
                   subtitle1 ?  <h6 className={classes.portSubHead}>{subtitle1}</h6> : ''
               }

                {
                    list ?
                        <ul className={classes.uls}>
                            {list}
                            <li className={classes.lis}> <h6> {firstli} </h6></li>
                            <li className={classes.lis}> <h6> {secli}</h6></li>
                            <li className={classes.lis}> <h6> {thirdli}</h6></li>
                            {
                                fourthli ? <li className={classes.lis}> <h6> {fourthli} </h6></li> : ''
                            }
                        </ul> : ''
                }
            </Box>
        </>
    )
}
