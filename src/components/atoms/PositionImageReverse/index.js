import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'flex-start',
        zIndex: '1',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        }
    },
    imageBox: {
        width: '70%',
        background: 'white',
        // padding: '25% 0%',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        background: 'white',
        borderRadius: '1rem',
        position: 'relative ',
        marginLeft: '5%',
        boxShadow: '0px 0px 5px #0000001A',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            justifyContent: 'center',
            marginLeft: '0%',
        }
    },
    productImageBox:{
        height:'16vw',
        // background: 'white',
        // borderRadius: '1rem',
        overflow:'hidden',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        maxHeight:'100%'
    },
    blue: {
        width: '40%',
        zIndex: '-1',
        position: 'absolute',
        right: '-8%',
        top: '-15%'
    },
    white: {
        width: '30%',
        zIndex: '-1',
        position: 'absolute',
        right: '25%',
        bottom: '-13%'
    },
    red: {
        width: '18%',
        zIndex: '-1',
        position: 'absolute',
        left: '-5%',
        bottom: '-10%'
    },

}))

export function PositionImageReverse({
    imageBG,
}) {
    const classes = useStyles();

    return (
        <Box className={classes.mainBox}>
            <div
                className={classes.imageBox}
            // style={{ backgroundImage: `url(${imageBG})`}}
            >
                <Box className={classes.productImageBox}>
                    <img className={classes.image} src={imageBG} alt="image" />
                </Box>
                <img className={classes.red} src={'./images/Polygon 2.svg'} alt="image" />
                <img className={classes.white} src={'./images/Polygon 3.svg'} alt="image" />
                <img className={classes.blue} src={'./images/Polygon 1.svg'} alt="image" />

            </div>
        </Box >
    )
}
