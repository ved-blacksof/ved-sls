import { Container, makeStyles, Box } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'flex-start',
        zIndex: '1',
        [theme.breakpoints.down('sm')]:{
            justifyContent:'center',
            paddingRight:'0%',
        }
    },
    imageBox: {
        width:'70%',
        position:'relative ',
        background:'white' ,
        borderRadius:'1rem',
        marginLeft:'5%',
        boxShadow:'0px 0px 5px #0000001A',
        [theme.breakpoints.down('sm')]:{
            width:'90%',
            justifyContent:'center',
            marginLeft: '0%',

        }
    },
    image:{
        width:'100%',
        height:'100%',
        overflow:'hidden',
        borderRadius:'1rem',
    },
    red: {
        width: '18%',
        zIndex: '-1',
        position:'absolute',
        right: '-5%',
        top:'-10%'
    },
    white: {
        width: '30%',
        zIndex: '-1',
        position:'absolute',
        left: '25%',
        top:'-13%'
    },
    blue: {
        width: '40%',
        zIndex: '-1',
        position:'absolute',
        left: '-8%',
        bottom:'-15%'
    },

}))

export function PositionImage({
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
