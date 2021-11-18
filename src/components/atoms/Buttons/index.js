import React from 'react'
import { makeStyles, Button, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

    btn: {
        height: '100%',
        width: '100%',
        background: '#182AC3',
        color: 'white',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        font: 'normal normal normal 16px Access',
        border: 'none',
        padding: '.5rem 1rem',
        textTransform: 'none',
        borderRadius: '4px',
        '&:hover': {
            // background: 'white',
            color: '#182AC3',
            // border:'1px solid blue',
        },
        [theme.breakpoints.down('sm')]:{
            fontSize:'10px'
        }
    },
    arrow: {
        width:'1.2rem',
        marginLeft: '4%',
        marginTop:'1px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        '&:hover': {
            
        },
        "& img":{
            maxWidth:'100%',
            height:'100%',
            alignSelf:'center',
        },
        [theme.breakpoints.down('sm')]:{
            width:'1rem'
        }
    }
}))

export function Buttons({
    title,
    style,
    className,
    arrowIcon,
}) {
    const classes = useStyles()
    return (
        <Box className={className}>
            {/* material ui Button */}
            <Button
                className={classes.btn}
                style={style}
            >
                {title}
                <Box className={classes.arrow}>
                    <img src={arrowIcon} alt="arrow"/>
                </Box>
            </Button>
        </Box>
    )
}
