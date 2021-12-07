import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Jello from 'react-reveal/Jello';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: '100vh',
        display: 'flex',
        zIndex: '0',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        // transform: ' translate3d(0px, 0px, 0px)',
        // transition: 'all 700ms ease',
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
        lineHeight: '.8',
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
        margin: '1% 0%',
        [theme.breakpoints.down('sm')]: {
            width: '70%',

        }
    },
    subText: {
        width: '40%',
        font: 'normal normal normal 1rem Access',
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

    // var pageHeight = window.innerHeight;

    // document.addEventListener('scroll', function () {
    //     document.body.scrollTop = 0;
    // });

    // document.addEventListener('wheel', function (e) {
    //     if (e.deltaY > 0) {
    //         scrollDown();
    //     } else {
    //         scrollUp();
    //     }
    // }
    // );

    // function scrollDown() {
    //     document.body.style.transform = 'translate3d(0px, -' + pageHeight + 'px, 0px)';
    // }

    // function scrollUp() {
    //     document.body.style.transform = 'translate3d(0px, 0px, 0px)';
    // }

    const scroll = () => {
        window.scroll({ top: '800', left: '0', behavior: 'smooth' });
    }
    return (
        <>

            <div className={classes.mainBox}
                style={{
                    backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.59),rgba(0, 0, 0, 0.59)), url(${Background})`,
                }}
            >
                {/* <Box className={classes.backImg}>
                    <img src={Background} alt="background" />
                </Box> */}

                <Fade bottom>
                    <h1 className={classes.mainText}>SYSTEM LEVEL SOLUTIONS</h1>
                </Fade>

                <Fade bottom><span className={classes.redLine}></span></Fade>


                <h2 className={classes.subText}>
                    <Fade bottom>
                        Industry leaders in providing solutions catering to the domains of intellectual property, hardware design & prototyping, software design, and manufacturing.
                    </Fade>
                </h2>


                <div className={classes.scrollBox}>

                    <Box className={classes.mouseScroll} >
                        <Fade top><img src={mouse} alt="Scroll image" onClick={scroll} /></Fade>
                    </Box>

                    <Fade top> <h6 className={classes.mouseScrollTxt} >Scroll</h6></Fade>

                </div>

            </div>
        </>
    )
}