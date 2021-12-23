import React from 'react'
import { makeStyles, Container, Box } from '@material-ui/core'
import { MainContainer, MapIcon, MapIconPosition } from '../atoms'
import Bounce from 'react-reveal/Bounce';


const useStyles = makeStyles((theme) => ({
    overBox: {
        // height: '90vh',
        height: 'fit-content',
        paddingBottom: '6%',
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
            paddingBottom: '5%'
        },
    },
    overInBox: {
        paddingTop: '5%',
    },
    paths: {
        marginBottom: '5%',
    },
    redLine: {
        margin: '1% 0%',
        // width:'20%',
        "& img": {
            // width:'100%',
        }
    },
    para: {
        lineHeight: '1.5',
        [theme.breakpoints.down('sm')]: {

        }
    },
    portSubHead: {
        width: '90%',
    },
    //List CSS for IOT PAge
    list: {
        background: '#182AC3',
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
            paddingBottom: '5%',
        },
    },
    box1: {
        width: '100%',
        paddingTop: '2%',
        border: 'none',
    },
    UL: {
        color: 'white',
        textIndent: '-18px',
        margin: '-10px',
        listStyle: 'inside',
        [theme.breakpoints.down('sm')]: {
            textIndent: '-15px',
            margin: '-0px',
        }
    },
    LI: {
        margin: '1% ',
        [theme.breakpoints.down('sm')]: {

        }
    },

}))

export function Overview({
    sub1,
    sub2,
    path,
    style,
    uls,
    li1,
    li2,
    li3,
    prop,
    list,
    icons,
    mapIconPosition,
    data,

}) {

    const classes = useStyles()

    return (
        <Box className={classes.overBox} style={style}>
            <MainContainer>
                <Container fixed className={classes.overInBox}>
                    <Bounce right>
                        <h6 className={classes.paths}> {path} </h6>
                    </Bounce>
                    <Bounce left>
                        <h3 className={classes.head}>Overview</h3>
                    </Bounce>
                    <Bounce right>
                        <Box className={classes.redLine}>
                            <img src={'/images/Component 4 – 1.svg'} />
                        </Box>
                    </Bounce>
                    <Bounce right>
                        <Box className={classes.para} >
                            <h4 className={classes.portSubHead}>{sub1}</h4>
                            <br/>
                            <h4 className={classes.portSubHead}>{sub2}</h4>
                        </Box>
                    </Bounce>

                    {
                        prop ?
                            <img src={prop} alt="image" /> : ''
                    }

                    {
                        list ?
                            <>
                                <Box className={classes.list}>
                                    <Container fixed className={classes.box1}>
                                        <Bounce left>
                                            <ul className={classes.UL}>
                                               <li className={classes.LI}> <h6 style={{display:'inline'}}>{li1}</h6></li>
                                               <li className={classes.LI}> <h6 style={{display:'inline'}}>{li2}</h6></li>
                                               <li className={classes.LI}> <h6 style={{display:'inline'}}>{li3}</h6></li>
                                            </ul>
                                        </Bounce>
                                    </Container>
                                </Box>
                            </> : ''
                    }

                    {
                        icons ?
                            <>
                                <MapIcon
                                    data={data}
                                    fill="white"
                                    color="white"
                                />
                            </> : ''
                    }
                    {
                        mapIconPosition ?
                            <>
                                <MapIconPosition
                                    data={data}
                                    fill="white"
                                    color="black"
                                />
                            </> : ''
                    }



                </Container>
            </MainContainer>
        </Box>
    )
}