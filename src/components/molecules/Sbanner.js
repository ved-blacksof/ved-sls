import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position:'relative',

    },
    mainText: {
        font: 'normal normal normal 5rem BebasNeue',
        color: 'white'
    },
    redLine: {
        background: '#CA0017',
        height: '3px',
        width: '25%'
    },
    subText: {
        width: '30%',
        font: 'normal normal normal 1rem Access',
        color: 'white',
        textAlign: 'center',
        paddingTop: '2%',
    },
    scrollBox:{
        position:'absolute',
        bottom:'5%',
        textAlign:'center'
    },
    mouseScroll: {
        
    },
    mouseScrollTxt:{
        color:'white',
        font:'normal normal normal 1rem Roboto',
        marginTop:'3%'
    }

}))

export function Sbanner({
    Background,
    mouse
}) {
    const classes = useStyles()
    return (
        <div className={classes.mainBox}
            style={{ backgroundImage: `url(${Background})` }}>
            <h1 className={classes.mainText}>SYSTEM LEVEL SOLUTIONS</h1>

            <span className={classes.redLine}></span>

            <h2 className={classes.subText}>
                Industry leaders in providing solutions catering to the domains
                of intellectual property, hardware design &
                prototyping, software design, and manufacturing.
            </h2>

            <div className={classes.scrollBox}>
                <img className={classes.mouseScroll} src={mouse} alt="Scroll image" />
                <h6 className={classes.mouseScrollTxt}>Scroll</h6>
            </div>

        </div>
    )
}
