import React from 'react'
// import "./molecule.css";
import {
    Box,
    makeStyles,
} from '@material-ui/core';

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

import "@egjs/flicking-plugins/dist/pagination.css";

const useStyles = makeStyles((theme) => ({
    reaserchMain: {
        position: 'relative',
    },
    flicks: {
        width: '100%',
        "& .flicking-pagination": {
            bottom: '4%',   
        },
        "& .flicking-pagination-bullet" :{
            width: '2.5rem !important',
            height: '.20rem !important',
            margin: '0 .2rem !important',
            borderRadius: '1rem !important',
            backgroundColor: 'rgb(255, 255, 255) !important',
          },
         "& .flicking-pagination-bullet-active":{
            backgroundColor: '#ff0000 !important'
          }
    },
    BoxWidth:{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    BoxImages: {
        padding:'30% 0%',
        width: '100%',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url('/images/man-worker-firld-by-solar-panels.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        paddingBottom: '3%',
        [theme.breakpoints.down('sm')]: {
            backgroundPosition: 'top',
            
        }
    },
    subHead: {
        width: '100%',
    },
    txt: {
        width: '100%',
        zIndex: '1',
        font: 'normal normal normal 3rem BebasNeue',
        [theme.breakpoints.down('sm')]: {
           fontSize:'2rem'
        },
    },
    subSMTxt:{
        width: '30%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    subTxt: {
        width: '80%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize:'1rem'
         },
        
    },

}))

export function Reshape() {

    const classes = useStyles()

    const Paginations = [new Pagination({ type: 'bullet' })]

    return (

        <Box className={classes.reaserchMain}>
            <Box className={classes.flicks}>
                <Flicking
                    selector="center"
                    plugins={Paginations}
                    defaultIndex='0'
                    circular={true}

                >

                    <Box className={classes.BoxWidth}>
                        <Box className={classes.BoxImages} >
                            <h3 className={classes.txt}>RESHAPING THE FUTURE OF THE WORLD</h3>
                            <hr style={{width:'25%'}}/>
                            <br/>
                            <h6 className={classes.subSMTxt}>We aim to leverage technology as a tool to build solutions that have the potential of bringing a transformational shift across sectors.</h6>
                            <br />
                            <h4 className={classes.subTxt}>MARKET LEADERS IN MULTIPLE PRODUCT DOMAINS</h4>
                        </Box>
                    </Box>
                    <Box className={classes.BoxWidth}>
                        <Box className={classes.BoxImages} >
                            <h3 className={classes.txt}>RESHAPING THE FUTURE OF THE WORLD</h3>
                            <hr style={{width:'25%'}}/>
                            <h6 className={classes.subSMTxt}>We aim to leverage technology as a tool to build solutions that have the potential of bringing a transformational shift across sectors.</h6>
                            <br />
                            <h4 className={classes.subTxt}>MARKET LEADERS IN MULTIPLE PRODUCT DOMAINS</h4>
                        </Box>
                    </Box>
                    <Box className={classes.BoxWidth}>
                        <Box className={classes.BoxImages} >
                            <h3 className={classes.txt}>RESHAPING THE FUTURE OF THE WORLD</h3>
                            <hr style={{width:'25%'}}/>
                            <h6 className={classes.subSMTxt}>We aim to leverage technology as a tool to build solutions that have the potential of bringing a transformational shift across sectors.</h6>
                            <br />
                            <h4 className={classes.subTxt}>MARKET LEADERS IN MULTIPLE PRODUCT DOMAINS</h4>
                        </Box>
                    </Box>
                    <Box className={classes.BoxWidth}>
                        <Box className={classes.BoxImages} >
                            <h3 className={classes.txt}>RESHAPING THE FUTURE OF THE WORLD</h3>
                            <hr style={{width:'25%'}}/>
                            <h6 className={classes.subSMTxt}>We aim to leverage technology as a tool to build solutions that have the potential of bringing a transformational shift across sectors.</h6>
                            <br />
                            <h4 className={classes.subTxt}>MARKET LEADERS IN MULTIPLE PRODUCT DOMAINS</h4>
                        </Box>
                    </Box>


                    <ViewportSlot >
                        <span className="flicking-pagination "></span>
                    </ViewportSlot>
                </Flicking>
            </Box>

        </Box>
    )
}
