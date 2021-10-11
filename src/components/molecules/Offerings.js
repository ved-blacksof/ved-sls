import React from 'react'
import { Box, Container } from "@material-ui/core";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { makeStyles, Button } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    realText: {
        marginTop: '10%',
        [theme.breakpoints.down('xs')]: {
            margin: "20% 0%"
        }
    },
    mainHead: {
        color: 'black',
    },
    head: {
        color: 'black'
    },
    redLine: {
        margin: '1% 0%'
    },
    subHead: {
        color: 'black',
        width: '40%',
        [theme.breakpoints.down('xs')]: {
            width: '70%',
        },
    },
    arrows: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        marginRight: '1%',

    },
    sliderSec: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '3%'
    },
    slider: {
        width: '100%',
        justifyContent: 'space-between'

    },
    card: {
        boxShadow: '0px 0px 2px black',
        padding:'5%',
        margin: "1% 1rem",
        // boxShadow:'0px 0px 0px 5px red'
        boxShadow: '0px 2px 5px black',
        width:'25%',
        height:'fit-content'
    },
    cardImage: {
        width: '100%',
        maxHeight: '100%',

    },
    cardTxt: {
        padding: '8%',
       
    },
    cardHead: {
        font: 'normal normal normal 1.5rem Access',
        color: 'black',

    },
    cardSubHead: {
        color: 'black'
    },
    readMore: {
        font: 'normal normal normal 1.4rem BebasNeue',
        color: '#003189'
    }

}))

export function Offerings({
    data, head1,head2, subhead, read, mainhead,
    
}) {
    const plugins = [new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: true })];

    const classes = useStyles()

    return (
        <Container className={classes.realText}>
            <Container fixed className={classes.realText}>

                <h2 className={classes.mainHead}> {mainhead}</h2>
                <h3 className={classes.head}>{head1} <br /> {head2}</h3>
                <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                <h4 className={classes.subHead}>{subhead}</h4>

            </Container>

            <Container fixed className={classes.sliderSec}>
                <Box className={classes.arrows} >
                    <img src={'./images/Group 82851.svg'} />
                    <img src={'./images/Group 82850.svg'} />
                </Box>


                <Flicking
                    // plugins={plugins}
                    align="center"
                    defaultIndex='1'
                    circular={true}>

                    {
                        data.map((item, index) => {
                            return (
                                <Box className={classes.card} >
                                    <img className={classes.cardImage} src={item.images} alt="Robot Hand" />

                                    <Box className={classes.cardTxt}>
                                        {/* <Button className={classes.smallBtn} >{item.case}</Button> */}
                                        {/* <h4 className={classes.cardHead}>{item.title}</h4> */}
                                        <h6 className={classes.cardSubHead}>{item.subtitle}</h6>
                                        {/* <a href="/#" className={classes.readMore}>{item.rea}</a> */}
                                    </Box>
                                </Box>

                            )
                        })
                    }
                </Flicking>
            </Container>
        </Container>

    )
}