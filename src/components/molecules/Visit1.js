import React from 'react'
import { makeStyles, Box, Container } from '@material-ui/core'
import { Buttons, MainContainer } from '../atoms'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const useStyles = makeStyles((theme) => ({
    visitBox: {
        margin: "5% auto",
        width: '100%',
    },
    textLinkBox: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2%'
    },
    btmText: {
        width: '60%',
        color: '#182AC3',
        fontWeight: 'bold',
        margin: '0% auto'
    },
    btmText1: {
        width: '100%',
        textAlign: 'left',
        color: '#182AC3',
        fontWeight: 'bold',
    },
    iconMainBox: {
        width: '40%',
    },
    icon: {
        float: 'right',
        width: '10rem',
        "& img": {
            width: '100%',
            maxHeight: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '40%',
        },
    },
    btns: {
        width: '28%',
        marginTop: '2%',
        margin: '0% auto',
        [theme.breakpoints.down('sm')]: {
            width: '40%',
            marginTop: '4%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '60%'
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
                        goto ? <h4 className={classes.btmText} style={style}> {goto}</h4> : ''
                    }
                    {
                        goto1 ? <h3 className={classes.btmText1} style={style}> {goto1}</h3> : ''
                    }

                    <Box className={classes.iconMainBox}>
                        <Box className={classes.icon}>
                            <Fade bottom> <img src={rightlogo} alt="rightLogo" /></Fade>
                        </Box>
                    </Box>
                </Box>
                <Buttons
                    className={classes.btns}
                    title={title}
                    href={href}
                    arrowIcon="./images/Icon feather-arrow-right.svg"
                />
            </Box>
           </Container>
    )
}