import Grid from '@egjs/grid'
import { Box, Button, Container, Input, makeStyles, TextField } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import ReCaptchaV2 from "react-google-recaptcha";
import { Buttons, GeneralHeading, MainContainer, ParagraphsBlue } from '../../atoms'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import emailjs from 'emailjs-com'
import { ArrowForwardSharp } from '@material-ui/icons';


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
            marginTop: '8%'
        }
    },
    input: {
        margin: '4% 0%',
        width: '100%',
        color: 'white',
        "& .Mui-focused": {
            color: 'white',
            opacity: '.6'
        },
        "& .Mui-FormLabel-root": {
            color: 'white'
        },
        "& .MuiInputBase-root": {
            color: 'white'
        },
        "& .MuiInput-underline::before": {
            opacity: '1',
            borderBottom: '1px solid white',
        },
        "& .MuiInput-underline::after": {
            opacity: '1',
            border: '1px solid white',
            
        },
        "& .MuiInput-underline:hover:before": {
            opacity: '1',
            borderBottom: '1px solid white',
        },
        
    },
    cssLabel: {
        color: 'white',
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
            marginTop: '0%',
        },
        
    },
    btn: {
        height: '100%',
        // width: '40%',
        background: '#182AC3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'none',
        zIndex:'9',
        transition: 'all .3s ease-in-out',
        transition: 'background .5s ease-in-out',
        borderRadius:'4px',
        overflow:'hidden',
        padding:"1% 3%",
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        "&:disabled": {
            opacity:".5"
        },
        "&::before": {
            content: "''",
            position: 'absolute',
            borderRadius:'4px',
            right: '0%',
            top: '0%',
            width: '100%',
            height: '2px',
            transition: 'all .5s ease-in-out',
            background: '#fff',
            zIndex: '-999'
        },
        "&::after": {
            content: "''",
            position: 'absolute',
            borderRadius:'4px',
            right: '0%',
            top: '0%',
            width: '2px',
            height: '100%',
            transition: 'all .5s ease-in-out',
            background: '#fff',
            zIndex: '-999'
        },
        '&:hover': {
            background: '#fff',
            "& $btnTitle":{
                color:'#182AC3',
            },
            "&::before": {
                width: '0%',
            },
            "&::after": {
                height: '0%',
            },
            "& $mySpan":{
                "&::before": {
                    width: '0%',
                },
                "&::after": {
                    height: '0%',
                },
            },
        },
    },
    btnTitle:{
        color: '#fff',                
        fontFamily:'Access',
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        verticalAlign: 'middle',
        transition: 'transform .5s ease-in-out',
    },
    arrow: {
        width: '1.2rem',
        marginLeft: '4%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "& img": {
            maxWidth: '100%',
            height: '100%',
            alignSelf: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            width: '1rem'
        }
    },
    arrow1: {
        marginLeft: '5px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '5px',
            fontSize: '1.2rem'
        }
    },
    mySpan:{
        "&::before": {
            content: "''",
            position: 'absolute',
            borderRadius:'4px',
            left: '0%',
            bottom: '0%',
            width: '100%',
            height: '2px',
            transition: 'all .5s ease-in-out',
            background: '#fff',
            zIndex: '-999'
        },
        "&::after": {
            content: "''",
            position: 'absolute',
            borderRadius:'4px',
            left: '0%',
            bottom: '0%',
            width: '2px',
            height: '100%',
            transition: 'all .5s ease-in-out',
            background: '#fff',
            zIndex: '-999'
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
    },
    // swalTitle: {
    //     margin: '0px',
    //     fontSize: '20px',
    //     boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.21)',
    //     marginBottom: '28px',
    //   }
}))

