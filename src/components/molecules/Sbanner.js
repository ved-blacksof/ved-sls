import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.59),rgba(0, 0, 0, 0.59)),url('./images/sls-office3.1e9e26cb.png')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
    },
    backImg: {
        position: 'absolute',
        maxWidth: '100%',
        height: '100%',
        zIndex: '-1',
        "& img": {
            maxWidth: '100%',
            height: '100%',
        }
    },
    mainText: {
        lineHeight:'.8',
        zIndex: '1',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            // fontSize: '4rem'
        },
        [theme.breakpoints.down('xs')]: {
            // fontSize: '3rem'
        }
    },
    redLine: {
        background: '#CA0017',
        height: '2px',
        width: '25%',
        margin:'1% 0%',
        [theme.breakpoints.down('sm')]: {
            width: '70%',

        }
    },
    subText: {
        width: '40%',
        // font: 'normal normal normal 1rem Access',
        color: 'white',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '70%',
            // fontSize: '1rem'
        }
    },
    scrollBox: {
        position: 'absolute',
        bottom: '5%',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {

        }
    },
    mouseScroll: {

        "& img": {
            maxWidth: '100%',
            transition: 'all .2s ease-in-out',
            "&:hover": {
                transform: 'scale(1.1)',
                cursor: 'pointer'
            }
        }
    },
    mouseScrollTxt: {
        color: 'white',
        // font: 'normal normal normal 1rem Access',
        marginTop: '3%',
        "&:hover": {
            cursor: 'pointer'
        }
    }

}))

export function Sbanner({
    Background,
    mouse
}) {
    const classes = useStyles()

    const scroll = () => {
        window.scroll({ top: '800', left: '0', behavior: 'smooth' });
    }
    return (
        <>

            <div className={classes.mainBox} >
                {/* <Box className={classes.backImg}>
                    <img src={Background} alt="background" />
                </Box> */}

                <h1 className={classes.mainText}>SYSTEM LEVEL SOLUTIONS</h1>

                <span className={classes.redLine}></span>

                <h6 className={classes.subText}>
                    Industry leaders in providing solutions catering to the domains
                    of intellectual property, hardware design &
                    prototyping, software design, and manufacturing.
                </h6>

                <div className={classes.scrollBox}>

                    <Box className={classes.mouseScroll} >
                        <img src={mouse} alt="Scroll image" onClick={scroll} />
                    </Box>

                    <h6 className={classes.mouseScrollTxt} >Scroll</h6>

                </div>

            </div>
        </>
    )
}