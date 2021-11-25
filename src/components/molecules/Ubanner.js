import React from 'react'
import { makeStyles } from '@material-ui/core'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            height: '50vh'
        },
        [theme.breakpoints.down('xs')]: {
            height: '40vh'
        }

    },
    backImgBox: {
        position: 'absolute',
        zIndex: '-1',
    },
    backImg: {
        width: '100%',
        maxHeight: '80vh',
    },
    mainText: {
        font: 'normal normal normal 5rem BebasNeue',
        zIndex: '1',
        textAlign: 'center',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: '4rem'
        },
    },
    redLine: {
        background: '#CA0017',
        height: '2px',
        width: '25%'
    },
    subText: {
        width: '30%',
        font: 'normal normal normal 1rem Access',
        color: 'white',
        textAlign: 'center',
        paddingTop: '2%',
        [theme.breakpoints.down('sm')]: {
            width: '70%',
            fontSize: '1rem'
        }
    },

}))

export function Ubanner({
    Background,
    maintext,
    subtext,
    mouse
}) {
    const classes = useStyles()
    return (
        <>

            <div className={classes.mainBox}
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70),rgba(0, 0, 0, 0.70)), url(${Background})` }}
            >

                {/* <div className={classes.backImgBox}>
                    <img className={classes.backImg} src={Background} alt="background" />
                </div> */}
                <Fade up>
                    <h1 className={classes.mainText}>{maintext}</h1>
                </Fade>

                <Fade left>
                    <span className={classes.redLine}></span>
                </Fade>

                <Fade bottom>
                    <h2 className={classes.subText}>{subtext}</h2>
                </Fade>

            </div>
        </>
    )
}