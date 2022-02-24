import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos';
import ScrollToTop from "react-scroll-to-top";
import { Box, makeStyles } from '@material-ui/core';
import { ArrowUpward, KeyboardArrowUp, KeyboardArrowUpRounded } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
    scrollBox: {
        position: 'fixed',
        height: '45px',
        width: '45px',
        right:"5%",
        bottom: "10%",
        zIndex: '999',

        [theme.breakpoints.down('sm')]:{
            bottom:"5%",

        }
    }
}))

export function ScrollTop() {

    const classes = useStyles()

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 50,
        });
    }, [])

    return (
        <Box className={classes.scrollBox}>
            <ScrollToTop
                data-aos="fade-up"
                smooth
                component={<KeyboardArrowUpRounded style={{ color: "#182AC3", fontSize: '2.5rem' }} />}
                style={{
                    borderRadius: "2rem",
                    boxShadow: '0px 0px 20px #0000001F',
                    background: 'white',
                    height: '45px',
                    width: '45px',
                    position: 'absolute',
                    top:"0",
                    right:'0',
                    zIndex: '999',
                    transition: 'all .5s ease-in-out',
                    border:'2px solid #182AC3',
                    "&:hover": {
                        transform: 'scale(1.2)'
                    }
                }}
            />
        </Box>
    )
}