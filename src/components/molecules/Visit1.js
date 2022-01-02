import React from 'react'
import { makeStyles, Box, Container } from '@material-ui/core'
import { Buttons, MainContainer } from '../atoms'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const useStyles = makeStyles((theme) => ({
    visitBox: {
        margin: "5% auto",
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            // margin: "10% auto",
            padding:'16% 0%',
        }
    },
    textLinkBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            // flexDirection: 'column-reverse'
        }
    },
    btmText: {
        color: '#182AC3',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    btmText1: {
        textAlign: 'left',
        color: '#182AC3',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    iconMainBox: {
        margin: '3% 0%',
        [theme.breakpoints.down('sm')]: {
            // marginLeft: '1%',
        }
    },
    icon: {
        textAlign: 'left',
        width: '10rem',
        "& img": {
            width: '100%',
            maxHeight: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '6rem'
        },
    },
    btns: {
        width: '35%',
        margin: '3% auto',
        [theme.breakpoints.down('sm')]: {
            width: '40%',
            margin: '2% auto',
        },
        [theme.breakpoints.down('xs')]: {
            width: '70%'
        },
    },

}))

export function Visit1({
    goto,
    goto1,
    title,
    style,
    href,
    rightlogo,
}) {

    const classes = useStyles()
    return (
        <Container>
            <Box className={classes.visitBox}>

                <Box className={classes.textLinkBox}>
                    {
                        rightlogo ?
                            <Box className={classes.iconMainBox}>
                                <Box className={classes.icon}>
                                    <Fade bottom> <img src={rightlogo} alt="rightLogo" /></Fade>
                                </Box>
                            </Box>
                        : ''
                    }


                    {
                        goto ? <h6 className={classes.btmText} style={style}> {goto}</h6> : ''
                    }
                    {
                        goto1 ? <h6 className={classes.btmText1} style={style}> {goto1}</h6> : ''
                    }

                </Box>

                <Buttons
                    className={classes.btns}
                    style={{ margin: '0% auto' }}
                    title={title}
                    href={href}
                    arrowIcon="./images/Icon feather-arrow-right.svg"
                />
            </Box>
        </Container>
    )
}