export function Letstalk() {
    const classes = useStyles()
    const history = useHistory()
    const [isVerified, setIsVerified] = useState(false)

    const [form, setForm] = useState(false)

    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);

    const initialFormState = {
        name: '',
        email: '',
        message: '',
    }

    const [contactus, setContactus] = useState(initialFormState)



    let name, value
    const onChangeGet = (e) => {
        // name = e.target.name
        // value = e.target.value
        // setContactus({ ...contactus, [name]: value })
        // console.log(value)
        setContactus({
            ...contactus,
            [e.target.name]: e.target.value,
        });
        let temp = { ...errors };
        if ('name' in contactus)
            temp.name = /^[a-zA-Z ]{2,30}$/.test(contactus.name) ? '' : 'Please enter a valid name';

        if ('email' in contactus)
            temp.email = /$^|.+@.+..+/.test(contactus.email)
                ? ''
                : 'Email is not valid.';
        if ('message' in contactus) {
            const msgLen = contactus.message.length;
            temp.message = msgLen != 0 ? '' : 'Please leave a message for us.';
        }
        setErrors({
            ...temp,
        });
    }



    //emailjs
    const forms = useRef();
    emailjs.init('user_YW47ZYWhszMIdjdqUtsPJ')

    const handleSubmit = (event) => {
        event.preventDefault();
        // emailjs.sendForm('service_tk297lf', 'template_iz1gops', forms.current, 'user_YW47ZYWhszMIdjdqUtsPJ')
        emailjs.sendForm('gmail-sls', 'template_0zzst6l', forms.current, 'user_YW47ZYWhszMIdjdqUtsPJ')
            .then((result) => {
                console.log(result.text);
                swal({
                    title: "Message successfully sent!",
                    text: "Our team will get back to you shortly!",
                    icon: "success",
                    button: "Okay",
                }).then(() => {
                    window.location.reload(false)
                });
            }, (error) => {
                console.log(error.text);
                swal({
                    title: "Something went wrong!",
                    text: "Thankyou for connecting with us",
                    icon: "",
                }).then(() => {
                    window.location.reload(false)
                });
            });

        event.target.reset()
        setContactus('')

    };


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
                        <form
                            ref={forms}
                            onSubmit={(event) => handleSubmit(event)}
                        >

                            <TextField
                                onChange={onChangeGet}
                                value={contactus.name}
                                helperText={errors.name}
                                autoComplete="off"
                                name="name"
                                type="text"
                                label="Name"
                                required
                                placeholder="John Doe"
                                className={classes.input}
                                variant="standard"
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
                                FormHelperTextProps={{
                                    classes: {
                                        root: classes.cssLabel,
                                        focused: classes.cssFocused
                                    }
                                }}

                            />
                            <TextField
                                onChange={onChangeGet}
                                value={contactus.email}
                                helperText={errors.email}
                                autoComplete="off"

                                label="Email"
                                name='email'
                                required
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
                                FormHelperTextProps={{
                                    classes: {
                                        root: classes.cssLabel,
                                        focused: classes.cssFocused
                                    }
                                }}

                            />
                            <TextField
                                onChange={onChangeGet}
                                value={contactus.message}
                                helperText={errors.message}
                                autoComplete="off"

                                multiline
                                maxRows={4}
                                label="Message"
                                name='message'
                                placeholder="message"
                                required
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
                                FormHelperTextProps={{
                                    classes: {
                                        root: classes.cssLabel,
                                        focused: classes.cssFocused
                                    }
                                }}


                            />

                            {/* Captcha Here */}
                            <Box className={classes.captcha}>
                                <ReCaptchaV2
                                    sitekey='6LdFUwIeAAAAACInNHHQPr-qJg9mVhgecmTJPyEr' //https://sls-showcase-37755.web.app
                                    onChange={handleToken}
                                    onExpire={handleExpire}
                                />
                            </Box>



                            <Box className={classes.btnBox}>

                                <Button
                                    type='submit'
                                    className={classes.btn}
                                    disabled={!isVerified}
                                >
                                    <span className={classes.mySpan}>
                                        <h6 className={classes.btnTitle}>
                                            Send Message
                                            <ArrowForwardSharp className={classes.arrow1} />
                                        </h6>
                                    </span>
                                </Button>

                            </Box>
                        </form>

                    </Box>

                    <Box className={classes.rightBox}>
                        <Box style={{ marginTop: '10%' }}>
                            <Box className={classes.iconBox}>
                                <img src={'./images/contactus/Layer_x0020_1.svg'} /> <h4 style={{ marginLeft: "5%" }}>INDIA</h4>
                            </Box>
                            <Box className={classes.address}>
                                <h6> Systems Level Solutions (India) Pvt. Ltd.</h6>
                                <h6> 32, D4, Phase 1, GIDC Estate </h6>
                                <h6> V.U. Nagar - 388 121 </h6>
                                <h6> Gujarat, India. </h6>
                                <h6> Tel.: +91-2692-232 501/502 (Ext. 47) </h6>
                            </Box>
                        </Box>
                        <Box style={{ marginTop: '10%' }}>
                            <Box className={classes.iconBox}>
                                <img src={'./images/contactus/Layer_x0020_1-1.svg'} /><h4 style={{ marginLeft: "5%" }}>USA</h4>
                            </Box>
                            <Box className={classes.address}>
                                <h6> System Level Solutions, Inc. </h6>
                                <h6> 511 N. Washington Avenue,  </h6>
                                <h6>  Marshall, Texas - 75670 </h6>
                                <h6> Ph: 001-408-852-0067  </h6>
                                <h6> Ph: 001-408-705-2339 (Rings in India)</h6>
                            </Box>
                        </Box>
                        <Box style={{ marginTop: '10%' }}>
                            <Box className={classes.iconBox}>
                                <img src={'./images/contactus/Layer_x0020_1-2.svg'} /><h4 style={{ marginLeft: "5%" }} >UK</h4>
                            </Box>
                            <Box className={classes.address}>
                                <h6> SLS Overseas </h6>
                                {/* <h6> C/O Davanti Business Solutions Ltd, </h6> */}
                                <h6> 20 Mortlake, 20 Mortlake High Street,</h6>
                                <h6> London, SW14 8JN</h6>
                            </Box>
                        </Box>

                    </Box>

                </Box>

                <Box className={classes.textBtm}>
                    <h4>For more information about products and services, please contact us at info@slscorp.com</h4>
                </Box>
            </MainContainer>
        </>
    )
}
