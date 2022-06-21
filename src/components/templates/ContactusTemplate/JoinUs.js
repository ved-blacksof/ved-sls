import Grid from '@egjs/grid'
import { Box, Button, Container, Input, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import { Buttons, GeneralHeading, MainContainer, Paragraphs, ParagraphsBlue } from '../../atoms'
import { Visit } from '../../molecules'

const useStyles = makeStyles((theme) => ({
    main: {
        position: 'relative',
        paddingBottom: '20%'
    },
    imageBox: {
        width: '100%',
        height: 'fit-content',
        "& img": {
            width: '100%',

        },
    },
    posWhiteBox: {
        width: '35%',
        background: 'white',
        padding: '3%',
        height: 'fit-content',
        position: 'absolute',
        left: '20%',
        bottom: '10%',
        [theme.breakpoints.down('sm')]: {
            position: 'static',
            width: '80%',
            padding: '3%',
            margin: '0% auto'
        }
    },
    btn: {
        width: '60%',
        marginTop: '15%',
    }
}))

export function JoinUs() {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.main}>
                <Box className={classes.imageBox}>
                    <img src={'./images/contactus/office.png'} />
                </Box>

                <Box className={classes.posWhiteBox}>
                    <Paragraphs
                        title="join the team"
                        subtitle="We are always on the lookout for passionate, witty, and humorous team members!"
                        subtitle1="If you are someone who wants to drive the change with us, then apply right away!"
                        redline
                    />
                    <Buttons
                        className={classes.btn}
                        href={'https://www.slscorp.com/about-slscorp/careers.html'}
                        title="Join the team"
                        arrowIcon="./images/Icon feather-arrow-right.svg"
                    />
                </Box>
            </Box>
        </>
    )
}
