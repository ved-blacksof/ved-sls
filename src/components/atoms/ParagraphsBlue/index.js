import { Box, Container, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    paraBox: {
        width: '100%',

    },
    mainTitle: {
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center',
            marginTop: '2%'
        },
    },
    head: {
        marginTop: '10%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    portSubHead: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    redLine: {
        margin: '1.2% 0%'
    },
    uls: {
        listStyle: 'inside',
        margin: '3% 0%',
        color: 'white',
        [theme.breakpoints.down('sm')]: {

        }

    },
    lis: {
        color: 'white',
        marginTop: '1%',
        "& h6": {
            display: 'inline'
        }
    }
}))

export function ParagraphsBlue({
    maintitle,
    title, title1,
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
                <h2 className={classes.mainTitle}> {maintitle} </h2>
                <br />
                <h3 className={classes.head}>{title}</h3>
                <h3>{title1}</h3>
                <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                <h4 className={classes.portSubHead}>{subtitle}</h4>
                {
                    subtitle1 ? <h6 className={classes.portSubHead}>{subtitle1}</h6> : ''
                }

                {
                    list ?
                        <ul className={classes.uls}>
                            <h6> {list}</h6>
                            <li className={clsx(classes.lis, 'li')}> <h6> {firstli} </h6></li>
                            <li className={clsx(classes.lis, 'li')}> <h6> {secli}</h6></li>
                            <li className={clsx(classes.lis, 'li')}> <h6> {thirdli}</h6></li>
                            {
                                fourthli ? <li className={clsx(classes.lis, 'li')}> <h6> {fourthli} </h6></li> : ''
                            }
                        </ul> : ''
                }
            </Box>
        </>
    )
}
