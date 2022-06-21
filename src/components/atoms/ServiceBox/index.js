import { makeStyles, Box } from '@material-ui/core'
import clsx from 'clsx';
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
        position: 'relative',
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
            height: 'fit-content',
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
        "& h6": {
            color: 'black'
        },
    },
    lios: {
        width: '100%',
        marginLeft:'15px',
        position:'relative',
        "&::before":{
            content:"'-'",
            position:'absolute',
            left:'-5%',
        }
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
                <ul className={classes.uls}> <h4 style={{ color: '#182AC3', display: 'inline' }}>{title}</h4>
                    <h6 className={clsx(classes.lios,)} style={{ color: 'black', }}> {li1}</h6>
                    <h6 className={clsx(classes.lios,)} style={{ color: 'black', }}> {li2}</h6>
                    {
                        li3 ?

                            <h6 className={clsx(classes.lios,)} style={{ color: 'black', }}> {li3}</h6>
                            : ''
                    }
                </ul>
            </Box>
        </Box>
    )
}
