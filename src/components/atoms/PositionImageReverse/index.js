import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'flex-end',
        zIndex: '1',
        [theme.breakpoints.down('sm')]:{
            justifyContent:'center'
        }
    },
    imageBox: {
       width:'70%',
        position:'relative ',
        background:'white' ,
        borderRadius:'1rem',
        boxShadow:'0px 0px 2px grey',
        [theme.breakpoints.down('sm')]:{
            width:'80%',
            justifyContent:'center'
        }
    },
    image:{
        width:'100%',
        height:'100%',
        overflow:'hidden',
        borderRadius:'1rem',
    },
    blue: {
        width: '40%',
        zIndex: '-1',
        position:'absolute',
        right: '-8%',
        top:'-15%'
    },
    white: {
        width: '30%',
        zIndex: '-1',
        position:'absolute',
        right: '25%',
        bottom:'-13%'
    },
    red: {
        width: '18%',
        zIndex: '-1',
        position:'absolute',
        left: '-5%',
        bottom:'-10%'
    },

}))

export function PositionImageReverse({
    imageBG,
}) {
    const classes = useStyles();

    return (
        <Box className={classes.mainBox}>
            <div className={classes.imageBox}>
                <img className={classes.image} src={imageBG} alt="image" />

                <img className={classes.red} src={'./images/Polygon 2.svg'} alt="image" />
                <img className={classes.white} src={'./images/Polygon 3.svg'} alt="image" />
                <img className={classes.blue} src={'./images/Polygon 1.svg'} alt="image" />

            </div>
        </Box >
    )
}
