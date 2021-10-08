import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    btn: {
        height: '100',
        width: '100%',
        background: '#003189',
        color: 'white',
        font: 'normal normal normal 1.2rem Access',
        border: 'none',
        padding: '.5rem 1rem',
        borderRadius: '2px',
        transition: ' linear .3s',
        '&:hover': {
            background: 'white',
            color: '#003189'
        },
    },
    arrow: {
        width: '12%',
        marginLeft: '3px',

    }
}))

export function Button({
    title,
    style,
    className,
    arrowIcon,
}) {
    const classes = useStyles()
    return (
        <div className={className}>
            <button
                className={classes.btn}
                style={style}
            >{title}
                <img className={classes.arrow} src={arrowIcon} />
            </button>
        </div>
    )
}
