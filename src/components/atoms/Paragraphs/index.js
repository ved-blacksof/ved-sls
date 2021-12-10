import { Box, Button, Container, makeStyles } from '@material-ui/core'
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
    btnBox: {
        width: '100%',
        marginTop: '6%',
        display: 'flex',
        justifyContent: 'center',
    },
    smallBtn: {
        font: 'normal normal normal 1rem Access',
        background: '#182AC3',
        textDecoration:'none',
        textTransform: 'uppercase',
        border: 'none',
        color: 'white',
        padding: '2% 3%',
        margin: '0% auto',
        '&:hover': {
            background: 'blue'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '.7rem'
        }
    },
    uls: {
        color: 'black',
        margin: '2% 0%',
        lineHeight: '2.5',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.8rem',
            lineHeight: '1.5'
        },
        "& h6": {
            color: 'black'
        },
    },
    lis: {
        color: 'black',
        marginLeft: '25px',
        textIndent: '0px',
        lineHeight: '1.7',
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
    download,
    download1,
    fifthli,
    href,
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
                        <ul className={classes.uls}><h6>{uli}</h6>
                            {
                                firstli ? <li className={classes.lis}><h6> {firstli}  </h6></li> : ''
                            }
                            {
                                secli ? <li className={classes.lis}><h6> {secli}  </h6></li> : ''
                            }
                            {
                                thirdli ? <li className={classes.lis}><h6> {thirdli}  </h6></li> : ''
                            }
                            {
                                fourthli ? <li className={classes.lis}><h6> {fourthli}  </h6></li> : ''
                            }
                            {
                                fifthli ? <li className={classes.lis}><h6> {fifthli}  </h6></li> : ''
                            }
                        </ul> : ''
                }
                {
                    download ?
                        <Box className={classes.btnBox}>
                            <Button
                                className={classes.smallBtn}
                                href={href}
                                onclick={() => window.open(`${href}`, '_blank')}
                                target="_blank"
                            >
                                {download}
                            </Button>
                        </Box>
                        : ''
                }
                {
                    download1 ?
                        <Box className={classes.btnBox}>
                            <a
                                className={classes.smallBtn}
                                href={href}
                                // download="pdf"
                                target="_blank"
                            >
                                {download1}
                            </a>
                        </Box>
                        : ''
                }
            </Box>
        </>
    )
}
