import { makeStyles, Box } from '@material-ui/core'
import React from 'react'
import Bounce from 'react-reveal/Bounce';



const useStyles = makeStyles((theme) => ({
    boxes: {
        width: '20vw',
        height: '22vw',
        padding: '10%',
        margin: '30px 0px',
        border: '1px solid #DCDCDC',
        // border:'1px solid red',
        position:'relative',
        cursor: 'pointer',
        boxShadow: '0px 3px 10px #00000017',
        transition: 'all 300ms ease-in-out',
        transform: 'width .6s ease-in-out',  //for red line
        [theme.breakpoints.down('sm')]: {
            width: '15rem',
            height: '15rem',
            margin: '10px 10px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '14rem',
            height: '14rem',
            marginTop: '15px'
        },
        '& h4': {
            paddingTop: '4%',
            fontWeight: '600'
        },
        '& h6': {
            paddingTop: '3%'
        },
        "&::before": {
            content: "''",
            height: '5px',
            width: '0',
            background: '#DE141A',
            position: 'absolute',
            bottom: '5%',
            left: '5%',
            transition: 'all 800ms ease-in-out',
            [theme.breakpoints.down('sm')]: {
                height: '5px'
            }
        },
        "&:hover": {
            color: '#182AC3',
            boxShadow: '0px 0px 10px #00000017',
            border: '1px solid white',
            "& $imgBox": {
                transform: 'scale(1.1)'
            },
            "&::before": {
                height: '5px',
                width: '90%',
                opacity: '1',
                [theme.breakpoints.down('sm')]: {
                    height: '5px'
                }
            },
        },
    },
    images: {
        width: '40%',
        "& img": {
            maxWidth: '100%',
        }
    },
    uls: {

    },
    lios: {
        listStyleType: 'none',
        margin: '2px 2px'
    }
}))

export function ServiceBox({
    imgs,
    title,
    li1,
    li2,
    li3,
    style,
    className
}) {
    const classes = useStyles()
    return (
        <Box className={className}>
            <Box className={classes.boxes} style={style}>
                <Box className={classes.imgBox}>
                    <Bounce bottom><img src={imgs} /></Bounce>
                </Box>
                <ul className={classes.uls}> <Bounce bottom><h4 style={{ color: '#182AC3', display: 'inline' }}>{title}</h4></Bounce></ul>
                <li className={classes.lios}>- <Bounce bottom><h6 style={{ color: 'black', display: 'inline' }}> {li1}</h6></Bounce></li>
                <li className={classes.lios}>-  <Bounce bottom><h6 style={{ color: 'black', display: 'inline' }}> {li2}</h6></Bounce></li>
                {
                    li3 ?
                        <li className={classes.lios}>-
                            <Bounce bottom><h6 style={{ color: 'black', display: 'inline' }}> {li3}</h6></Bounce>
                        </li> : ''
                }
            </Box>
        </Box>
    )
}
