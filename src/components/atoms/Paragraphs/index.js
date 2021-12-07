import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    paraBox: {
        width: '80%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            margin: '15% 0%',
            width: '100%'
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
        font: 'normal normal normal 1rem Access',
        margin: '2% 0%',
        lineHeight: '2.5',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.8rem',
            lineHeight: '1.5'
        }
    },
    lis: {
        font: 'normal normal normal 1rem Access',
        color: 'black',
        marginLeft: '25px',
        textIndent: '0px',
        lineHeight: '1.8',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.8rem',
            lineHeight: '1.5'
        },
        '@media (min-width: 1300px)': {
            marginLeft: '25px',
            textIndent: '0px',
        }
    }
}))

export function Paragraphs({
    title,
    redline,
    subtitle,
    subtitle1,
    subhead,
    subhead1,
    subhead2,
    list,
    uli,
    firstli,
    secli,
    thirdli,
    fourthli,
    fifthli
}) {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.paraBox}>
                <h3 className={classes.head}>{title}</h3>
                {
                    redline ? <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} /> : ''
                }
                {
                    subhead ? <h4 className={classes.portSubHead} style={{ fontWeight: 'bold', margin: '2% 0%' }}>{subhead}</h4> : ''
                }

                <h4 className={classes.portSubHead}>{subtitle}</h4>

                {
                    subhead1 ? <h4 className={classes.portSubHead} style={{ fontWeight: 'bold', margin: '2% 0%' }}>{subhead1}</h4> : ''
                }
                {
                    subtitle1 ? <h4 className={classes.portSubHead}>{subtitle1}</h4> : ''
                }
                {
                    subhead2 ? <h4 className={classes.portSubHead} style={{ fontWeight: 'bold', margin: '2% 0%' }}>{subhead2}</h4> : ''
                }

                {
                    list ?
                        <ul className={classes.uls}>{uli}
                            {
                                firstli ? <li className={classes.lis}>{firstli}</li> : ''
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
                            {
                                fifthli ? <li className={classes.lis}>{fifthli}</li> : ''
                            }
                        </ul> : ''
                }
            </Box>
        </>
    )
}
