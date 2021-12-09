import { makeStyles, Box } from '@material-ui/core'
import React from 'react'
import Bounce from 'react-reveal/Bounce';



const useStyles = makeStyles((theme) => ({
    boxes: {
        width: '20vw',
        height: '20vw',
        padding: '10%',
        margin: '30px 0px',
        border: '1px solid #DCDCDC',
        boxShadow: '0px 3px 10px #00000017',
        transition: 'all 300ms ease-in-out',
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
        '&:hover': {
            border: '1px solid white',
        }
    },
    images: {
        width: '40%',
        "& img": {
            maxWidth: '100%',
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
                <Bounce bottom><h4 style={{ color: '#182AC3' }}>{title}</h4></Bounce>
                <Bounce bottom><h6 style={{ color: 'black' }}>- {li1}</h6></Bounce>
                <Bounce bottom><h6 style={{ color: 'black' }}>- {li2}</h6></Bounce>
                {
                    li3 ? <Bounce bottom><h6 style={{ color: 'black' }}>- {li3}</h6></Bounce> : ''
                }
            </Box>
        </Box>
    )
}
