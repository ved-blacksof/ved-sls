import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos';
import ScrollToTop from "react-scroll-to-top";
import { makeStyles } from '@material-ui/core';


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
            style={{
                borderRadius: "1rem",
                padding: '5px',
                background: 'white',
                boxShadow: 'none',
            }}
            color="#182AC3"
        />
    )
}