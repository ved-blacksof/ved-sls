import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'linear-gradient(rgba(0, 0, 0, 0.59),rgba(0, 0, 0, 0.59))',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            height: '50vh'
        },
        [theme.breakpoints.down('xs')]: {
            height: '40vh'
        }

    },
    backImg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: '-1',

    },
    mainText: {
        font: 'normal normal normal 5rem BebasNeue',
        zIndex: '1',
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
            fontSize:'1rem'
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

            <div className={classes.mainBox} //style={{ backgroundImage: `url(${Background})` }}
            >
            <img className={classes.backImg} src={Background} alt="background" />
                <h1 className={classes.mainText}>{maintext}</h1>

                <span className={classes.redLine}></span>

                <h2 className={classes.subText}>
                    {subtext}
                </h2>

            </div>
        </>
    )
}