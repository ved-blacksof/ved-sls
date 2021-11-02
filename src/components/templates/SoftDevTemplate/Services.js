import { Container, makeStyles, Box } from '@material-ui/core'
import React from 'react'
import { ServiceBox } from '../../atoms'
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    containers: {
        margin: '10% auto'
    },
    mainBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
        }
    },
    mainInbox: {
        margin: '0% 2%',
        background: 'white',
        
    },
    boxMargin1:{
        marginTop: '3%',
        [theme.breakpoints.down('xs')]: {
            marginTop: '0%',
        }
    },
    boxMargin2:{
        marginTop: '6%',
        [theme.breakpoints.down('xs')]: {
            marginTop: '0%',
        }
    },
    boxMargin3:{
        marginTop: '9%',
        [theme.breakpoints.down('xs')]: {
            marginTop: '0%',
        }
    }

}))

export function Services() {
    const classes = useStyles()
    return (
        <Container className={classes.containers}>
            <h2 style={{ color: 'black', textAlign: 'center' }}>Services</h2>
            <Box className={classes.mainBox}>
                <Box className={clsx(classes.mainInbox, classes.boxMargin1)} >
                    <ServiceBox
                        imgs="./images/Layer_20.svg"
                        title="Web Development"
                        li1="Cloud Solutions"
                        li2="Custom Web Application"     
                    />
                    <ServiceBox
                        imgs="./images/Layer_20.svg"
                        title="Web Development"
                        li1="Cloud Solutions"
                        li2="Custom Web Application"
                    />
                </Box>
                <Box className={clsx(classes.mainInbox, classes.boxMargin2)} >
                    <ServiceBox
                        imgs="./images/Layer_20.svg"
                        title="Web Development"
                        li1="Cloud Solutions"
                        li2="Custom Web Application"
                    />
                    <ServiceBox
                        imgs="./images/Layer_20.svg"
                        title="Web Development"
                        li1="Cloud Solutions"
                        li2="Custom Web Application"
                    />
                </Box>
                <Box className={clsx(classes.mainInbox, classes.boxMargin3)} >
                    <ServiceBox
                        imgs="./images/Layer_20.svg"
                        title="Web Development"
                        li1="Cloud Solutions"
                        li2="Custom Web Application"
                    />
                    <ServiceBox
                        imgs="./images/Layer_20.svg"
                        title="Web Development"
                        li1="Cloud Solutions"
                        li2="Custom Web Application"
                    />
                </Box>
                {/* <Box className={classes.boxes}  style={{marginTop:'6%'}}></Box> */}
            </Box>
        </Container>
    )
}
