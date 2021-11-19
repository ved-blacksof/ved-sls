import { makeStyles, Box } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    boxes: {
        width: '20vw',
        height: '18vw',
        padding: '10%',
        margin: '20px 0px',
        border: '1px solid #DCDCDC',
        boxShadow: '0px 3px 10px #00000017',
        [theme.breakpoints.down('sm')]: {
            width: '15rem',
            height: '15rem',
        },
        '& h4': {
            paddingTop: '4%',
            fontWeight: '600'
        },
        '& h6': {
            paddingTop: '3%'
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
    style
}) {
    const classes = useStyles()
    return (
        <Box className={classes.boxes} style={style}>
            <Box className={classes.images}>
                <img src={imgs} />
            </Box>
            <h4 style={{ color: '#182AC3' }}>{title}</h4>
            <h6 style={{ color: 'black' }}>- {li1}</h6>
            <h6 style={{ color: 'black' }}>- {li2}</h6>
            {
                li3 ? <h6 style={{ color: 'black' }}>- {li3}</h6> : ''
            }
        </Box>
    )
}
