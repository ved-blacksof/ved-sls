import React from 'react'
import { makeStyles, Container } from '@material-ui/core'

import { GeneralHeading, MapIcon } from '../../atoms'
import { Visit } from '../../molecules'


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: '10%',
        "& h6": {
            color: 'black',
            width: '70%'
        }
    },
    yImage: {
        width: '100%',
        maxHeight: '100%',
        margin: '3% auto'
    },
    btmText: {
        color: '#354B9C',
        textAlign: 'center',
        marginTop: '5%',
        fontWeight: 'bold',
    },
    btns: {
        width: '20%',
        marginTop: '3%',
        [theme.breakpoints.down('md')]: {
            width: '40%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    }

}))


export function Yalgaar({
    data
}) {
    const classes = useStyles()
    return (
        <>
            <Container fixed className={classes.mainContainer}>

                <GeneralHeading
                    title="Yalgaar"
                    subtitle="Ace your products with real-time pub-sub messaging infrastructure"
                />

                <img className={classes.yImage} src={'./images/luo-lei-Xa4pTwafe5U-unsplash.png'} />

                <h6>Yalgaar is a real-time pub/sub messaging framework that allows businesses to create
                    a range of scalable applications on the cloud. With ready-to-use SDKs and end-to-end support infrastructure,
                    you can now expedite the time-to-market of your products exponentially.</h6>

                <MapIcon data={data} />

                {/* <Box style={{ display:'flex', justifyContent:'center',flexDirection:'column', alignItems:'center',marginTop:"5%" }}>
                    <h4 className={classes.btmText}> Start your journey with Yalgaar now!</h4>

                    <Buttons
                        className={classes.btns}
                        title="Visit the website"
                        arrowIcon="./images/Icon feather-arrow-right.svg"
                    />
                </Box> */}

                <Visit
                    goto="Start your journey with Yalgaar now!"
                    title="Visit the Web" />
            </Container>

        </>
    )
}
