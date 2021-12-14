import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Jello from 'react-reveal/Jello';
import $ from 'jquery'
import './Sbanner.css'


const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: '100vh',
        display: 'flex',
        background: 'black',
        zIndex: '0',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
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
    textBox: {
        height: '100vh',
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        top: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'

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
        fontFamily: 'Access',
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
    Background1,
    Background2,
    mouse
}) {
    const classes = useStyles()

    var pageHeight = window.innerHeight;

    $(function () {
        let currentPosition = 0;
        let photo = $('.photo');
        let photoNums = photo.length;

        let speed = 3000;
        let timeout = 4000;
        $('.photo').eq(0).show();

        function move() {
            let nextPhoto = (currentPosition + 1) % photoNums;
            photo.eq(currentPosition).fadeOut(speed);
            photo.eq(nextPhoto).fadeIn(speed);
            currentPosition = nextPhoto;
        }
        setInterval(move, timeout);
    })

    const scroll = () => {
        window.scroll({ top: `${pageHeight}`, left: '0', behavior: 'smooth' });
    }
    return (
        <>

            <div className={classes.mainBox}
                style={{
                    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.59),rgba(0, 0, 0, 0.59)), url(${Background})`,
                }}>

                <div id="slider">
                    <div className="photo" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70),rgba(0, 0, 0, 0.70)), url(${Background})` }}></div>
                    <div className="photos photo" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70),rgba(0, 0, 0, 0.70)), url(${Background1})` }}></div>
                    <div className="photo" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70),rgba(0, 0, 0, 0.70)), url(${Background})` }}></div>
                    <div className="photos photo" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70),rgba(0, 0, 0, 0.70)), url(${Background1})` }}></div>
                </div>

                <div className={classes.textBox}>
                    <Fade bottom>
                        <h1 className={classes.mainText}>SYSTEM LEVEL SOLUTIONS</h1>
                    </Fade>

                    <Fade bottom><span className={classes.redLine}></span></Fade>


                    <h6 className={classes.subText}>
                        <Fade bottom>
                            Industry leaders in providing solutions catering to the domains of intellectual property, hardware design & prototyping, software design, and manufacturing.
                        </Fade>
                    </h6>
                </div>


                <div className={classes.scrollBox}>

                    <Box className={classes.mouseScroll} >
                        <Fade top><img src={mouse} alt="Scroll image" onClick={scroll} /></Fade>
                    </Box>

                    <Fade top> <h6 className={classes.mouseScrollTxt} >Scroll</h6></Fade>

                </div>

            </div>

            {/* <div style={{height:'100vh', width:'100%', border:'2px solid red',
                    backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.59),rgba(0, 0, 0, 0.59)), url(${Background})`,
                    display:'flex', alignItems:'center'}}>
                    <img style={{ width:'100%', objectFit:'contain'}} src={Background}/>
            </div> */}
        </>
    )
}