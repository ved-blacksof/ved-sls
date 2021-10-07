import { Container, Box ,makeStyles} from '@material-ui/core'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import './styled.css'

const useStyles = makeStyles((theme) => ({
    carousel:{
        height:'80vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
    },
    slide:{
        height:'80vh',
        border:'2px solid red',
        width:'100%',
        backgroundImage: `url('/images/man-worker-firld-by-solar-panels.png'), linear-gradient(rgba(0, 0, 0, 0.59),rgba(0, 0, 0, 0.59)) ` ,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        zIndex:'0'
    }
}))

export function Reshape1() {
    const classes = useStyles()
    return (
        <Carousel className={classes.carousel} showArrows={false} >
            <Box className={classes.slide}>
                <div></div>
            </Box>
            <Box className={classes.slide}>
                kldjfkj
            </Box>
            <Box className={classes.slide}>
                kldjfkj
            </Box>
            
        </Carousel>
    )
}
