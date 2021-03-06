import { Container, makeStyles, Box } from '@material-ui/core'
import React from 'react'
import { technologystack } from '../../molecules/PortfolioData'
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    containers: {
        margin: '10% auto'
    },
    mainBox: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap:'wrap',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
        }
    },
    boxes: {
        width: '25%',
        margin:'5% 0%',
        '& h4': {
            paddingTop: '4%',
            fontWeight:'bold'
        },
        '& h6': {
            paddingTop: '3%',
            width:"50%",
            lineHeight:'1.8',
            [theme.breakpoints.down('xs')]:{
                width:'80%'
            }
        },
        '& img':{
            width:'2rem',
            height:'.7rem',
            
        },
        [theme.breakpoints.down('xs')]:{
            width:"50%",
        }
    },
}))

export function Technologystack() {
    const classes = useStyles()
    return (
        <Container className={classes.containers}>
            <h2 style={{ color: 'black', textAlign: 'center' }}>Technology Stack</h2>
            <Box className={classes.mainBox}>
                {
                    technologystack.map((item, index) => {
                        return (
                            <Box className={classes.boxes}>
                                <h4 style={{ color: '#354B9C' }}>{item.number} <img src={'/images/Component 4 – 1.svg'} /></h4>

                                <h4 style={{ color: 'black' }}>{item.title}</h4>
                                <h6 style={{ color: 'black' }}>{item.subtitle}</h6>
                            </Box>
                        )
                    })
                }
            </Box>
        </Container>
    )
}
