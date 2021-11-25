import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    paraBox: {
        width: '80%',
    },
    head: {
        marginTop: '4%'
    },
    portSubHead: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '70%',
        },
    },
    redLine: {
        margin: '2% 0%'
    },
    uls: {
        listStyle: 'inside',
        font: 'normal normal normal 1.1rem Access',
        margin: '3% 0%',
        color: 'white'
    },
    lis: {
        margin: '2%',
        color: 'white'
    }
}))

export function ParagraphsBlue({
    maintitle,
    title,
    subtitle,
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
                <Fade bottom>
                    <h2 > {maintitle} </h2>
                </Fade>
                <br />
                <Fade bottom>
                    <h3 className={classes.head}>{title}</h3>
                </Fade>
                <Fade bottom>
                    <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                </Fade>
                <Fade bottom>
                    <h4 className={classes.portSubHead}>{subtitle}</h4>
                </Fade>

                {
                    list ?
                        <ul className={classes.uls}>
                            {list}
                            <li className={classes.lis}>{firstli}</li>
                            <li className={classes.lis}>{secli}</li>
                            <li className={classes.lis}>{thirdli}</li>
                            {
                                fourthli ? <li className={classes.lis}>{fourthli}</li> : ''
                            }
                        </ul> : ''
                }
            </Box>
        </>
    )
}
