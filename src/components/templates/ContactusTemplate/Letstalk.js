import Grid from '@egjs/grid'
import { Box, Button, Container, Input, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import ReCaptchaV2 from "react-google-recaptcha";


import { Buttons, GeneralHeading, MainContainer, ParagraphsBlue } from '../../atoms'

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5% auto',
        margin: '0% auto',
        // border:'2px solid red',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            width: '80%',
            margin: '10% auto',

        }

    },
    leftBox: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    rightBox: {
        width: '40%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    input: {
        margin: '4% 0%',
        width: '100%',
        borderBottom: '2px solid white',
        color: 'white'
    },
    cssLabel: {
        color: 'white'
    },
    cssFocused: {
        color: 'white'
    },
    btnBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'right',
        marginTop: '10%',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            marginTop: '5%',

        }
    },
    btn: {
        background: 'white',
        color: '#182AC3',
        font: 'normal normal normal 1.2rem Access',
        textTransform: 'none',
        padding: '.6rem 2rem',
        borderRadius: '3px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.9rem',
            padding: '.3rem 1rem',
            

        },
        "&:hover": {
            background: '#182AC3',
            boxShadow: '0px 0px 3px white',
            color: 'white'
        }
    },
    iconBox: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    address: {
        marginTop: '2%',
    },
    textBtm: {
        width: '50%',
        margin: '0% auto',
        padding: '8% 0%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        }
    },
    captcha: {
        marginTop: '5%',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            transform: 'scale(0.70)',
            webkitTransform: 'scale(0.70)',
            transformOrigin: '0 0',
            webkitTransformOrigin: '0 0',
        },
    }
}))

export function Letstalk() {
    const classes = useStyles()
    const [isVerified, setIsVerified] = useState(false)
    const [form, setForm] = useState(false)

    // function onChange(value) {
    //     console.log("Captcha value:", value);
    //     setIsVerified(true)
    // }

    const handleToken = (token) => {
        setForm((currentForm) => {
            return { ...currentForm, token }
        })
        setIsVerified(true)

    }
    const handleExpire = () => {
        setForm((currentForm) => {
            return { ...currentForm, token: null }
        })
    }


    return (
        <>
            <MainContainer>
                <Box className={classes.mainBox}>
                    <Box className={classes.leftBox}>
                        <ParagraphsBlue
                            title="Let's Talk"
                            subtitle1="We'll be glad to help you with your queries. Kindly fill-in this enquiry form and we will get back to you within 24 hours."
                            redline
                        />

                        <TextField
                            label="Name"
                            placeholder="John Doe"
                            className={classes.input}
                            variant="standard"
                            color="black"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused
                                }
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                        <TextField
                            label="Email"
                            placeholder="example@email.com"
                            className={classes.input}
                            variant="standard"
                            color="black"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused
                                }
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline
                                }
                            }}

                        />
                        <TextField
                            label="Message"
                            placeholder="message"
                            className={classes.input}
                            variant="standard"
                            color="black"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused
                                }
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline
                                }
                            }}

                        />

                        {/* Captcha Here */}
                        <Box className={classes.captcha}>
                            <ReCaptchaV2
                                // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"  //localhost
                                // sitekey="6Lca388dAAAAANXSKi97Kd7YwQSi30N3dPeWdVyh"  //website sls-blacksof.web.app
                                sitekey="6LfqR9AdAAAAAP7Yzt4o0LW310Dw-MiVG1rwL1Qv"  //website sls-blacksof.web.app sls-v2
                                onChange={handleToken}
                                onExpire={handleExpire}
                            />
                        </Box>



                        <Box className={classes.btnBox}>
                            <Button className={classes.btn} disabled={!isVerified}>
                                Send Message
                            </Button>
                        </Box>

                    </Box>

                    <Box className={classes.rightBox}>
                        <Box style={{ marginTop: '10%' }}>
                            <Box className={classes.iconBox}>
                                <img src={'./images/contactus/Layer_x0020_1.svg'} /> <h4 style={{ marginLeft: "5%" }}>INDIA</h4>
                            </Box>
                            <Box className={classes.address}>
                                <h6> Systems Level Solutions (India) Pvt. Ltd.</h6>
                                <h6> 32, D4, Phase 1, GIDC Estate </h6>
                                <h6> V.U. Nagar : 388 121 </h6>
                                <h6> Gujarat, India. </h6>
                                <h6> Tel.: +91-2692-232 501/502 (Ext. 53) </h6>
                            </Box>
                        </Box>
                        <Box style={{ marginTop: '10%' }}>
                            <Box className={classes.iconBox}>
                                <img src={'./images/contactus/Layer_x0020_1-1.svg'} /><h4 style={{ marginLeft: "6%" }}>USA</h4>
                            </Box>
                            <Box className={classes.address}>
                                <h6> System Level Solutions, Inc. </h6>
                                <h6> 511 N. Washington Avenue,  </h6>
                                <h6>  Marshall, Texas 75670 </h6>
                                <h6> Ph: 001-408-852-0067  </h6>
                                <h6> Ph: 001-408-705-2339 (Rings in India)</h6>
                            </Box>
                        </Box>
                        <Box style={{ marginTop: '10%' }}>
                            <Box className={classes.iconBox}>
                                <img src={'./images/contactus/Layer_x0020_1-2.svg'} /><h4 style={{ marginLeft: "11%" }} >UK</h4>
                            </Box>
                            <Box className={classes.address}>
                                <h6> SLS Overseas </h6>
                                <h6> C/O Davanti Business Solutions Ltd, </h6>
                                <h6> 20 Mortlake, 20 Mortlake High Street,</h6>
                                <h6> London, SW14 8JN</h6>
                            </Box>
                        </Box>

                    </Box>

                </Box>

                <Box className={classes.textBtm}>
                    <h4>For more information about products and services, please contact us at: info@slscorp.com</h4>
                </Box>
            </MainContainer>
        </>
    )
}
