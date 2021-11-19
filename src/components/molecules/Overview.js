import React from 'react'
import { makeStyles, Container, Box } from '@material-ui/core'
import { MainContainer, MapIcon } from '../atoms'


const useStyles = makeStyles((theme) => ({
    overBox: {
        height: '90vh',
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
        font: 'normal normal normal 1rem Access',
        color: 'white',
        listStyle: 'inside',
        // margin: '3% 0%'
    },
    LI: {
        margin: '1% '
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
    data
}) {

    const classes = useStyles()

    return (
        <Box className={classes.overBox} style={style}>
            <MainContainer>
                <Container fixed className={classes.overInBox}>
                    <h6 className={classes.paths}> {path} </h6>

                    <h3 className={classes.head}>Overview</h3>

                    <Box className={classes.redLine}>
                        <img src={'/images/Component 4 – 1.svg'} />
                    </Box>

                    <Box style={{lineHeight:'1.6'}}>
                        <h4 className={classes.portSubHead}>{sub1}</h4>

                        <h4 className={classes.portSubHead}>{sub2}</h4>
                    </Box>

                    {
                        prop ?
                            <img src={prop} alt="image" /> : ''
                    }

                    {
                        list ?
                            <>
                                <Box className={classes.list}>
                                    <Container fixed className={classes.box1}>
                                        <ul className={classes.UL}>

                                            <li className={classes.LI}>{li1}</li>
                                            <li className={classes.LI}>{li2}</li>
                                            <li className={classes.LI}>{li3} </li>
                                        </ul>
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



                </Container>
            </MainContainer>
        </Box>
    )
}
