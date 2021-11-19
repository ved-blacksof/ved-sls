import { Container, makeStyles, Box } from '@material-ui/core'
import React from 'react'
import { MainContainer, ServiceBox } from '../../atoms'
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    containers: {
        margin: '10% auto'
    },
    mainBox: {
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            // flexWrap: 'wrap',
            // justifyContent: 'center',
            flexDirection:'column'
        }
    },
    mainInbox: {
        margin: '0% 0%',
        background: 'white',
    },
    boxMargin1: {
        marginTop: '3%',
        marginRight:'3rem',
        [theme.breakpoints.down('xs')]: {
            marginTop: '0%',
        }
    },
    boxMargin2: {
        marginTop: '6%',
        marginRight:'3rem',
        [theme.breakpoints.down('xs')]: {
            marginTop: '0%',
        }
    },
    boxMargin3: {
        marginTop: '9%',
        [theme.breakpoints.down('xs')]: {
            marginTop: '0%',
        }
    }

}))

export function Services() {
    const classes = useStyles()
    return (
        <MainContainer>
            <Container className={classes.containers}>
                <h2 style={{ color: 'black', textAlign: 'center' }}>Services</h2>
                <Box className={classes.mainBox}>
                    <Box className={clsx(classes.mainInbox, classes.boxMargin1)} >
                        <ServiceBox
                            imgs="./images/Layer_20-soft-dev.svg"
                            title="Web Development"
                            li1="Cloud Solutions"
                            li2="Custom Web Application"
                        />
                        <ServiceBox
                            style={{ marginTop: '15%' }}
                            imgs="./images/Layer_26-soft-dev.svg"
                            title="Embedded Solutions"
                            li1="Firmware Development"
                            li2="Driver Development"
                        />
                    </Box>
                    <Box className={clsx(classes.mainInbox, classes.boxMargin2)} >
                        <ServiceBox
                            imgs="./images/Layer_21-soft-dev.svg"
                            title="Application Development"
                            li1="Windows Development"
                            li2="Product Development"
                        />
                        <ServiceBox
                            style={{ marginTop: '15%' }}
                            imgs="./images/Layer_24-soft-dev.svg"
                            title="Enterprise Solutions"
                            li1="HRM System"
                            li2="ERP System"
                        />
                    </Box>
                    <Box className={clsx(classes.mainInbox, classes.boxMargin3)} >
                        <ServiceBox
                            imgs="./images/Layer_23-soft-dev.svg"
                            title="System Development"
                            li1="System Porting & Customization"
                            li2="Driver Development"
                        />
                        <ServiceBox
                            style={{ marginTop: '15%' }}
                            imgs="./images/Layer_25-soft-dev.svg"
                            title="Mobile App Development"
                            li1="Application Development"
                            li2="System Porting & Customization"
                        />
                    </Box>
                    {/* <Box className={classes.boxes}  style={{marginTop:'6%'}}></Box> */}
                </Box>
            </Container>
        </MainContainer>
    )
}
