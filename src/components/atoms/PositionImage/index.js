import { Container, makeStyles, Box } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '1',
    },
    imageBox: {
        width:'70%',
        position:'relative '
    },
    image:{
        width:'100%',
        height:'100%'
    },
    red: {
        width: '18%',
        zIndex: '-1',
        position:'absolute',
        right: '-4%',
        top:'-6%'
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
        <Container fixed className={classes.mainBox}>
            <div className={classes.imageBox}>
                <img className={classes.image} src={imageBG} alt="image" />

                <img className={classes.red} src={'./images/Polygon 2.svg'} alt="image" />
                <img className={classes.white} src={'./images/Polygon 3.svg'} alt="image" />
                <img className={classes.blue} src={'./images/Polygon 1.svg'} alt="image" />

            </div>
        </Container >
    )
}
