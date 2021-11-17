import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    mainBox: {
        padding:'15% 0%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        position: 'relative',
        width:'100%',
        height:'',
        [theme.breakpoints.down('sm')]: {
            padding:'20% 0%',
        },
        // [theme.breakpoints.down('xs')]: {
        //     padding:'16% 0%',
        // }

    },
    backImgBox:{
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
        textAlign:'center',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
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
            
            <div className={classes.mainBox} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70),rgba(0, 0, 0, 0.70)), url(${Background})` }}
            >

                {/* <div className={classes.backImgBox}>
                    <img className={classes.backImg} src={Background} alt="background" />
                </div> */}

                <h1 className={classes.mainText}>{maintext}</h1>

                <span className={classes.redLine}></span>

                <h2 className={classes.subText}>{subtext}</h2>

            </div>
        </>
    )
}