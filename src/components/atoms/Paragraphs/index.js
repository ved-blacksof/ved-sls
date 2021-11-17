import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    paraBox: {
        width: '80%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        flexDirection:'column',
        [theme.breakpoints.down('sm')]: {
            margin: '15% 0%'
        }
    },
    head: {
        color: 'black'
    },
    portSubHead: {
        color: 'black',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            // width: '70%',
        },
    },
    redLine: {
        margin: '2% 0%'
    },
    uls: {
        color: 'black',
        font: 'normal normal bold 1.2rem Access',
        // lineHeight:'3'
    },
    lis: {
        font: 'normal normal normal 1rem Access',
        color: 'black',
        marginLeft: '25px',
        textIndent: '0px',
        lineHeight:'2'
    }
}))

export function Paragraphs({
    title,
    redline,
    subtitle,
    list,
    uli,
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
                {
                    redline ? <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} /> : ''
                }
                <h4 className={classes.portSubHead}>{subtitle}</h4>


                {
                    firstli ?
                        <ul className={classes.uls}>{uli}
                           {
                               firstli ?  <li className={classes.lis}>{firstli}</li> : ''
                           }
                            {
                                secli ? <li className={classes.lis}>{secli}</li> : ''
                            }
                            {
                                thirdli ? <li className={classes.lis}>{thirdli}</li> : ''
                            }
                            {
                                fourthli ? <li className={classes.lis}>{fourthli}</li> : ''
                            }
                        </ul> : ''
                }
            </Box>
        </>
    )
}
