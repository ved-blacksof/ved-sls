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

    },
    lis: {
        textIndent: '-25px',
        marginLeft:'25px',
        color: 'white',
        margin:'1% 0%'
    }
}))

export function ParagraphsBlue({
    maintitle,
    title,title1,
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
                <h2 > {maintitle} </h2>
                <br/>
                <h3 className={classes.head}>{title}</h3>
                <h3>{title1}</h3>
                <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                <h4 className={classes.portSubHead}>{subtitle}</h4>

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
