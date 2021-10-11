import React from 'react'
import { makeStyles, Container, Box, Grid } from '@material-ui/core'
import { PositionImage, Paragraphs } from "../../atoms"


const useStyles = makeStyles((theme) => ({
    qualityContainer: {
        height: 'fit-content',
    },
    bigHead: {
        color: 'black',
        textAlign: 'center',
        fontSize: '3rem',
        margin: '2% 0%'
    },
    gridContainer: {
        marginTop: '5%'
    },
    gridLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        color: 'black',
    }
}))

export function Quality({

}) {
    const classes = useStyles()
    return (
        <>
            <Container fixed className={classes.qualityContainer}>
                <h2 className={classes.bigHead}>Quality & Reliability</h2>

                <Grid container spacing={4} className={classes.gridContainer}>
                    <Grid item xs={12} md={6} className={classes.gridLeft}>
                        <PositionImage imageBG={'./images/louis-reed-53jnUK5LqEY-unsplash.png'} />
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <Paragraphs
                            title='Quality Policy'
                            subtitle='We are committed to consistently meet our customers requirement as well as applicable statutory and 
                            regulatory requirement for the quality of products and services and performance at optimum cost through our competent 
                            human resource and continual improvement of quality management system.'
                            firstli="Effectively manage projects and ensures they are done in timely manner."
                            secli="Efficiently manage resources for efficient cost of products and services."
                            thirdli="Ensure enhance customer satisfaction through our products and services."
                            fourthli="Ensure enhance customer satisfaction through our products and services."
                        />
                    </Grid>

                </Grid>


                <Grid container spacing={4} className={classes.gridContainer1}>

                    <Grid item xs={12} md={6} >
                        <Paragraphs
                            title='Environmental Policy'
                            subtitle='We are committed to meet all statutory and legal compliance and environmental affairs 
                            leadership in our business activities.'
                            firstli="Become an environmentally responsible neighbour providing pollution free operations in the communities where we operate."
                            secli="Conserve natural resources namely water, electricity and fuel as low as possible without any intentional waste."
                            thirdli="Ensure our production and service activities do not have any adverse effect on the environment."
                            fourthli="Strive to continually improve EMS by enhancing environmental performance."
                        />
                    </Grid>

                    <Grid item xs={12} md={6} className={classes.gridLeft} >
                        <PositionImage imageBG={'./images/louis-reed-53jnUK5LqEY-unsplash.png'} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
