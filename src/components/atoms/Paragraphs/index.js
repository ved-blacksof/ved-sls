import { Box, Button, Container, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    paraBox: {
        width: '80%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            margin: '15% 0%',
            width: '100%'
        }
    },
    eSM: {
        fontFamily: 'Access',
    },
    head: {
        color: 'black'
    },
    portSubHead: {
        color: 'black',
        width: '100%',
    },
    portSubtitle: {
        color: 'black',
        width: '100%',
    },
    redLine: {
        margin: '2% 0%'
    },
    btnBox: {
        width: '100%',
        marginTop: '6%',
    },
    smallBtn: {
        font: 'normal normal normal 1rem Access',
        textDecoration: 'none',
        textTransform: 'uppercase',
        border: 'none',
        background:'#182AC3',
        color: '#fff',
        padding: '2% 3%',
        margin: '0% auto',
        transition: 'all .3s ease-in-out',
        position: 'relative',
        overflow:'hidden',
        zIndex:'1',
        '&:hover': {
            color: 'white'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '.7rem'
        },
        "&::before": {
            content: "''",
            position: 'absolute',
            borderRadius:'4px',
            right: '0%',
            top: '0%',
            width: '0',
            height: '2px',
            transition: 'all .5s ease-in-out',
            background: '#182AC3',
            zIndex: '-999'
        },
        "&::after": {
            content: "''",
            position: 'absolute',
            borderRadius:'4px',
            right: '0%',
            top: '0%',
            width: '2px',
            height: '0%',
            transition: 'all .5s ease-in-out',
            background: '#182AC3',
            zIndex: '-999'
        },
        '&:hover': {
            background: '#fff',
            color:'#182AC3',
            "& $btnTitle":{
                color:'#182AC3',
            },
            "&::before": {
                width: '100%',
            },
            "&::after": {
                height: '100%',
            },
            "& $mySpan":{
                "&::before": {
                    width: '100%',
                },
                "&::after": {
                    height: '100%',
                },
            },
        },
    },
    mySpan:{
        "&::before": {
            content: "''",
            position: 'absolute',
            borderRadius:'4px',
            left: '0%',
            bottom: '0%',
            width: '0',
            height: '2px',
            transition: 'all .5s ease-in-out',
            background: '#182AC3',
            zIndex: '-999'
        },
        "&::after": {
            content: "''",
            position: 'absolute',
            borderRadius:'4px',
            left: '0%',
            bottom: '0%',
            width: '2px',
            height: '0%',
            transition: 'all .5s ease-in-out',
            background: '#182AC3',
            zIndex: '-999'
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
    e,
    style,
    redline,
    subhead,
    subhead1,
    subhead2,
    subhead3,
    subhead4,
    subtitle,
    subtitle1,
    subtitle2,
    subtitle3,
    subtitle4,
    list,
    uli,
    firstli,
    secli,
    thirdli,
    fourthli,
    download,
    download1,
    tab_title,
    fifthli,
    href,
}) {
    const classes = useStyles()

    const handleDownload = () => {
        const newTab = window.open(`${href}`, '_blank');

        newTab.addEventListener("load", function () {
            newTab.document.title = 'asad';
        });
        console.log(newTab.document.title, "djfh")
    }
    return (
        <>
            <Box className={classes.paraBox} style={style}>
                <h3 className={classes.head}
                // dangerouslySetInnerHTML={{ __html: title }}
                >
                    <span className={classes.eSM}>{e}</span>
                    {title}
                </h3>
                {
                    redline ? <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} /> : ''
                }


                {
                    subhead ? <h4 className={classes.portSubHead} style={{ fontWeight: 'bold', margin: '2% 0%' }}>{subhead}</h4> : ''
                }


                <h4 className={classes.portSubtitle}>{subtitle}</h4>


                {
                    subhead1 ? <h4 className={classes.portSubHead} style={{ fontWeight: 'bold', margin: '2% 0%' }}>{subhead1}</h4> : ''
                }
                {
                    subtitle1 ? <h4 className={classes.portSubtitle}>{subtitle1}</h4> : ''
                }


                {
                    subhead2 ? <h4 className={classes.portSubHead} style={{ fontWeight: 'bold', margin: '2% 0%' }}>{subhead2}</h4> : ''
                }
                {
                    subtitle2 ? <h4 className={classes.portSubtitle}>{subtitle2}</h4> : ''
                }

                {
                    subhead3 ? <h4 className={classes.portSubHead} style={{ fontWeight: 'bold', margin: '2% 0%' }}>{subhead3}</h4> : ''
                }
                {
                    subtitle3 ? <h4 className={classes.portSubtitle} >{subtitle3}</h4> : ''
                }


                {
                    subhead4 ? <h4 className={classes.portSubHead} style={{ fontWeight: 'bold', margin: '2% 0%' }}>{subhead4}</h4> : ''
                }
                {
                    subtitle4 ? <h4 className={classes.portSubtitle} >{subtitle4}</h4> : ''
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
                                className={clsx(classes.smallBtn)}
                                href={href}
                                onClick={handleDownload}
                                target="_blank"
                                data-title={tab_title}
                            >
                                <span className={classes.mySpan}>
                                    {download}
                                </span>
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
                                data-title={tab_title}
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
