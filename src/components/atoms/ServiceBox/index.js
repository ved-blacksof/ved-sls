import { makeStyles, Box } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    boxes: {
        width: '18rem',
        height: '18rem',
        padding: '10%',
        margin:'20px 0px',
        border: '1px solid #DCDCDC',
        boxShadow: '0px 3px 10px #00000017',
        '& h4': {
            paddingTop: '4%'
        },
        '& h6': {
            paddingTop: '3%'
        }
    },
    images: {
        width: '40%',
    }
}))

export function ServiceBox({
    imgs,
    title,
    li1,
    li2,
    li3,
}) {
    const classes = useStyles()
    return (
        <Box className={classes.boxes}>
            <img className={classes.images} src={imgs} />
            <h4 style={{ color: '#354B9C' }}>{title}</h4>
            <h6 style={{ color: 'black' }}>- {li1}</h6>
            <h6 style={{ color: 'black' }}>- {li2}</h6>
            {
                li3 ?  <h6 style={{ color: 'black' }}>- {li3}</h6> : ''
            }
        </Box>
    )
}
