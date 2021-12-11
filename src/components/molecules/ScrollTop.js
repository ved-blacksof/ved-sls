import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos';
import ScrollToTop from "react-scroll-to-top";
import { makeStyles } from '@material-ui/core';
import { ArrowUpward, KeyboardArrowUp, KeyboardArrowUpRounded } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
    scroll: {

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
        <ScrollToTop data-aos="fade-up"
            smooth

            component={<KeyboardArrowUpRounded style={{ color: "#182AC3", fontSize:'2.5rem' }} />}
            style={{
                borderRadius: "2rem",
                boxShadow: '0px 0px 20px #0000001F',
                background: 'white',
                height: '45px',
                width: '45px',
                bottom:'8%',
                transition:'all .5s ease-in-out',
                "&:hover":{
                    transform:'scale(1.2)'
                }
            }}
        />
    )
}